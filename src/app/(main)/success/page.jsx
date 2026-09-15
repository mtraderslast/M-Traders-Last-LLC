"use client";

import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-white text-[#1E293B] dark:bg-[#020617] dark:text-[#F8FAFC] flex items-center justify-center p-6 selection:bg-[#06B6D4] selection:text-white dark:selection:bg-[#22D3EE] dark:selection:text-[#020617] transition-colors duration-300">
            <div className="max-w-2xl w-full border-l-2 border-[#06B6D4] dark:border-[#22D3EE] pl-8 md:pl-12 py-4 space-y-8">

                {/* Status Indicator & Title */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#06B6D4] dark:bg-[#22D3EE] animate-pulse"></span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#06B6D4] dark:text-[#22D3EE] font-mono font-semibold">
                            Payment Confirmed
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                        Order Onboarded.
                    </h1>
                </div>

                {/* Main Description */}
                <p className="text-[#64748B] dark:text-[#94A3B8] text-lg leading-relaxed font-normal">
                    Thank you for partnering with us. Your payment has been successfully processed, and our technical team has initiated the project onboarding workflow.
                </p>

                {/* Key Execution Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-y border-slate-200 dark:border-slate-800/80">
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-mono mb-1">
                            Next Step
                        </span>
                        <p className="text-sm font-semibold text-[#1E293B] dark:text-[#F8FAFC]">
                            Check email for brief & credentials submission link
                        </p>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-mono mb-1">
                            Delivery Timeline
                        </span>
                        <p className="text-sm font-semibold text-[#1E293B] dark:text-[#F8FAFC]">
                            Calculated as per your package specification
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                        href="/dashboard/user/orders"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500"
                    >
                        Go to Client Dashboard →
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 text-base font-medium px-8 py-3.5 rounded-lg transition-all duration-200"
                    >
                        Back to Agency Home
                    </Link>
                </div>

            </div>
        </div>
    );
}