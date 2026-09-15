"use client";

import { ShieldCheck, FileText, Landmark, MapPin, Mail, Globe } from "lucide-react";

function BusinessCredentials() {
    const credentials = [
        {
            icon: <Landmark className="w-5 h-5 text-cyan-500" />,
            label: "Legal Name & Entity",
            value: "M Traders Last LLC",
            subText: "Florida Limited Liability Company (LLC)",
        },
        {
            icon: <FileText className="w-5 h-5 text-blue-500" />,
            label: "Document Registration",
            value: "Document # L26000290590",
            subText: "State of Florida, United States",
        },
        {
            icon: <MapPin className="w-5 h-5 text-cyan-500" />,
            label: "Registered Address",
            value: "7901 4th St N Ste 300",
            subText: "St. Petersburg FL 33702, USA",
        },
        {
            icon: <Mail className="w-5 h-5 text-blue-500" />,
            label: "Corporate Email",
            value: "hello@mtraderslastllc.com",
            subText: "Official Support Channel",
        },
        {
            icon: <Globe className="w-5 h-5 text-cyan-500" />,
            label: "Web Domain",
            value: "mtraderslastllc.com",
            subText: "Secure Official Platform",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
            label: "Filing Status",
            value: "Active — Filed 2026",
            subText: "Fully Current & Compliant",
        },
    ];

    return (
        <section className="w-full py-10 dark:bg-slate-900/20 text-slate-800 dark:text-slate-100 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Transparency & Trust
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Legal Business Credentials
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                        Verified institutional profiles and state regulatory transparency documents.
                    </p>
                </div>

                {/* Credentials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {credentials.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-900 bg-white dark:bg-slate-950/40 hover:border-cyan-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 flex gap-4 items-start"
                        >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800">
                                {item.icon}
                            </div>
                            <div className="space-y-1">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                    {item.label}
                                </p>
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight break-all">
                                    {item.value}
                                </h4>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    {item.subText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Compliance Verification Panel */}
                <div className="mt-10 p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            Florida Secretary of State — Active LLC
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                            EIN Verified
                        </span>
                        <span className="hidden sm:inline text-slate-300 dark:text-slate-800">•</span>
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 text-blue-600 dark:text-blue-400">
                            AML/KYC Compliant
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BusinessCredentials;