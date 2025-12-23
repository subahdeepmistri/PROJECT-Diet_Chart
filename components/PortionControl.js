"use client";

import { motion } from 'framer-motion';

const PORTION_LEVELS = [
    { value: 0.5, label: 'Half', shortLabel: '½' },
    { value: 0.75, label: 'Light', shortLabel: '¾' },
    { value: 1.0, label: 'Standard', shortLabel: '1x' },
    { value: 1.25, label: 'Large', shortLabel: '1¼' },
    { value: 1.5, label: 'Extra', shortLabel: '1½' }
];

export default function PortionControl({ portion = 1.0, onChange, disabled = false }) {
    const currentIndex = PORTION_LEVELS.findIndex(p => p.value === portion);
    const currentLevel = PORTION_LEVELS[currentIndex] || PORTION_LEVELS[2]; // Default to 1.0x

    const handleDecrease = () => {
        if (currentIndex > 0 && onChange) {
            onChange(PORTION_LEVELS[currentIndex - 1].value);
        }
    };

    const handleIncrease = () => {
        if (currentIndex < PORTION_LEVELS.length - 1 && onChange) {
            onChange(PORTION_LEVELS[currentIndex + 1].value);
        }
    };

    const canDecrease = currentIndex > 0;
    const canIncrease = currentIndex < PORTION_LEVELS.length - 1;

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 mr-1">Portion:</span>

            {/* Decrease Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrease}
                disabled={!canDecrease || disabled}
                className={`
          w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
          transition-all duration-200
          ${canDecrease && !disabled
                        ? 'bg-slate-800 text-white hover:bg-slate-700 hover:text-primary border border-slate-700'
                        : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                    }
        `}
                title="Decrease portion"
            >
                −
            </motion.button>

            {/* Current Portion Display */}
            <motion.div
                key={portion}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="min-w-[80px] text-center"
            >
                <span className="text-sm font-bold text-primary">
                    {currentLevel.shortLabel}
                </span>
                <span className="text-xs text-slate-500 ml-1">
                    ({currentLevel.label})
                </span>
            </motion.div>

            {/* Increase Button */}
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleIncrease}
                disabled={!canIncrease || disabled}
                className={`
          w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
          transition-all duration-200
          ${canIncrease && !disabled
                        ? 'bg-slate-800 text-white hover:bg-slate-700 hover:text-primary border border-slate-700'
                        : 'bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800'
                    }
        `}
                title="Increase portion"
            >
                +
            </motion.button>

            {/* Portion indicator dots */}
            <div className="hidden md:flex items-center gap-1 ml-2">
                {PORTION_LEVELS.map((level, idx) => (
                    <div
                        key={level.value}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex
                            ? 'bg-primary scale-125'
                            : idx < currentIndex
                                ? 'bg-primary/40'
                                : 'bg-slate-700'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

// Helper to calculate adjusted macros
export function adjustMacros(baseMacros, portionMultiplier) {
    return {
        calories: Math.round(baseMacros.calories * portionMultiplier),
        protein: Math.round(baseMacros.protein * portionMultiplier),
        carbs: Math.round(baseMacros.carbs * portionMultiplier),
        fats: Math.round(baseMacros.fats * portionMultiplier)
    };
}
