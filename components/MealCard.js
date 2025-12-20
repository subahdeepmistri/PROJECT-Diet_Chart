import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MealCard({ title, items = [], icon, onSwap, delay = 0 }) {
    const [isOpen, setIsOpen] = useState(false);

    // Defensive check: Ensure items is an array and filter out nulls/undefined
    const safeItems = (Array.isArray(items) ? items : []).filter(Boolean);

    // Calculate aggregate macros for the meal slot
    const totalMacros = safeItems.reduce((acc, item) => {
        if (!item) return acc;
        return {
            calories: acc.calories + (item.calories || 0),
            protein: acc.protein + (item.protein || 0),
            carbs: acc.carbs + (item.carbs || 0),
            fats: acc.fats + (item.fats || 0)
        };
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });

    const mainItemName = safeItems.map(i => i.name).join(' + ');

    return (
        <motion.div
            className="md:ml-8 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
        >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute -left-[39px] top-6 w-5 h-5 rounded-full bg-slate-900 border-2 border-neon-green items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
            </div>

            <div className="glass-card hover:bg-slate-800/40 transition-all duration-300 border border-white/5 overflow-hidden rounded-xl">
                <div className="p-5">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className="flex items-start gap-4 flex-1">
                            <span className="text-3xl filter drop-shadow-lg">{icon}</span>
                            <div>
                                <span className="text-xs font-bold text-neon-green tracking-wider uppercase mb-1 block">{title}</span>
                                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{mainItemName}</h3>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs md:text-sm">
                                    <span className="text-orange-400 font-medium">🔥 {totalMacros.calories} kcal</span>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-slate-300">P: {totalMacros.protein}g</span>
                                    <span className="text-slate-300">C: {totalMacros.carbs}g</span>
                                    <span className="text-slate-300">F: {totalMacros.fats}g</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 justify-end mt-2 md:mt-0">
                            <button
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-slate-400 hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onSwap) onSwap();
                                }}
                                title="Replace Dish"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
                            </button>

                            <motion.div
                                className="w-8 h-8 flex items-center justify-center text-slate-500"
                                animate={{ rotate: isOpen ? 180 : 0 }}
                            >
                                ▼
                            </motion.div>
                        </div>
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
                                            <h4 className="text-neon-green font-medium mb-3 pb-2 border-b border-white/10">{item.name}</h4>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">Ingredients</h5>
                                                <ul className="space-y-1">
                                                    {(item.ingredients || []).map((ing, i) => (
                                                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                            <span className="text-neon-green/60 mt-1.5 text-[8px]">●</span>
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
                                                            <span className="font-mono text-neon-green/60 text-xs mt-0.5">{i + 1}.</span>
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
