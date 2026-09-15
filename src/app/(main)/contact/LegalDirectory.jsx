"use client";

import Link from "next/link";
import { FileText, ShieldCheck, RefreshCw, EyeOff, ArrowRight } from "lucide-react";

export default function LegalDirectory() {
    const policies = [
        {
            title: "Terms & Conditions",
            desc: "Review the rules, regulations, and legal agreements governing the use of our services and platform.",
            href: "/terms-conditions",
            icon: <FileText className="w-5 h-5 text-cyan-500" />
        },
        {
            title: "Privacy Policy",
            desc: "Understand how we collect, protect, process, and manage your personal data and security configurations.",
            href: "/privacy-policy",
            icon: <EyeOff className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Refund Policy",
            desc: "Read our transparent terms regarding eligibility, non-refundable digital items, and service dispute logs.",
            href: "/refund-policy",
            icon: <RefreshCw className="w-5 h-5 text-cyan-500" />
        },
        {
            title: "AML Policy",
            desc: "Learn about our strict compliance frameworks regarding Anti-Money Laundering and regulatory standards.",
            href: "/aml-policy",
            icon: <ShieldCheck className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
        <section className="w-full py-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Header Title */}
                <div className="border-b border-slate-100 dark:border-slate-900 pb-6 mb-10 text-left">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Legal & Compliance
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                        Regulatory Framework & Policies
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        Please carefully go through our official documentation to understand your rights, responsibilities, and legal compliance structures.
                    </p>
                </div>

                {/* Minimalist Formal List Grid */}
                <div className="divide-y divide-slate-100 dark:divide-slate-900/60">
                    {policies.map((policy, idx) => (
                        <div
                            key={idx}
                            className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-50/30 dark:hover:bg-slate-900/5 transition-colors duration-200 px-2 rounded-lg"
                        >
                            {/* Left Side: Icon & Title Content */}
                            <div className="flex items-start gap-4 max-w-3xl">
                                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shrink-0 mt-0.5">
                                    {policy.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {policy.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                        {policy.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Clean Formal Link Button */}
                            <div className="shrink-0 pt-2 sm:pt-0 self-start sm:self-center">
                                <Link
                                    href={policy.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 bg-white dark:bg-slate-950 transition-all shadow-3xs group-hover:border-cyan-500/30"
                                >
                                    View Agreement
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}