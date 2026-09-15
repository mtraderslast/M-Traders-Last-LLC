'use client';

import { useState, useRef } from 'react';
import { X, Phone, Link as LinkIcon, ArrowUpRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Swal from 'sweetalert2';
import ProtectedRoute from '@/middleware/ProtectedRoute';

export default function OrderPackageModal({ packageData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Uncontrolled inputs using useRef (No unnecessary re-renders on typing!)
    const phoneRef = useRef(null);
    const linkRef = useRef(null);

    // Extracting package data as provided
    const packageId = packageData?._id;
    const packageTitle = packageData?.title;
    const packagePrice = packageData?.price;
    const packageImage = packageData?.image?.[0] || '';

    const handleClose = () => {
        if (submitting) return;
        setIsOpen(false);
    };

    const handleConfirm = async (e) => {
        e.preventDefault();

        // Get current values from refs
        const emergencyPhone = phoneRef.current?.value?.trim() || '';
        const resourceLink = linkRef.current?.value?.trim() || '';

        // Validation
        if (!emergencyPhone || !resourceLink) {
            Swal.fire({
                icon: 'warning',
                title: 'Required Fields Missing',
                text: 'Please fill in both the phone number and resource link.',
                confirmButtonColor: '#1B3C53',
            });
            return;
        }

        setSubmitting(true);

        try {
            // 1. Check user session
            const { data: sessionData } = await authClient.getSession();

            if (!sessionData || !sessionData.user?.id) {
                setSubmitting(false);
                await Swal.fire({
                    icon: 'error',
                    title: 'Login Required',
                    text: 'Please login to confirm your order.',
                    confirmButtonColor: '#1B3C53',
                });
                return;
            }

            // 2. Post to API Route (updated endpoint URL)
            const response = await fetch('/api/checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    packageId,
                    title: packageTitle,
                    price: packagePrice,
                    image: packageImage,
                    userId: sessionData.user.id,
                    userPhone: emergencyPhone,
                    userEmail: sessionData.user.email,
                    resourceLink: resourceLink,
                }),
            });

            // Handle non-JSON or HTML 404/500 responses gracefully
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('API route not found or returned invalid response.');
            }

            const data = await response.json();

            // 3. Redirect to Stripe Checkout
            if (data.url) {
                window.location.href = data.url;
            } else {
                setSubmitting(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failed',
                    text: data.error || 'Unable to initialize payment session.',
                    confirmButtonColor: '#1B3C53',
                });
            }
        } catch (error) {
            console.error('Order process error:', error);
            setSubmitting(false);
            Swal.fire({
                icon: 'error',
                title: 'Checkout Error',
                text: error.message || 'Something went wrong while connecting to the server.',
                confirmButtonColor: '#1B3C53',
            });
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="group w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] hover:bg-position-[100%_center] transition-all duration-500 cursor-pointer"
            >
                Order This Package
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-[#14181F]/70 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    <div className="relative w-full max-w-md bg-[#FAF8F4] rounded-[28px] p-8 sm:p-10 shadow-2xl">
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            disabled={submitting}
                            className="absolute top-6 right-6 text-[#6B6459] hover:text-[#14181F] transition-colors disabled:opacity-50 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E6E63] mb-3">
                            Confirm your order
                        </p>
                        <h3 className="text-2xl font-semibold text-[#14181F] leading-snug mb-1.5 pr-6">
                            {packageTitle}
                        </h3>
                        <p className="text-sm text-[#6B6459] mb-8">
                            Two details before we start the work.
                        </p>

                        <form onSubmit={handleConfirm}>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#14181F] mb-2">
                                        Emergency phone number
                                    </label>
                                    <div className="flex items-center gap-2.5 border-b border-[#D8D4C8] focus-within:border-[#0E6E63] transition-colors">
                                        <Phone className="w-4 h-4 text-[#9A9488] shrink-0" />
                                        <input
                                            ref={phoneRef}
                                            type="tel"
                                            required
                                            disabled={submitting}
                                            placeholder="+1 555 000 1234"
                                            className="w-full py-2.5 bg-transparent text-sm text-[#14181F] placeholder:text-[#A8A296] outline-none disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wide text-[#14181F] mb-2">
                                        Resource drive link
                                    </label>
                                    <div className="flex items-center gap-2.5 border-b border-[#D8D4C8] focus-within:border-[#0E6E63] transition-colors">
                                        <LinkIcon className="w-4 h-4 text-[#9A9488] shrink-0" />
                                        <input
                                            ref={linkRef}
                                            type="url"
                                            required
                                            disabled={submitting}
                                            placeholder="https://drive.google.com/..."
                                            className="w-full py-2.5 bg-transparent text-sm text-[#14181F] placeholder:text-[#A8A296] outline-none disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full mt-9 py-3.5 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-full hover:bg-position-[100%_center] transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                            >
                                {submitting ? 'Placing order…' : 'Confirm Order'}
                            </button>
                        </form>

                        <p className="text-center text-[11px] text-[#9A9488] mt-4">
                            We'll only use these to coordinate your delivery.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}