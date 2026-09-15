"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Benner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: "/benner-slide-1.png", alt: "Web Development Showcase" },
        { src: "/benner-slide-2.png", alt: "Digital Solutions Platform" },
        { src: "/benner-slide-3.png", alt: "Custom Software UI" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300 bg-white dark:bg-slate-950">

            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src="/benner-bg.png"
                    alt="Background Banner"
                    fill
                    priority
                    quality={100}
                    unoptimized={true}
                    className="object-cover opacity-60 lg:opacity-50 dark:opacity-50 transition-all duration-300"
                    suppressHydrationWarning
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/50 dark:to-slate-950"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                            🚀 Next-Gen Digital Solutions
                        </div>

                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                            Empowering Businesses with Elite{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                                Web Development
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We engineer high-performance custom software, modern web solutions, and scalable digital systems tailored for global brands and enterprise platforms.
                        </p>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="/quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_center] rounded-xl hover:bg-[position:100%_center] transition-all duration-500 shadow-xl shadow-cyan-500/20 active:scale-95"
                            >
                                Get a Quote
                            </Link>

                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-800 dark:text-slate-200 transition-all duration-300 bg-transparent"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px] aspect-[4/5] perspective-1000">

                            {slides.map((slide, index) => {
                                const isActive = index === currentSlide;
                                const isNext = index === (currentSlide + 1) % slides.length;

                                return (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden border transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${isActive
                                            ? "z-30 opacity-100 scale-100 rotate-0 translate-x-0 border-slate-300/80 dark:border-slate-700/80 shadow-2xl shadow-cyan-500/10"
                                            : isNext
                                                ? "z-20 opacity-80 scale-95 translate-x-4 translate-y-2 rotate-2 border-slate-300/30 dark:border-slate-800/30"
                                                : "z-10 opacity-0 scale-90 -translate-x-12 rotate-6 pointer-events-none"
                                            }`}
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            priority={index === 0}
                                            quality={95}
                                            unoptimized={true}
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                                    </div>
                                );
                            })}

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40 bg-slate-950/30 backdrop-blur-xs px-3 py-1.5 rounded-full">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-cyan-400" : "w-2 bg-white/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}