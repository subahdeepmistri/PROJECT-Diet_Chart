"use client";

import WizardStep from './WizardStep';
import StepHeader from './StepHeader';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';

const levels = [
    {
        id: 'sedentary',
        icon: '🛋️',
        label: 'Sedentary',
        desc: 'Little to no exercise',
        detail: 'Desk job, minimal physical activity'
    },
    {
        id: 'light',
        icon: '🚶',
        label: 'Lightly Active',
        desc: '1-3 days/week',
        detail: 'Light walks, occasional workouts'
    },
    {
        id: 'moderate',
        icon: '🏃',
        label: 'Moderately Active',
        desc: '3-5 days/week',
        detail: 'Regular gym sessions, active lifestyle'
    },
    {
        id: 'active',
        icon: '🏋️',
        label: 'Very Active',
        desc: '6-7 days/week',
        detail: 'Intense workouts, physically demanding job'
    },
    {
        id: 'extremely',
        icon: '🔥',
        label: 'Athlete',
        desc: '2x per day',
        detail: 'Professional athlete, extreme training'
    }
];

export default function Step3Activity() {
    const { formData, updateData, nextStep, prevStep } = useWizard();

    const handleSelect = (id) => {
        updateData('activity', id);
        setTimeout(nextStep, 300);
    };

    return (
        <WizardStep>
            <StepHeader
                step={3}
                total={5}
                section="Fitness Profile"
                title="How Active Are You?"
                helper="This helps us calculate your daily calorie needs. Pick the option closest to your typical week."
            />

            <div className="grid grid-cols-1 gap-3">
                {levels.map((lvl, index) => (
                    <motion.button
                        key={lvl.id}
                        onClick={() => handleSelect(lvl.id)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                            p-4 rounded-xl text-left flex items-center gap-4 border transition-all group
                            ${formData.activity === lvl.id
                                ? 'border-primary bg-primary/10 shadow-neon'
                                : 'border-slate-700 glass hover:bg-white/5 hover:border-slate-600'
                            }
                        `}
                    >
                        <span className="text-3xl md:text-4xl">{lvl.icon}</span>
                        <div className="flex-1">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                {lvl.label}
                                {formData.activity === lvl.id && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-primary text-sm"
                                    >
                                        ✓
                                    </motion.span>
                                )}
                            </h3>
                            <p className="text-sm text-slate-400">{lvl.desc}</p>
                            <p className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {lvl.detail}
                            </p>
                        </div>
                        <svg
                            className={`w-5 h-5 transition-all ${formData.activity === lvl.id ? 'text-primary' : 'text-slate-600 group-hover:text-slate-400'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                ))}
            </div>

            <div className="flex justify-start mt-6">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>
        </WizardStep>
    );
}
