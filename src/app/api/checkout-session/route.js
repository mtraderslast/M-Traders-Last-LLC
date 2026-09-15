import { NextResponse } from "next/server";
import Stripe from "stripe";
import axios from "axios";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { packageId, title, price, image, userId, userName, userEmail } = body;

        // 1. Validation
        if (!packageId || !price || !title) {
            return NextResponse.json(
                { error: "Missing required package information." },
                { status: 400 }
            );
        }

        const appUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://www.mtraderslastllc.com').replace(/\/$/, '');
        const backendUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000').replace(/\/$/, '');

        const customOrderId = `ORD_${Date.now()}`;

        try {
            await axios.post(`${backendUrl}/api/order/create-pending`, {
                orderId: customOrderId,
                packageId,
                title,
                price: Number(price),
                image,
                userId: userId || null,
                userName: userName || "Customer",
                userEmail: userEmail || "",
                paymentStatus: "pending",
                status: "pending"
            });
        } catch (backendError) {
            console.error('--- Backend API Error ---', backendError.response?.data || backendError.message);
            return NextResponse.json({
                error: backendError.response?.data?.message || 'Failed to initialize pending order in database.'
            }, { status: 500 });
        }

        // 4. Create Stripe Checkout Session
        const sessionPayload = {
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: title,
                            images: image ? [image] : [],
                            description: `Package Order: ${title}`,
                        },
                        unit_amount: Math.round(Number(price) * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${appUrl}/success`,
            cancel_url: `${appUrl}/canceled`,
            metadata: {
                orderId: customOrderId,
                packageId: String(packageId),
                userId: String(userId || ""),
            },
        };

        // If user provided email, pre-fill it in Stripe
        if (userEmail) {
            sessionPayload.customer_email = userEmail;
        }

        const checkoutSession = await stripe.checkout.sessions.create(sessionPayload);

        return NextResponse.json({ url: checkoutSession.url });

    } catch (err) {
        console.error("--- Stripe Checkout Error ---:", err);
        return NextResponse.json(
            { error: err.message || "Failed to create checkout session" },
            { status: 500 }
        );
    }
}