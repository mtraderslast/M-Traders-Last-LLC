"use client";

import Image from "next/image";
import { Cpu, Award, Palette, UserCheck, Rocket, Shield } from "lucide-react";

export default function PremiumFeatures() {
    const leftFeatures = [
        {
            icon: <Cpu className="w-5 h-5 text-cyan-500" />,
            title: "Top-Notch Development Architecture",
            description: "Cloud-based, dynamic development architecture to offer maximum fluidity, security, mobility and ease of use",
        },
        {
            icon: <Award className="w-5 h-5 text-blue-500" />,
            title: "No Compromise on Quality",
            description: "Unparalleled in design, performance, usability, reliability and dynamic user interface",
        },
        {
            icon: <Palette className="w-5 h-5 text-cyan-500" />,
            title: "Creative and Pixel Perfect Design",
            description: "Intuitive, flexible, visually outstanding designs that serve both the functional and aesthetic requirements.",
        },
    ];

    const rightFeatures = [
        {
            icon: <UserCheck className="w-5 h-5 text-blue-500" />,
            title: "Expertise to Meet Your Expectations",
            description: "Offering useful features planned, designed and executed by skilled programmers",
        },
        {
            icon: <Rocket className="w-5 h-5 text-cyan-500" />,
            title: "Robust Performance",
            description: "Rigorous RND-backed application design and development for consistent performance throughout app life-cycle",
        },
        {
            icon: <Shield className="w-5 h-5 text-blue-500" />,
            title: "Security",
            description: "A holistic approach is adopted through code obfuscation, encryption, standard stress testing and timely updates",
        },
    ];

    return (
        <section className="w-full pt-15 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-16 lg:mb-24">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Features
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        Explore <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">premium quality</span>
                    </h2>
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

                    {/* Left Features Group */}
                    <div className="lg:col-span-4 space-y-12 lg:text-right order-1">
                        {leftFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                                    {feature.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:col-span-4 justify-center order-2">
                        <div className="relative w-full max-w-[340px] aspect-[1/2]">
                            <Image
                                src="/mobile_features.png"
                                alt="App Interface Mockup Screen"
                                fill
                                quality={100}
                                unoptimized={true}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Features Group */}
                    <div className="lg:col-span-4 space-y-12 order-3">
                        {rightFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                                    {feature.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}