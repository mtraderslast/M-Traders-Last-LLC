'use client';

import React from 'react';
import { Mail, Phone, MessageCircle, Shield, Lock, Eye, Database, AlertCircle, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-950">
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Last updated: July 18, 2026 • M Traders Last LLC • St. Petersburg, FL 33702, USA
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="space-y-16">
                    {/* Introduction */}
                    <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
                        <div className="flex gap-3 items-start">
                            <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white mb-2">Your Privacy Matters</p>
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    At M Traders Last LLC, we are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, share, and protect your personal information.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 1. Information We Collect */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                1
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Information We Collect
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We collect personal information you voluntarily provide when you interact with our website and services:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Account Information</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Full name, email address, phone number, company name, and business information</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Payment Information</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Billing address and payment method (processed securely—we never store card numbers)</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Technical Information</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">IP address, browser type, device information, and website activity logs</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Communication Data</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Messages, inquiries, and correspondence you send us via email or contact forms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 2. How We Use Your Information */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                2
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    How We Use Your Information
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We use the information we collect for the following purposes:
                                </p>
                                <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Order Processing:</strong> To process your purchase, fulfill your order, and deliver digital products or services</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Communications:</strong> To send order confirmations, delivery details, support responses, and product access information</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Customer Support:</strong> To respond to your inquiries, provide technical support, and resolve issues</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Product Updates:</strong> To send important updates, announcements, and notifications about products or services you've purchased</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Security & Fraud Prevention:</strong> To detect, prevent, and address fraudulent transactions and security issues</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Website Improvement:</strong> To analyze usage patterns and improve our website, products, and services</span>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                    <p className="text-sm text-blue-900 dark:text-blue-100">
                                        <strong>Important:</strong> We DO NOT sell, rent, trade, or share your personal information with third parties for marketing purposes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 3. Data Storage & Security */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                3
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Data Storage & Security
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We implement comprehensive security measures to protect your personal information:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Encryption</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">All data is encrypted in transit using SSL/TLS protocols. Data at rest is stored with AES-256 encryption on secure, redundant servers.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Secure Servers</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">We use industry-leading hosting providers with multiple layers of security, firewalls, and intrusion detection systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Eye className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Access Control</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Access to your personal data is restricted to authorized staff only, all bound by confidentiality agreements.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Payment Processing</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Payment processing is handled exclusively by PCI-DSS Level 1 compliant payment processors. We never store, process, or have access to your credit card numbers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 4. Data Sharing */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                4
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Data Sharing
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your data in the following limited circumstances:
                                </p>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Payment Processors:</strong> Your billing information is shared with PCI-compliant payment processors to process your transaction.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our website and services.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Legal Compliance:</strong> We may disclose your information as required by law, court order, or government request.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Business Protection:</strong> To protect the rights, privacy, safety, or property of M Traders Last LLC, our users, and the public.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 5. Cookies & Tracking Technologies */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                5
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Cookies & Tracking Technologies
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We use cookies and similar tracking technologies to enhance your browsing experience:
                                </p>
                                <div className="space-y-4 mb-4">
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Essential Cookies</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Required to maintain your session, provide core website functionality, and process transactions. These cannot be disabled.</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Analytics Cookies</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">We use anonymized analytics to understand how visitors use our site, measure performance, and improve user experience. No personal identification is stored.</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Preference Cookies</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">These remember your preferences, such as language and theme settings, to personalize your experience.</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    You can disable cookies in your browser settings at any time. However, disabling essential cookies may prevent you from using certain features of our website or services.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 6. Third-Party Integrations */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                6
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Third-Party Integrations
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Our website and services may integrate with third-party platforms and services, including:
                                </p>
                                <ul className="space-y-2 mb-4 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Payment processors (Stripe, PayPal, etc.)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Email delivery services (SendGrid, AWS SES)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Analytics platforms (Google Analytics, Hotjar)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Customer support tools (Zendesk, Intercom)</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    These third parties have their own privacy policies and data handling practices. We recommend reviewing their privacy policies as they govern how they use and protect your data.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 7. Your Rights & Choices */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                7
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Your Rights & Choices
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Right to Access:</strong> Request a copy of all personal data we hold about you.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Right to Correction:</strong> Request correction or update of inaccurate or incomplete data.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Right to Deletion:</strong> Request deletion of your data, subject to legal retention requirements.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Right to Opt-Out:</strong> Unsubscribe from marketing emails by clicking the unsubscribe link or contacting us directly.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
                                        <span><strong className="text-slate-900 dark:text-white">Right to Data Portability:</strong> Request your data in a portable format that you can transfer to another service provider.</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                                    To exercise any of these rights, contact us at <a href="mailto:hello@mtraderslastllc.com" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">hello@mtraderslastllc.com</a> with your request. We will respond within 30 days.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 8. Data Retention */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                8
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Data Retention
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We retain your personal data only as long as necessary to fulfill the purposes for which it was collected:
                                </p>
                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Account Data:</strong> Retained for the duration of your account and for 1 year after account closure or last activity.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Transaction Records:</strong> Retained for a minimum of 5 years for accounting, tax, and legal compliance purposes.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Communications:</strong> Retained for 2 years or as required by applicable law.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span><strong className="text-slate-900 dark:text-white">Analytics Data:</strong> Anonymized analytics data is retained for up to 13 months.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 9. Children's Privacy */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                9
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Children's Privacy
                                </h2>
                                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-amber-900 dark:text-amber-100">
                                        Our website and services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you are under 18, please do not use our services or provide any information to us.
                                    </p>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    If we become aware that we have collected personal information from a minor, we will take immediate steps to delete such information and terminate the child's access to our services. If you believe a minor has provided us with personal data, please contact us immediately at <a href="mailto:hello@mtraderslastllc.com" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">hello@mtraderslastllc.com</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 10. International Users & GDPR */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                10
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    International Users & GDPR
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">GDPR Compliance:</strong> If you are located in the European Union, European Economic Area, or United Kingdom, your personal data is processed in accordance with the General Data Protection Regulation (GDPR). You have additional rights under GDPR, including the right to lodge a complaint with your local data protection authority.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Data Transfer:</strong> When we transfer data outside the EU/EEA (e.g., to the United States), we implement appropriate safeguards, including standard contractual clauses approved by the European Commission.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Other Jurisdictions:</strong> If you are located outside the United States, please note that your data will be transferred to and stored in the United States, which may have different privacy laws than your country of residence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 11. Changes to This Policy */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                11
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Changes to This Policy
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by updating the "Last updated" date at the top of this page and, for significant changes, by sending you an email notification.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Your continued use of our website and services after any changes have been made constitutes your acceptance of the updated Privacy Policy. We recommend reviewing this policy periodically to stay informed about how we protect your information.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 12. Contact Us */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                12
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Contact Us
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    If you have questions about this Privacy Policy, our privacy practices, or how we handle your personal information, please contact us:
                                </p>

                                <div className="space-y-4 mb-6">
                                    <a
                                        href="mailto:hello@mtraderslastllc.com"
                                        className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                                    >
                                        <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400">
                                                hello@mtraderslastllc.com
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:+13163617579"
                                        className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                                    >
                                        <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Phone/WhatsApp</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400">
                                                +1 (316) 361-7579
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://t.me/Mtradersla_bot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Telegram</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400">
                                                @Mtradersla_bot
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                                    <div className="flex gap-3 items-start">
                                        <AlertCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Data Protection Officer</p>
                                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                                For formal data subject requests under GDPR or other privacy regulations, please include "Data Subject Request" in your email subject line.
                                            </p>
                                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                                <strong>Address:</strong> M Traders Last LLC, St. Petersburg, Florida 33702, USA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                            Last updated: July 18, 2026. This Privacy Policy is effective immediately and applies to all information collected through our website and services. Thank you for trusting M Traders Last LLC with your information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;