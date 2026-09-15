"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getHomeTopReviewsApi } from "@/lib/action/review";

function Testimonials() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await getHomeTopReviewsApi();
                if (res?.success && Array.isArray(res?.data)) {
                    setReviews(res.data);
                } else if (Array.isArray(res)) {
                    setReviews(res);
                }
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const duplicatedReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

    if (!isLoading && reviews.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-10 overflow-hidden bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-14">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Client Testimonials
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        What our clients say
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Don't just take our word for it — hear from the companies and founders we've helped scale online.
                    </p>
                </div>

            </div>

            {/* Slider Container */}
            {isLoading ? (
                /* Skeleton Loading State */
                <div className="flex gap-6 max-w-7xl mx-auto px-4 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-[350px] sm:w-[420px] shrink-0 h-64 bg-slate-100 dark:bg-slate-900/60 rounded-3xl animate-pulse"
                        />
                    ))}
                </div>
            ) : (
                /* Infinite Horizontal Scrolling Slider */
                <div className="relative w-full flex items-center overflow-hidden py-4">

                    {/* Faded edges effect */}
                    <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 pr-6 flex-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: reviews.length > 3 ? reviews.length * 8 : 25,
                            repeat: Infinity,
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                        style={{ display: "flex", width: "max-content" }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <div
                                key={`${review._id?.$oid || review._id || index}-${index}`}
                                className="w-[320px] sm:w-[400px] shrink-0 p-7 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 group"
                            >
                                {/* Review Card Header */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1">
                                            {[...Array(review.rating || 5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                            ))}
                                        </div>
                                        <Quote className="w-8 h-8 text-cyan-500/20 dark:text-cyan-500/10 rotate-180 group-hover:text-cyan-500/40 transition-colors" />
                                    </div>

                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal line-clamp-4">
                                        "{review.comment}"
                                    </p>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20 shrink-0 bg-slate-200 dark:bg-slate-800">
                                        <img
                                            src={review.userImage || "https://i.ibb.co/mR4qB2f/avatar-placeholder.png"}
                                            alt={review.userName}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                                            {review.userName}
                                        </h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                                            {review.userRole}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}
        </section>
    );
}

export default Testimonials;