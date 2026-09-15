"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function FAQSection() {
    const faqData = [
        {
            question: "What types of websites do you develop?",
            answer: "We develop a wide range of websites including corporate websites, e-commerce stores, online shops, portfolio sites, landing pages, blogs, and custom web applications. Our team ensures each website is responsive, fast, and optimized for conversions to help boost your business."
        },
        {
            question: "How long does it take to build a website?",
            answer: "The timeline varies depending on the complexity and scope of the project. A standard corporate website typically takes 4-6 weeks, while a complex e-commerce platform or custom web application may take 8-12 weeks. We work closely with you to establish clear milestones and deliver on time."
        },
        {
            question: "Do you offer ongoing website maintenance and support?",
            answer: "Yes, we provide comprehensive maintenance and support packages including security updates, performance monitoring, content updates, bug fixes, and technical support. We ensure your website remains secure, up-to-date, and performs at its best."
        },
        {
            question: "How does SEO help my business grow?",
            answer: "SEO helps your business by improving your website's visibility on search engines like Google. This means more organic traffic, higher quality leads, and increased brand credibility. With our SEO strategies, you can reach millions of potential customers actively searching for your products or services."
        },
        {
            question: "What SEO services do you provide?",
            answer: "We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content strategy, link building, local SEO, and performance tracking. We create customized strategies aligned with your business goals and target audience."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="w-full pt-20 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-16 max-w-3xl mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Questions & Answers
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Frequently Asked <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Queries</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        Find immediate insights regarding our core website engineering operations, delivery timelines, and framework maintenance guidelines.
                    </p>
                </div>

                {/* Minimalist Border-Separated FAQ List */}
                <div className="divide-y divide-slate-100 dark:divide-slate-900/60 border-t border-b border-slate-100 dark:border-slate-900/60">
                    {faqData.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div key={idx} className="py-5 transition-colors duration-200">
                                {/* Accordion Trigger Button */}
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                                >
                                    <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 text-slate-400 group-hover:text-cyan-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-500" : ""
                                            }`}
                                    />
                                </button>

                                {/* Accordion Content Panel */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium pl-1">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Formal View More Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/faqs"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-2 group border-b border-transparent hover:border-cyan-500/50"
                    >
                        View More FAQs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}