"use client";

import { motion } from "framer-motion";

const benefits = [
    {
        icon: "🍛",
        title: "100% Indian Recipes",
        desc: "Poha, dal, roti, paneer & more"
    },
    {
        icon: "⚡",
        title: "Instant Results",
        desc: "No waiting, no signup required"
    },
    {
        icon: "🎯",
        title: "Goal-Focused",
        desc: "Fat loss, muscle gain, or maintenance"
    },
    {
        icon: "📊",
        title: "Complete Macros",
        desc: "Protein, carbs & fats calculated"
    }
];

export default function HeroSection({ onGetStarted }) {
    const handleCTA = () => {
        if (onGetStarted) {
            onGetStarted();
        } else {
            // Smooth scroll to wizard section
            document.getElementById('wizard-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="relative py-16 md:py-24 px-4">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        AI-Powered Nutrition Planning
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
                >
                    <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                        Your Perfect Indian Diet Plan
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                        — In 60 Seconds
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                >
                    Get a personalized meal plan with desi dishes, exact calories, and macros
                    tailored to your body and goals.
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4"
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="glass-card p-4 text-center hover:border-primary/30"
                        >
                            <div className="text-3xl mb-2">{benefit.icon}</div>
                            <h3 className="font-semibold text-sm text-white mb-1">{benefit.title}</h3>
                            <p className="text-xs text-slate-500">{benefit.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-6"
                >
                    <button
                        onClick={handleCTA}
                        className="btn-neon text-lg px-10 py-4 inline-flex items-center gap-2 group"
                    >
                        Create My Diet Plan
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 pt-4"
                >
                    <span className="flex items-center gap-1">
                        <span>🔒</span> No Signup
                    </span>
                    <span className="flex items-center gap-1">
                        <span>🆓</span> 100% Free
                    </span>
                    <span className="flex items-center gap-1">
                        <span>🤖</span> AI-Powered
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
