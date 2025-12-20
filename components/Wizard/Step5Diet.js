"use client";

import WizardStep from './WizardStep';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';

const preferences = [
    { id: 'both', label: 'Everything', icon: '🍽️' },
    { id: 'veg', label: 'Vegetarian', icon: '🥦' },
    { id: 'non-veg', label: 'Non-Veg', icon: '🍗' },
    { id: 'vegan', label: 'Vegan', icon: '🥑' }, // Added vegan support
];

export default function Step5Diet() {
    const { formData, updateData, nextStep, prevStep } = useWizard();

    return (
        <WizardStep>
            <h2 className="text-3xl font-heading mb-6 text-center text-primary">Diet Preference</h2>
            <div className="grid grid-cols-2 gap-4">
                {preferences.map((p) => (
                    <motion.button
                        key={p.id}
                        onClick={() => updateData('preference', p.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            h-32 rounded-xl border flex flex-col items-center justify-center gap-2
                            ${formData.preference === p.id ? 'border-primary bg-primary/10 shadow-neon' : 'border-slate-700 glass'}
                        `}
                    >
                        <span className="text-4xl">{p.icon}</span>
                        <span className="font-bold">{p.label}</span>
                    </motion.button>
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
                <button onClick={prevStep} className="px-6 py-2 rounded-full border border-slate-600 text-muted hover:text-white transition">
                    Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!formData.preference}
                    className="btn-neon text-lg px-8 shadow-neon disabled:opacity-50"
                >
                    Next Step
                </button>
            </div>
        </WizardStep>
    );
}
