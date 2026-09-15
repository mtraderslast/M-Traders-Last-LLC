"use client";

import Link from "next/link";

export default function CanceledPage() {
    return (
        <div className="min-h-screen bg-white text-[#1E293B] dark:bg-[#020617] dark:text-[#F8FAFC] flex items-center justify-center p-6 selection:bg-[#06B6D4] selection:text-white dark:selection:bg-[#22D3EE] dark:selection:text-[#020617] transition-colors duration-300">
            <div className="max-w-2xl w-full border-l-2 border-slate-300 dark:border-slate-700 pl-8 md:pl-12 py-4 space-y-8">

                {/* Status Indicator & Title */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#64748B] dark:text-[#94A3B8] font-mono font-semibold">
                            Checkout Terminated
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                        Transaction Canceled.
                    </h1>
                </div>

                {/* Main Description */}
                <p className="text-[#64748B] dark:text-[#94A3B8] text-lg leading-relaxed font-normal">
                    The checkout process was interrupted or canceled. No charges were processed for this package session.
                </p>

                {/* Information Note */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-l border-slate-300 dark:border-slate-800 text-xs text-[#64748B] dark:text-[#94A3B8] font-mono">
                    Note: If you encountered a payment limit or bank verification error, you can retry or consult with our project strategist.
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500 cursor-pointer"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 text-base font-medium px-8 py-3.5 rounded-lg transition-all duration-200"
                    >
                        Talk to Agency Support
                    </Link>
                </div>

            </div>
        </div>
    );
}