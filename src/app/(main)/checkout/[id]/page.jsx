'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User, Mail, ArrowLeft, ShieldCheck, ArrowRight } from 'lucide-react';
import Swal from 'sweetalert2';
import { fetchPackageDetails } from '@/lib/action/service-package';

export default function PackageCheckoutPage({ params }) {
    const { id } = use(params);
    const router = useRouter();

    const [pkg, setPkg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Dynamic price states
    const [customAmount, setCustomAmount] = useState('');
    const [isEditingPrice, setIsEditingPrice] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetchPackageDetails(id);
                if (res?.data) {
                    setPkg(res.data);
                    setCustomAmount(res.data.price || '');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Package details not found.',
                        confirmButtonColor: '#2563EB',
                    });
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [id]);

    const handleCheckout = async (e) => {
        e.preventDefault();

        // Native FormData used to avoid keeping form inputs in React state
        const formData = new FormData(e.currentTarget);
        const userName = formData.get('userName')?.toString().trim() || '';
        const userEmail = formData.get('userEmail')?.toString().trim() || '';

        setSubmitting(true);

        try {
            const response = await fetch('/api/checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    packageId: pkg._id,
                    title: pkg.title,
                    price: Number(customAmount) || pkg.price,
                    image: Array.isArray(pkg.image) ? pkg.image[0] : pkg.image,
                    userName,
                    userEmail,
                }),
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Invalid server response');
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                setSubmitting(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Checkout Error',
                    text: data.error || 'Failed to initialize checkout session.',
                    confirmButtonColor: '#2563EB',
                });
            }
        } catch (error) {
            console.error('Checkout error:', error);
            setSubmitting(false);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Something went wrong while processing your request.',
                confirmButtonColor: '#2563EB',
            });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#020617]">
                <p className="text-[#06B6D4] dark:text-[#22D3EE] font-semibold animate-pulse">
                    Loading package details...
                </p>
            </div>
        );
    }

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#020617]">
                <p className="text-red-500 font-semibold">Package not found.</p>
            </div>
        );
    }

    const mainImage = Array.isArray(pkg.image) ? pkg.image[0] : pkg.image;

    return (
        <div className="bg-[#FFFFFF] dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] py-30 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#FFFFFF] transition-colors mb-8 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 text-[#06B6D4] dark:text-[#22D3EE]" /> Back to package
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Package Summary */}
                    <div className="lg:col-span-5 bg-[#FFFFFF] dark:bg-[#26262b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#64748B] dark:text-[#94A3B8] text-sm">
                                    No preview image
                                </div>
                            )}
                        </div>

                        <div>
                            <span className="text-xs font-bold tracking-widest text-[#06B6D4] dark:text-[#22D3EE] uppercase">
                                Selected Service
                            </span>
                            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#FFFFFF] mt-1">
                                {pkg.title}
                            </h2>
                            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] mt-2 line-clamp-3 leading-relaxed">
                                {pkg.shortDescription || pkg.description}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
                            <span>Delivery: <strong className="text-[#1E293B] dark:text-[#F8FAFC]">{pkg.deliveryTime} Days</strong></span>
                            <span>Category: <strong className="text-[#1E293B] dark:text-[#F8FAFC]">{pkg.serviceCategory}</strong></span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: User Info & Final Order */}
                    <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#26262b] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
                        <h3 className="text-2xl font-bold text-[#0F172A] dark:text-[#FFFFFF] mb-1">
                            Checkout Details
                        </h3>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mb-8">
                            Fill in your information or proceed directly to payment.
                        </p>

                        <form onSubmit={handleCheckout} className="space-y-6">
                            {/* Optional Full Name Input */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E293B] dark:text-[#F8FAFC] mb-2">
                                    Full Name
                                </label>
                                <div className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-slate-200 dark:border-slate-800 focus-within:border-[#06B6D4] dark:focus-within:border-[#22D3EE] transition-colors bg-white dark:bg-[#020617]">
                                    <User className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8] shrink-0" />
                                    <input
                                        type="text"
                                        name="userName"
                                        placeholder="John Doe"
                                        className="w-full text-sm text-[#1E293B] dark:text-[#F8FAFC] bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Optional Email Address Input */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E293B] dark:text-[#F8FAFC] mb-2">
                                    Email Address
                                </label>
                                <div className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-slate-200 dark:border-slate-800 focus-within:border-[#06B6D4] dark:focus-within:border-[#22D3EE] transition-colors bg-white dark:bg-[#020617]">
                                    <Mail className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8] shrink-0" />
                                    <input
                                        type="email"
                                        name="userEmail"
                                        placeholder="john@example.com"
                                        className="w-full text-sm text-[#1E293B] dark:text-[#F8FAFC] bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Hidden Editable Investment Section */}
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                                        Total Investment
                                    </span>
                                </div>

                                <div className="text-right">
                                    {isEditingPrice ? (
                                        <div className="flex items-center gap-1 border-b-2 border-[#06B6D4] dark:border-[#22D3EE] py-0.5">
                                            <span className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#FFFFFF]">$</span>
                                            <input
                                                type="number"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                onBlur={() => setIsEditingPrice(false)}
                                                autoFocus
                                                className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#FFFFFF] w-28 outline-none bg-transparent text-right"
                                            />
                                        </div>
                                    ) : (
                                        <span
                                            onClick={() => setIsEditingPrice(true)}
                                            className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-[#FFFFFF] cursor-pointer select-none"
                                        >
                                            ${Number(customAmount || 0).toLocaleString()}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Gradient Order CTA Button */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full mt-6 py-4 px-6 rounded-full text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {submitting ? 'Processing Order...' : 'Proceed to Checkout'}
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <div className="flex items-center justify-center gap-1.5 text-xs text-[#64748B] dark:text-[#94A3B8] pt-2">
                                <ShieldCheck className="w-4 h-4 text-[#06B6D4] dark:text-[#22D3EE]" />
                                <span>100% Secure & Confidential Checkout</span>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}