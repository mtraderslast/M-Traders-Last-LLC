"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, X } from "lucide-react";
import Link from "next/link";

const RAW_FAQS = [
    { q: "What types of websites do you develop?", a: "We develop a wide range of websites including corporate websites, e-commerce stores, online shops, portfolio sites, landing pages, blogs, and custom web applications. Our team ensures each website is responsive, fast, and optimized for conversions to help boost your business.", category: "Web Development" },
    { q: "How long does it take to build a website?", a: "The timeline varies depending on the complexity and scope of the project. A standard corporate website typically takes 4-6 weeks, while a complex e-commerce platform or custom web application may take 8-12 weeks. We work closely with you to establish clear milestones and deliver on time.", category: "Web Development" },
    { q: "Do you offer ongoing website maintenance and support?", a: "Yes, we provide comprehensive maintenance and support packages including security updates, performance monitoring, content updates, bug fixes, and technical support. We ensure your website remains secure, up-to-date, and performs at its best.", category: "Web Development" },

    { q: "How does SEO help my business grow?", a: "SEO helps your business by improving your website's visibility on search engines like Google. This means more organic traffic, higher quality leads, and increased brand credibility. With our SEO strategies, you can reach millions of potential customers actively searching for your products or services.", category: "SEO" },
    { q: "What SEO services do you provide?", a: "We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content strategy, link building, local SEO, and performance tracking. We create customized strategies aligned with your business goals and target audience.", category: "SEO" },
    { q: "How soon can I expect SEO results?", a: "SEO is a long-term strategy. Generally, you can start seeing initial improvements in 3-6 months, with significant results typically visible within 6-12 months. However, we provide regular progress reports and adjust strategies to ensure continuous improvement.", category: "SEO" },

    { q: "What custom software development services do you offer?", a: "We offer end-to-end custom software development including requirement analysis, architecture design, development, testing, deployment, and ongoing maintenance. We build scalable, secure, and user-friendly software solutions tailored to your specific business needs.", category: "Software Development" },
    { q: "What technologies do you use for software development?", a: "We use a modern tech stack including but not limited to JavaScript, Python, React, Angular, Vue.js, Node.js, Django, .NET, Java, and various database technologies. We choose the best technology based on your project requirements and long-term goals.", category: "Software Development" },
    { q: "How do you ensure software quality and security?", a: "We follow industry best practices including code reviews, automated testing, continuous integration, and security audits. Our team conducts thorough testing at every stage and implements robust security measures to protect your data and users.", category: "Software Development" },

    { q: "What is business automation and how can it benefit me?", a: "Business automation uses technology to streamline repetitive tasks, reduce manual effort, and optimize workflows. It benefits your business by increasing efficiency, reducing errors, saving time, cutting operational costs, and allowing your team to focus on strategic initiatives.", category: "Business Automation" },
    { q: "What business processes can be automated?", a: "We can automate various business processes including customer relationship management, invoicing and billing, inventory management, HR processes, marketing campaigns, lead generation, data entry, reporting, and communication workflows.", category: "Business Automation" },
    { q: "How do you implement business automation solutions?", a: "We assess your current processes, identify automation opportunities, design tailored solutions, integrate with your existing systems, and provide training and support. Our goal is to create seamless automation that enhances your operations without disrupting your business.", category: "Business Automation" },

    { q: "What is IT infrastructure development?", a: "IT infrastructure development involves designing, implementing, and managing the technology backbone of your business including networks, servers, storage, security systems, and cloud services. We ensure your infrastructure is scalable, reliable, and secure.", category: "IT Infrastructure" },
    { q: "What infrastructure services do you provide?", a: "We provide network design and setup, server deployment, virtualization, data center management, disaster recovery solutions, system integration, security implementation, and ongoing infrastructure monitoring and maintenance.", category: "IT Infrastructure" },
    { q: "How does a strong IT infrastructure make my business easier?", a: "A robust IT infrastructure ensures business continuity, minimizes downtime, enhances data security, improves team collaboration, supports scalability, and provides the technical foundation needed to run your operations smoothly and efficiently.", category: "IT Infrastructure" },

    { q: "What is an ERP solution?", a: "An ERP (Enterprise Resource Planning) solution is an integrated software system that connects and manages all your business resources including finance, HR, supply chain, inventory, and operations. It provides a unified view of your business and streamlines workflows.", category: "ERP Solutions" },
    { q: "What ERP systems do you work with?", a: "We work with leading ERP platforms including SAP, Oracle, Microsoft Dynamics, Odoo, and custom-built ERP solutions. We also develop tailored ERP systems to perfectly match your unique business requirements.", category: "ERP Solutions" },
    { q: "How does an ERP solution create an efficient workspace?", a: "An ERP solution breaks down silos by connecting all departments, automating workflows, providing real-time data access, eliminating duplicate data entry, and enabling informed decision-making. This creates a cohesive, transparent, and efficient work environment.", category: "ERP Solutions" },

    { q: "What mobile app development services do you offer?", a: "We develop native iOS and Android apps, cross-platform applications, and progressive web apps. Our services include UI/UX design, app development, testing, deployment to app stores, and ongoing maintenance and updates.", category: "Mobile App Development" },
    { q: "How can a mobile app help run my business better?", a: "A mobile app allows you to manage your business on the go, engage customers directly, send push notifications, process payments, track operations, and provide a seamless user experience. It enhances customer loyalty and streamlines business management.", category: "Mobile App Development" },

    { q: "What is included in your e-commerce solution?", a: "Our e-commerce solutions include custom online store development, payment gateway integration, inventory management, shopping cart functionality, order processing, customer account management, and analytics dashboards.", category: "E-commerce" },
    { q: "Which e-commerce platforms do you support?", a: "We support all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, Wix eCommerce, and custom-built solutions. We help you choose the right platform based on your business size and goals.", category: "E-commerce" },
    { q: "How do you help fit my business into the e-commerce world?", a: "We analyze your business model, products, and target market to design an e-commerce strategy that works for you. We handle everything from platform selection and store setup to payment integration and digital marketing to ensure your business thrives online.", category: "E-commerce" },

    { q: "What cloud services do you provide?", a: "We offer cloud migration, cloud infrastructure setup, file sync and sharing solutions, cloud storage, virtual desktops, cloud security, and managed cloud services. We work with major cloud providers like AWS, Google Cloud, and Microsoft Azure.", category: "Cloud Services" },
    { q: "How does cloud service improve my business?", a: "Cloud services provide secure, scalable, and accessible file storage and sharing from anywhere. They reduce infrastructure costs, improve collaboration, ensure data backup and disaster recovery, and allow your team to work remotely with ease.", category: "Cloud Services" },
    { q: "Is my data secure in the cloud?", a: "Yes, we implement enterprise-grade security measures including encryption at rest and in transit, multi-factor authentication, regular security audits, and compliance with data protection regulations. Your data is stored securely and you have full control over access permissions.", category: "Cloud Services" },

    { q: "Can you integrate multiple services into one solution?", a: "Absolutely. We specialize in creating integrated solutions that combine web development, software development, mobile apps, ERP, and cloud services. We ensure all your business technologies work together seamlessly for maximum efficiency and growth.", category: "Integrated Solutions" },
];

