"use client";

import Image from "next/image";

export default function StoryVision() {
    return (
        <section className="w-full py-20 lg:py-28 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
                {/*  Our Story  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Our{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Story
                            </span>
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                            <p>
                                What started as a vision to bridge the gap between complex engineering and aesthetic interface design has grown into a dynamic digital powerhouse. We established our roots with a simple mission: to build web applications that don't just function, but leave a lasting impression.
                            </p>
                            <p>
                                Over the years, we have collaborated with global enterprises and scaling startups, transforming raw ideas into high-converting digital products. Every line of code we write and every pixel we polish is driven by our passion for innovation and technological excellence.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-100 dark:shadow-cyan-950/30">
                        <Image
                            src="/ourstory.jpg"
                            alt="Our Story Illustration"
                            fill
                            className="object-cover"
                            sizes="(max-w-1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/*  Our Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-blue-950/30 lg:order-1 order-2">
                        <Image
                            src="/ourvision.jpg"
                            alt="Our Vision Illustration"
                            fill
                            className="object-cover"
                            sizes="(max-w-1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="lg:col-span-6 space-y-6 lg:order-2 order-1">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                Our Future
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Our{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Vision
                            </span>
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                            <p>
                                Our vision is to act as a global catalyst for digital transformation, setting new industry benchmarks in performance and secure ecosystems. We aim to simplify advanced web technologies, making scalability seamless and reliable for forward-thinking brands worldwide.
                            </p>
                            <p>
                                We look forward to expanding our technical architectural horizons by integrating emerging framework efficiencies. By doing so, we ensure our partners always remain steps ahead in their respective markets with highly scalable solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                How We Work
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Our{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Strategy
                            </span>
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                            <p>
                                By fusing modern framework capabilities with robust backend systems, we eliminate traditional scalability barriers. We specialize in structuring clean database workflows, microservice bridges, and fluid user layouts to maximize performance metrics.
                            </p>
                            <p>
                                We do not believe in boilerplate approaches. Every deployment strategy is carefully monitored, tailored, and rigorously tested under high-traffic conditions to ensure absolute stability and operational resilience at any given volume.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-100 dark:shadow-cyan-950/30">
                        <Image
                            src="/ourstrategy.jpg"
                            alt="Our Strategy Illustration"
                            fill
                            className="object-cover"
                            sizes="(max-w-1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Value & Commitment*/}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-blue-950/30 lg:order-1 order-2">
                        <Image
                            src="/ourcommitment.jpg"
                            alt="Our Commitment Illustration"
                            fill
                            className="object-cover"
                            sizes="(max-w-1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="lg:col-span-6 space-y-6 lg:order-2 order-1">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                What We Value
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                            Our{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Commitment
                            </span>
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                            <p>
                                Transparency, structural data integrity, and engineering quality form the core foundation of our operations. We maintain absolute transparency throughout our build cycles, providing comprehensive documentation and ongoing architectural guidance.
                            </p>
                            <p>
                                Our ultimate objective is long-term business enablement. We stand firmly behind every component we craft, ensuring your digital architecture operates seamlessly, stays fully current, and supports your ongoing growth objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}