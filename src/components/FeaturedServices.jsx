import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { fetchAllPackages } from '@/lib/action/service-package';

export default async function FeaturedServices() {
    let featuredPackages = [];

    try {
        const res = await fetchAllPackages({ limit: 6, page: 1 });
        if (res?.success && Array.isArray(res?.data)) {
            featuredPackages = res.data;
        }
    } catch (error) {
        console.error("Failed to fetch featured packages:", error);
    }

    if (!featuredPackages || featuredPackages.length === 0) {
        return null;
    }

    return (
        <section className="bg-white dark:bg-slate-950 py-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
                            Our Service Packages
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            Explore Featured Packages
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium max-w-xl">
                            Choose the best fit for your business from our top-rated IT solutions and development services.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <Link
                            href="/package"
                            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
                        >
                            See More Packages
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {featuredPackages.map((pkg) => (
                        <PackageCard key={pkg._id || pkg.id || pkg.slug} packageData={pkg} />
                    ))}
                </div>

            </div>
        </section>
    );
}