const FAQS = RAW_FAQS.map((item, idx) => ({ id: `faq-${idx}`, ...item }));
const CATEGORIES = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

function FaqRow({ item, isOpen, onToggle }) {
    return (
        <div className="border-b border-slate-100 dark:border-slate-900">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded-sm"
            >
                <span
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${isOpen
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                        : "text-slate-800 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white"
                        }`}
                >
                    {item.q}
                </span>

                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-hover:border-cyan-500/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                    <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center justify-center"
                    >
                        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </motion.span>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="max-w-2xl pb-6 pr-10 text-sm sm:text-[15px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FaqPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");
    const [openId, setOpenId] = useState(FAQS[0]?.id ?? null);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return FAQS.filter((item) => {
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            const matchesQuery =
                q.length === 0 ||
                item.q.toLowerCase().includes(q) ||
                item.a.toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, query]);

    const grouped = useMemo(() => {
        const map = new Map();
        for (const item of filtered) {
            if (!map.has(item.category)) map.set(item.category, []);
            map.get(item.category).push(item);
        }
        return Array.from(map.entries());
    }, [filtered]);

    return (
        <section className="relative w-full bg-white dark:bg-slate-950 px-6 py-20 sm:py-28">
            <div className="mx-auto w-full max-w-6xl">
                {/* Header */}
                <div className="mb-14 sm:mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                            Support Center
                        </span>
                        <span className="w-6 h-[2px] bg-cyan-500 rounded-full"></span>
                    </div>
                    <h1 className="font-black tracking-tight text-4xl sm:text-5xl text-slate-800 dark:text-slate-100">
                        Frequently asked{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            questions
                        </span>
                    </h1>
                    <p className="mt-4 max-w-xl text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400">
                        Everything you need to know about how we build, ship, and support your
                        digital products — from websites to enterprise infrastructure.
                    </p>
                </div>

                {/* Search */}
                <div className="relative mb-8">
                    <Search
                        className="pointer-events-none absolute left-0 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400 dark:text-slate-600"
                        strokeWidth={2}
                    />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search a question…"
                        className="w-full border-b border-slate-200 dark:border-slate-800 bg-transparent py-3 pl-7 pr-8 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-colors duration-200 focus:border-cyan-500"
                    />
                    {query.length > 0 && (
                        <button
                            type="button"
                            onClick={() => setQuery("")}
                            aria-label="Clear search"
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                        >
                            <X className="h-4 w-4" strokeWidth={2} />
                        </button>
                    )}
                </div>

                {/* Category filter */}
                <div className="mb-12 flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => {
                        const active = cat === activeCategory;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full px-4 py-1.5 text-xs sm:text-[13px] font-bold tracking-tight transition-all duration-200 ${active
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xs"
                                    : "text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400"
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Results */}
                {grouped.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                            No questions match “{query}”.
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-400 dark:text-slate-600">
                            Try a different keyword or clear your filters.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {grouped.map(([category, items]) => (
                            <div key={category}>
                                {activeCategory === "All" && (
                                    <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-600">
                                        {category}
                                    </h2>
                                )}
                                <div>
                                    {items.map((item) => (
                                        <FaqRow
                                            key={item.id}
                                            item={item}
                                            isOpen={openId === item.id}
                                            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer CTA — quiet, no card */}
                <div className="mt-20 flex flex-col items-start gap-2 border-t border-slate-100 dark:border-slate-900 pt-10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                        Still have a question?
                    </p>
                    <Link
                        href="/contact"
                        className="text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        Talk to our team →
                    </Link>
                </div>
            </div>
        </section>
    );
}