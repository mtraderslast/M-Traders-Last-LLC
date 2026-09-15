"use client";

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, } from "recharts";
import { Loader2 } from "lucide-react";
import { fetchAdminMonthlyRevenue } from "@/lib/action/dashboard";

const BAR_COLORS = [
    "#F26B3F",
    "#34A853",
    "#FFB03B",
    "#9146FF",
    "#00B4D8",
    "#E05353",
    "#FF6B8B",
    "#2A9D8F",
    "#8338EC",
    "#F77F00",
    "#4EA8DE",
    "#A7C957",
];

export default function AdminEarningsChart() {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getChartData = async () => {
            try {
                setLoading(true);
                const res = await fetchAdminMonthlyRevenue();
                if (res?.success && Array.isArray(res?.data)) {
                    const formatted = res.data.map((item) => ({
                        name: item.month,
                        earnings: item.amount || 0,
                    }));
                    setChartData(formatted);
                }
            } catch (error) {
                console.error("Failed to fetch admin earnings chart data:", error);
            } finally {
                setLoading(false);
            }
        };

        getChartData();
    }, []);

    const isDataEmpty = !chartData || chartData.length === 0;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {payload[0].payload.name}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[#06B6D4] dark:text-[#22D3EE]">
                        Revenue: ${payload[0].value.toLocaleString()}
                    </p>
                </div>
            );
        }
        return null;
    };

    const formatYAxis = (value) => {
        if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`;
        return `$${value}`;
    };

    return (
        <div className="flex w-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-[#020617]">
            <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#0F172A] dark:text-white">
                        Monthly Income Analytics
                    </h3>
                    <p className="mt-0.5 text-xs text-[#64748B] dark:text-[#94A3B8]">
                        Visual breakdown of total platform revenue across months
                    </p>
                </div>
            </div>

            <div className="flex h-[360px] w-full items-center justify-center">
                {loading ? (
                    <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
                        <Loader2 className="h-6 w-6 animate-spin text-[#06B6D4]" />
                        <p className="text-xs">Loading analytics data...</p>
                    </div>
                ) : isDataEmpty ? (
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">
                            No earnings data recorded yet.
                        </p>
                        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                            Data will populate chronologically once transactions occur.
                        </p>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                                className="stroke-slate-100 dark:stroke-slate-800/60"
                            />

                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                                style={{
                                    fontSize: "11px",
                                    fill: "#64748B",
                                    fontWeight: "500",
                                }}
                            />

                            <YAxis
                                domain={[0, "dataMax + 3000"]}
                                tickFormatter={formatYAxis}
                                tickLine={false}
                                axisLine={false}
                                dx={-5}
                                style={{
                                    fontSize: "11px",
                                    fill: "#64748B",
                                    fontWeight: "500",
                                }}
                            />

                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{ fill: "rgba(6, 182, 212, 0.05)", radius: 6 }}
                            />

                            <Bar dataKey="earnings" radius={[6, 6, 0, 0]} maxBarSize={45}>
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={BAR_COLORS[index % BAR_COLORS.length]}
                                        className="cursor-pointer transition-all duration-200 hover:brightness-110"
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}