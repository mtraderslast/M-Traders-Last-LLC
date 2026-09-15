"use client";

import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, Building2, Globe, MessageSquareCode, Send } from "lucide-react";
import Swal from "sweetalert2";
import { sendContactEmail } from "@/lib/action/contact";

function ContactSection() {
    const whatsappUrl = "https://wa.me/13163617579";
    const telegramUrl = "https://t.me/Mtradersla_bot";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            service: "",
            message: "",
        },
        mode: "onTouched",
    });

    const onSubmit = async (formData) => {
        Swal.fire({
            title: "Sending Message...",
            text: "Please wait a moment while we process your request.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const res = await sendContactEmail(formData);

            const isSuccess = res?.success || res?.data?.success || res?.status === 200;

            if (isSuccess) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thank you for reaching out. We will get back to you soon!",
                    confirmButtonColor: "#0891b2",
                });

                reset();
            } else {
                throw new Error(res?.data?.message || res?.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Error submitting form:", error);

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                    error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong! Please try again later.",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    return (
        <section className="w-full py-16 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Get in Touch
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                        Let's start a project together
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Have an idea or a project in mind? Reach out to us through any channel or fill out the form.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full">

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Quick Channels
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                        <MessageSquareCode className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">+1 (316) 361-7579</p>
                                        <p className="text-[11px] text-emerald-500 font-semibold mt-0.5">Fastest response</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+13163617579"
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Phone</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">+1 (316) 361-7579</p>
                                        <p className="text-[11px] text-blue-500 font-semibold mt-0.5">Tap to call</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:hello@mtraderslastllc.com"
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Email</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 break-all">hello@mtraderslastllc.com</p>
                                        <p className="text-[11px] text-cyan-500 font-semibold mt-0.5">Reply within 24h</p>
                                    </div>
                                </a>

                                <a
                                    href={telegramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                        <Send className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Telegram Bot</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">@Mtradersla_bot</p>
                                        <p className="text-[11px] text-blue-500 font-semibold mt-0.5">24/7 instant support</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl dark:border-slate-900 bg-slate-50/30 dark:bg-slate-900/20 space-y-4 mt-auto">
                            <div className="flex items-start gap-3">
                                <Building2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">M Traders Last LLC</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        Registered Business · St. Petersburg, FL 33702, USA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Business Hours</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        Mon–Fri · 9 AM – 6 PM PST
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Online Presence</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        mtraderslastllc.com
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-7 h-full">
                        <div className="h-full p-8 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-xs shadow-xl shadow-cyan-500/[0.02] flex flex-col justify-between">

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Send Message by Email
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col h-full justify-between" noValidate>
                                <div className="space-y-6 flex-1 flex flex-col">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                                            Your Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-slate-950 text-sm outline-none transition-all duration-200 focus:ring-2 ${errors.name
                                                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                                : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                                                }`}
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message: "Name must be at least 2 characters",
                                                },
                                            })}
                                        />
                                        {errors.name && (
                                            <span className="text-xs font-semibold text-red-500">{errors.name.message}</span>
                                        )}
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className={`w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-slate-950 text-sm outline-none transition-all duration-200 focus:ring-2 ${errors.email
                                                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                                : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                                                }`}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Please enter a valid email address",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>
                                        )}
                                    </div>

                                    {/* Service Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                                            Service Title <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                className={`w-full px-4 py-3.5 rounded-xl border bg-white dark:bg-slate-950 text-sm outline-none appearance-none transition-all duration-200 focus:ring-2 ${errors.service
                                                    ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                                    : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                                                    }`}
                                                {...register("service", { required: "Please select a service" })}
                                            >
                                                <option value="">Select a service...</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="seo">Search Engine Optimization</option>
                                                <option value="software-development">Software Development</option>
                                                <option value="business-automation">Business Automation</option>
                                                <option value="it-infrastructure">IT Infrastructure Development</option>
                                                <option value="erp-solution">ERP Solution</option>
                                                <option value="mobile-app">Mobile App Development</option>
                                                <option value="e-commerce">E-commerce Solution</option>
                                                <option value="cloud-service">Cloud Service</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        {errors.service && (
                                            <span className="text-xs font-semibold text-red-500">{errors.service.message}</span>
                                        )}
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-2 flex-1 flex flex-col">
                                        <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us about your project, target audience, and goals..."
                                            className={`w-full flex-1 px-4 py-3.5 rounded-xl border bg-white dark:bg-slate-950 text-sm outline-none transition-all duration-200 focus:ring-2 resize-none ${errors.message
                                                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                                : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                                                }`}
                                            {...register("message", {
                                                required: "Message is required",
                                                minLength: {
                                                    value: 10,
                                                    message: "Message must be at least 10 characters",
                                                },
                                            })}
                                        />
                                        {errors.message && (
                                            <span className="text-xs font-semibold text-red-500">{errors.message.message}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_center] rounded-xl hover:bg-[position:100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/10 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactSection;