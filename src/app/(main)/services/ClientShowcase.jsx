"use client";

import Image from "next/image";

export default function ClientShowcase() {
    const clients = [
        { name: "Arena Scale", logo: "/clients/arena.png" },
        { name: "Bolt Agency", logo: "/clients/bolt.png" },
        { name: "Core Vault", logo: "/clients/corevault.png" },
        { name: "Data Bridge", logo: "/clients/databridge.png" },
        { name: "Flow Stack", logo: "/clients/flowstack.png" },
        { name: "GreenLeaf Co.", logo: "/clients/greenleaf.png" },
        { name: "Meridian Group", logo: "/clients/meridian.png" },
        { name: "Nex Commerce", logo: "/clients/nexcommerce.png" },
        { name: "Nexel", logo: "/clients/nexel.png" },
        { name: "OrbitSoft", logo: "/clients/orbit.png" },
        { name: "Pay Router", logo: "/clients/payrouter.png" },
        { name: "Prime Logix", logo: "/clients/primelogix.png" },
        { name: "Shop Elite", logo: "/clients/shopelite.png" },
        { name: "Swiftpay", logo: "/clients/swiftpay.png" },
        { name: "Technova", logo: "/clients/technova.png" },
        { name: "Vault Fin", logo: "/clients/vaultfin.png" },
    ];

    return (
        <section className="w-full pt-15 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with Gradient Transition Styling */}
                <div className="flex flex-col items-center text-center space-y-3 mb-16 max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Our Clients
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        Trusted by organizations <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">worldwide</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        We cooperate with global enterprises, government institutions, and visionary startups to construct reliable software infrastructures.
                    </p>
                </div>

                {/* Bigger, Colorful and Transparent Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center max-w-5xl mx-auto bg-transparent">
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="relative w-[140px] sm:w-[170px] h-16 sm:h-20 flex items-center justify-center bg-transparent transition-transform duration-300 hover:scale-105 group"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} official logo`}
                                fill
                                sizes="(max-w-5xl) 170px"
                                className="object-contain"
                                priority={idx < 8}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}