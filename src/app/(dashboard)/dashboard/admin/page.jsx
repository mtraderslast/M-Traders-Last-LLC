'use client';

import { useEffect, useState } from "react";
import { Users, ShoppingBag, FolderOpen, DollarSign, Calendar, Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { fetchAdminDashboardStats } from "@/lib/action/dashboard";
import AdminEarningsChart from "../../components/AdminEarningsChart";

function AdminDashboard() {
    const [statsData, setStatsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAdminStats = async () => {
            try {
                setLoading(true);
                const res = await fetchAdminDashboardStats();
                if (res?.success) {
                    setStatsData(res.data);
                }
            } catch (error) {
                console.error("Failed to fetch admin stats:", error);
            } finally {
                setLoading(false);
            }
        };

        getAdminStats();
    }, []);

    const stats = [
        {
            id: 1,
            title: "Total Users",
            value: (statsData?.totalUsers ?? 0).toLocaleString(),
            icon: Users,
            growth: "+12%",
            color: "from-cyan-500 to-blue-600",
        },
        {
            id: 2,
            title: "Total Orders",
            value: (statsData?.totalOrders ?? 0).toLocaleString(),
            icon: ShoppingBag,
            growth: "+8%",
            color: "from-emerald-500 to-teal-600",
        },
        {
            id: 3,
            title: "Active Projects",
            value: (statsData?.activeProjects ?? 0).toLocaleString(),
            icon: FolderOpen,
            growth: "+5%",
            color: "from-violet-500 to-purple-600",
        },
        {
            id: 4,
            title: "Total Revenue",
            value: `$${(statsData?.totalRevenue ?? 0).toLocaleString()}`,
            icon: DollarSign,
            growth: "+18%",
            color: "from-amber-500 to-orange-600",
        },
    ];

    return (
        <div className="min-h-screen dark:bg-slate-950">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Admin Dashboard
                        </h1>
                        <p className="mt-1 text-slate-600 dark:text-slate-400">
                            Monitor your agency's performance and manage operations.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <Link href="/dashboard/admin/add-packages" className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 dark:from-cyan-400 dark:to-blue-500">
                            <Plus className="h-5 w-5" />
                            Add Package
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 transition-all duration-200 hover:shadow-md dark:border-slate-800/50 dark:bg-slate-900"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {stat.title}
                                        </p>
                                        <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                            {loading ? (
                                                <div className="h-8 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                            ) : (
                                                stat.value
                                            )}
                                        </div>
                                        <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                            {stat.growth} vs last month
                                        </p>
                                    </div>
                                    <div
                                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 blur-2xl transition-all duration-200 group-hover:scale-150 dark:from-cyan-400/5 dark:to-blue-500/5" />
                            </div>
                        );
                    })}
                </div>

                <AdminEarningsChart />
            </div>
        </div>
    );
}

export default AdminDashboard;