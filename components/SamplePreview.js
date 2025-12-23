"use client";

import { motion } from "framer-motion";

const sampleMeals = [
    {
        meal: "Breakfast",
        dish: "Vegetable Poha",
        calories: 320,
        protein: 8,
        carbs: 52,
        fat: 10,
        emoji: "🍚",
        time: "8:00 AM"
    },
    {
        meal: "Lunch",
        dish: "Dal Tadka + Rice",
        calories: 580,
        protein: 18,
        carbs: 85,
        fat: 16,
        emoji: "🍛",
        time: "1:00 PM"
    },
    {
        meal: "Snack",
        dish: "Roasted Chana",
        calories: 150,
        protein: 8,
        carbs: 22,
        fat: 3,
        emoji: "🥜",
        time: "5:00 PM"
    },
    {
        meal: "Dinner",
        dish: "Paneer Bhurji + Roti",
        calories: 450,
        protein: 22,
        carbs: 38,
        fat: 24,
        emoji: "🫓",
        time: "8:00 PM"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function SamplePreview() {
    const totalCalories = sampleMeals.reduce((sum, meal) => sum + meal.calories, 0);

    return (
        <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                        Here's What Your Plan Looks Like
                    </h2>
                    <p className="text-slate-400">
                        A sample day from our AI-generated Indian diet plan
                    </p>
                </motion.div>

                {/* Total Calories Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <div className="glass-card px-6 py-3 inline-flex items-center gap-3">
                        <span className="text-3xl">🔥</span>
                        <div>
                            <div className="text-2xl font-bold text-primary">{totalCalories} kcal</div>
                            <div className="text-xs text-slate-500">Daily Target</div>
                        </div>
                    </div>
                </motion.div>

                {/* Meal Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {sampleMeals.map((meal, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="glass-card p-5 text-center group relative overflow-hidden"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Content */}
                            <div className="relative">
                                <div className="text-4xl mb-3">{meal.emoji}</div>
                                <div className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                                    {meal.meal}
                                </div>
                                <h3 className="font-semibold text-white text-sm mb-2 line-clamp-1">
                                    {meal.dish}
                                </h3>
                                <div className="text-lg font-bold text-primary mb-2">
                                    {meal.calories} kcal
                                </div>

                                {/* Macros */}
                                <div className="flex justify-center gap-2 text-xs text-slate-500">
                                    <span className="px-2 py-0.5 rounded bg-slate-800">P:{meal.protein}g</span>
                                    <span className="px-2 py-0.5 rounded bg-slate-800">C:{meal.carbs}g</span>
                                </div>

                                {/* Time */}
                                <div className="mt-3 text-xs text-slate-600">
                                    {meal.time}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm text-slate-500 mt-8"
                >
                    ✨ Your actual plan will be customized based on your goals and preferences
                </motion.p>
            </div>
        </section>
    );
}
