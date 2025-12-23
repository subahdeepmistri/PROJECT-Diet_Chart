"use client";

import { motion } from 'framer-motion';

/**
 * Reusable step header component for wizard forms
 * Provides consistent layout with step indicator, title, and helper text
 */
export default function StepHeader({
    step,
    total = 5,
    section,
    title,
    helper,
    icon
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
        >
            {/* Step Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    Step {step} of {total}
                </span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span className="text-xs text-primary/70">
                    {section}
                </span>
            </div>

            {/* Title with optional icon */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white flex items-center justify-center gap-3">
                {icon && <span className="text-3xl">{icon}</span>}
                {title}
            </h2>

            {/* Helper Text */}
            {helper && (
                <p className="text-sm text-slate-400 max-w-md mx-auto mt-3 leading-relaxed">
                    {helper}
                </p>
            )}
        </motion.div>
    );
}
