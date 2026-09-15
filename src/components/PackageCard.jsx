import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function PackageCard({ packageData }) {
    const displayImage = Array.isArray(packageData?.image)
        ? packageData.image[0]
        : packageData?.image;

    return (
        <div className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full relative">

            {/* Image & Badge Overlay Section */}
            <div className="relative w-full h-52 bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                {displayImage ? (
                    <Image
                        src={displayImage}
                        alt={packageData?.title || 'Package Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 font-medium text-xs gap-2">
                        <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>No Image Available</span>
                    </div>
                )}

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                {/* Service Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                        {packageData?.serviceCategory || 'General'}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                    {packageData?.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal mb-4 line-clamp-2 leading-relaxed">
                    {packageData?.shortDescription || 'No description provided.'}
                </p>

                {/* Technologies List (Badges) */}
                {packageData?.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {packageData.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                        {packageData.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 text-slate-400 text-[11px] font-medium">
                                +{packageData.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                )}

                {/* Spacer to push Price & Button to bottom */}
                <div className="mt-auto" />

                {/* Price & Delivery Section */}
                <div className="flex items-center justify-between gap-2 py-3.5 px-4 mb-5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800/80">
                    <div>
                        <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Starting At
                        </p>
                        <p className="text-xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                            ${packageData?.price?.toLocaleString() ?? 0}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Delivery
                        </p>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center justify-end gap-1">
                            <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {packageData?.deliveryTime || 'N/A'}
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    href={`/package/${packageData._id}`}
                    className="flex gap-3 items-center justify-center w-full py-3 px-4 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500"
                >
                    <span>View Details</span>
                    <MoveRight />
                </Link>

            </div>
        </div>
    );
}

export default PackageCard;