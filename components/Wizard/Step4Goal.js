"use client";

import WizardStep from './WizardStep';
import StepHeader from './StepHeader';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const goals = [
    {
        id: 'fatLoss',
        icon: '🔥',
        label: 'Fat Loss',
        desc: 'Burn fat while preserving muscle',
        detail: 'Calorie deficit with high protein',
        color: 'hover:border-orange-400'
    },
    {
        id: 'maintain',
        icon: '⚖️',
        label: 'Maintenance',
        desc: 'Stay healthy & maintain weight',
        detail: 'Balanced macros for your lifestyle',
        color: 'hover:border-blue-400'
    },
    {
        id: 'muscleGain',
        icon: '💪',
        label: 'Muscle Gain',
        desc: 'Build size & strength',
        detail: 'Calorie surplus with high protein',
        color: 'hover:border-green-400'
    },
];

export default function Step4Goal() {
    const { formData, updateData, prevStep, finishWizard } = useWizard();
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Small delay for visual feedback
        setTimeout(() => {
            finishWizard();
        }, 500);
    };

    const canGenerate = formData.goal && (formData.goal === 'maintain' || formData.targetWeight);

    return (
        <WizardStep>
            <StepHeader
                step={5}
                total={5}
                section="Fitness Profile"
                title="What's Your Fitness Goal?"
                helper="Choose your primary goal. We'll customize your calories and macros to help you achieve it."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {goals.map((g, index) => (
                    <motion.button
                        key={g.id}
                        onClick={() => updateData('goal', g.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        className={`
                            h-44 md:h-48 rounded-2xl border-2 flex flex-col items-center justify-center p-4 gap-2 transition-all
                            ${formData.goal === g.id
                                ? 'border-primary bg-primary/10 shadow-neon'
                                : `border-slate-700 glass ${g.color}`
                            }
                        `}
                    >
                        <span className="text-5xl mb-2">{g.icon}</span>
                        <h3 className="font-bold text-xl text-white">{g.label}</h3>
                        <p className="text-sm text-slate-400 text-center">{g.desc}</p>
                        {formData.goal === g.id && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-xs text-primary mt-1"
                            >
                                {g.detail}
                            </motion.span>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Target Weight Input (Only for Gain/Loss) */}
            {['fatLoss', 'muscleGain', 'weightGain'].includes(formData.goal) && (
                <motion.div
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    className="mt-8 p-6 glass rounded-2xl border border-primary/20"
                >
                    <label className="block text-center text-lg mb-4 text-slate-300">
                        {formData.goal === 'fatLoss'
                            ? '🎯 How much weight do you want to lose?'
                            : '🎯 How much weight do you want to gain?'
                        }
                    </label>
                    <div className="flex items-center justify-center gap-4">
                        <input
                            type="number"
                            className="w-32 bg-slate-900 border-2 border-slate-700 rounded-xl p-3 text-center text-2xl font-bold text-primary focus:border-primary focus:outline-none transition-colors"
                            placeholder="5"
                            value={formData.targetWeight || ''}
                            onChange={(e) => updateData('targetWeight', e.target.value)}
                            min="1"
                            max="50"
                        />
                        <span className="text-xl font-bold text-slate-500">KG</span>
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-3">
                        💡 Recommended: {formData.goal === 'fatLoss' ? '0.5-1 kg per week' : '0.25-0.5 kg per week'}
                    </p>
                </motion.div>
            )}

            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={prevStep}
                    className="px-6 py-3 rounded-full border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>

                {/* Redesigned CTA Button */}
                <div className="relative">
                    <motion.button
                        onClick={handleGenerate}
                        disabled={!canGenerate || isGenerating}
                        whileHover={canGenerate ? { scale: 1.02 } : {}}
                        whileTap={canGenerate ? { scale: 0.98 } : {}}
                        className={`
                            relative px-8 md:px-10 py-4 rounded-full font-bold text-lg transition-all
                            flex items-center gap-3 group
                            ${canGenerate
                                ? 'bg-primary text-slate-900 shadow-neon hover:shadow-neon-lg'
                                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            }
                            ${isGenerating ? 'animate-pulse' : ''}
                        `}
                    >
                        {isGenerating ? (
                            <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Generating...</span>
                            </>
                        ) : (
                            <>
                                <span>Generate My Diet Plan</span>
                                <motion.span
                                    className="text-xl"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    ✨
                                </motion.span>
                            </>
                        )}
                    </motion.button>

                    {/* Trust badge below button */}
                    <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-slate-500 whitespace-nowrap">
                        🔒 Free · No signup required
                    </p>
                </div>
            </div>

            {/* Spacer for trust badge */}
            <div className="h-8" />
        </WizardStep>
    );
}
