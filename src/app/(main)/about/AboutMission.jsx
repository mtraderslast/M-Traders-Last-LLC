"use client";

import Image from "next/image";

export default function AboutMission() {
    return (
        <section className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Mission Content */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                Our Mission
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-800">
                            Mission
                        </h2>

                        <p className="text-base sm:text-lg lg:text-sm xl:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
                            Our mission at M Traders Last LLC is to build dependable digital solutions, modern web platforms, and streamlined operational workflows that support business growth. We prioritize clarity, security, and consistent quality so our clients can focus on scaling their operations with confidence.
                        </p>
                    </div>

                    {/* Right Column: Styled Image Banner */}
                    <div className="lg:col-span-5 flex justify-center w-full">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] rounded-2xl overflow-hidden">
                            <Image
                                src="/mission_banner.png"
                                alt="Our Business Mission"
                                fill
                                quality={100}
                                unoptimized={true}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}