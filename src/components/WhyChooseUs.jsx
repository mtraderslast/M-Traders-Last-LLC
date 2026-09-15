"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";

function Counter({ value, duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => setCount(Math.floor(latest)),
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

function WhyChooseUs() {
    const whatsappUrl = "https://wa.me/13163617579";

    return (
        <section className="w-full py-10 lg:py-10 transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                                Smart web solutions built for your success
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                We create intelligent, scalable, and high-performing web solutions designed to help your business grow and succeed in the digital world.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900/50 p-8 rounded-2xl flex flex-col justify-between min-h-50 shadow-xs">
                                <div>
                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-0.5">
                                        <Counter value={75} />
                                        <span>+</span>
                                    </h3>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Skilled Team Developers
                                    </p>
                                </div>
                                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-6">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Delivering excellence through experience and tech innovation.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900/50 p-8 rounded-2xl flex flex-col justify-between min-h-50 shadow-xs">
                                <div>
                                    <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-0.5">
                                        <Counter value={35} />
                                        <span>+</span>
                                    </h3>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Countries Served Globally
                                    </p>
                                </div>
                                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-6">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Powering international enterprise systems across boundaries.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-xl hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/10 active:scale-95 group"
                            >
                                Contact Us
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3.5 group hover:text-cyan-500 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                                    <svg className="w-5.5 h-5.5 text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.114-3.847-6.672-6.672l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Call Us!</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                                        +1 (316) 361-7579
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
                        <div className="relative w-full h-full max-w-125 aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50">
                            <Image
                                src="/why-choose-us.jpg"
                                alt="Web Solutions Planning Meeting"
                                fill
                                quality={100}
                                unoptimized={true}
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;