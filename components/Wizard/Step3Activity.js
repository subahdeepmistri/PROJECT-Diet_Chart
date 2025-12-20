"use client";

import WizardStep from './WizardStep';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';

const levels = [
    { id: 'sedentary', icon: '🛋️', label: 'Sedentary', desc: 'Little to no exercise' },
    { id: 'light', icon: '🚶', label: 'Light', desc: '1-3 days/week' },
    { id: 'moderate', icon: '🏃', label: 'Moderate', desc: '3-5 days/week' },
    { id: 'active', icon: '🏋️', label: 'Active', desc: '6-7 days/week' },
    { id: 'extremely', icon: '🔥', label: 'Athlete', desc: '2x per day' }
];

export default function Step3Activity() {
    const { formData, updateData, nextStep, prevStep } = useWizard();

    const handleSelect = (id) => {
        updateData('activity', id);
        setTimeout(nextStep, 300);
    };

    return (
        <WizardStep>
            <h2 className="text-3xl font-heading mb-6 text-center text-primary">Activity Level</h2>
            <div className="grid grid-cols-1 gap-4">
                {levels.map((lvl) => (
                    <motion.button
                        key={lvl.id}
                        onClick={() => handleSelect(lvl.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                            p-4 rounded-xl text-left flex items-center gap-4 border transition-all
                            ${formData.activity === lvl.id ? 'border-primary bg-primary/10 shadow-neon' : 'border-slate-700 glass hover:bg-white/5'}
                        `}
                    >
                        <span className="text-4xl">{lvl.icon}</span>
                        <div>
                            <h3 className="font-bold text-lg">{lvl.label}</h3>
                            <p className="text-sm text-muted">{lvl.desc}</p>
                        </div>
                    </motion.button>
                ))}
            </div>

            <div className="flex justify-start mt-6">
                <button onClick={prevStep} className="px-6 py-2 rounded-full border border-slate-600 text-muted hover:text-white transition">
                    Back
                </button>
            </div>
        </WizardStep>
    );
}
