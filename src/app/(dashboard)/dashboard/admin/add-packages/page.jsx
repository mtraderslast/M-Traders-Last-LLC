'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import TagInput from './TagInput';
import { createPackage } from '@/lib/action/service-package';

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

const AddPackagePage = () => {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            serviceCategory: '',
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

    const onSubmit = async (data) => {
        setLoading(true);

        const formattedData = {
            ...data,
            price: Number(data.price)
        };

        try {
            await createPackage(formattedData);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Package published successfully.',
                timer: 2000,
                showConfirmButton: false
            });

            reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: error.response?.data?.message || 'Something went wrong while publishing the package.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-8xl mx-auto p-6 md:p-8 rounded-2xl bg-white dark:bg-[#020617] border border-slate-400 dark:border-slate-400">
            <h2 className="text-2xl font-bold mb-6 text-[#0F172A] dark:text-white">
                Add New Package
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Package Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        placeholder="e.g. MERN Stack Web App"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                            Service Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            {...register('serviceCategory', { required: 'Select a category' })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
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
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                        />
                        {errors.price && <span className="text-xs text-red-500">{errors.price.message}</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Delivery Time <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        {...register('deliveryTime', { required: 'Delivery time is required' })}
                        placeholder="e.g. 7 Days"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.deliveryTime && <span className="text-xs text-red-500">{errors.deliveryTime.message}</span>}
                </div>

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
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.shortDescription && <span className="text-xs text-red-500">{errors.shortDescription.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC] mb-1.5">
                        Full Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        rows={4}
                        {...register('description', { required: 'Full description is required' })}
                        placeholder="Detailed description..."
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-400 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                    />
                    {errors.description && <span className="text-xs text-red-500">{errors.description.message}</span>}
                </div>

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

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 font-semibold text-white rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#2563EB] hover:opacity-95 shadow-md hover:shadow-lg transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Publishing...' : 'Publish Package'}
                </button>
            </form>
        </div>
    );
};

export default AddPackagePage;