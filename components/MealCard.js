import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortionControl, { adjustMacros } from './PortionControl';

export default function MealCard({ title, items = [], icon, onSwap, onPortionChange, portion = 1.0, delay = 0 }) {
    const [isOpen, setIsOpen] = useState(false);

    // Defensive check: Ensure items is an array and filter out nulls/undefined
    const safeItems = (Array.isArray(items) ? items : []).filter(Boolean);

    // Calculate base macros for the meal slot
    const baseMacros = safeItems.reduce((acc, item) => {
        if (!item) return acc;
        return {
            calories: acc.calories + (item.calories || 0),
            protein: acc.protein + (item.protein || 0),
            carbs: acc.carbs + (item.carbs || 0),
            fats: acc.fats + (item.fats || 0)
        };
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });

    // Apply portion multiplier
    const totalMacros = adjustMacros(baseMacros, portion);

    const mainItemName = safeItems.map(i => i.name).join(' + ');

    // Check if portion is modified
    const isPortionModified = portion !== 1.0;

    return (
        <motion.div
            className="md:ml-8 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
        >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute -left-[39px] top-6 w-5 h-5 rounded-full bg-slate-900 border-2 border-primary items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>

            <div className="glass-card hover:bg-slate-800/40 transition-all duration-300 border border-white/5 overflow-hidden rounded-xl">
                <div className="p-5">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <span className="text-3xl filter drop-shadow-lg">{icon}</span>
                            <div>
                                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1 block">{title}</span>
                                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{mainItemName}</h3>
                                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                    {/* Calories Badge */}
                                    <motion.span
                                        key={totalMacros.calories}
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/15 text-primary font-semibold"
                                    >
                                        🔥 {totalMacros.calories} kcal
                                        {isPortionModified && (
                                            <span className="text-primary-300 text-[10px]">
                                                ({portion > 1 ? '+' : ''}{Math.round((portion - 1) * 100)}%)
                                            </span>
                                        )}
                                    </motion.span>

                                    {/* Macro Pills */}
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-400/15 text-red-400 font-medium">
                                        P: {totalMacros.protein}g
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-400/15 text-blue-400 font-medium">
                                        C: {totalMacros.carbs}g
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-400/15 text-amber-400 font-medium">
                                        F: {totalMacros.fats}g
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 justify-end mt-3 md:mt-0">
                            {/* Swap Button - 44px for mobile touch */}
                            <button
                                className="w-11 h-11 min-w-[44px] rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-400 hover:text-primary hover:border-primary hover:shadow-glow transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onSwap) onSwap();
                                }}
                                title="Replace Dish"
                                aria-label="Replace this dish with an alternative"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
                            </button>

                            {/* Expand Button - 44px for mobile touch */}
                            <motion.button
                                className="w-11 h-11 min-w-[44px] rounded-full flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 transition-all"
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                onClick={() => setIsOpen(!isOpen)}
                                title={isOpen ? "Hide details" : "Show details"}
                                aria-label={isOpen ? "Collapse recipe details" : "Expand recipe details"}
                                aria-expanded={isOpen}
                            >
                                <span aria-hidden="true">▼</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Portion Control Row */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <PortionControl
                            portion={portion}
                            onChange={(newPortion) => {
                                if (onPortionChange) onPortionChange(newPortion);
                            }}
                        />

                        {/* Reset button if portion modified */}
                        {isPortionModified && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={() => onPortionChange && onPortionChange(1.0)}
                                className="text-xs text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Reset
                            </motion.button>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-slate-900/40 border-t border-white/5"
                        >
                            <div className="p-5 pt-0">
                                {safeItems.map((item, idx) => (
                                    <div key={idx} className="mt-6 first:mt-4">
                                        {safeItems.length > 1 && (
                                            <h4 className="text-primary font-medium mb-3 pb-2 border-b border-white/10">{item.name}</h4>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">Ingredients</h5>
                                                <ul className="space-y-1">
                                                    {(item.ingredients || []).map((ing, i) => (
                                                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                            <span className="text-primary/60 mt-1.5 text-[8px]">●</span>
                                                            {ing}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">Preparation</h5>
                                                <ol className="space-y-2">
                                                    {(item.instructions || item.steps || []).map((step, i) => (
                                                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                            <span className="font-mono text-primary/60 text-xs mt-0.5">{i + 1}.</span>
                                                            {step}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
