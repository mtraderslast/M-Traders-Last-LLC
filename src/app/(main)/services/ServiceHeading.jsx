"use client";

import Image from "next/image";

function ServiceHeading() {
    return (
        <section className="w-full bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-6 text-center lg:text-left space-y-5 lg:pr-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                            Services
                        </div>

                        <h1 className="lg:text-4xl text-4xl sm:text-6xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                            Triumph in business with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                purpose-driven{" "}
                            </span>
                            tech services
                        </h1>

                        <p className="text-xs sm:text-xl lg:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Tailored, cutting-edge IT services designed to transform your business for tomorrow's fast-evolving digital landscape. We craft solutions that open new frontiers with endless possibilities.
                        </p>
                    </div>

                    {/* Right Side: Image illustration */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end items-center py-4 w-full">
                        <div className="relative max-w-[700px] aspect-video flex items-center justify-center transition-all duration-300">
                            {/* Decorative Background Blur */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10" />

                            <Image
                                src="/service_banner.png"
                                alt="Triumph in business illustration"
                                width={1000}
                                height={750}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ServiceHeading;