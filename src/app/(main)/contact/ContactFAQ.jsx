"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What happens after I submit the contact form?",
            a: "Our team will review your requirements and get back to you within 24 hours to schedule a brief discovery call. We will discuss your goals, timeline, and technical scope."
        },
        {
            q: "Do you sign Non-Disclosure Agreements (NDA) before discussion?",
            a: "Absolutely. We prioritize your intellectual property. We can sign a standard NDA before you share any sensitive project information or documentation."
        },
        {
            q: "How do you estimate the cost of a customized project?",
            a: "Our pricing depends on the features, complexity, technology stack, and timeline. After our discovery call, we provide a detailed milestone-based proposal with transparent pricing."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-12 text-left">
            {/* FAQ Header */}
            <div className="text-center space-y-2 mb-10">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        Have Questions?
                    </span>
                    <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    Frequently Asked Queries
                </h3>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className="rounded-xl border border-slate-100 dark:border-slate-900/60 bg-white dark:bg-slate-950/40 overflow-hidden transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors"
                            >
                                <span>{faq.q}</span>
                                <span className="ml-4 shrink-0 p-1 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800">
                                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-slate-100 dark:border-slate-900/40" : "max-h-0"
                                    }`}
                            >
                                <p className="p-5 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium bg-slate-50/30 dark:bg-slate-900/5">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}