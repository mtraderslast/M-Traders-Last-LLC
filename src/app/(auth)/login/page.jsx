"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, ArrowRight, X, Send } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isForgotOpen, setIsForgotOpen] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { register: registerForgot, handleSubmit: handleForgotSubmit, formState: { errors: forgotErrors }, reset: resetForgotForm } = useForm();

    const getRedirectUrl = () => {
        const redirect =
            searchParams.get("redirect") ||
            searchParams.get("callbackUrl");

        return redirect || "/";
    };

    const onLoginSubmit = async (userData) => {
        const { data, error } =
            await authClient.signIn.email({
                email: userData.email,
                password: userData.password,
            });

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong during login. Please try again.",
            });

            reset();
        } else {
            router.push(getRedirectUrl());
        }
    };

    const onForgotSubmit = async (data) => {
        const { error } =
            await authClient.requestPasswordReset({
                email: data.forgotEmail,
                redirectTo: `${window.location.origin}/reset-password`
            });

        setIsForgotOpen(false);
        resetForgotForm();

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Failed!",
                text:
                    error.message ||
                    "Something went wrong. Please try again.",
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Email Sent!",
                text: `A password reset link has been sent to ${data.forgotEmail}. Please check your inbox.`,
                confirmButtonColor: "#0891B2",
            });
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL:
                `${window.location.origin}${getRedirectUrl()}`
        });
    };

    return (
        <section className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative">
            {/* Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full shadow-xs text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-sm font-medium"
            >
                <FaHome />
                <span>Go Home</span>
            </Link>

            {/* Card */}
            <div className="max-w-md w-full space-y-6 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-xl relative z-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black font-heading tracking-tight text-slate-800 dark:text-slate-100">
                        Welcome{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Back
                        </span>
                    </h2>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Sign in to manage your projects and track progress in real time.
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onLoginSubmit)} className="mt-4 space-y-4">
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
                                    required:
                                        "Email is required",
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            "Invalid email address"
                                    }
                                })}
                                className={`w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                ${errors.email ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"}`}
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
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsForgotOpen(true)}
                                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:opacity-80 transition-colors cursor-pointer"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                <Lock size={18} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                {...register(
                                    "password",
                                    {
                                        required:
                                            "Password is required",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 characters"
                                        }
                                    }
                                )}
                                className={`w-full pl-11 pr-12 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                ${errors.password ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-slate-600 hover:text-cyan-600 dark:hover:text-cyan-400"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-xs text-red-500 pl-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-xs group text-sm cursor-pointer"
                    >
                        Login
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-1 items-center">
                    <div className="grow border-t border-slate-200 dark:border-slate-800" />
                    <span className="shrink mx-4 text-xs text-slate-400 dark:text-slate-600 uppercase tracking-wider font-bold">
                        Or connect with
                    </span>
                    <div className="grow border-t border-slate-200 dark:border-slate-800" />
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100 font-medium py-3 rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-xs"
                >
                    <FcGoogle size={20} />
                    Continue with Google
                </button>

                {/* Register Link */}
                <div className="text-center pt-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            {/* Forgot Modal */}
            {isForgotOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 dark:bg-black/60 backdrop-blur-md">
                    <div className="bg-white dark:bg-slate-950 max-w-sm w-full p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 relative">
                        <button
                            type="button"
                            onClick={() => {
                                setIsForgotOpen(false);
                                resetForgotForm();
                            }}
                            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                        >
                            <X size={16} />
                        </button>
                        <div className="space-y-1 pr-6">
                            <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 font-heading tracking-tight">
                                Reset Your Password
                            </h3>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                Enter your registered email below and we&apos;ll send a reset link.
                            </p>
                        </div>

                        <form onSubmit={handleForgotSubmit(onForgotSubmit)} className="space-y-3">
                            <div className="space-y-1">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-600">
                                        <Mail size={16} />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="yourname@email.com"
                                        {...registerForgot(
                                            "forgotEmail",
                                            {
                                                required:
                                                    "Email is required",
                                                pattern: {
                                                    value:
                                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        "Invalid email address"
                                                }
                                            }
                                        )}
                                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border rounded-xl text-xs focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100
                                        ${forgotErrors.forgotEmail ? "border-red-500" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/20"}`}
                                    />
                                </div>
                                {forgotErrors.forgotEmail && (
                                    <p className="text-[11px] text-red-500 pl-1">
                                        {forgotErrors.forgotEmail.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold py-2.5 rounded-xl transition-all duration-200 text-xs cursor-pointer shadow-xs"
                            >
                                <Send size={12} />
                                Send Reset Link
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Login;