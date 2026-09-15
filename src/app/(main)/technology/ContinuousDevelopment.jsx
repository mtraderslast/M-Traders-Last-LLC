"use client";

import Image from "next/image";
import { SearchCode, Paintbrush, Terminal, ShieldAlert, Cpu, Activity } from "lucide-react";

export default function ContinuousDevelopment() {
    const processSteps = [
        {
            icon: <SearchCode className="w-5 h-5 text-cyan-500" />,
            title: "Research",
            description: "Continuous application of top-tier R&D practices"
        },
        {
            icon: <Paintbrush className="w-5 h-5 text-blue-500" />,
            title: "Designing",
            description: "Innovative, dynamic, functional and user-friendly"
        },
        {
            icon: <Terminal className="w-5 h-5 text-cyan-500" />,
            title: "Building",
            description: "Combining advanced technologies with the right skill set"
        },
        {
            icon: <ShieldAlert className="w-5 h-5 text-blue-500" />,
            title: "Delivery",
            description: "Convenient, timely & consistent"
        }
    ];

    return (
        <section className="w-full pt-15 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-12">
                    <div className="flex items-center justify-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Continuous Development
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        A never-ending pursuit
                    </h2>
                </div>

                {/* 4-Column Process Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-24 lg:mb-12">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-3 group">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-500/30 transition-colors duration-300 shadow-2xs">
                                {step.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Side Content & Features */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                    Features
                                </span>
                                <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                                Advanced features serving <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">specific business needs</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                                Get the right features designed and developed to serve precise needs.
                            </p>
                        </div>

                        {/* Feature List Items */}
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                                        Productivity
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                        Maximize productivity with well-researched, user-centric, smart features engineered to maximize productivity.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                                        Security
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                        From threat modeling, implementing secure coding cryptography & design architecture to meticulous app vulnerability testings, strict security is ensured throughout.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Dashboard Graphic/Image */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[540px] aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden p-2">
                            <Image
                                src="/web_features.png"
                                alt="Advanced Analytics Dashboard Work Summary View"
                                fill
                                quality={100}
                                unoptimized={true}
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}