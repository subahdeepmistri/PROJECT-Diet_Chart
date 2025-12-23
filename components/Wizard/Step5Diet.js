"use client";

import WizardStep from './WizardStep';
import StepHeader from './StepHeader';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';
import MealCountToggle from '../MealCountToggle';

const preferences = [
    {
        id: 'both',
        label: 'Everything',
        icon: '🍽️',
        desc: 'Veg + Non-veg dishes',
        color: 'hover:border-amber-400'
    },
    {
        id: 'veg',
        label: 'Vegetarian',
        icon: '🥦',
        desc: 'Plant-based + dairy',
        color: 'hover:border-green-400'
    },
    {
        id: 'non-veg',
        label: 'Non-Veg Focus',
        icon: '🍗',
        desc: 'Meat, fish & eggs',
        color: 'hover:border-orange-400'
    },
    {
        id: 'vegan',
        label: 'Vegan',
        icon: '🥑',
        desc: 'No animal products',
        color: 'hover:border-emerald-400'
    },
];

export default function Step5Diet() {
    const { formData, updateData, nextStep, prevStep } = useWizard();

    const handleSelect = (id) => {
        updateData('preference', id);
    };

    return (
        <WizardStep>
            <StepHeader
                step={4}
                total={5}
                section="Diet Preferences"
                title="Food Preferences"
                helper="Select your dietary preference. We'll only suggest dishes that match your choice."
            />

            <div className="grid grid-cols-2 gap-4">
                {preferences.map((p, index) => (
                    <motion.button
                        key={p.id}
                        onClick={() => handleSelect(p.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`
                            h-36 md:h-40 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all
                            ${formData.preference === p.id
                                ? 'border-primary bg-primary/10 shadow-neon'
                                : `border-slate-700 glass ${p.color}`
                            }
                        `}
                    >
                        <span className="text-4xl md:text-5xl">{p.icon}</span>
                        <span className="font-bold text-white">{p.label}</span>
                        <span className="text-xs text-slate-500">{p.desc}</span>
                        {formData.preference === p.id && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-primary text-xs"
                            >
                                ✓ Selected
                            </motion.span>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Meal Count Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 pt-6 border-t border-slate-700/50"
            >
                <MealCountToggle
                    value={formData.mealCount}
                    onChange={(val) => updateData('mealCount', val)}
                />
            </motion.div>

            <div className="mt-8 flex justify-between items-center">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!formData.preference}
                    className="btn-neon text-lg px-8 py-3 shadow-neon disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    Continue
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </WizardStep>
    );
}
