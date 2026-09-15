"use client";

import Image from "next/image";

export default function DatabaseTechnologies() {
    return (
        <section className="w-full pt-20 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-12 lg:mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Database Technologies
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Database:</span> Build, Connect, Deploy
                    </h2>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Smart & secure database technologies with industry-leading systemic architecture for dynamic, scalable and efficient data management.
                    </p>
                </div>

                {/* Full-Width Responsive Schema Diagram Image */}
                <div className="w-full flex justify-center items-center">
                    <div className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/11] md:aspect-[16/10] rounded-sm overflow-hidden dark:bg-slate-200 p-2 md:p-4">
                        <Image
                            src="/code-image.png" 
                            alt="Database Schema Diagram Architecture"
                            fill
                            quality={100}
                            unoptimized={true}
                            className="object-contain transition-all duration-300 dark:brightness-105 dark:contrast-105"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}