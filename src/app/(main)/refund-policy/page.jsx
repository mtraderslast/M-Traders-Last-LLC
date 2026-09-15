import { AlertTriangle, CheckCircle, Clock, MessageCircle, Mail, Phone, ArrowRight, HelpCircle, Calendar, RotateCcw } from 'lucide-react';

const RefundPolicy = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            {/* Header */}
            <div className="border-b border-slate-100 dark:border-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3">
                        Refund Policy
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-4">
                        <span>Last updated: July 18, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>M Traders Last LLC</span>
                        <span className="hidden sm:inline">•</span>
                        <span>St. Petersburg, FL 33702, USA</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {/* Important Notice */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 sm:p-8">
                    <div className="flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-bold text-red-900 dark:text-red-100 mb-2 text-lg">Important: Non-Refundable Services (With Delivery Guarantee Exception)</h2>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                M Traders Last LLC provides custom service-based work. Once an order is placed and work is initiated, all services are <strong>non-refundable</strong> — with ONE exception: if we fail to deliver your project by the promised delivery date, you can request a refund and receive it within 24 hours. Please review all details and contact us with questions <strong>before purchasing</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Why Our Policy Exists */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            1
                        </div>
                        Why Our Policy Exists
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        M Traders Last LLC is a <strong className="font-semibold text-slate-900 dark:text-slate-100">service-based agency</strong>, not a retail company. We provide custom software development, web design, automation, and consulting services that require significant investment of:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                Time
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Developer and team hours dedicated to your project</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">⚙️</span>
                                Resources
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Tools, software licenses, and infrastructure costs</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">🧠</span>
                                Expertise
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Professional knowledge and specialized skills applied</p>
                        </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Real Example:</h4>
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            A client hires 5 developers for a website project. After 2 weeks of work, the client decides to work with only 1 developer and requests refunds from the other 4. The other 4 developers have <strong>wasted 80 hours of their time and effort</strong> — this time cannot be recovered or used elsewhere. They've also spent resources (cloud hosting, testing tools, communication time) that cannot be refunded. This is why <strong>service-based businesses cannot offer refunds once work has begun</strong>.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 2. General Refund Policy */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            2
                        </div>
                        General Refund Policy
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">All products and services sold by M Traders Last LLC are non-refundable once ordered and work has commenced.</strong> This applies to:
                    </p>
                    <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>Custom web development projects</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>Telegram bot and automation development</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>Business automation and workflow setup</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>IT consulting and strategy packages</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>Digital guides, templates, and software tools</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                            <span>All other products and services</span>
                        </li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        This policy applies <strong className="font-semibold text-slate-900 dark:text-slate-100">regardless of whether you are satisfied with the final result or any other circumstances</strong> — EXCEPT in the case of a missed delivery deadline, which has its own guarantee (see section below).
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-sm text-green-800 dark:text-green-200">
                            <strong className="font-semibold">The One Exception:</strong> If we fail to deliver your project by the agreed delivery date, you have the right to cancel the order and request a full refund. See "Delivery Guarantee & Late Delivery Refund" section below for details.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 2.5. Delivery Guarantee & Late Delivery Refund */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            2A
                        </div>
                        Delivery Guarantee & Late Delivery Refund
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        We are committed to meeting your delivery deadlines. If we fail to deliver your project or service by the agreed date, you have the option to request a full refund without any questions asked.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
                            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                How It Works
                            </h4>
                            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>You place an order with an agreed delivery date</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>If we miss the deadline, you can request a refund</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Refund is processed within 24 hours</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Money returned to your account automatically</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
                            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                                <RotateCcw className="w-5 h-5" />
                                Requesting a Refund
                            </h4>
                            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Contact us after the delivery date passes</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>No explanation or justification needed</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>We process the refund within 24 hours</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Full amount credited back to your payment method</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-5 border border-slate-100 dark:border-slate-800 mb-6">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">What Qualifies as "Late Delivery":</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                                <span>Delivery date has passed and you have not received the complete project/service</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                                <span>Project is not accessible or usable (e.g., website not live, bot not functioning)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                                <span>We have not communicated progress updates or revised timeline</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-5">
                        <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Important Notes:</h4>
                        <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                            <li>• The delivery date must be clearly stated in your order or service agreement</li>
                            <li>• If delays are caused by <strong>client-side factors</strong> (missing information, delayed approvals, scope changes), the deadline may be extended accordingly</li>
                            <li>• We will communicate any potential delays as soon as they are identified</li>
                            <li>• Extensions are agreed upon in writing before the original deadline passes</li>
                        </ul>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 3. When Work Has Commenced */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            3
                        </div>
                        When Work Has Commenced
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        For service projects (web development, automation, bot development), work is considered to have <strong className="font-semibold text-slate-900 dark:text-slate-100">commenced</strong> as soon as any of the following occur:
                    </p>
                    <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Initial onboarding communication is received from our team</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Project brief or requirements document is received</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>First meeting or consultation call is scheduled or completed</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Any work, research, or planning begins on your project</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Project workspace, repository, or development environment is created</span>
                        </li>
                    </ul>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <strong className="font-semibold text-slate-900 dark:text-slate-100">Once any of these milestones occurs, the standard non-refund policy applies</strong>, UNLESS we fail to meet the delivery deadline — in which case you can request a refund as described above.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 4. What You Can Do Instead */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            4
                        </div>
                        What You Can Do Instead (Alternatives to Refunds)
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        While we cannot offer refunds for dissatisfaction, we provide alternatives to ensure you get the service you need:
                    </p>

                    <div className="space-y-4">
                        <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-5">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">↻</span>
                                Revisions & Adjustments
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Your project includes a specified number of revision rounds. If you're not satisfied with the initial deliverable, we will make requested changes at no additional cost (within scope).
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                <strong>Example:</strong> If the website design doesn't match your vision, we'll revise it. If the automation workflow needs adjustments, we'll refine it.
                            </p>
                        </div>

                        <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-5">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">➕</span>
                                Additional Features (Paid)
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                If you want to add features or expand scope beyond the original project agreement, these will be billed as additional work at our standard rates.
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                <strong>Example:</strong> Original project is a 5-page website. You want to add e-commerce functionality — this is billed as additional work.
                            </p>
                        </div>

                        <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-5">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">🔧</span>
                                Technical Issues (Free Support)
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                If there's a genuine bug, technical failure, or delivery issue (e.g., broken links, functionality not working), we will fix it at no cost during the project delivery phase.
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                <strong>Example:</strong> The website crashes in certain browsers, or the bot integration isn't connecting properly — we'll troubleshoot and resolve for free.
                            </p>
                        </div>

                        <div className="border border-slate-100 dark:border-slate-800 rounded-lg p-5">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-600 dark:text-cyan-400">💬</span>
                                Ongoing Support (Optional)
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                After project completion, ongoing support, maintenance, and hosting are available as paid add-on packages.
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                <strong>Example:</strong> Monthly support retainer for bug fixes, updates, and performance monitoring.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 5. Chargebacks & Payment Disputes */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            5
                        </div>
                        Chargebacks & Payment Disputes
                    </h2>
                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                        <p className="text-sm text-red-800 dark:text-red-200">
                            <strong className="font-semibold">We take chargebacks very seriously.</strong> Filing a chargeback when you have received the service or access is fraudulent and will be disputed.
                        </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">What Constitutes a Valid Dispute:</strong>
                    </p>
                    <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>You were charged twice for the same order</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>You did not authorize the transaction</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span>Your card was fraudulently used</span>
                        </li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Invalid Chargebacks (Will Be Disputed):</strong>
                    </p>
                    <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Claiming non-delivery when you received access or the service was rendered</span>
                        </li>
                        <li className="flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Claiming you don't like the work or are unsatisfied with the results</span>
                        </li>
                        <li className="flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Claiming the service was unauthorized when you submitted payment</span>
                        </li>
                        <li className="flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>Requesting a "refund" through payment processor rather than contacting us</span>
                        </li>
                    </ul>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Our Response to Invalid Chargebacks:</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            We maintain <strong>complete documentation</strong> of all transactions, including:
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
                            <li>• Order records and confirmation emails</li>
                            <li>• Delivery confirmations and access logs</li>
                            <li>• Email communications and project updates</li>
                            <li>• Timestamps and proof of work delivery</li>
                        </ul>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                            We will dispute every invalid chargeback with your payment processor. Invalid chargebacks may also result in legal action and additional fees.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 6. Technical Delivery Issues */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            6
                        </div>
                        Technical Delivery Issues
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If you experience a genuine technical problem with your order delivery, we're here to help:
                    </p>
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-5 mb-4">
                        <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Scenarios We'll Fix for Free:</h4>
                        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                            <li className="flex gap-3">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>You were charged but did not receive an access confirmation email within 24 hours</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>The download link is broken or returns an error</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>The access credentials do not work</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>The delivered file is corrupted or incomplete</span>
                            </li>
                        </ul>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">What to Do:</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If you experience any delivery issues, contact us immediately at <a href="mailto:hello@mtraderslastllc.com" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">hello@mtraderslastllc.com</a> with:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <li className="flex gap-3">
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                            <span>Your order number</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                            <span>Email address used for purchase</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                            <span>Description of the issue and when it occurred</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                            <span>Any error messages or screenshots</span>
                        </li>
                    </ul>
                    <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">We will investigate and resolve delivery issues within 24 business hours.</strong> This is a service issue, not a refund issue — we will fix the problem so you receive your access.
                    </p>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 7. Before You Purchase */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            7
                        </div>
                        Before You Purchase
                    </h2>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" />
                            We Strongly Encourage You to Ask Questions First
                        </h4>
                        <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                            <strong>Don't skip this step!</strong> Before making a purchase, please take time to:
                        </p>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200 mb-4">
                            <li className="flex gap-3">
                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Review all product and service descriptions in detail</span>
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Check if the service matches your exact needs and expectations</span>
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Ask clarifying questions about features, deliverables, and timelines</span>
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Discuss any concerns or special requirements</span>
                            </li>
                            <li className="flex gap-3">
                                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Ensure you understand what's included and what's not</span>
                            </li>
                        </ul>
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>We are happy to answer any questions before you purchase.</strong> It's better to clarify everything upfront than to have misunderstandings later. There is no obligation to buy — we want to make sure our service is right for you.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 8. Contact Us */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            8
                        </div>
                        Questions About Our Refund Policy?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        We're here to help! Contact us with any questions about this policy or your order:
                    </p>

                    <div className="space-y-4 mb-8">
                        <a
                            href="mailto:hello@mtraderslastllc.com"
                            className="group flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Email</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    hello@mtraderslastllc.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="tel:+13163617579"
                            className="group flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Phone/WhatsApp</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    +1 (316) 361-7579
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://t.me/Mtradersla_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Telegram</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                    @Mtradersla_bot
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-6">
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            <strong className="font-semibold text-slate-900 dark:text-slate-100">Take action now:</strong> Reach out to us before purchasing if you have any doubts. Better to clarify upfront than deal with confusion after. We're committed to ensuring you get exactly what you need.
                        </p>
                    </div>
                </section>

                {/* Footer Note */}
                <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                        Last updated: July 18, 2026. This Refund Policy is part of our Terms and Conditions and applies to all orders placed with M Traders Last LLC.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;