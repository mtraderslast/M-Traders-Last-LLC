'use client';

import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Scale, FileText, Mail, Phone, MessageCircle } from 'lucide-react';

const AMLPolicy = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
            {/* Header */}
            <div className="border-b border-slate-100 dark:border-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-3">
                        AML Policy
                    </h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Anti-Money Laundering & Compliance
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-4 mt-3">
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
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 sm:p-8">
                    <div className="flex gap-4">
                        <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-lg">Compliance Commitment</h2>
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                M Traders Last LLC is fully committed to complying with all applicable Anti-Money Laundering (AML) laws, regulations, and international standards. We maintain strict controls to prevent the facilitation of money laundering and terrorist financing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Policy Statement */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            1
                        </div>
                        Policy Statement
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        M Traders Last LLC operates with the highest standards of integrity and transparency. Our Anti-Money Laundering (AML) Policy is designed to:
                    </p>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Comply with all applicable federal, state, and international AML laws and regulations</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Prevent and detect money laundering and terrorist financing activities</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Protect our company from being exploited for illegal financial activities</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Maintain the integrity of our business relationships and financial systems</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Cooperate fully with law enforcement and regulatory authorities</span>
                        </li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                        M Traders Last LLC <strong className="font-semibold text-slate-900 dark:text-slate-100">does not knowingly or unknowingly</strong> facilitate money laundering, terrorist financing, or any proceeds from illegal activities.
                    </p>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 2. Know Your Customer (KYC) */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            2
                        </div>
                        Know Your Customer (KYC)
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        As part of our AML compliance procedures, we collect and verify customer identity information. This is a standard practice required by law and by our payment processors.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800 mb-4">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3">Information We Collect:</h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                <span>Full legal name (individual or business entity)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                <span>Email address and contact information</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                <span>Billing address and payment information</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                                <span>Business information (for corporate customers)</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Enhanced Due Diligence:</strong> For high-value transactions (typically exceeding $10,000 USD) or transactions from high-risk jurisdictions, we may request additional identity verification including government-issued ID, proof of address, or source of funds documentation.
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Right to Request Verification:</strong> We reserve the right to request additional identity verification, documentation, or information at any time if we have concerns about the legitimacy or source of funds for a transaction.
                    </p>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 3. Prohibited Transactions */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            3
                        </div>
                        Prohibited Transactions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        M Traders Last LLC strictly prohibits and will not knowingly process any of the following transactions:
                    </p>

                    <div className="space-y-3">
                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Proceeds from Illegal Activities
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Transactions involving proceeds from drug trafficking, theft, fraud, embezzlement, human trafficking, weapons dealing, or any other criminal activity.
                            </p>
                        </div>

                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Sanctioned Entities
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Purchases made on behalf of, or benefiting, individuals, entities, or organizations subject to US sanctions or international sanctions lists.
                            </p>
                        </div>

                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Structured Payments (Smurfing)
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Transactions intentionally structured into multiple smaller payments to avoid reporting thresholds. Example: breaking a $15,000 transaction into five $3,000 payments.
                            </p>
                        </div>

                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Concealment of Funds Origin
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Use of our platform or services to conceal, disguise, or misrepresent the origin or destination of funds, or to facilitate wire fraud or theft.
                            </p>
                        </div>

                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Fraudulent Payment Methods
                            </h4>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Transactions using stolen, counterfeit, fraudulently obtained, or unauthorized credit cards, bank accounts, or payment methods.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 4. Payment Monitoring */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            4
                        </div>
                        Payment Monitoring & Detection
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We continuously monitor all transactions for suspicious activity and patterns consistent with money laundering or fraud. We look for:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm">High-Value Transactions</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Unusually large single transactions, particularly those exceeding $10,000 USD, are subject to enhanced scrutiny and verification.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm">Rapid Multiple Transactions</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Multiple rapid transactions from the same account within a short timeframe, especially if structured to avoid thresholds.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm">High-Risk Jurisdictions</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Transactions originating from or destined to countries with high money laundering risks or known for financial crime.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm">Behavioral Red Flags</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Customer behavior inconsistent with stated business purpose or profile, unusual account activity, or refusal to provide information.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                        <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Our Response to Suspicious Activity:</h4>
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            Transactions flagged as suspicious may be <strong>delayed for investigation</strong>, <strong>refused or cancelled</strong>, or <strong>reported to appropriate authorities</strong>. We will not process any transaction we believe violates AML regulations, regardless of the customer's claims of legitimacy.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 5. Sanctions Compliance (OFAC) */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            5
                        </div>
                        Sanctions Compliance (OFAC)
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        M Traders Last LLC complies with the <strong className="font-semibold text-slate-900 dark:text-slate-100">Office of Foreign Assets Control (OFAC)</strong> and other international sanctions programs administered by the U.S. Department of Treasury.
                    </p>

                    <div className="space-y-4 mb-6">
                        <div className="flex gap-4">
                            <Scale className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Screening Process</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    All customers are screened against OFAC's Specially Designated Nationals (SDN) list and other applicable sanctions lists before transactions are processed.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Geographic Restrictions</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    We do not conduct business with individuals, entities, or countries subject to comprehensive US sanctions, including Iran, North Korea, Syria, Crimea, Cuba, and others.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Ongoing Monitoring</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Customer information is monitored against updated sanctions lists on an ongoing basis. Transactions with sanctioned parties are blocked immediately.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Sanctions List Updates:</strong> We update our sanctions screening tools regularly to comply with new and amended sanctions designations published by OFAC and other regulatory authorities.
                    </p>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 6. Record Keeping */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            6
                        </div>
                        Record Keeping & Documentation
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We maintain comprehensive records of all transactions and customer information in compliance with applicable laws:
                    </p>

                    <div className="space-y-3">
                        <div className="flex gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                            <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm">Retention Period</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    All transaction records, customer information, and AML documentation are retained for a minimum of <strong>5 years</strong> as required by law.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                            <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm">Secure Storage</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Records are stored securely with access restricted to authorized personnel only. Encryption and access controls protect the confidentiality and integrity of records.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                            <AlertTriangle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 text-sm">Law Enforcement Access</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Records are available to law enforcement agencies and regulatory authorities upon presentation of a lawful request, subpoena, warrant, or court order.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 7. Reporting Obligations */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            7
                        </div>
                        Reporting & Cooperation
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        M Traders Last LLC is committed to full cooperation with law enforcement and regulatory authorities:
                    </p>

                    <div className="space-y-4">
                        <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-2">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Suspicious Activity Reporting (SAR)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We file Suspicious Activity Reports (SARs) with the Financial Crimes Enforcement Network (FinCEN) when transactions are detected that may involve money laundering or other financial crimes, as required by law.
                            </p>
                        </div>

                        <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-2">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Currency Transaction Reports (CTR)</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We report transactions exceeding $10,000 USD to FinCEN through Currency Transaction Reports, as required by the Bank Secrecy Act.
                            </p>
                        </div>

                        <div className="border-l-4 border-cyan-600 dark:border-cyan-400 pl-4 py-2">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">Law Enforcement Cooperation</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We cooperate fully with all lawful requests from federal, state, and local law enforcement agencies, including responding to subpoenas, warrants, and regulatory inquiries.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong className="font-semibold text-blue-900 dark:text-blue-100">No Tipping Off:</strong> We do not inform customers that their transactions have been reported to authorities, as prohibited by law.
                        </p>
                    </div>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 8. Employee & Contractor Training */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            8
                        </div>
                        Employee & Contractor Training
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        All staff members and contractors involved in transaction processing, customer onboarding, or payment handling are required to:
                    </p>

                    <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-4">
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Complete AML compliance training upon hiring and on an annual basis</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Understand AML regulations, red flags, and prohibited transactions</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Report any suspected money laundering or suspicious activity immediately</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Maintain confidentiality regarding AML procedures and reporting</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>Follow all established protocols for customer verification and transaction monitoring</span>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Internal Reporting:</strong> Any employee or contractor who suspects money laundering, fraud, or other violations must report it to management immediately. We maintain confidential channels for such reports and protect employees who report in good faith.
                    </p>
                </section>

                <div className="border-t border-slate-100 dark:border-slate-900"></div>

                {/* 9. Contact & Inquiries */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            9
                        </div>
                        AML Compliance Contact
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        For AML compliance inquiries, reports of suspicious activity, or other compliance-related questions, please contact us:
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
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Phone</p>
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
                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                    ✓
                                </span>
                                M Traders Last LLC
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                St. Petersburg, Florida 33702, USA
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>AML Compliance Officer:</strong> Available for regulatory inquiries during business hours (Mon–Fri, 9 AM–6 PM PST)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer Note */}
                <div className="border-t border-slate-100 dark:border-slate-900 pt-8">
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">
                        Last updated: July 18, 2026. This AML Policy is in effect immediately and applies to all transactions and customer relationships with M Traders Last LLC.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                        <strong>Legal Disclaimer:</strong> This policy is designed to ensure compliance with applicable AML laws and regulations. Violations may result in civil penalties, criminal prosecution, account closure, and reporting to authorities. M Traders Last LLC reserves the right to update this policy at any time to comply with new or amended regulations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AMLPolicy;