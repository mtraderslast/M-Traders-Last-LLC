"use client";

import { MessageSquare, ClipboardList, Rocket } from "lucide-react";

function HowItWorks() {
    const whatsappUrl = "https://wa.me/13163617579";

    const steps = [
        {
            number: "01",
            title: "Contact Us",
            description: "Reach out via Telegram, WhatsApp, or email. Tell us what you need — website, bot, payment setup, merchant account, or anything else.",
            accentClass: "border-cyan-500/30 dark:border-cyan-500/20 hover:border-cyan-500 dark:hover:border-cyan-500",
            dotColor: "bg-cyan-500",
            numColor: "text-cyan-500/10 dark:text-cyan-500/5",
            icon: <MessageSquare className="w-8 h-8 text-cyan-500" />
        },
        {
            number: "02",
            title: "Discuss & Plan",
            description: "We scope the project, agree on timeline and price, and you receive a clear breakdown of everything that will be delivered.",
            accentClass: "border-blue-500/30 dark:border-blue-500/20 hover:border-blue-500 dark:hover:border-blue-500",
            dotColor: "bg-blue-500",
            numColor: "text-blue-500/10 dark:text-blue-500/5",
            icon: <ClipboardList className="w-8 h-8 text-blue-500" />
        },
        {
            number: "03",
            title: "Build & Deliver",
            description: "Work begins within 1 business day. You receive updates throughout. Final delivery with full documentation, source code, and 30-day support.",
            accentClass: "border-cyan-600/30 dark:border-cyan-600/20 hover:border-cyan-600 dark:hover:border-cyan-600",
            dotColor: "bg-cyan-600",
            numColor: "text-cyan-600/10 dark:text-cyan-600/5",
            icon: <Rocket className="w-8 h-8 text-cyan-500" />
        }
    ];

    return (
        <section className="relative w-full py-10 lg:py-10 transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-10">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Our Process
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        How It Works
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        From first message to delivered product — fast, simple, professional
                    </p>
                </div>

                {/* 3-Step Process Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pb-5">

                    {/* Connector Line for Larger Screens */}
                    <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-[1px] bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 z-0"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative z-10 flex flex-col justify-between p-8 sm:p-10 rounded-3xl border bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-xs transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-cyan-500/5 ${step.accentClass}`}
                        >
                            <div className="space-y-6">
                                {/* Card Top: Icon & Faded Backdrop Number */}
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs">
                                        {step.icon}
                                    </div>
                                    <span className={`text-6xl font-black tracking-tighter dark:text-slate-800 select-none ${step.numColor}`}>
                                        {step.number}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer: Accent Dot */}
                            <div className="pt-8">
                                <span className={`inline-block w-2.5 h-2.5 rounded-full ${step.dotColor}`}></span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;