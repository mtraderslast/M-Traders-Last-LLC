'use client';

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { CreditCard, Gift, Layers, Plus, ShoppingBag, Loader2 } from "lucide-react";
import Link from "next/link";
import { fetchDashboardStats } from "@/lib/action/dashboard";
import UserExpenseChart from "../../components/UserExpenseChart";

function DashboardOverview() {
    const { data: session, isPending: isSessionLoading } = authClient.useSession();
    const [statsData, setStatsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStats = async () => {
            try {
                setLoading(true);
                const res = await fetchDashboardStats();
                if (res?.success) {
                    setStatsData(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };

        if (session?.user) {
            getStats();
        }
    }, [session?.user]);

    const stats = [
        {
            id: 1,
            title: "Total Orders",
            value: statsData?.totalOrders ?? 0,
            icon: ShoppingBag,
            color: "from-cyan-500 to-blue-600",
        },
        {
            id: 2,
            title: "Active Projects",
            value: statsData?.pendingOrders ?? 0,
            icon: Layers,
            color: "from-emerald-500 to-teal-600",
        },
        {
            id: 3,
            title: "Completed Packages",
            value: statsData?.completedOrders ?? 0,
            icon: Gift,
            color: "from-violet-500 to-purple-600",
        },
        {
            id: 4,
            title: "Total Spent",
            value: `$${(statsData?.totalSpent ?? 0).toLocaleString()}`,
            icon: CreditCard,
            color: "from-amber-500 to-orange-600",
        },
    ];

    if (isSessionLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <div className="mx-auto">
                {/* Welcome Hero */}
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-400 p-6 sm:p-8 lg:p-12 dark:from-cyan-400 dark:to-blue-400">
                    <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-4 md:gap-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                Hello, {session?.user?.name || "User"} 👋
                            </h1>
                            <p className="mt-2 text-base sm:text-lg text-white/80">
                                Welcome back! Manage your projects, orders and payments from one place.
                            </p>
                        </div>
                        <Link
                            href={'/package'}
                            className="flex items-center gap-2 rounded-2xl bg-white/20 px-4 sm:px-6 py-2.5 sm:py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:shadow-cyan-500/30 dark:bg-white/10 dark:hover:bg-white/20 w-full sm:w-auto justify-center sm:justify-start"
                        >
                            <Plus className="h-5 w-5" />
                            Find New Package
                        </Link>
                    </div>
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-900 dark:bg-slate-900 dark:hover:shadow-slate-800/50"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                                                {stat.title}
                                            </p>
                                            <div className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                                                {loading ? (
                                                    <div className="h-8 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                                ) : (
                                                    stat.value
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className={`hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 blur-2xl transition-all duration-200 group-hover:scale-150 dark:from-cyan-400/5 dark:to-blue-500/5" />
                            </div>
                        );
                    })}
                </div>

                <UserExpenseChart />
            </div>
        </div>
    );
}

export default DashboardOverview;