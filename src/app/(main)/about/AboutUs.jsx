"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { Award, Handshake, CheckCircle2, Star } from "lucide-react";

function Counter({ value, duration = 2, decimals = 0 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setCount(decimals ? parseFloat(latest.toFixed(decimals)) : Math.floor(latest));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration, decimals]);

    return <span ref={ref}>{count}{decimals && count % 1 === 0 ? ".0" : ""}</span>;
}

function AboutUs() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const bulletPoints = [
        "Strategy and design to development",
        "Websites focused on performance",
        "We support you beyond launch",
    ];

    return (
        <section ref={containerRef} className="w-full py-10 transition-colors duration-300 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image Showcase & Moved Floating Badge */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-900"
                        >
                            <Image
                                src="/about-us.jpg"
                                alt="Web development team working"
                                fill
                                quality={100}
                                unoptimized={true}
                                className="object-cover"
                            />

                            {/* Shifted Layout: Positioned to slide slightly to the right overlap */}
                            <div className="absolute bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-cyan-500 to-blue-600 p-5 rounded-2xl shadow-xl text-white max-w-[210px]">
                                <h3 className="text-3xl font-black flex items-center gap-0.5">
                                    <Counter value={120} />+
                                </h3>
                                <p className="text-xs font-semibold leading-relaxed mt-1 text-white/90">
                                    Long Term Client Partnerships
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Detailed Copy & Core Features */}
                    <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                    About Us
                                </span>
                            </div>

                            {/* Gradient Text applied to specific parts */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                                Your trusted partner in{" "}
                                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 bg-clip-text text-transparent">
                                    web design & development
                                </span>
                            </h2>

                            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                We help startups and businesses grow online by delivering clean design, efficient code, and reliable digital solutions.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Quality That Drives Results</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    We work as your long-term digital partner, understanding your goals.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                    <Handshake className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-slate-900 dark:text-white">Partnership You Can Rely On</h4>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    We focus on performance, usability, and scalability.
                                </p>
                            </div>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-900" />

                        {/* Bullet Points and Ratings Breakdown */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                            <div className="sm:col-span-7 space-y-3.5">
                                {bulletPoints.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                                        <span className="text-slate-600 dark:text-slate-300 font-medium">{point}</span>
                                    </div>
                                ))}

                                <div className="pt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_center] rounded-xl hover:bg-[position:100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/10 active:scale-95 group"
                                    >
                                        Contact Now
                                        <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="sm:col-span-5 p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 text-center sm:text-left">
                                <div className="flex gap-1 justify-center sm:justify-start mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                    ))}
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                                    <Counter value={4.9} duration={2} decimals={1} />
                                    <span className="text-sm font-normal text-slate-400"> /5.0</span>
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-2">
                                    Average Website Ratings
                                </p>
                            </div>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-900" />

                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;