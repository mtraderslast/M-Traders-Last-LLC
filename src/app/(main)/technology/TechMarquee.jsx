"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function TechMarquee() {
    const technologies = [
        { name: "Java", logo: "/tech/java.png" },
        { name: "PHP", logo: "/tech/php.png" },
        { name: ".Net", logo: "/tech/net.png" },
        { name: "Python", logo: "/tech/python.png" },
        { name: "C#", logo: "/tech/c-code.png" },
        { name: "JavaScript", logo: "/tech/javascript.png" },
        { name: "Ruby", logo: "/tech/ruby.png" },
        { name: "Laravel", logo: "/tech/laravel.png" },
        { name: "C++", logo: "/tech/c++.png" },
        { name: "Angular", logo: "/tech/angularjs.png" },
        { name: "Bootstrap", logo: "/tech/bootstrap.png" },
        { name: "C", logo: "/tech/c.png" },
        { name: "Codeigniter", logo: "/tech/codeigniter.png" },
        { name: "Common", logo: "/tech/common.png" },
        { name: "Dart", logo: "/tech/dart.png" },
        { name: "DJango", logo: "/tech/django.png" },
        { name: "Go", logo: "/tech/go.png" },
        { name: "Kotlin", logo: "/tech/kotlin.png" },
        { name: "Material", logo: "/tech/material.png" },
        { name: "MongoDB", logo: "/tech/mongodb.png" },
        { name: "MySQL", logo: "/tech/mysql.png" },
        { name: "Next.js", logo: "/tech/next.png" },
        { name: "Node.js", logo: "/tech/node.png" },
        { name: "Postgresql", logo: "/tech/postgresql.png" },
        { name: "React", logo: "/tech/react.png" },
        { name: "Sass", logo: "/tech/sass.png" },
        { name: "Scala", logo: "/tech/scala.png" },
        { name: "Swift", logo: "/tech/swift.png" },
        { name: "Tailwind CSS", logo: "/tech/tailwindcss.png" },
        { name: "TypeScript", logo: "/tech/typescript.png" },
        { name: "vue", logo: "/tech/vue.png" },
    ];

    const duplicatedTechs = [...technologies, ...technologies];

    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                ease: "linear",
                duration: 100,
                repeat: Infinity,
            },
        });
    }, [controls]);

    return (
        <section className="w-full pt-15 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-12 lg:mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Technology
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Tools we use to <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">shape the future</span>
                    </h2>
                </div>

                {/* Marquee Wrapper Container */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-4">
                    <motion.div
                        className="flex gap-6 pr-6 flex-nowrap"
                        animate={controls}
                        whileHover={{ style: { animationPlayState: "paused", WebkitAnimationPlayState: "paused" } }}
                        style={{ display: "flex", width: "max-content" }}
                    >
                        {duplicatedTechs.map((tech, index) => (
                            <div
                                key={index}
                                className="w-[140px] sm:w-[160px] aspect-square rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/40 dark:bg-slate-900/20 backdrop-blur-xs flex flex-col items-center justify-between p-4 shadow-2xs hover:border-cyan-500/30 dark:hover:border-cyan-400/20 transition-colors duration-300 shrink-0"
                            >
                                {/* Center Image Component */}
                                <div className="relative w-full h-[60%] flex items-center justify-center">
                                    <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={56}
                                        height={56}
                                        quality={100}
                                        className="object-contain max-h-full dark:brightness-110"
                                    />
                                </div>

                                {/* Bottom Badge Text */}
                                <div className="w-full text-center">
                                    <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 shadow-3xs">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}