'use client';

import { cancelOrder } from '@/lib/action/order';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function CancelOrderButton({ order, onOrderCancelled }) {
    const [loading, setLoading] = useState(false);

    const handleCancelClick = async () => {
        const currentDate = new Date();
        const deliveryDate = new Date(order.deliveryDate);

        if (currentDate <= deliveryDate) {
            Swal.fire({
                icon: 'warning',
                title: 'Cannot Cancel Yet!',
                text: `You can only cancel this order after the delivery date (${deliveryDate.toLocaleDateString('en-US', { dateStyle: 'medium' })}).`,
                confirmButtonColor: '#06B6D4'
            });
            return;
        }

        const confirmResult = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to cancel this order and claim a full refund?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EF4444',
            cancelButtonColor: '#64748B',
            confirmButtonText: 'Yes, Cancel & Refund',
            cancelButtonText: 'No, Keep Order'
        });

        if (!confirmResult.isConfirmed) return;

        try {
            setLoading(true);
            const res = await cancelOrder(order._id);

            if (res?.success || res?.status === 'success') {
                await Swal.fire({
                    icon: 'success',
                    title: 'Refund Processed!',
                    text: 'Your order has been cancelled and the payment has been refunded.',
                    confirmButtonColor: '#06B6D4'
                });

                if (onOrderCancelled) {
                    onOrderCancelled(order._id);
                }
            } else {
                throw new Error(res?.message || 'Failed to cancel order.');
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Cancellation Failed',
                text: err.message || 'Something went wrong while processing your refund.',
                confirmButtonColor: '#EF4444'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleCancelClick}
            disabled={loading}
            className="px-3.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-medium text-xs rounded-lg transition-colors border border-rose-500/20 disabled:opacity-50 flex items-center justify-center space-x-1"
        >
            {loading ? (
                <span>Processing...</span>
            ) : (
                <span>Cancel & Refund</span>
            )}
        </button>
    );
}