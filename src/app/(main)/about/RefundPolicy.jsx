"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function RefundPolicy() {
    return (
        <section className="w-full py-5 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Main Alert Container */}
                <div className="p-6 sm:p-8 rounded-2xl dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col sm:flex-row gap-5 items-start">

                    {/* Accent Alert Icon */}
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                        <ShieldAlert className="w-5 h-5" />
                    </div>

                    {/* Policy Text Content */}
                    <div className="space-y-3 flex-grow">
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-cyan-500 rounded-full"></span>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                Refund Policy
                            </h3>
                        </div>

                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                            Digital products, software development services, and consulting services are generally non-refundable once delivered, accessed, or work has commenced. Chargebacks without valid grounds will be disputed using order records, communications, and delivery logs.
                        </p>

                        {/* Read Full Policy Link */}
                        <div className="pt-1">
                            <Link
                                href="/refund-policy"
                                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                            >
                                Read Full Policy
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}