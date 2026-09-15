'use client';

import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { User, Mail, Edit2, ArrowLeft, Camera, Loader2, Save, Shield, X, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Loading from '@/app/loading';
import BackButton from './BackButton';

function MyProfile() {
    const { data: session, isPending } = authClient.useSession();
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const user = session?.user;

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: user?.name || "",
            image: user?.image || "",
            phone: user?.phone || "",
            address: user?.address || "",
        }
    });

    if (isPending) {
        return <Loading />;
    }

    const handleUpdateProfile = async (data) => {
        setIsUpdating(true);

        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
            phone: data.phone,
            address: data.address,
        });

        setIsUpdating(false);

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: error.message,
                customClass: {
                    popup: 'rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50'
                }
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Profile Updated!",
                text: "Your profile details have been updated successfully.",
                customClass: {
                    popup: 'rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50'
                }
            });
            setIsEditing(false);
        }
    };

    const handleEditProfile = () => {
        reset({
            name: user?.name || "",
            image: user?.image || "",
            phone: user?.phone || "",
            address: user?.address || "",
        });
        setIsEditing(true);
    };

    return (
        <section className="w-full bg-white dark:bg-slate-950 py-25 px-4 sm:px-6 lg:px-8">

            <div className="max-w-3xl mx-auto space-y-6">

                {/* Header */}
                <BackButton />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Profile</h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">{user?.role || "User"}</p>
                        </div>
                    </div>

                    {!isEditing && (
                        <button
                            onClick={handleEditProfile}
                            className="flex items-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold text-sm transition-all cursor-pointer"
                        >
                            <Edit2 size={16} /> Edit
                        </button>
                    )}
                </div>

                {/* Profile Card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">

                    {/* Banner */}
                    <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                    {/* Profile Content */}
                    <div className="px-6 pb-8 sm:px-8">

                        {/* Avatar & Info */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 mb-8">
                            <div className="relative">
                                <img
                                    src={user?.image || "/user.png"}
                                    alt={user?.name}
                                    className="w-32 h-32 rounded-lg border-4 border-white dark:border-slate-900 object-cover"
                                />
                                {isEditing && (
                                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                                        <Camera size={24} className="text-white" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 pb-2">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                    {user?.name}
                                </h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                    <Mail size={14} /> {user?.email}
                                </p>
                            </div>
                        </div>

                        {/* Form or Display */}
                        {isEditing ? (
                            <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-5 border-t border-slate-200 dark:border-slate-800 pt-8">

                                {/* Warning */}
                                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg flex gap-3">
                                    <div className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">⚠</div>
                                    <div className="text-sm text-amber-800 dark:text-amber-300">
                                        <p className="font-semibold mb-1">Accuracy Required</p>
                                        <p className="text-xs">Please provide accurate information. Providing false or misleading information may result in account suspension.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                                            <input
                                                {...register("name", { required: "Name is required" })}
                                                type="text"
                                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                                            <input
                                                {...register("phone", { required: "Phone number is required" })}
                                                type="text"
                                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.phone ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                                            <input
                                                {...register("address", { required: "Address is required" })}
                                                type="text"
                                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.address ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
                                                placeholder="Enter your address"
                                            />
                                        </div>
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                    </div>

                                    {/* Image URL */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Profile Image URL</label>
                                        <div className="relative">
                                            <Camera className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                                            <input
                                                {...register("image")}
                                                type="text"
                                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                placeholder="Paste image URL"
                                            />
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                                            {user?.role === 'recruiter'
                                                ? "Use a clear company logo for professional visibility"
                                                : "Use a professional headshot for better profile authenticity"}
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold text-sm disabled:opacity-50 transition-all"
                                    >
                                        {isUpdating ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4" />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold text-sm transition-all"
                                    >
                                        <X className="w-4 h-4 inline mr-1" /> Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            /* Display Mode */
                            <div className="space-y-6 border-t border-slate-200 dark:border-slate-800 pt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Name */}
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Name</p>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-cyan-600" />
                                            <span className="font-semibold text-slate-900 dark:text-white">{user?.name}</span>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Phone</p>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-cyan-600" />
                                            <span className="font-semibold text-slate-900 dark:text-white">{user?.phone || "Not added"}</span>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 md:col-span-2">
                                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Address</p>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                                            <span className="font-semibold text-slate-900 dark:text-white">{user?.address || "Not added"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Security Notice */}
                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex gap-3">
                            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-blue-900 dark:text-blue-300">
                                <p className="font-semibold mb-0.5">Security Notice</p>
                                <p className="text-xs">Your profile information is protected with industry-standard encryption and security protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProfile;