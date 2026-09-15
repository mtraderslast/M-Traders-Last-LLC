'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchMyOrders, fetchOrderDetails } from '@/lib/action/order';
import CancelOrderButton from './CancelOrderButton';

export default function MyOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Active Tab State: 'active' or 'completed'
    const [activeTab, setActiveTab] = useState('active');

    // Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        const getMyOrders = async () => {
            try {
                setLoading(true);
                const res = await fetchMyOrders();
                setOrders(res?.data || res || []);
            } catch (err) {
                setError('Failed to load orders. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        getMyOrders();
    }, []);

    const handleViewOrderDetails = async (orderId) => {
        setIsModalOpen(true);
        setModalLoading(true);
        try {
            const res = await fetchOrderDetails(orderId);
            setSelectedOrder(res?.data || res);
        } catch (err) {
            console.error('Error fetching order details:', err);
        } finally {
            setModalLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleOrderCancelledSuccess = (cancelledOrderId) => {
        setOrders((prevOrders) =>
            prevOrders.map((o) =>
                o._id === cancelledOrderId
                    ? { ...o, status: 'cancelled', paymentStatus: 'refunded' }
                    : o
            )
        );
        if (selectedOrder && selectedOrder._id === cancelledOrderId) {
            setSelectedOrder((prev) => ({
                ...prev,
                status: 'cancelled',
                paymentStatus: 'refunded'
            }));
        }
    };

    // Helper for Status Badge Styling using your color system
    const getStatusBadge = (status) => {
        const normalizedStatus = status?.toLowerCase();
        switch (normalizedStatus) {
            case 'completed':
                return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
            case 'in_progress':
            case 'processing':
            case 'confirmed':
                return 'bg-[#06B6D4]/10 text-[#06B6D4] dark:text-[#22D3EE] border-[#06B6D4]/20';
            case 'contacted':
            case 'pending':
                return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            case 'cancelled':
                return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
            default:
                return 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-[#94A3B8] border-slate-200 dark:border-slate-700';
        }
    };

    // Filter orders based on selected tab
    const filteredOrders = orders.filter((order) => {
        const isCompleted = order.status?.toLowerCase() === 'completed';
        return activeTab === 'completed' ? isCompleted : !isCompleted;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#020617] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#06B6D4]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[60vh] bg-[#FFFFFF] dark:bg-[#020617] flex items-center justify-center text-rose-500 font-medium">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] transition-colors duration-200">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                        My Orders
                    </h1>
                    <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-1">
                        Manage and track all your active and past orders.
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex space-x-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === 'active'
                            ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800/60 text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 dark:hover:bg-slate-800'
                            }`}
                    >
                        Active Orders ({orders.filter((o) => o.status?.toLowerCase() !== 'completed').length})
                    </button>

                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === 'completed'
                            ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white shadow-md'
                            : 'bg-slate-100 dark:bg-slate-800/60 text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 dark:hover:bg-slate-800'
                            }`}
                    >
                        Completed Orders ({orders.filter((o) => o.status?.toLowerCase() === 'completed').length})
                    </button>
                </div>

                {/* Orders Table Container */}
                {filteredOrders.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-[#64748B] dark:text-[#94A3B8] text-base">
                            No {activeTab} orders found.
                        </p>
                    </div>
                ) : (
                    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-left text-sm border-collapse min-w-[850px]">
                            {/* Table Header */}
                            <thead className="bg-slate-50 dark:bg-slate-900/80 text-[#64748B] dark:text-[#94A3B8] uppercase text-xs font-semibold tracking-wider border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Package</th>
                                    <th scope="col" className="px-6 py-4">Category</th>
                                    <th scope="col" className="px-6 py-4">Price</th>
                                    <th scope="col" className="px-6 py-4">Order Date</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[#FFFFFF] dark:bg-[#020617]">
                                {filteredOrders.map((order) => (
                                    <tr
                                        key={order._id}
                                        className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors"
                                    >
                                        {/* Package Title & Image */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={order.image || '/placeholder.jpg'}
                                                    alt={order.title}
                                                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-slate-200 dark:border-slate-800"
                                                />
                                                <span className="font-semibold text-[#0F172A] dark:text-[#FFFFFF] truncate max-w-[220px]">
                                                    {order.title}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="px-6 py-4 whitespace-nowrap text-[#64748B] dark:text-[#94A3B8]">
                                            {order.category}
                                        </td>

                                        {/* Price */}
                                        <td className="px-6 py-4 whitespace-nowrap font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                                            ${order.price}
                                        </td>

                                        {/* Date */}
                                        <td className="px-6 py-4 whitespace-nowrap text-[#64748B] dark:text-[#94A3B8]">
                                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </td>

                                        {/* Status Badge */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize border ${getStatusBadge(
                                                    order.status
                                                )}`}
                                            >
                                                {order.status?.replace('_', ' ')}
                                            </span>
                                        </td>

                                        {/* Action Buttons */}
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex items-center justify-center space-x-2">
                                                <button
                                                    onClick={() => handleViewOrderDetails(order._id)}
                                                    className="px-3.5 py-1.5 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] hover:opacity-90 text-white font-medium text-xs rounded-lg transition-all shadow-sm"
                                                >
                                                    View Details
                                                </button>

                                                {/* Cancel Button */}
                                                {order.status !== 'cancelled' && order.status !== 'completed' && (
                                                    <CancelOrderButton
                                                        order={order}
                                                        onOrderCancelled={handleOrderCancelledSuccess}
                                                    />
                                                )}

                                                {/* order.packageId এখন একটি অবজেক্ট, তাই order.packageId._id ব্যবহার করা হলো */}
                                                <Link
                                                    href={`/package/${order.packageId?._id || order.packageId}`}
                                                    className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1E293B] dark:text-[#F8FAFC] font-medium text-xs rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
                                                >
                                                    View Package
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* ORDER DETAILS MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
                    <div className="bg-[#FFFFFF] dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative text-[#1E293B] dark:text-[#F8FAFC]">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#FFFFFF] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#FFFFFF] mb-5 border-b border-slate-200 dark:border-slate-800 pb-3">
                            Order Specification
                        </h2>

                        {modalLoading ? (
                            <div className="py-12 flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#06B6D4]"></div>
                            </div>
                        ) : selectedOrder ? (
                            <div className="space-y-5">
                                {/* Package Overview */}
                                <div className="flex gap-4 items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <img
                                        src={selectedOrder.image}
                                        alt={selectedOrder.title}
                                        className="w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-800"
                                    />
                                    <div>
                                        <span className="text-xs font-semibold text-[#06B6D4] dark:text-[#22D3EE] uppercase tracking-wider">
                                            {selectedOrder.category}
                                        </span>
                                        <h3 className="font-bold text-[#0F172A] dark:text-[#FFFFFF] text-base mt-0.5">
                                            {selectedOrder.title}
                                        </h3>
                                        <p className="text-[#2563EB] dark:text-[#06B6D4] font-bold text-lg mt-1">
                                            ${selectedOrder.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Status & Payment Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] uppercase font-medium">Order Status</p>
                                        <span
                                            className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold border capitalize ${getStatusBadge(
                                                selectedOrder.status
                                            )}`}
                                        >
                                            {selectedOrder.status?.replace('_', ' ')}
                                        </span>
                                    </div>
                                    <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] uppercase font-medium">Payment Status</p>
                                        <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold border capitalize ${selectedOrder.paymentStatus === 'paid' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-[#94A3B8] border-slate-200 dark:border-slate-700'}`}>
                                            {selectedOrder.paymentStatus}
                                        </span>
                                    </div>
                                </div>

                                {/* Delivery Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                                    <div>
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Delivery Time</p>
                                        <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF] mt-0.5">
                                            {selectedOrder.deliveryTime} Days
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Estimated Delivery Date</p>
                                        <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF] mt-0.5">
                                            {new Date(selectedOrder.deliveryDate).toLocaleString('en-US', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short',
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* NEW: Package Features Section */}
                                {selectedOrder.packageId?.features && selectedOrder.packageId.features.length > 0 && (
                                    <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                        <h4 className="text-xs uppercase font-bold text-[#64748B] dark:text-[#94A3B8] tracking-wider mb-3">
                                            Included Features
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {selectedOrder.packageId.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-[#0F172A] dark:text-[#F8FAFC]">
                                                    <svg className="w-4 h-4 mr-2 mt-0.5 text-[#06B6D4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Customer Information */}
                                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2">
                                    <h4 className="text-xs uppercase font-bold text-[#64748B] dark:text-[#94A3B8] tracking-wider">
                                        Customer Information
                                    </h4>
                                    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                                        <div>
                                            <span className="text-[#64748B] dark:text-[#94A3B8]">Name: </span>
                                            <span className="font-semibold text-[#0F172A] dark:text-[#FFFFFF]">
                                                {selectedOrder.userName}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#64748B] dark:text-[#94A3B8]">Email: </span>
                                            <span className="font-semibold text-[#0F172A] dark:text-[#FFFFFF]">
                                                {selectedOrder.userEmail}
                                            </span>
                                        </div>
                                        {/* userPhone ডাটাবেজ থেকে আসছে না, তাই রিমুভ করা হলো */}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-rose-500 py-6">Unable to load details.</p>
                        )}

                        {/* Modal Footer */}
                        <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center justify-between">
                            <div>
                                {selectedOrder && selectedOrder.status !== 'cancelled' && selectedOrder.status !== 'completed' && (
                                    <CancelOrderButton
                                        order={selectedOrder}
                                        onOrderCancelled={handleOrderCancelledSuccess}
                                    />
                                )}
                            </div>
                            <button
                                onClick={closeModal}
                                className="px-5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1E293B] dark:text-[#F8FAFC] font-semibold rounded-lg text-sm transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}