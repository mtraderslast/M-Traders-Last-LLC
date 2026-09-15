import Link from "next/link";
import { Mail, Send, Phone, Clock, Headphones, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Technology", href: "/technology" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const legalLinks = [
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "AML Policy", href: "/aml-policy" },
    ];

    const whatsappUrl = "https://wa.me/13163617579";
    const telegramUrl = "https://t.me/Mtradersla_bot";
    const emailAddress = "hello@mtraderslastllc.com";

    return (
        <footer className="w-full border-t transition-colors duration-300 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-900">

                    {/* Column 1: Brand Profile & Info */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2 group">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                                />
                                <span className="text-2xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                                    TRADERS
                                </span>
                            </Link>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            A US-registered software & IT consulting firm delivering custom software, web solutions, and digital systems for global businesses.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors"
                                aria-label="WhatsApp Chat"
                            >
                                <MessageSquare className="w-4 h-4" />
                            </a>
                            <a
                                href={telegramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors"
                                aria-label="Telegram"
                            >
                                <Send className="w-4 h-4" />
                            </a>
                            <a
                                href={`mailto:${emailAddress}`}
                                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 group-hover:text-cyan-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Email Support</p>
                                    <a href={`mailto:${emailAddress}`} className="text-xs text-slate-500 hover:text-cyan-500 transition-colors">
                                        {emailAddress}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <Send className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Telegram Bot</p>
                                    <a
                                        href={telegramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-slate-500 hover:text-cyan-500 transition-colors"
                                    >
                                        @Mtradersla_bot
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <Phone className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Phone / WhatsApp</p>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-slate-500 hover:text-cyan-500 transition-colors block"
                                    >
                                        +1 (316) 361-7579
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <Clock className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Business Hours</p>
                                    <p className="text-xs text-slate-500">Mon-Fri · 9 AM – 6 PM PST</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Support & Security */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <Headphones className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">24/7 Chat Support</p>
                                    <a
                                        href={telegramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-slate-500 hover:text-cyan-500 transition-colors"
                                    >
                                        Message us on Telegram
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-500 dark:text-cyan-400">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200">Secure Payments</p>
                                    <p className="text-xs text-slate-500">SSL encrypted · PCI compliant</p>
                                </div>
                            </li>
                        </ul>

                        {/* LLC Documentation info box */}
                        <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900/80 text-xs text-slate-400 space-y-1">
                            <p className="font-semibold text-slate-700 dark:text-slate-300">Florida LLC · Doc# L26000290590</p>
                            <p className="text-slate-500 dark:text-slate-500">7901 4th St N Suite 6573, St. Petersburg FL 33702</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Legal Links & Copyright */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                    <p>© {currentYear} M Traders Last LLC. All rights reserved.</p>

                    {/* Important Business Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;