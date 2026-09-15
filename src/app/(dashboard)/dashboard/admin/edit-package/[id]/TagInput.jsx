'use client';

import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const TagInput = ({ name, control, label, placeholder, rules, error }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col gap-1.5 w-full">
            {label && (
                <label className="text-sm font-medium text-[#1E293B] dark:text-[#F8FAFC]">
                    {label} <span className="text-red-500">*</span>
                </label>
            )}

            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { value = [], onChange } }) => {
                    const currentValue = Array.isArray(value) ? value : [];

                    const handleAddTag = (e) => {
                        if (e) {
                            e.preventDefault();
                            e.stopPropagation();
                        }

                        const trimmed = inputValue.trim();

                        if (trimmed) {
                            // Exact match check for long URLs
                            const isDuplicate = currentValue.some(
                                (item) => item.trim() === trimmed
                            );

                            if (!isDuplicate) {
                                onChange([...currentValue, trimmed]);
                                setInputValue('');
                            }
                        }
                    };

                    const handleKeyDown = (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddTag(e);
                        }
                    };

                    const handleRemoveTag = (e, indexToRemove) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const updated = currentValue.filter((_, index) => index !== indexToRemove);
                        onChange(updated);
                    };

                    return (
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={placeholder || 'Paste URL and press Enter...'}
                                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617] text-[#1E293B] dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#06B6D4] transition"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddTag}
                                    className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#2563EB] hover:opacity-90 transition cursor-pointer shrink-0"
                                >
                                    Add
                                </button>
                            </div>

                            {/* Tag Chips Display Container */}
                            {currentValue.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-1 max-w-full">
                                    {currentValue.map((tag, index) => (
                                        <span
                                            key={`${index}-${tag.slice(0, 20)}`}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-[#06B6D4] dark:text-[#22D3EE] border border-cyan-200 dark:border-cyan-800/50 max-w-full"
                                        >
                                            {/* Truncates long URL strings safely */}
                                            <span className="truncate max-w-[220px] sm:max-w-[300px]" title={tag}>
                                                {tag}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={(e) => handleRemoveTag(e, index)}
                                                className="hover:text-red-500 dark:hover:text-red-400 focus:outline-none transition cursor-pointer shrink-0 font-bold ml-1"
                                                aria-label="Remove tag"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }}
            />

            {error && (
                <span className="text-xs text-red-500 dark:text-red-400">
                    {error.message}
                </span>
            )}
        </div>
    );
};

export default TagInput;