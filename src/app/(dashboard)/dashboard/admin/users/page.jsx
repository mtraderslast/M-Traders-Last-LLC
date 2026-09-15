"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search, Eye, Users as UsersIcon, ChevronDown, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Swal from "sweetalert2";
import { getAllUsersApi, updateUserRoleApi } from "@/lib/action/admin";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all"); // 'all', 'user', or 'admins'

    // Pagination States
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const limit = 12;

    // UI input state and actual submitted search query
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const params = {
                page,
                limit,
            };

            if (searchQuery.trim()) {
                params.search = searchQuery.trim();
            }

            if (activeTab === "admins") {
                params.role = "admin";
            } else if (activeTab === "user") {
                params.role = "user";
            }

            const res = await getAllUsersApi(params);

            if (res?.success) {
                setUsers(res.data || []);
                setTotalPages(res.totalPages || 1);
                setTotalUsers(res.totalUsers || 0);
            } else {
                setUsers([]);
                setTotalPages(1);
                setTotalUsers(0);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            Swal.fire({
                icon: "error",
                title: "Failed to Fetch",
                text: error?.response?.data?.message || "Could not load users.",
            });
        } finally {
            setLoading(false);
        }
    }, [activeTab, searchQuery, page]);

    // Fetch data when activeTab
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Tab 
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setPage(1);
    };

    // Handle Search Submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(searchInput);
        setPage(1);
    };

    // Clear Search Input
    const handleClearSearch = () => {
        setSearchInput("");
        setSearchQuery("");
        setPage(1);
    };

    const handleRoleChange = async (userId, newRole) => {
        const isDark = document.documentElement.classList.contains("dark");

        const result = await Swal.fire({
            title: "Change User Role?",
            text: `Are you sure you want to change this user's role to '${newRole.toUpperCase()}'?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#06B6D4",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "Cancel",
            background: isDark ? "#0f172a" : "#ffffff",
            color: isDark ? "#f8fafc" : "#0f172a",
        });

        if (result.isConfirmed) {
            try {
                const res = await updateUserRoleApi(userId, newRole.toLowerCase());

                if (res?.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated!",
                        text: res.message || "User role updated successfully.",
                        timer: 1500,
                        showConfirmButton: false,
                        background: isDark ? "#0f172a" : "#ffffff",
                        color: isDark ? "#f8fafc" : "#0f172a",
                    });

                    setUsers((prevUsers) =>
                        prevUsers.map((u) =>
                            u._id === userId ? { ...u, role: newRole.toLowerCase() } : u
                        )
                    );
                } else {
                    throw new Error(res?.message || "Failed to update role.");
                }
            } catch (error) {
                console.error("Failed to update role:", error);
                Swal.fire({
                    icon: "error",
                    title: "Update Failed",
                    text: error?.response?.data?.message || "Something went wrong.",
                });
            }
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return "N/A";
        try {
            const date = new Date(dateStr);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch {
            return "N/A";
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <div className="mx-auto">

                {/* Header & Tabs */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Users Management
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            View and manage all registered platform users ({totalUsers} total).
                        </p>
                    </div>

                    {/* Filter Tabs: All Users, Users, Admins */}
                    <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-900 self-start sm:self-auto">
                        <button
                            onClick={() => handleTabChange("all")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "all"
                                ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            All Users
                        </button>
                        <button
                            onClick={() => handleTabChange("user")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "user"
                                ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            Users
                        </button>
                        <button
                            onClick={() => handleTabChange("admins")}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${activeTab === "admins"
                                ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                }`}
                        >
                            Admins
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="mb-6 max-w-md">
                    <div className="relative flex items-center">
                        <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-20 text-sm text-slate-900 placeholder-slate-400 shadow-2xs outline-hidden focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        />
                        {searchInput && (
                            <button
                                type="button"
                                onClick={handleClearSearch}
                                className="absolute right-16 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                        <button
                            type="submit"
                            className="absolute right-1.5 rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-cyan-700 transition-colors"
                        >
                            Search
                        </button>
                    </div>
                </form>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-20 dark:border-slate-900 dark:bg-slate-900">
                        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                            Loading users list...
                        </p>
                    </div>
                ) : users.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-16 text-center dark:border-slate-900 dark:bg-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                            <UsersIcon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                            No Users Found
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xs px-4">
                            We couldn't find any user matching your current criteria.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Users Table */}
                        <div className="rounded-xl border border-slate-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm min-w-[750px] table-auto">
                                    <thead>
                                        <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
                                            <th className="py-4 px-6 w-[70px] font-semibold">Avatar</th>
                                            <th className="py-4 px-4 font-semibold">User Details</th>
                                            <th className="py-4 px-4 font-semibold">Phone</th>
                                            <th className="py-4 px-4 font-semibold">Current Role</th>
                                            <th className="py-4 px-4 font-semibold">Joined Date</th>
                                            <th className="py-4 px-6 text-right font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                        {users.map((user) => {
                                            const userRole = user.role ? user.role.toLowerCase() : "user";
                                            const joined = formatDate(user.createdAt);

                                            return (
                                                <tr
                                                    key={user._id}
                                                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors duration-150"
                                                >
                                                    {/* Avatar */}
                                                    <td className="py-4 px-6 whitespace-nowrap">
                                                        <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white flex items-center justify-center">
                                                            {user.image ? (
                                                                <img
                                                                    src={user.image}
                                                                    alt={user.name || "User"}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            ) : (
                                                                (user.name?.charAt(0) || "U").toUpperCase()
                                                            )}
                                                        </div>
                                                    </td>

                                                    {/* Name & Email */}
                                                    <td className="py-4 px-4 whitespace-nowrap">
                                                        <div className="flex flex-col">
                                                            <span className="font-semibold text-slate-900 dark:text-white">
                                                                {user.name || "N/A"}
                                                            </span>
                                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                                {user.email || "N/A"}
                                                            </span>
                                                        </div>
                                                    </td>

                                                    {/* Phone */}
                                                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                        {user.phone || "N/A"}
                                                    </td>

                                                    {/* Role Badge */}
                                                    <td className="py-4 px-4 whitespace-nowrap">
                                                        <span
                                                            className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold capitalize ${userRole === "admin"
                                                                ? "bg-cyan-50 text-cyan-600 border border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/50"
                                                                : "bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-700"
                                                                }`}
                                                        >
                                                            {userRole}
                                                        </span>
                                                    </td>

                                                    {/* Joined Date */}
                                                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                                        {joined}
                                                    </td>

                                                    {/* Actions */}
                                                    <td className="py-4 px-6 text-right whitespace-nowrap">
                                                        <div className="flex items-center justify-end gap-2">
                                                            {/* Role Selector */}
                                                            <div className="relative inline-block text-left">
                                                                <select
                                                                    value={userRole}
                                                                    onChange={(e) =>
                                                                        handleRoleChange(user._id, e.target.value)
                                                                    }
                                                                    className="appearance-none rounded-lg border border-slate-200 bg-white py-1.5 pr-7 pl-3 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:border-cyan-500 outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                                                >
                                                                    <option value="user">User</option>
                                                                    <option value="admin">Admin</option>
                                                                </select>
                                                                <ChevronDown className="absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 pointer-events-none text-slate-400" />
                                                            </div>

                                                            {/* View Profile Button */}
                                                            <button
                                                                title="View Profile Details"
                                                                onClick={() => {
                                                                    Swal.fire({
                                                                        title: user.name || "User Details",
                                                                        html: `
                                                                            <div style="text-align: left; font-size: 14px; line-height: 1.6;">
                                                                                <p><strong>Email:</strong> ${user.email || "N/A"}</p>
                                                                                <p><strong>Phone:</strong> ${user.phone || "N/A"}</p>
                                                                                <p><strong>Address:</strong> ${user.address || "N/A"}</p>
                                                                                <p><strong>Role:</strong> ${userRole}</p>
                                                                                <p><strong>Email Verified:</strong> ${user.emailVerified ? "Yes" : "No"}</p>
                                                                            </div>
                                                                        `,
                                                                        confirmButtonColor: "#06B6D4",
                                                                    });
                                                                }}
                                                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 dark:border-cyan-950/40 dark:bg-cyan-950/30 dark:text-cyan-400 dark:hover:bg-cyan-900/40 transition-colors cursor-pointer"
                                                            >
                                                                <Eye className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination Section */}
                        {totalPages > 1 && (
                            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Showing page <span className="font-semibold text-slate-900 dark:text-white">{page}</span> of{" "}
                                    <span className="font-semibold text-slate-900 dark:text-white">{totalPages}</span>
                                </p>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={page === 1}
                                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <ChevronLeft className="h-4 w-4" /> Previous
                                    </button>

                                    {/* Page Number Buttons */}
                                    <div className="hidden sm:flex items-center gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => setPage(p)}
                                                className={`h-8 w-8 rounded-lg text-xs font-semibold transition-colors ${page === p
                                                    ? "bg-cyan-600 text-white"
                                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={page === totalPages}
                                        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Next <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Users;