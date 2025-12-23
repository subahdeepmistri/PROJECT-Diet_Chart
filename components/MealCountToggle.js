"use client";

import { motion } from 'framer-motion';

export default function MealCountToggle({ value = "4", onChange }) {
    const options = [
        {
            id: "3",
            label: "3 Meals",
            icon: "🍽️",
            meals: ["Breakfast", "Lunch", "Dinner"],
            description: "Best for intermittent fasting or busy schedules"
        },
        {
            id: "4",
            label: "3 + Snacks",
            icon: "🍽️",
            meals: ["Breakfast", "Lunch", "Snack", "Dinner"],
            description: "Steady energy throughout the day"
        }
    ];

    return (
        <div className="space-y-3">
            <label className="text-slate-400 text-sm flex items-center gap-2">
                <span>🕐</span>
                How many meals per day?
            </label>

            <div className="grid grid-cols-2 gap-3">
                {options.map((option) => (
                    <motion.button
                        key={option.id}
                        onClick={() => onChange(option.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                            p-4 rounded-xl border-2 text-left transition-all
                            ${value === option.id
                                ? 'border-primary bg-primary/10 shadow-neon'
                                : 'border-slate-700 glass hover:border-slate-600'
                            }
                        `}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{option.icon}</span>
                            <span className="font-bold text-white">{option.label}</span>
                            {value === option.id && (
                                <span className="text-primary text-sm ml-auto">✓</span>
                            )}
                        </div>

                        {/* Meal list */}
                        <div className="flex flex-wrap gap-1 mb-2">
                            {option.meals.map((meal, idx) => (
                                <span
                                    key={meal}
                                    className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                                >
                                    {meal}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-500 leading-relaxed">
                            {option.description}
                        </p>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
