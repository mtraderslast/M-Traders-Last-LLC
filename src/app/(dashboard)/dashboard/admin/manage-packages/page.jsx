"use client";

import React, { useState, useEffect } from "react";
import { Search, Plus, Eye, Edit2, Trash2, Layers, Package, Loader2 } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { fetchAllPackages, deletePackage } from "@/lib/action/service-package";

function ManagePackages() {
    const [packages, setPackages] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(null);

    const loadPackages = async (query = "") => {
        try {
            setIsLoading(true);
            const res = await fetchAllPackages({ limit: 12, search: query });

            if (res?.success && Array.isArray(res?.data)) {
                setPackages(res.data);
            } else if (Array.isArray(res)) {
                setPackages(res);
            } else {
                setPackages([]);
            }
        } catch (error) {
            console.error("Failed to load packages:", error);
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Failed to fetch packages from server.",
                confirmColor: "#0891b2",
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPackages(searchQuery);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(searchInput.trim());
    };

    const handleDelete = (id, title) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete "${title}". This action cannot be undone!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            background: document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff",
            color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    setIsDeleting(id);
                    const res = await deletePackage(id);

                    if (res?.success || res?.status === 200) {
                        setPackages((prev) => prev.filter((pkg) => pkg._id !== id));

                        Swal.fire({
                            title: "Deleted!",
                            text: "Package has been successfully deleted.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                            background: document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff",
                            color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
                        });
                    } else {
                        throw new Error(res?.message || "Failed to delete package.");
                    }
                } catch (error) {
                    console.error("Delete error:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text: error.message || "Something went wrong while deleting.",
                        confirmColor: "#0891b2",
                    });
                } finally {
                    setIsDeleting(null);
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            <div className="mx-auto">

                {/* Header Section */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                            Manage Packages
                        </h1>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            View, edit and manage all service packages.
                        </p>
                    </div>
                    <Link
                        href={'/dashboard/admin/add-packages'}
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500 self-start sm:self-auto"
                    >
                        <Plus className="h-4 w-4" />
                        Add New Package
                    </Link>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearchSubmit} className="mb-6 max-w-md flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by title or category..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-semibold rounded-xl transition-colors shrink-0"
                    >
                        Search
                    </button>
                </form>

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-20 dark:border-slate-900 dark:bg-slate-900">
                        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Loading packages...</p>
                    </div>
                ) : packages.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-white py-16 text-center dark:border-slate-900 dark:bg-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                            <Package className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                            No Packages Found
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-xs px-4">
                            {searchQuery ? "No packages match your search query." : "Try adding a new package to display here."}
                        </p>
                        <Link
                            href={'/dashboard/admin/add-packages'}
                            className="mt-6 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-md dark:from-cyan-400 dark:to-blue-500"
                        >
                            <Plus className="h-4 w-4" />
                            Add New Package
                        </Link>
                    </div>
                ) : (
                    /* Data Table (Centered Content) */
                    <div className="rounded-xl border border-slate-100 bg-white shadow-2xs dark:border-slate-900 dark:bg-slate-900 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-400">
                                        <th className="py-4 px-6 text-center">Image</th>
                                        <th className="py-4 px-6 text-center">Package Title</th>
                                        <th className="py-4 px-6 text-center">Category</th>
                                        <th className="py-4 px-6 text-center">Price</th>
                                        <th className="py-4 px-6 text-center">Delivery Time</th>
                                        <th className="py-4 px-6 text-center">Created Date</th>
                                        <th className="py-4 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40">
                                    {packages.map((pkg) => (
                                        <tr
                                            key={pkg._id}
                                            className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors duration-150"
                                        >
                                            {/* Image */}
                                            <td className="py-4 px-6 align-middle">
                                                <div className="h-10 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto">
                                                    {pkg.image ? (
                                                        <img
                                                            src={pkg.image}
                                                            alt={pkg.title}
                                                            className="h-full w-full object-cover"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                e.currentTarget.nextElementSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                    ) : null}
                                                    <div className={`${pkg.image ? 'hidden' : 'flex'} h-full w-full items-center justify-center text-slate-400`}>
                                                        <Layers className="h-4 w-4" />
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Title */}
                                            <td className="py-4 px-6 font-medium text-slate-900 dark:text-white max-w-[200px] truncate align-middle">
                                                {pkg.title}
                                            </td>

                                            {/* Service Category */}
                                            <td className="py-4 px-6 text-slate-600 dark:text-slate-400 align-middle">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                                                    {pkg.serviceCategory || "General"}
                                                </span>
                                            </td>

                                            {/* Price */}
                                            <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white align-middle">
                                                ${pkg.price}
                                            </td>

                                            {/* Delivery Time */}
                                            <td className="py-4 px-6 text-slate-600 dark:text-slate-400 align-middle">
                                                {pkg.deliveryTime || "N/A"}
                                            </td>

                                            {/* Created Date */}
                                            <td className="py-4 px-6 text-slate-600 dark:text-slate-400 align-middle">
                                                {pkg.createdAt ? new Date(pkg.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                }) : "N/A"}
                                            </td>

                                            {/* Actions */}
                                            <td className="py-4 px-6 align-middle">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link
                                                        href={`/package/${pkg._id}`}
                                                        title="View Public Page"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 dark:border-cyan-950/40 dark:bg-cyan-950/30 dark:text-cyan-400 dark:hover:bg-cyan-900/40 transition-colors"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Link>

                                                    <Link
                                                        href={`/dashboard/admin/edit-package/${pkg._id}`}
                                                        title="Edit Package"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                                                    >
                                                        <Edit2 className="h-3.5 w-3.5" />
                                                    </Link>

                                                    <button
                                                        onClick={() => handleDelete(pkg._id, pkg.title)}
                                                        disabled={isDeleting === pkg._id}
                                                        title="Delete Package"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-600 hover:bg-red-100 dark:border-red-950/40 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors disabled:opacity-50"
                                                    >
                                                        {isDeleting === pkg._id ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <Trash2 className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ManagePackages;