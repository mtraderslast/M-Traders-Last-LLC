"use client";

import { useCallback, useEffect, useState } from "react";

const backendUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000").replace(/\/$/, "");

const toState = (paymentStatus) => {
    if (paymentStatus === "paid") return "paid";
    if (paymentStatus === "failed") return "failed";
    return "pending";
};

/**
 * ইভেন্টভিত্তিক পেমেন্ট স্ট্যাটাস (কোনো পোলিং/setTimeout নেই):
 *  1. পেজ খুললে সার্ভারের সাথে SSE সংযোগ খোলে; সার্ভার প্রথমেই বর্তমান স্ট্যাটাস পাঠায় (গেটওয়ে থেকেও যাচাই করে)।
 *  2. webhook এলে সার্ভার নিজে থেকে নতুন স্ট্যাটাস পুশ করে।
 *  3. ট্যাবে ফিরে এলে (focus) আবার একবার যাচাই করে।
 *
 * state: "idle" (orderId নেই) | "checking" | "pending" | "paid" | "failed" | "unknown"
 */
export default function usePaymentStatus(orderId) {
    const [state, setState] = useState(orderId ? "checking" : "idle");
    const [order, setOrder] = useState(null);

    const apply = useCallback((data) => {
        if (!data) return;
        setOrder(data);
        setState(toState(data.paymentStatus));
    }, []);

    const refresh = useCallback(async () => {
        if (!orderId) return;
        try {
            const res = await fetch(
                `${backendUrl}/api/order/payment-status/${encodeURIComponent(orderId)}`,
                { cache: "no-store" }
            );
            if (res.status === 404) {
                setState("unknown");
                return;
            }
            const json = await res.json();
            apply(json?.data);
        } catch (err) {
            console.error("Payment status check failed:", err);
        }
    }, [orderId, apply]);

    useEffect(() => {
        if (!orderId) return;

        // সংযোগ খুললেই সার্ভার প্রথম স্ট্যাটাস (গেটওয়ে যাচাই সহ) পুশ করে, তাই আলাদা প্রাথমিক fetch লাগে না
        const source = new EventSource(
            `${backendUrl}/api/order/payment-events/${encodeURIComponent(orderId)}`
        );

        source.addEventListener("status", (event) => {
            try {
                const data = JSON.parse(event.data);
                apply(data);
                // চূড়ান্ত ফলাফল পেলে সংযোগ বন্ধ (নইলে ব্রাউজার আবার সংযোগ খুলত)
                if (data.paymentStatus !== "pending") source.close();
            } catch (err) {
                console.error("Invalid payment event:", err);
            }
        });

        // SSE সংযোগ ব্যর্থ হলে (যেমন সার্ভার রিস্টার্ট) একবার সরাসরি স্ট্যাটাস আনা হয়; ব্রাউজার নিজেই সংযোগ পুনঃস্থাপন করে
        source.onerror = () => {
            refresh();
        };

        window.addEventListener("focus", refresh);

        return () => {
            source.close();
            window.removeEventListener("focus", refresh);
        };
    }, [orderId, refresh, apply]);

    return { state, order, refresh };
}
