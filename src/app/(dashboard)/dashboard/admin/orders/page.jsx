'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { fetchAllOrders, fetchOrderDetails, updateOrderStatus } from '@/lib/action/order';

const getCleanId = (id) => {
    if (!id) return '';
    if (typeof id === 'string') return id;
    if (id._id) return id._id; // Populated Object handling
    if (id.$oid) return id.$oid;
    return String(id);
};

// Status Badge Styling Helper
const getStatusBadge = (status) => {
    const normalized = status?.toLowerCase();
    switch (normalized) {
        case 'completed':
            return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
        case 'in_progress':
        case 'processing': // Added processing
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

// Changed 'in_progress' to 'processing' to match backend
const STATUS_OPTIONS = [
    'pending',
    'processing',
    'completed',
    'cancelled',
];

export default function ManageOrdersPage() {
    const [orders, setOrders] = useState([]);

    // Combined Loading & Error State
    const [pageStatus, setPageStatus] = useState({
        loading: true,
        error: null,
        modalLoading: false,
        updatingOrderId: null,
    });

    // Filter Tab State: 'active' or 'completed'
    const [activeTab, setActiveTab] = useState('active');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Modal State 
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Fetch all orders
    const loadOrders = async () => {
        try {
            setPageStatus((prev) => ({ ...prev, loading: true, error: null }));
            const res = await fetchAllOrders();
            setOrders(res?.data || res || []);
        } catch (err) {
            setPageStatus((prev) => ({ ...prev, error: 'Failed to fetch orders. Please refresh.' }));
        } finally {
            setPageStatus((prev) => ({ ...prev, loading: false }));
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    // Fetch single order details for modal
    const handleViewOrderDetails = async (orderId) => {
        setPageStatus((prev) => ({ ...prev, modalLoading: true }));
        setSelectedOrder({});
        try {
            const res = await fetchOrderDetails(orderId);
            setSelectedOrder(res?.data || res);
        } catch (err) {
            console.error('Error fetching order details:', err);
            setSelectedOrder(null);
        } finally {
            setPageStatus((prev) => ({ ...prev, modalLoading: false }));
        }
    };

    // Handle status update with SweetAlert2 confirmation
    const handleStatusChange = async (rawOrderId, newStatus) => {
        const cleanId = getCleanId(rawOrderId);
        const currentOrder = orders.find(o => getCleanId(o._id) === cleanId);
        const oldStatus = currentOrder?.status || 'Unknown';

        // SweetAlert2 Confirmation
        const result = await Swal.fire({
            title: 'Are you sure?',
            html: `<div style="text-align: left;">
                <p><strong>Order:</strong> ${currentOrder?.title}</p>
                <p><strong>Current Status:</strong> <span class="capitalize">${oldStatus.replace('_', ' ')}</span></p>
                <p><strong>New Status:</strong> <span class="capitalize font-bold text-cyan-600">${newStatus.replace('_', ' ')}</span></p>
            </div>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#06B6D4',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, change it',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
        });

        if (!result.isConfirmed) {
            return;
        }

        setPageStatus((prev) => ({ ...prev, updatingOrderId: cleanId }));
        try {
            await updateOrderStatus(cleanId, { status: newStatus });

            // Update local orders state
            setOrders((prev) =>
                prev.map((order) =>
                    getCleanId(order._id) === cleanId ? { ...order, status: newStatus } : order
                )
            );

            // Update selected order inside modal if active
            if (selectedOrder && getCleanId(selectedOrder._id) === cleanId) {
                setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
            }

            // Success notification
            await Swal.fire({
                title: 'Success!',
                text: 'Order status has been updated.',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
            });
        } catch (err) {
            console.error('Failed to update status:', err);
            // Error notification
            await Swal.fire({
                title: 'Error!',
                text: 'Failed to update order status.',
                icon: 'error',
            });
        } finally {
            setPageStatus((prev) => ({ ...prev, updatingOrderId: null }));
        }
    };

    const closeModal = () => {
        setSelectedOrder(null);
    };

    // Filter Logic
    const filteredOrders = orders.filter((order) => {
        const isCompleted = order.status?.toLowerCase() === 'completed';
        return activeTab === 'completed' ? isCompleted : !isCompleted;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedOrders = filteredOrders.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    if (pageStatus.loading) {
        return (
            <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#020617] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#06B6D4]"></div>
            </div>
        );
    }

    if (pageStatus.error) {
        return (
            <div className="min-h-[60vh] bg-[#FFFFFF] dark:bg-[#020617] flex items-center justify-center text-rose-500 font-medium">
                {pageStatus.error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] transition-colors duration-200">
            <div className="mx-auto">
                {/* Header and Action Tabs */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 border-b border-slate-200 dark:border-slate-800 pb-5">
                    <div>
                        <h1 className="text-3xl font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                            Manage All Orders
                        </h1>
                        <p className="text-[#64748B] dark:text-[#94A3B8] text-sm mt-1">
                            Admin panel to review, update status, and manage client requests.
                        </p>
                    </div>

                    {/* Action Tabs */}
                    <div className="flex items-center space-x-3 self-start md:self-auto">
                        <button
                            onClick={() => handleTabChange('active')}
                            className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${activeTab === 'active'
                                ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white shadow-md'
                                : 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            Active Orders ({orders.filter((o) => o.status?.toLowerCase() !== 'completed').length})
                        </button>

                        <button
                            onClick={() => handleTabChange('completed')}
                            className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${activeTab === 'completed'
                                ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white shadow-md'
                                : 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            Completed ({orders.filter((o) => o.status?.toLowerCase() === 'completed').length})
                        </button>
                    </div>
                </div>

                {/* Orders Table Container */}
                {filteredOrders.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                        <p className="text-[#64748B] dark:text-[#94A3B8] text-base">
                            No {activeTab} orders found.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <table className="w-full text-left text-sm border-collapse min-w-[950px]">
                                <thead className="bg-slate-50 dark:bg-slate-900/80 text-[#64748B] dark:text-[#94A3B8] uppercase text-xs font-semibold tracking-wider border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th scope="col" className="px-5 py-4">Title & Category</th>
                                        <th scope="col" className="px-5 py-4">Customer Details</th>
                                        <th scope="col" className="px-5 py-4">Price</th>
                                        <th scope="col" className="px-5 py-4">Order Date</th>
                                        <th scope="col" className="px-5 py-4">Status & Update</th>
                                        <th scope="col" className="px-5 py-4 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[#FFFFFF] dark:bg-[#020617]">
                                    {paginatedOrders.map((order, idx) => {
                                        const orderIdStr = getCleanId(order._id);
                                        const packageIdStr = getCleanId(order.packageId);

                                        return (
                                            <tr
                                                key={orderIdStr || idx}
                                                className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors"
                                            >
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="font-semibold text-[#0F172A] dark:text-[#FFFFFF] truncate max-w-[220px]">
                                                        {order.title}
                                                    </div>
                                                    <div className="text-xs text-[#06B6D4] dark:text-[#22D3EE] font-medium">
                                                        {order.category}
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="text-xs font-semibold text-[#0F172A] dark:text-[#FFFFFF]">
                                                        {order.userName}
                                                    </div>
                                                    <div className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                                                        {order.userEmail}
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                                                    ${order.price}
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap text-[#64748B] dark:text-[#94A3B8] text-xs">
                                                    {order.createdAt
                                                        ? new Date(order.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                        })
                                                        : 'N/A'}
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <div className="flex items-center space-x-2">
                                                        <select
                                                            disabled={pageStatus.updatingOrderId === orderIdStr}
                                                            value={order.status}
                                                            onChange={(e) =>
                                                                handleStatusChange(order._id, e.target.value)
                                                            }
                                                            className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border focus:outline-none transition-colors cursor-pointer capitalize ${getStatusBadge(
                                                                order.status
                                                            )}`}
                                                        >
                                                            {STATUS_OPTIONS.map((status) => (
                                                                <option
                                                                    key={status}
                                                                    value={status}
                                                                    className="bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC]"
                                                                >
                                                                    {status.replace('_', ' ')}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 whitespace-nowrap text-center">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <button
                                                            onClick={() => handleViewOrderDetails(order._id)}
                                                            className="px-3 py-1.5 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] hover:opacity-90 text-white font-medium text-xs rounded-lg transition-all shadow-sm"
                                                        >
                                                            View Details
                                                        </button>

                                                        <Link
                                                            href={`/package/${packageIdStr}`}
                                                            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1E293B] dark:text-[#F8FAFC] font-medium text-xs rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
                                                        >
                                                            View Package
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-between mt-6 px-2">
                                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                                    Showing <span className="font-bold">{startIndex + 1}</span> to{' '}
                                    <span className="font-bold">
                                        {Math.min(startIndex + itemsPerPage, filteredOrders.length)}
                                    </span>{' '}
                                    of <span className="font-bold">{filteredOrders.length}</span> orders
                                </p>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Previous
                                    </button>

                                    <div className="flex items-center space-x-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${currentPage === page
                                                    ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white'
                                                    : 'bg-slate-100 dark:bg-slate-800 text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 dark:hover:bg-slate-700'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* ORDER DETAILS MODAL */}
            {selectedOrder !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
                    <div className="bg-[#FFFFFF] dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative text-[#1E293B] dark:text-[#F8FAFC]">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:text-[#FFFFFF] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#FFFFFF] mb-5 border-b border-slate-200 dark:border-slate-800 pb-3">
                            Full Order Details (Admin View)
                        </h2>

                        {pageStatus.modalLoading ? (
                            <div className="py-12 flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#06B6D4]"></div>
                            </div>
                        ) : selectedOrder?.title ? (
                            <div className="space-y-5">
                                {/* Header Details */}
                                <div className="flex gap-4 items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                                    {selectedOrder.image && (
                                        <img
                                            src={selectedOrder.image}
                                            alt={selectedOrder.title}
                                            className="w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-800"
                                        />
                                    )}
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

                                {/* Status Grid */}
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
                                            {selectedOrder.paymentStatus || 'Pending'}
                                        </span>
                                    </div>
                                </div>

                                {/* Delivery info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                                    <div>
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Delivery Time</p>
                                        <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF] mt-0.5">
                                            {selectedOrder.deliveryTime ? `${selectedOrder.deliveryTime} Days` : 'N/A'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Estimated Delivery Date</p>
                                        <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF] mt-0.5">
                                            {selectedOrder.deliveryDate
                                                ? new Date(selectedOrder.deliveryDate).toLocaleString('en-US', {
                                                    dateStyle: 'medium',
                                                    timeStyle: 'short',
                                                })
                                                : 'N/A'}
                                        </p>
                                    </div>
                                </div>

                                {/* Included Features List (from populated packageId) */}
                                {selectedOrder.packageId?.features && selectedOrder.packageId.features.length > 0 && (
                                    <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                        <h4 className="text-xs uppercase font-bold text-[#64748B] dark:text-[#94A3B8] tracking-wider mb-3">
                                            Package Includes
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

                                {/* Customer details */}
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
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
}