"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import review1 from "../../public/client-image-1.jpg";
import review2 from "../../public/client-image-2.jpg";
import review3 from "../../public/client-image-3.jpg";
import review4 from "../../public/client-image-4.jpg";
import review5 from "../../public/client-image-5.jpg";

function Counter({ value, duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

function AboutAgency() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const missionPoints = [
        "Strategy & design to development",
        "Websites focused on performance",
        "We support you beyond launch",
        "Tailored digital scaling solutions",
    ];

    return (
        <section ref={containerRef} className="w-full py-10 lg:py-10 transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 relative flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-[1/1] rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50">
                            <Image
                                src="/about-agency.png"
                                alt="Our Web Development Team"
                                fill
                                unoptimized={true}
                                className="object-cover"
                            />

                            <motion.div
                                animate={{ x: [-6, 6, -6] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute bottom-6 left-6 bg-white dark:bg-slate-900/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800/60 max-w-[210px] z-20 flex flex-col gap-2.5"
                            >
                                <div className="flex -space-x-2.5">
                                    {[review1, review2, review3, review4, review5].map((review, index) => (
                                        <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                            <Image
                                                src={review}
                                                alt="Client review thumbnail"
                                                fill
                                                priority
                                                quality={100}
                                                suppressHydrationWarning
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className="text-amber-500 text-sm">★</span>
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight">200+ Reviews</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                    About Our Agency
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                                Learn more about our web development agency
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                We combine creative design, advanced technology, and strategic thinking to websites that are fast, secure, and user-friendly.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-900">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_center] rounded-xl hover:bg-[position:100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/10 active:scale-95 group"
                            >
                                Learn More About
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                            </Link>

                            <div className="flex items-center gap-3">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                                    <Image
                                        src="/client-image-1.jpg"
                                        alt="Savannah Nguyen"
                                        fill
                                        quality={100}
                                        priority
                                        suppressHydrationWarning
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Savannah Nguyen</h4>
                                    <p className="text-xs text-slate-400">Web Engineer</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
                            <div className="sm:col-span-5 bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900/50 p-5 rounded-2xl flex flex-col items-center justify-center text-center">
                                <div className="mb-4">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-0.5">
                                        <Counter value={180} />+
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Happy Clients Worldwide</p>
                                </div>

                                <div className="relative w-28 h-20 flex flex-col justify-end items-center">
                                    <svg className="w-full h-full transform" viewBox="0 0 100 60">
                                        <path
                                            d="M 15 50 A 35 35 0 0 1 85 50"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            className="text-slate-200 dark:text-slate-800"
                                            strokeLinecap="round"
                                        />
                                        <motion.path
                                            d="M 15 50 A 35 35 0 0 1 85 50"
                                            fill="none"
                                            stroke="url(#cyanBlueGrad)"
                                            strokeWidth="8"
                                            strokeDasharray="110"
                                            initial={{ strokeDashoffset: 110 }}
                                            animate={isInView ? { strokeDashoffset: 110 - (110 * 95) / 100 } : {}}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#06b6d4" />
                                                <stop offset="100%" stopColor="#2563eb" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <div className="absolute top-[28px] text-center">
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                                            <Counter value={98} />%
                                        </p>
                                        <p className="text-[10px] text-slate-400 font-medium">Client Rate</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-7 space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                                    Our Mission:
                                </h4>
                                <ul className="space-y-3">
                                    {missionPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm">
                                            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 shrink-0 mt-0.5">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <span className="text-slate-600 dark:text-slate-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutAgency;