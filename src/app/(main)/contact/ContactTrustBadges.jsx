"use client";

import { ShieldCheck, Clock, Layers3 } from "lucide-react";

export default function ContactTrustBadges() {
    const badges = [
        {
            icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
            title: "Strict NDA Protected",
            desc: "Your ideas, concepts, and project details remain 100% confidential with us."
        },
        {
            icon: <Clock className="w-5 h-5 text-blue-500" />,
            title: "Fast Discovery Call",
            desc: "Receive a personalized response and project assessment within 24 business hours."
        },
        {
            icon: <Layers3 className="w-5 h-5 text-cyan-500" />,
            title: "Tailored Solutions",
            desc: "No boilerplate templates. Every system is engineered to fit your specific workflow."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {badges.map((item, idx) => (
                    <div
                        key={idx}
                        className="p-5 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-xs flex gap-4 items-start text-left"
                    >
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-3xs shrink-0">
                            {item.icon}
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                                {item.title}
                            </h4>
                            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}