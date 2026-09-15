"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function OurPortfolio() {
    const mainProjects = [
        {
            title: "Pixer — Digital Multivendor Marketplace",
            description: "A comprehensive digital asset platform engineered for seamless vendor management, instant payouts, and highly optimized product delivery.",
            client: "Pixer LLC, US",
            tools: ["React", "Next.js", "Laravel", "Tailwind CSS", "TypeScript"],
            image: "/portfolio/portfolio-1.png",
            link: "https://github.com/ziaulhoquepatwary",
            tag: "Featured"
        },
        {
            title: "Pickbazar — High-Performance E-commerce Ecosystem",
            description: "An enterprise-grade headless commerce platform focused on ultra-fast page transitions, dynamic filtering, and complex inventory synchronizations.",
            client: "Pickbazar Global",
            tools: ["Next.js", "React", "GraphQL", "REST API", "Tailwind CSS"],
            image: "/portfolio/portfolio-2.png",
            link: "https://github.com/ziaulhoquepatwary",
            tag: "Enterprise"
        },
        {
            title: "ChawkBazar — Multi-Tenant SaaS E-Commerce Application",
            description: "A scalable multi-tenant digital marketplace infrastructure operating with distributed REST APIs to serve thousands of concurrent storefronts.",
            client: "ChawkBazar Group",
            tools: ["React", "Next.js", "Laravel API", "Tailwind CSS"],
            image: "/portfolio/portfolio-3.png",
            link: "https://github.com/ziaulhoquepatwary",
            tag: "SaaS Platform"
        }
    ];

    return (
        <section className="w-full py-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-16 max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Our Portfolio
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        Case studies of our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">recent works</span>
                    </h2>
                </div>

                {/* 3-Column Portfolio Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col space-y-4 bg-transparent group">
                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900 shadow-xs">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1200px) 33vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                                        {project.tag}
                                    </span>
                                </div>

                                {/* Hover Overlay with External Link */}
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500"
                                        title="View Project"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-2 text-left">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-cyan-500 transition-colors"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="pt-2 flex flex-col space-y-2 border-t border-slate-100 dark:border-slate-900">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block px-2 py-0.5 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-black">CLIENT</span>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{project.client}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.tools.map((tool, tIdx) => (
                                            <span key={tIdx} className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 after:content-['/'] last:after:content-[''] after:ml-1.5">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clean & Formal See More Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 group border-b border-transparent hover:border-cyan-500/50"
                    >
                        See More Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}