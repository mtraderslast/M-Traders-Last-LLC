'use client';

import React from 'react';
import { Mail, Phone, MessageCircle, Calendar, ChevronRight } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-950">
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3">
                        Terms & Conditions
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Last updated: July 18, 2026 • M Traders Last LLC • St. Petersburg, FL 33702, USA
                    </p>
                </div>
            </div>


            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="space-y-16">
                    {/* 1. Acceptance of Terms */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                1
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Acceptance of Terms
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    By accessing, browsing, or purchasing any product or service from M Traders Last LLC, you agree to be bound by these Terms and Conditions in their entirety. If you do not agree with any part of these terms, you must not use this website or purchase any of our services. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 2. Products & Services */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                2
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Products & Services
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    M Traders Last LLC specializes in comprehensive software development, web development, IT consulting, and digital automation solutions. Our service offerings include:
                                </p>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900 dark:text-white">Custom Web Development:</strong> Responsive websites, web applications, and e-commerce platforms built with modern technologies.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900 dark:text-white">Software Development:</strong> Bespoke software solutions, SaaS platforms, APIs, and integrations tailored to your business needs.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900 dark:text-white">Automation & AI Solutions:</strong> Business process automation, chatbots, AI integrations, and workflow optimization.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900 dark:text-white">IT Consulting & Strategy:</strong> Technical consulting, infrastructure planning, and digital transformation guidance.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-600 dark:text-slate-400">
                                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900 dark:text-white">Digital Products & Tools:</strong> Ready-made software, templates, and digital resources delivered electronically.</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    All prices are displayed in USD. Service projects are initiated within 1 business day of confirmed payment. Digital products are delivered to your registered email within 24 hours of payment confirmation.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 3. Refund Policy */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                3
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Refund Policy
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Digital Products & Software:</strong> Once delivered, accessed, or downloaded, all digital products, software licenses, and tools are generally non-refundable. This includes digital courses, templates, plugins, and ready-made solutions.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Development & Consulting Services:</strong> Once project work has commenced, including initial consultations, design mockups, code development, or any deliverables, no refund will be issued. This protects intellectual property and resources invested in your project.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Payment Disputes & Chargebacks:</strong> We take payment disputes seriously. Any chargeback filed without valid grounds will be disputed using our order records, email communications, delivery logs, and access confirmations. Chargeback disputes may result in legal action and additional fees.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Exception:</strong> If a technical issue prevents access to your product or service within 48 hours of purchase, contact us immediately at <a href="mailto:hello@mtraderslastllc.com" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">hello@mtraderslastllc.com</a> for a resolution or refund.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 4. Intellectual Property */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                4
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Intellectual Property
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    All content, materials, software, code frameworks, PDFs, templates, designs, and resources created by or available through M Traders Last LLC are the exclusive intellectual property of M Traders Last LLC or our licensors. This includes but is not limited to:
                                </p>
                                <ul className="space-y-2 mb-4 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Website designs and source code</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Software code, algorithms, and technical documentation</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Digital products, templates, and frameworks</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Branding, logos, and visual assets</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    You may not reproduce, redistribute, resell, share, decompile, or reverse-engineer any of our content or services with third parties without explicit written permission. Unauthorized use or distribution of our intellectual property will result in legal action, including cease-and-desist orders, damages, and legal fees.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 5. Code Ownership & Licensing */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                5
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Code Ownership & Licensing
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Custom Development Projects:</strong> For bespoke software and web development projects, you retain ownership of the final deliverables and custom code developed specifically for your business, upon full payment and project completion.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Third-Party Libraries & Frameworks:</strong> All open-source libraries, frameworks, and third-party code used in your project remain governed by their respective licenses (MIT, GPL, Apache, etc.). You are responsible for compliance with these licenses.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Pre-built Templates & Products:</strong> All digital products, templates, plugins, and pre-built solutions come with a limited, non-exclusive license for personal or business use. You may not redistribute, resell, or rebrand these items as your own.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Proprietary Frameworks:</strong> Any proprietary frameworks, methodologies, or systems developed by M Traders Last LLC remain our exclusive property.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 6. User Conduct */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                6
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    User Conduct
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    You agree not to:
                                </p>
                                <ul className="space-y-2 mb-4 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Copy, reproduce, or redistribute any delivered materials, software, or services</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Use content for commercial resale or competing business purposes</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Engage in fraudulent activity, payment fraud, or chargeback disputes</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Attempt to decompile, reverse-engineer, or crack our software</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Misrepresent the origin of our products or claim them as your own</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Violate any applicable laws or engage in illegal activity</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Violation of these terms may result in immediate service termination, legal action, and financial damages.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 7. Payment Terms */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                7
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Payment Terms
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Pricing</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">All prices listed in USD. Services range from $39 to $9,999+ USD.</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
                                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Payment Methods</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Visa, Mastercard, American Express, and bank wire transfer.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Transaction Structure:</strong> All transactions are one-time payments unless otherwise specified. There are no hidden fees, subscription charges, or automatic billing. The price you see at checkout is the final price (exclusive of applicable taxes).
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Invoice & Receipts:</strong> Upon payment completion, a receipt and invoice will be sent to your registered email address.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 8. Access & Delivery */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                8
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Access & Delivery
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Digital Products:</strong> Digital products, software licenses, and tools are delivered electronically to the email address provided at checkout within 24 hours of payment confirmation. Check your inbox and spam folder.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Service Projects:</strong> Custom development projects are initiated within 1 business day of confirmed payment. You will receive an onboarding email with project details, timeline, and next steps.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Access Issues:</strong> If you do not receive access to your digital product or project communication within 24 hours, contact us immediately at <a href="mailto:hello@mtraderslastllc.com" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">hello@mtraderslastllc.com</a>. We will troubleshoot and resolve the issue promptly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 9. Support & Maintenance */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                9
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Support & Maintenance
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Included Support:</strong> All development projects include support during the project delivery phase. This includes technical guidance, bug fixes, and implementation assistance.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Post-Delivery Support:</strong> After project completion and handover, ongoing support, maintenance, hosting, and updates are available as paid add-on services. These are not included in the standard project fee.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Digital Products Support:</strong> Digital products include basic email support for access and technical issues. Feature requests and extensive customization are not included.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Response Time:</strong> Support requests are handled during business hours (Monday–Friday, 9 AM–6 PM PST). Emergency support may be available for premium clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 10. Project Revisions & Scope */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                10
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Project Revisions & Scope
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        All custom development projects include a specified number of revision rounds as outlined in your project agreement. Additional revisions beyond the agreed scope are billable at our standard hourly consulting rate.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Scope Creep:</strong> Changes to project scope, features, or timeline requested after the project has commenced may result in additional fees and project delays. We will provide a revised quote for any scope changes.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Project Timeline:</strong> Timelines are estimates and subject to change based on complexity, client responsiveness, and revisions. M Traders Last LLC is not liable for delays beyond our control.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 11. Testing & Deployment */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                11
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Testing & Deployment
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Quality Assurance:</strong> All deliverables undergo thorough testing for functionality, performance, and compatibility. However, we cannot guarantee 100% bug-free delivery, as software inherently involves complex variables.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Browser & Device Compatibility:</strong> Web applications are tested on major modern browsers (Chrome, Firefox, Safari, Edge) and mobile devices. Legacy browser support is available as an additional service.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Deployment:</strong> Deployment to your hosting environment is handled by M Traders Last LLC or your designated hosting provider. Client is responsible for arranging and paying for hosting, domain registration, and SSL certificates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 12. Disclaimer of Warranties */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                12
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Disclaimer of Warranties
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">No Business Outcome Guarantee:</strong> M Traders Last LLC does not guarantee specific business outcomes, revenue increases, client acquisition, or market performance from any software or service. Success depends on execution, market conditions, and external factors beyond our control.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Testimonials & Case Studies:</strong> All testimonials and case studies represent individual results that may vary significantly. Past performance is not indicative of future results.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">As-Is Delivery:</strong> All products and services are provided on an "as-is" basis. M Traders Last LLC makes no warranty regarding merchantability, fitness for a particular purpose, or non-infringement of third-party rights, except as expressly stated in writing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 13. Limitation of Liability */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                13
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Limitation of Liability
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    <strong className="text-slate-900 dark:text-white">Excluded Damages:</strong> To the maximum extent permitted by law, M Traders Last LLC shall not be liable for:
                                </p>
                                <ul className="space-y-2 mb-4 text-slate-600 dark:text-slate-400">
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Indirect, incidental, special, or consequential damages</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Loss of data, revenue, profits, or business opportunity</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                        <span>Third-party claims or data breaches from third-party integrations</span>
                                    </li>
                                </ul>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Cap on Liability:</strong> Our total liability for any claim shall not exceed the amount you paid for the specific product or service in question. This cap applies to all liability claims, whether in contract, tort, or otherwise.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 14. Data Security & Privacy */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                14
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Data Security & Privacy
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Data Protection:</strong> M Traders Last LLC employs industry-standard security measures to protect your data during development and delivery. However, we cannot guarantee absolute security against all threats.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Client Responsibility:</strong> You are responsible for maintaining backups of your data, securing access credentials, and implementing appropriate security practices on your end.
                                    </p>
                                    <p className="leading-relaxed">
                                        <strong className="text-slate-900 dark:text-white">Privacy Policy:</strong> For detailed information on how we handle personal data, please refer to our separate Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 15. Governing Law */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                15
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Governing Law
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions. Any disputes arising from or related to these terms, your purchase, or our services shall be resolved exclusively in the courts of Pinellas County, Florida. You agree to submit to the personal and exclusive jurisdiction of these courts and waive any objection to venue.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* 16. Contact */}
                    <section>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                                16
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                    Contact
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Have questions about our Terms and Conditions? We're here to help. Contact us via any of the methods below:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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

                                    <div className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                        <Calendar className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Business Hours</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Mon–Fri, 9 AM–6 PM PST
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Before You Purchase</p>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">
                                        Have questions about whether our services are right for you? Please reach out before purchasing. We're happy to discuss your project needs and clarify any terms or conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;