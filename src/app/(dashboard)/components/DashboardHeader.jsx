"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, User as UserIcon, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Loading from "@/app/loading";
import ThemeToggle from "@/components/ThemeToggle";

function DashboardHeader({ onMenuClick }) {
    const { data: session, isPending } = authClient.useSession();
    const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

    const user = session?.user;

    if (isPending) {
        return <Loading />;
    }

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 transition-colors duration-300 dark:border-slate-900 dark:bg-slate-950 lg:px-6">

            {/* Search & Mobile Menu */}
            <div className="flex max-w-xl flex-1 items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="rounded-lg p-2 text-slate-700 transition-all duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
                >
                    <Menu size={20} />
                </button>

                <div className="relative hidden w-full sm:block">
                    <Search
                        size={18}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search applications, jobs, or talent..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-500 outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400 dark:focus:ring-cyan-400"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="ml-1 flex items-center gap-3 md:gap-4">

                <ThemeToggle />

                <div className="h-8 w-px bg-slate-100 dark:bg-slate-900"></div>

                <div className="relative flex items-center gap-3">

                    {/* User Info */}
                    <div className="hidden text-right lg:block">
                        <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                            {user?.name}
                        </h5>

                        <p className="text-xs capitalize text-slate-600 dark:text-slate-400">
                            {user?.role}
                        </p>
                    </div>

                    {/* Avatar */}
                    <button
                        onClick={() => setAvatarMenuOpen((prev) => !prev)}
                        className="h-9 w-9 cursor-pointer overflow-hidden rounded-full border border-slate-200 transition-all duration-200 hover:opacity-90 focus:outline-none dark:border-slate-800"
                    >
                        <img
                            src={user?.image || "/user.png"}
                            alt={user?.name}
                            className="h-full w-full object-cover"
                        />
                    </button>

                    {/* Dropdown */}
                    {avatarMenuOpen && (
                        <div className="absolute right-0 top-12 z-50 w-56 animate-in slide-in-from-top-2 fade-in rounded-xl border border-slate-100 bg-white shadow-sm duration-200 dark:border-slate-900 dark:bg-slate-950">

                            {/* User Info */}
                            <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-900">
                                <img
                                    src={user?.image || "/user.png"}
                                    alt={user?.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <div className="overflow-hidden">
                                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                                        {user?.name}
                                    </p>

                                    <p className="truncate text-xs text-slate-600 dark:text-slate-400">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="p-2">

                                <Link
                                    href={`/my-profile`}
                                    onClick={() => setAvatarMenuOpen(false)}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                >
                                    <UserIcon size={15} />
                                    My Profile
                                </Link>

                                <button
                                    onClick={() => {
                                        setAvatarMenuOpen(false);

                                        authClient.signOut({
                                            fetchOptions: {
                                                onSuccess: () => {
                                                    window.location.href = "/";
                                                },
                                            },
                                        });
                                    }}
                                    className="mt-1 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
                                >
                                    <LogOut size={15} />
                                    Logout
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;