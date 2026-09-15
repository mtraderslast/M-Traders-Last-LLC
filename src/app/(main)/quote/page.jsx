'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Link as LinkIcon, Loader2 } from 'lucide-react';
import Link from "next/link";
import Swal from 'sweetalert2';
import { sendQuotationEmail } from '@/lib/action/quotation';

const servicesList = [
    "Web Development", "Mobile App", "UI/UX Design",
    "SEO Optimization", "Digital Marketing", "Cloud Solutions",
    "Business Automation", "IT Consulting", "AI Automation"
];

export default function QuotePage() {
    const [step, setStep] = useState(1);
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: { services: [] }
    });

    const selectedServices = watch('services');

    // Framer Motion Variants
    const formVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.3 } }
    };

    const handleNext = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger(['name', 'email', 'phone', 'company']);
        if (step === 2) {
            if (selectedServices.length > 0) isValid = true;
            else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Service Required',
                    text: 'Please select at least one service before proceeding.',
                    confirmButtonColor: '#06b6d4', // cyan-500
                });
            }
        }
        if (isValid) setStep((prev) => prev + 1);
    };

    const handlePrev = () => setStep((prev) => prev - 1);

    const onSubmit = async (data) => {
        Swal.fire({
            title: "Submitting Proposal...",
            text: "Please wait a moment while we process your request.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const payload = {
                name: data.name?.trim(),
                email: data.email?.trim(),
                phone: data.phone?.trim() || "",
                company: data.company?.trim() || "",
                services: data.services,
                description: data.description?.trim(),
                budget: data.budget || "",
                driveLink: data.driveLink?.trim() || "",
            };

            const res = await sendQuotationEmail(payload);

            console.log(res)

            const isSuccess = res?.success || res?.data?.success || res?.status === 200;

            if (isSuccess) {
                Swal.close();
                setStep(4); // Success Step UI 
            } else {
                throw new Error(res?.message || res?.data?.message || "Failed to submit quotation request.");
            }
        } catch (error) {
            console.error("Error submitting quotation:", error);

            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text:
                    error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong! Please try again later.",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    const toggleService = (service) => {
        if (selectedServices.includes(service)) {
            setValue('services', selectedServices.filter(s => s !== service));
        } else {
            setValue('services', [...selectedServices, service]);
        }
    };

    return (
        // Main Wrapper: Centered Content (Updated to Slate background)
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 py-12 lg:p-10 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500">

            {/* Top Heading & Paragraph */}
            <div className="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] text-center mb-10 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
                >
                    Request a <span className="text-cyan-500 dark:text-cyan-400">Custom Quote</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-slate-600 dark:text-slate-400 break-words"
                >
                    Tell us about your project requirements and our enterprise team will prepare a tailored proposal with timelines and budget.
                </motion.p>
            </div>

            {/* Centered Form Card */}
            <div className="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] bg-white dark:bg-slate-900 shadow-2xl dark:shadow-cyan-500/5 rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-200 dark:border-slate-800 relative overflow-hidden z-10">

                {/* Progress Bar */}
                {step < 4 && (
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
                        <motion.div
                            className="h-full bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}

                <AnimatePresence mode="wait">

                    {/* STEP 1: Basic Details */}
                    {step === 1 && (
                        <motion.div key="step1" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white wrap-break-words">Let's get to know you</h2>

                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-col md:flex-row gap-5 w-full">
                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Full Name *</label>
                                        <input
                                            {...register('name', { required: "Name is required" })}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Email Address *</label>
                                        <input
                                            type="email"
                                            {...register('email', {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-5 w-full">
                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Phone Number</label>
                                        <input
                                            {...register('phone')}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                            placeholder="+880 1XXX XXXXXX"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Company Name</label>
                                        <input
                                            {...register('company')}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-ellipsis text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                            placeholder="Your Tech Ltd."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button type="button" onClick={handleNext} className="text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                                    Next Step <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: Services */}
                    {step === 2 && (
                        <motion.div key="step2" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white break-words">What services do you need?</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {servicesList.map((service) => (
                                    <div
                                        key={service}
                                        onClick={() => toggleService(service)}
                                        className={`p-4 rounded-xl border-2 cursor-pointer flex items-start gap-3 transition-all ${selectedServices.includes(service)
                                            ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                                            : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:border-cyan-500/50 dark:hover:border-cyan-400/50'
                                            }`}
                                    >
                                        <div className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${selectedServices.includes(service) ? 'border-cyan-500 bg-cyan-500 dark:border-cyan-400 dark:bg-cyan-400' : 'border-slate-300 dark:border-slate-700'}`}>
                                            {selectedServices.includes(service) && <CheckCircle size={14} className="text-white dark:text-slate-900" />}
                                        </div>
                                        <span className="font-semibold break-words w-full text-left">{service}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col-reverse md:flex-row justify-between gap-4 w-full">
                                <button type="button" onClick={handlePrev} className="text-slate-500 hover:text-slate-900 dark:hover:text-white px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full md:w-auto bg-slate-100 dark:bg-slate-800 rounded-xl md:bg-transparent md:dark:bg-transparent cursor-pointer">
                                    <ArrowLeft size={20} /> Back
                                </button>
                                <button type="button" onClick={handleNext} className="text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
                                    Project Details <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Project Details */}
                    {step === 3 && (
                        <motion.div key="step3" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white break-words">Final Details</h2>

                            <div className="space-y-6 w-full">
                                <div className="w-full">
                                    <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Project Description *</label>
                                    <textarea
                                        {...register('description', { required: "Project description is required" })}
                                        rows={5}
                                        className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-y text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="Briefly describe what you want to build..."
                                    />
                                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                                </div>

                                <div className="flex flex-col md:flex-row gap-5 w-full">
                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300">Estimated Budget</label>
                                        <select
                                            {...register('budget')}
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all appearance-none text-slate-900 dark:text-slate-100"
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="5k-10k">$5,000 - $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k-50k">$25,000 - $50,000</option>
                                            <option value="50k+">$50,000+</option>
                                        </select>
                                    </div>

                                    <div className="w-full">
                                        <label className="text-sm font-semibold mb-2 block text-slate-700 dark:text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">Drive Link (Brief/Reqs)</label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                                <LinkIcon size={18} />
                                            </div>
                                            <input
                                                {...register('driveLink')}
                                                className="w-full p-4 pl-12 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                                placeholder="https://drive.google.com/..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col-reverse md:flex-row justify-between gap-4 w-full">
                                <button type="button" onClick={handlePrev} disabled={isSubmitting} className="text-slate-500 hover:text-slate-900 dark:hover:text-white px-8 py-4 font-bold flex items-center justify-center gap-2 transition-all w-full md:w-auto bg-slate-100 dark:bg-slate-800 rounded-xl md:bg-transparent md:dark:bg-transparent cursor-pointer disabled:opacity-50">
                                    <ArrowLeft size={20} /> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isSubmitting}
                                    className="text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request <CheckCircle size={20} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: Success Message */}
                    {step === 4 && (
                        <motion.div key="step4" variants={formVariants} initial="hidden" animate="visible" className="w-full text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="w-24 h-24 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <CheckCircle size={48} />
                            </motion.div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white break-words">Request Sent Successfully!</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg break-words max-w-md mx-auto">
                                Thank you for reaching out. Our enterprise team will review your project and get back to you within 24 hours.
                            </p>
                            <Link
                                href="/"
                                className="mt-8 inline-block text-cyan-500 dark:text-cyan-400 font-bold hover:underline"
                            >
                                Return to Home
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}