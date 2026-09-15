import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Tag, Clock, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import BackButton from './BackButton';
import { fetchPackageDetails } from '@/lib/action/service-package';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetchPackageDetails(id);
    const pkg = res?.data;

    if (!pkg) return { title: 'Package Not Found' };

    return {
        title: `${pkg.title} | Service Package`,
        description: pkg.shortDescription || pkg.description?.slice(0, 160),
    };
}

export default async function PackageDetailsPage({ params }) {
    const { id } = await params;

    const res = await fetchPackageDetails(id);
    const pkg = res?.data;

    if (!pkg) {
        notFound();
    }

    const images = Array.isArray(pkg.image) ? pkg.image : (pkg.image ? [pkg.image] : []);
    const mainImage = images[0] || null;

    return (
        <div className="py-10 pt-25 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Navigation */}
                <div className="mb-8">
                    <BackButton />
                </div>

                {/* Main Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-12 border-b border-[#E4E1D8]">

                    {/* Left: Gallery */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#EFEBE2] border border-[#E4E1D8]">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={pkg.title}
                                    quality={100}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#9A9488] text-sm font-medium">
                                    No preview image available
                                </div>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
                                {images.map((imgUrl, idx) => (
                                    <div
                                        key={idx}
                                        className="relative w-20 h-16 shrink-0 rounded border border-[#E4E1D8] overflow-hidden opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                        <Image
                                            src={imgUrl}
                                            alt={`${pkg.title} ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Primary Info & Actions */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-1.5 text-[#3D52A0] mb-3">
                                <Tag className="w-3.5 h-3.5" />
                                <span className="text-xs font-semibold uppercase tracking-wider">
                                    {pkg.serviceCategory}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl font-bold text-[#14181F] tracking-tight leading-tight">
                                {pkg.title}
                            </h1>

                            {/* Short Overview */}
                            <p className="text-[#514C42] text-sm sm:text-base leading-relaxed mt-4">
                                {pkg.shortDescription || pkg.description}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#E4E1D8]">
                            {/* Investment & Delivery Info */}
                            <div className="grid grid-cols-2 gap-4 pb-6">
                                <div>
                                    <span className="block text-xs font-medium text-[#9A9488] uppercase tracking-wider mb-1">
                                        Investment
                                    </span>
                                    <span className="text-3xl font-bold text-[#14181F]">
                                        ${pkg.price?.toLocaleString()}
                                    </span>
                                </div>
                                <div className="border-l border-[#E4E1D8] pl-4">
                                    <span className="block text-xs font-medium text-[#9A9488] uppercase tracking-wider mb-1">
                                        Delivery Time
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[#14181F] font-semibold text-base">
                                        <Clock className="w-4 h-4 text-[#3D52A0]" />
                                        <span>{pkg.deliveryTime} Days</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Action - Direct Page Redirect */}
                            <div className="space-y-3">
                                <Link
                                    href={`/checkout/${pkg._id}`}
                                    className="group w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 cursor-pointer shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95"
                                >
                                    Order This Package
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>

                                <div className="flex items-center justify-center gap-1.5 text-xs text-[#9A9488]">
                                    <ShieldCheck className="w-4 h-4 text-[#3D52A0]" />
                                    <span>100% satisfaction guaranteed & dedicated support</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Technical Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">

                    {/* Left Column: Comprehensive Details */}
                    <div className="lg:col-span-7 space-y-10">

                        {/* Description */}
                        {pkg.description && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-3">
                                    About This Package
                                </h2>
                                <p className="text-[#403B32] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {pkg.description}
                                </p>
                            </section>
                        )}

                        {/* Included Features */}
                        {pkg.features && pkg.features.length > 0 && (
                            <section className="pt-8 border-t border-[#E4E1D8]">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-4">
                                    What's Included
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2.5 text-sm text-[#2E2B25]">
                                            <CheckCircle2 className="w-4 h-4 text-[#3D52A0] shrink-0 mt-0.5" />
                                            <span className="leading-normal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Add-ons */}
                        {pkg.addOns && pkg.addOns.length > 0 && (
                            <section className="pt-8 border-t border-[#E4E1D8]">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-4">
                                    Available Add-Ons
                                </h2>
                                <ul className="space-y-2.5">
                                    {pkg.addOns.map((addon, index) => (
                                        <li key={index} className="flex items-center gap-2.5 text-sm text-[#2E2B25]">
                                            <ArrowRight className="w-3.5 h-3.5 text-[#3D52A0]" />
                                            <span>{addon}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Meta & Specifications */}
                    <div className="lg:col-span-5 lg:border-l lg:border-[#E4E1D8] lg:pl-10 space-y-8">

                        {/* Technologies */}
                        {pkg.technologies && pkg.technologies.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-3">
                                    Technologies Used
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {pkg.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-semibold text-[#2E2B25] bg-[#EFEBE2] px-2.5 py-1 rounded border border-[#E4E1D8]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Target Audience */}
                        {pkg.whoIsThisFor && pkg.whoIsThisFor.length > 0 && (
                            <section className="pt-6 border-t border-[#E4E1D8]">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-3">
                                    Who This Is For
                                </h2>
                                <ul className="space-y-2">
                                    {pkg.whoIsThisFor.map((target, index) => (
                                        <li key={index} className="text-sm text-[#403B32] leading-relaxed flex items-start gap-2">
                                            <span className="text-[#3D52A0] font-bold">•</span>
                                            <span>{target}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Requirements */}
                        {pkg.requirements && pkg.requirements.length > 0 && (
                            <section className="pt-6 border-t border-[#E4E1D8]">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-[#3D52A0] mb-3">
                                    Prerequisites / Requirements
                                </h2>
                                <ol className="space-y-2.5">
                                    {pkg.requirements.map((req, index) => (
                                        <li key={index} className="flex gap-2.5 text-sm text-[#403B32]">
                                            <span className="font-semibold text-[#3D52A0] text-xs">
                                                {String(index + 1).padStart(2, '0')}.
                                            </span>
                                            <span className="leading-relaxed">{req}</span>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}