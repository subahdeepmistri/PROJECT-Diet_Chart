"use client";

import WizardStep from './WizardStep';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';

const goals = [
    { id: 'fatLoss', icon: '🔥', label: 'Fat Loss', desc: 'Burn fat, maintain muscle.' },
    { id: 'maintain', icon: '⚖️', label: 'Maintenance', desc: 'Stay healthy & fit.' },
    { id: 'muscleGain', icon: '💪', label: 'Muscle Gain', desc: 'Build size & strength.' },
];

export default function Step4Goal() {
    const { formData, updateData, nextStep, prevStep, finishWizard } = useWizard();

    return (
        <WizardStep>
            <h2 className="text-3xl font-heading mb-6 text-center text-primary">Your Goal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {goals.map((g) => (
                    <motion.button
                        key={g.id}
                        onClick={() => updateData('goal', g.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            h-48 rounded-2xl border flex flex-col items-center justify-center p-4 gap-2 transition-all
                            ${formData.goal === g.id ? 'border-primary bg-primary/10 shadow-neon' : 'border-slate-700 glass'}
                        `}
                    >
                        <span className="text-5xl mb-2">{g.icon}</span>
                        <h3 className="font-bold text-xl">{g.label}</h3>
                        <p className="text-sm text-muted text-center">{g.desc}</p>
                    </motion.button>
                ))}
            </div>

            {/* Target Weight Input (Only for Gain/Loss) */}
            {['fatLoss', 'muscleGain', 'weightGain'].includes(formData.goal) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 glass rounded-2xl border border-primary/20"
                >
                    <label className="block text-center text-lg mb-4 text-slate-300">
                        {formData.goal === 'fatLoss' ? 'How much weight do you want to lose?' : 'How much weight do you want to gain?'}
                    </label>
                    <div className="flex items-center justify-center gap-4">
                        <input
                            type="number"
                            className="w-32 bg-slate-900 border border-slate-700 rounded-xl p-3 text-center text-2xl font-bold text-primary focus:border-primary focus:outline-none"
                            placeholder="kg"
                            value={formData.targetWeight || ''}
                            onChange={(e) => updateData('targetWeight', e.target.value)}
                        />
                        <span className="text-xl font-bold text-slate-500">KG</span>
                    </div>
                </motion.div>
            )}

            <div className="flex justify-between mt-8">
                <button onClick={prevStep} className="px-6 py-2 rounded-full border border-slate-600 text-muted hover:text-white transition">
                    Back
                </button>
                <button
                    onClick={finishWizard}
                    disabled={!formData.goal || (formData.goal !== 'maintain' && !formData.targetWeight)}
                    className="btn-neon px-8 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-neon"
                >
                    Generate Plan ✨
                </button>
            </div>
        </WizardStep>
    );
}
