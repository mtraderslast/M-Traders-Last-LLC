"use client";

import Image from "next/image";

const OurServices = () => {
    const services = [
        {
            title: "Web Development",
            description: "Website, online shop that boosts business.",
            image: "/our-service-1.png",
        },
        {
            title: "Search Engine Optimization",
            description: "Reach millions of potential customers.",
            image: "/our-service-2.png",
        },
        {
            title: "Software Development",
            description: "Service your customers in style with us.",
            image: "/our-service-3.png",
        },
        {
            title: "Business Automation",
            description: "Committed to People, Committed to the Future.",
            image: "/our-service-4.png",
        },
        {
            title: "IT Infrastructure Development",
            description: "Make your business more easy with our IT Infrastructure.",
            image: "/our-service-5.png",
        },
        {
            title: "ERP Solution",
            description: "Connecting every resource for an efficient workspace.",
            image: "/our-service-6.png",
        },
        {
            title: "Mobile App Development",
            description: "Run your business from our user friendly mobile app.",
            image: "/our-service-7.png",
        },
        {
            title: "E-commerce Solution",
            description: "Fit your Business platform into E-commerce.",
            image: "/our-service-8.png",
        },
        {
            title: "Cloud Service",
            description: "Simple, secure file sync & sharing for your Business.",
            image: "/our-service-9.png",
        },
    ];

    return (
        <section className="relative w-full py-10 pt-5 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">

            {/* Background Image Overlay (Halka/Faded Look) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/mission_banner.png"
                    alt="Services Background Pattern"
                    fill
                    priority
                    quality={50}
                    className="object-cover opacity-[0.10] dark:opacity-[0.10] pointer-events-none select-none filter grayscale"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16 lg:mb-20">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            What We Offer
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        Our Services
                    </h2>
                </div>

                {/* Services Equal Sized Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center p-8 rounded-3xl border border-slate-200/60 dark:border-slate-900/80 bg-white/60 dark:bg-slate-900/30 backdrop-blur-md shadow-xs hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 h-full"
                        >
                            {/* Top Section: Small Circular Image Container */}
                            <div className="relative w-16 h-16 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center p-3 shadow-xs mb-6 group-hover:scale-105 transition-transform duration-300">

                                {/* Decorative outer abstract red/cyan ring line like the image */}
                                <span className="absolute inset-[-3px] rounded-full border-2 border-dashed border-cyan-600/70 dark:border-cyan-400/60 group-hover:rotate-45 transition-transform duration-500"></span>

                                <div className="relative w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Text Information Content */}
                            <div className="flex flex-col flex-grow justify-between space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium max-w-[280px] mx-auto">
                                    {service.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default OurServices;