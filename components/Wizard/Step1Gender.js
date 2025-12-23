"use client";

import WizardStep from './WizardStep';
import StepHeader from './StepHeader';
import { useWizard } from './WizardContext';
import { motion } from 'framer-motion';

export default function Step1Gender() {
    const { updateData, nextStep, formData } = useWizard();

    const handleSelect = (gender) => {
        updateData('gender', gender);
        // Add a small delay for visual feedback before auto-advancing
        setTimeout(nextStep, 300);
    };

    return (
        <WizardStep>
            <StepHeader
                step={1}
                total={5}
                section="Personal Info"
                title="Let's Get Started"
                helper="Your gender helps us calculate accurate calorie requirements based on metabolic differences."
            />

            <div className="grid grid-cols-2 gap-6">
                <Card
                    label="Male"
                    icon="👨"
                    selected={formData.gender === 'male'}
                    onClick={() => handleSelect('male')}
                    color="bg-blue-500/10"
                    hoverColor="hover:border-blue-400"
                />
                <Card
                    label="Female"
                    icon="👩"
                    selected={formData.gender === 'female'}
                    onClick={() => handleSelect('female')}
                    color="bg-pink-500/10"
                    hoverColor="hover:border-pink-400"
                />
            </div>

            {/* Quick tip */}
            <p className="text-center text-xs text-slate-500 mt-6">
                💡 Click to select and auto-continue
            </p>
        </WizardStep>
    );
}

function Card({ label, icon, selected, onClick, color, hoverColor }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            className={`
                h-48 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-300
                ${selected
                    ? 'border-primary shadow-neon bg-white/10'
                    : `border-white/10 glass ${hoverColor}`
                }
                ${color}
            `}
        >
            <motion.span
                className="text-6xl"
                animate={selected ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.span>
            <span className="text-xl font-bold">{label}</span>
            {selected && (
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-primary text-sm"
                >
                    ✓ Selected
                </motion.span>
            )}
        </motion.button>
    );
}
