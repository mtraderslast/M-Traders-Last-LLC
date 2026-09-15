'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import TagInput from './TagInput';
import { fetchPackageDetails, updatePackage } from '@/lib/action/service-package';

const SERVICE_CATEGORIES = [
    "Web Development",
    "Search Engine Optimization",
    "Software Development",
    "Business Automation",
    "IT Infrastructure Development",
    "ERP Solution",
    "Mobile App Development",
    "E-commerce Solution",
    "Cloud Service",
    "UI/UX & Graphic Design",
    "IT Consulting"
];

const EditPackagePage = () => {
    const { id } = useParams();
    const router = useRouter();

    const [fetching, setFetching] = useState(true);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            serviceCategory: '',
            status: 'active', // Default value
            image: [],
            shortDescription: '',
            description: '',
            price: '',
            deliveryTime: '',
            technologies: [],
            features: [],
            whoIsThisFor: [],
            addOns: [],
            requirements: []
        }
    });

    // 1. Fetch package details
    useEffect(() => {
        const loadPackageData = async () => {
            try {
                setFetching(true);
                const res = await fetchPackageDetails(id);
                const pkg = res?.data || res;

                if (pkg) {
                    reset({
                        title: pkg.title || '',
                        serviceCategory: pkg.serviceCategory || '',
                        status: pkg.status || 'active', // Populating status from DB
                        image: Array.isArray(pkg.image) ? pkg.image : (pkg.image ? [pkg.image] : []),
                        shortDescription: pkg.shortDescription || '',
                        description: pkg.description || '',
                        price: pkg.price !== undefined ? String(pkg.price) : '',
                        deliveryTime: pkg.deliveryTime || '',
                        technologies: pkg.technologies || [],
                        features: pkg.features || [],
                        whoIsThisFor: pkg.whoIsThisFor || [],
                        addOns: pkg.addOns || [],
                        requirements: pkg.requirements || []
                    });
                } else {
                    throw new Error("Package data not found.");
                }
            } catch (error) {
                console.error("Failed to fetch package:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to load package details.',
                    confirmColor: '#0891b2'
                });
            } finally {
                setFetching(false);
            }
        };

        if (id) {
            loadPackageData();
        }
    }, [id, reset]);

    // 2. Handle Form Update
    const onSubmit = async (data) => {
        const formattedData = {
            ...data,
            price: Number(data.price),
            status: data.status || 'active'
        };

        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to save these changes?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#06B6D4',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Cancel',
            background: document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff",
            color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                try {
                    const res = await updatePackage(id, formattedData);

                    if (res?.success || res?.status === 200 || res?.data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Updated!',
                            text: 'Package updated successfully.',
                            timer: 2000,
                            showConfirmButton: false,
                            background: document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff",
                            color: document.documentElement.classList.contains("dark") ? "#f8fafc" : "#0f172a",
                        });
                        router.push('/dashboard/admin/manage-packages');
                    } else {
                        throw new Error(res?.message || 'Failed to update package.');
                    }
                } catch (error) {
                    console.error("Update error:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed',
                        text: error.message || 'Something went wrong while updating.',
                        confirmColor: '#0891b2'
                    });
                } finally {
                    setLoading(false);
                }
            }
        });
    };

    if (fetching) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] rounded-2xl bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800">
                <Loader2 className="h-8 w-8 animate-spin text-[#06B6D4]" />
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Loading package details...</p>
            </div>
        );
    }

    return (
        <div className="max-w-8xl mx-auto p-6 md:p-8 rounded-2xl bg-white dark:bg-[#020617] border border-slate-300 dark:border-slate-800 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white">
                        Edit Package
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Update the information for this service package.
                    </p>
                </div>
                <Link
                    href="/dashboard/admin/manage-packages"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Packages
                </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Package Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        placeholder="e.g. MERN Stack Web App"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
                </div>

                {/* Category, Price & Status */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                            Service Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register('serviceCategory', { required: 'Select a category' })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                        >
                            <option value="">Select Category</option>
                            {SERVICE_CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        {errors.serviceCategory && <span className="text-xs text-red-500">{errors.serviceCategory.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                            Price ($) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            min="0"
                            {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price cannot be negative' } })}
                            placeholder="499"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                        />
                        {errors.price && <span className="text-xs text-red-500">{errors.price.message}</span>}
                    </div>

                    {/* New Status Select Field */}
                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                            Package Status <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register('status', { required: 'Select status' })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                        >
                            <option value="active">Active (Visible)</option>
                            <option value="draft">Draft (Hidden)</option>
                        </select>
                        {errors.status && <span className="text-xs text-red-500">{errors.status.message}</span>}
                    </div>
                </div>

                {/* Delivery Time */}
                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Delivery Time <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('deliveryTime', { required: 'Delivery time is required' })}
                        placeholder="e.g. 7 Days"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.deliveryTime && <span className="text-xs text-red-500">{errors.deliveryTime.message}</span>}
                </div>

                {/* Short Description */}
                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Short Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        maxLength={200}
                        rows={2}
                        {...register('shortDescription', {
                            required: 'Short description is required',
                            maxLength: { value: 200, message: 'Max length 200 characters' }
                        })}
                        placeholder="Brief overview of the package..."
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.shortDescription && <span className="text-xs text-red-500">{errors.shortDescription.message}</span>}
                </div>

                {/* Full Description */}
                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Full Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        rows={4}
                        {...register('description', { required: 'Full description is required' })}
                        placeholder="Detailed description..."
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.description && <span className="text-xs text-red-500">{errors.description.message}</span>}
                </div>

                {/* Tag Input Arrays */}
                <TagInput
                    name="image"
                    control={control}
                    label="Image URLs"
                    placeholder="Paste image URL and press Enter"
                    rules={{
                        validate: (arr) =>
                            (Array.isArray(arr) && arr.length > 0) ||
                            'At least one image URL is required',
                    }}
                    error={errors.image}
                />

                <TagInput
                    name="technologies"
                    control={control}
                    label="Technologies"
                    placeholder="e.g. React, Node.js, MongoDB"
                    rules={{
                        validate: (arr) =>
                            (Array.isArray(arr) && arr.length > 0) ||
                            'At least one technology is required',
                    }}
                    error={errors.technologies}
                />

                <TagInput
                    name="features"
                    control={control}
                    label="Key Features"
                    placeholder="e.g. Responsive Design, SEO Friendly"
                    rules={{
                        validate: (arr) =>
                            (Array.isArray(arr) && arr.length > 0) ||
                            'At least one feature is required',
                    }}
                    error={errors.features}
                />

                <TagInput
                    name="whoIsThisFor"
                    control={control}
                    label="Who Is This For"
                    placeholder="e.g. Startups, E-commerce Businesses"
                />

                <TagInput
                    name="addOns"
                    control={control}
                    label="Add-Ons"
                    placeholder="e.g. Extra Revision, Fast Delivery"
                />

                <TagInput
                    name="requirements"
                    control={control}
                    label="Requirements"
                    placeholder="e.g. Brand Guidelines, Domain Access"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 font-semibold text-white rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#2563EB] hover:opacity-95 shadow-md hover:shadow-lg transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Updating Package...
                        </>
                    ) : (
                        'Update Package'
                    )}
                </button>

            </form>
        </div>
    );
};

export default EditPackagePage;