"use client";

import { Bubble, AngularIcon, TailwindIcon, MuiIcon, NodeIcon, VueIcon, NextIcon, LaravelIcon, FirebaseIcon, PythonIcon, TypeScriptIcon, ReactIcon } from "./icons/tech-icons";

function WebTechnologies() {
    return (
        <section className="w-full py-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="lg:col-span-6 text-center lg:text-left space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                Web Technologies
                            </span>
                            <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                Powerful{" "}
                            </span>
                            web solutions to scale exponentially
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xs mx-auto lg:mx-0 leading-relaxed">
                            Unlock the true potential of your business using cutting-edge web technologies.
                        </p>
                    </div>

                    <div className="lg:col-span-6 w-full flex justify-center">
                        <div className="w-full md:w-[80%] lg:w-full flex justify-center">
                            <div className="mt-3 border mx-auto relative w-[253px] md:w-[350px] xl:w-[350px] 2xl:w-[450px] h-[253px] md:h-[350px] xl:h-[350px] 2xl:h-[450px] rounded-full">
                                <Bubble className="top-[-10%] left-[-10%]" label="Angular">
                                    <AngularIcon />
                                </Bubble>
                                <Bubble className="top-1/2 -translate-y-1/2 left-[-10%]" label="Tailwindcss">
                                    <TailwindIcon />
                                </Bubble>
                                <Bubble className="top-full translate-y-[-70%] left-[-10%]" label="Material UI">
                                    <MuiIcon />
                                </Bubble>
                                <Bubble className="top-full translate-y-[-70%] right-[-10%]" label="Node JS">
                                    <NodeIcon />
                                </Bubble>
                                <Bubble className="top-[-10%] right-[-10%]" label="Vue JS">
                                    <VueIcon />
                                </Bubble>

                                <div className="border w-[177px] md:w-[230px] xl:w-[230px] 2xl:w-[320px] h-[177px] md:h-[230px] xl:h-[230px] 2xl:h-[320px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
                                    <Bubble className="top-[-10%] left-[-10%]" label="Next JS">
                                        <NextIcon />
                                    </Bubble>
                                    <Bubble className="top-full translate-y-[-57%] left-[10%]" label="Laravel">
                                        <LaravelIcon />
                                    </Bubble>
                                    <Bubble className="top-[-10%] right-[-10%]" label="Firebase">
                                        <FirebaseIcon />
                                    </Bubble>
                                    <Bubble className="top-[85%] -translate-y-[70%] right-[-15%]" label="Python">
                                        <PythonIcon />
                                    </Bubble>

                                    <div className="border w-[96px] md:w-[120px] xl:w-[120px] 2xl:w-[170px] h-[96px] md:h-[120px] xl:h-[120px] 2xl:h-[170px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
                                        <Bubble className="top-[10%] left-[-13%] !w-8 !h-8 md:!w-10 md:!h-10 xl:!w-10 xl:!h-10 2xl:!w-12 2xl:!h-12" label="TypeScript">
                                            <TypeScriptIcon />
                                        </Bubble>
                                        <Bubble className="top-[70%] -translate-y-[70%] right-[-18%] !w-10 !h-10 md:!w-12 md:!h-12 xl:!w-12 xl:!h-12 2xl:!w-16 2xl:!h-16" label="React JS">
                                            <ReactIcon />
                                        </Bubble>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WebTechnologies;