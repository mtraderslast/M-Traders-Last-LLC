"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import usePaymentStatus from "@/lib/usePaymentStatus";

const COPY = {
    checking: {
        label: "Verifying Payment",
        title: "Confirming your payment…",
        text: "Please wait while we confirm your payment with the gateway.",
    },
    paid: {
        label: "Payment Confirmed",
        title: "Order Onboarded.",
        text: "Thank you for partnering with us. Your payment has been successfully processed, and our technical team has initiated the project onboarding workflow.",
    },
    pending: {
        label: "Payment Processing",
        title: "Awaiting confirmation.",
        text: "Your payment is being processed by the payment provider. This page updates automatically the moment the confirmation arrives, so you can keep it open.",
    },
    failed: {
        label: "Payment Failed",
        title: "Payment not completed.",
        text: "The payment was not completed, so no charge was made for this order. You can go back and try again.",
    },
    unknown: {
        label: "Order Not Found",
        title: "We couldn't find this order.",
        text: "The order reference is missing or invalid. If you were charged, please contact support with your payment receipt.",
    },
};

function SuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const { state: rawState, order, refresh } = usePaymentStatus(orderId);

    // orderId না থাকলে "idle" -> unknown হিসেবে দেখানো হয়
    const state = rawState === "idle" ? "unknown" : rawState;
    const copy = COPY[state];
    const isPaid = state === "paid";
    const isFailed = state === "failed" || state === "unknown";
    const isWaiting = state === "checking" || state === "pending";

    return (
        <div className="min-h-screen bg-white text-[#1E293B] dark:bg-[#020617] dark:text-[#F8FAFC] flex items-center justify-center p-6 selection:bg-[#06B6D4] selection:text-white dark:selection:bg-[#22D3EE] dark:selection:text-[#020617] transition-colors duration-300">
            <div className={`max-w-2xl w-full border-l-2 pl-8 md:pl-12 py-4 space-y-8 ${isFailed ? "border-slate-300 dark:border-slate-700" : "border-[#06B6D4] dark:border-[#22D3EE]"}`}>

                {/* Status Indicator & Title */}
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <span className={`h-2 w-2 rounded-full ${isFailed ? "bg-slate-400 dark:bg-slate-500" : "bg-[#06B6D4] dark:bg-[#22D3EE] animate-pulse"}`}></span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#06B6D4] dark:text-[#22D3EE] font-mono font-semibold">
                            {copy.label}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                        {copy.title}
                    </h1>
                </div>

                {/* Main Description */}
                <p className="text-[#64748B] dark:text-[#94A3B8] text-lg leading-relaxed font-normal">
                    {copy.text}
                </p>

                {/* Key Execution Info Grid */}
                {isPaid && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-y border-slate-200 dark:border-slate-800/80">
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-mono mb-1">
                                Next Step
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B] dark:text-[#F8FAFC]">
                                Check email for brief & credentials submission link
                            </p>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-mono mb-1">
                                Delivery Timeline
                            </span>
                            <p className="text-sm font-semibold text-[#1E293B] dark:text-[#F8FAFC]">
                                Calculated as per your package specification
                            </p>
                        </div>
                    </div>
                )}

                {state === "failed" && order?.failureReason && (
                    <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">
                        Reason: {order.failureReason}
                    </p>
                )}

                {order?.orderId && (
                    <p className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
                        Order ref: {order.orderId}
                    </p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    {isWaiting && (
                        <button
                            type="button"
                            onClick={refresh}
                            className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 text-base font-medium px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer"
                        >
                            Refresh status
                        </button>
                    )}
                    <Link
                        href="/dashboard/user/orders"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500"
                    >
                        Go to Client Dashboard →
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 text-base font-medium px-8 py-3.5 rounded-lg transition-all duration-200"
                    >
                        Back to Agency Home
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={null}>
            <SuccessContent />
        </Suspense>
    );
}
