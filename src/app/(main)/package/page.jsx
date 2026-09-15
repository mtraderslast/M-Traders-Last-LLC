'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, ArrowUpDown, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import { fetchAllPackages } from '@/lib/action/service-package';

const SORT_OPTIONS = [
    { value: 'low-to-high', label: 'Price: Low to High' },
    { value: 'high-to-low', label: 'Price: High to Low' },
];

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

export default function PackagePage() {
    // Search & Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [sortByPrice, setSortByPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Pagination & Data States
    const [packages, setPackages] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalPackages: 0,
        limit: 12
    });

    const [isLoading, setIsLoading] = useState(true);

    // Fetch Packages from Server
    const loadPackages = useCallback(async (pageNumber = 1) => {
        setIsLoading(true);
        try {
            const params = {
                page: pageNumber,
                limit: 12,
            };

            if (activeSearch) params.search = activeSearch;
            if (selectedCategory) params.category = selectedCategory;
            if (sortByPrice) params.sortByPrice = sortByPrice;

            const res = await fetchAllPackages(params);

            if (res?.success) {
                setPackages(res.data || []);
                if (res.meta) {
                    setPagination(res.meta);
                }
            } else {
                setPackages([]);
            }
        } catch (error) {
            console.error("Failed to fetch packages:", error);
            setPackages([]);
        } finally {
            setIsLoading(false);
        }
    }, [activeSearch, selectedCategory, sortByPrice]);

    // Re-fetch when Category, Sort, or Active Search changes
    useEffect(() => {
        loadPackages(1);
    }, [loadPackages]);

    // Handle Form Submit for Search
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setActiveSearch(searchQuery.trim());
    };

    // Reset All Filters
    const handleResetFilters = () => {
        setSearchQuery('');
        setActiveSearch('');
        setSelectedCategory('');
        setSortByPrice('');
    };

    // Page Change Handler
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            loadPackages(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isFiltered = activeSearch || selectedCategory || sortByPrice;

    return (
        <div className="min-h-screen pt-20 bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Header & Filter Section */}
            <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col gap-2 mb-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mb-2">
                            Our Services
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium max-w-2xl">
                            Explore our comprehensive range of IT solutions and services tailored for your business needs
                        </p>
                    </div>

                    {/* Filter Controls Bar */}
                    <div className="space-y-5">
                        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                            {/* Search Form */}
                            <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="Search by package name, category, or keywords..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm font-medium"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-3 text-base font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-[200%_auto] bg-position-[0%_center] rounded-lg hover:bg-position-[100%_center] transition-all duration-500"
                                >
                                    Search
                                </button>
                            </form>

                            {/* Sort & Reset Actions */}
                            <div className="flex gap-3 items-center">
                                <div className="relative flex-1 sm:w-48">
                                    <select
                                        value={sortByPrice}
                                        onChange={(e) => setSortByPrice(e.target.value)}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all cursor-pointer appearance-none"
                                    >
                                        <option value="">Sort by Price</option>
                                        {SORT_OPTIONS.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ArrowUpDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>

                                {isFiltered && (
                                    <button
                                        type="button"
                                        onClick={handleResetFilters}
                                        className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold"
                                        title="Reset Filters"
                                    >
                                        <RefreshCw className="w-4 h-4" />
                                        <span className="hidden sm:inline">Reset</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto lg:overflow-x-visible lg:flex-wrap pb-2 lg:pb-0 scrollbar-none pt-1">
                            <button
                                onClick={() => setSelectedCategory('')}
                                className={`px-4 py-2 rounded-xl font-semibold text-xs transition-all whitespace-nowrap shrink-0 ${selectedCategory === ''
                                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                                        : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                                    }`}
                            >
                                All Services
                            </button>

                            {SERVICE_CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-xl font-semibold text-xs transition-all whitespace-nowrap shrink-0 ${selectedCategory === category
                                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                                            : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {isLoading ? (
                    /* Skeleton Loader Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-96 bg-slate-100 dark:bg-slate-900 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : packages.length > 0 ? (
                    /* Package Grid */
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {packages.map(pkg => (
                                <PackageCard key={pkg._id || pkg.id} packageData={pkg} />
                            ))}
                        </div>

                        {/* Pagination Bar (Shown only if total pages > 1) */}
                        {pagination.totalPages > 1 && (
                            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-12 pt-6">
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Showing page <span className="font-bold text-slate-900 dark:text-white">{pagination.currentPage}</span> of{' '}
                                    <span className="font-bold text-slate-900 dark:text-white">{pagination.totalPages}</span> ({pagination.totalPackages} total packages)
                                </p>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                                        disabled={pagination.currentPage === 1}
                                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-300"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>

                                    {[...Array(pagination.totalPages)].map((_, idx) => {
                                        const pageNum = idx + 1;
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageChange(pageNum)}
                                                className={`w-9 h-9 text-xs font-bold rounded-lg transition-all ${pagination.currentPage === pageNum
                                                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}

                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                                        disabled={pagination.currentPage === pagination.totalPages}
                                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-slate-700 dark:text-slate-300"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    /* Empty State UI */
                    <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 my-4">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                            No packages found
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-6">
                            We couldn't find any packages matching your query. Try clearing filters or searching with different terms.
                        </p>
                        {isFiltered && (
                            <button
                                onClick={handleResetFilters}
                                className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95"
                            >
                                Clear All Filters
                            </button>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}