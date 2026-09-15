"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User, Image as ImageIcon, ArrowRight, UsersRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { authClient } from "@/lib/auth-client";

function Register() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const getRedirectUrl = () => {
        const redirect =
            searchParams.get("redirect") ||
            searchParams.get("callbackUrl");

        return redirect || "/";
    };

    const handleRegister = async (userData) => {
        console.log("Register Form Data:", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.imageUrl,
        });

        console.log(data, error);

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message || "Something went wrong during registration. Please try again.",
            });

            reset();
        } else {
            router.push(getRedirectUrl());
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: `${window.location.origin}${getRedirectUrl()}`,
        });
    };

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative">

            {/* Home Button */}
            <Link
                href="/"
                className="absolute top-2 left-6 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full shadow-xs text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-sm font-medium"
            >
                <FaHome />
                <span>Go Home</span>
            </Link>

            <div className="max-w-md w-full space-y-6 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-xl relative z-10">

                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black font-heading tracking-tight text-slate-800 dark:text-slate-100">
                        Create Your{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Account
                        </span>
                    </h2>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Join M Traders and start exploring web solution.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="mt-4 space-y-4"
                >
                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Full Name
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                <User size={18} />
                            </span>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                className={`w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                ${errors.name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"}`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs text-red-500 font-medium pl-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                <Mail size={18} />
                            </span>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                                })}
                                className={`w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                ${errors.email
                                        ? "border-red-500 focus:ring-red-500/20"
                                        : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"
                                    }
                                `}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-red-500 pl-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                <Lock size={18} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Minimum 6 characters required" },
                                    validate: {
                                        hasUpper: (value) =>
                                            /[A-Z]/.test(value) ||
                                            "Must contain at least one uppercase letter",
                                        hasLower: (value) =>
                                            /[a-z]/.test(value) ||
                                            "Must contain at least one lowercase letter"
                                    }
                                })}
                                className={`w-full pl-11 pr-12 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                ${errors.password ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-slate-600 hover:text-cyan-600 dark:hover:text-cyan-400"
                            >
                                {showPassword ? (<EyeOff size={18} />) : (<Eye size={18} />)}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-xs text-red-500 pl-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Avatar */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            Avatar Image URL
                            <span className="text-[10px] ml-1 font-normal normal-case tracking-normal">
                                (Optional)
                            </span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                <ImageIcon size={18} />
                            </span>
                            <input
                                type="url"
                                placeholder="https://example.com/avatar.png"
                                {...register("imageUrl")}
                                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-slate-800 dark:text-slate-100"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 font-bold py-3 rounded-xl transition-all duration-200 shadow-xs group text-sm cursor-pointer active:scale-95"
                    >
                        Register Account <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
                    <span className="flex-shrink mx-4 text-xs text-slate-400 dark:text-slate-600 uppercase tracking-wider font-bold">
                        Or connect with
                    </span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
                </div>

                {/* Google */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium py-3 rounded-xl transition-all text-sm cursor-pointer shadow-xs"
                >
                    <FcGoogle size={20} /> Continue with Google
                </button>

                {/* Sign In */}
                <div className="text-center pt-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Register;