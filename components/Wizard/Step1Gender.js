"use client";

import WizardStep from './WizardStep';
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
            <h2 className="text-3xl font-heading mb-6 text-center text-primary neon-text">
                Select Gender
            </h2>
            <div className="grid grid-cols-2 gap-6">
                <Card
                    label="Male"
                    icon="👨"
                    selected={formData.gender === 'male'}
                    onClick={() => handleSelect('male')}
                    color="bg-blue-500/10"
                />
                <Card
                    label="Female"
                    icon="👩"
                    selected={formData.gender === 'female'}
                    onClick={() => handleSelect('female')}
                    color="bg-pink-500/10"
                />
            </div>
        </WizardStep>
    );
}

function Card({ label, icon, selected, onClick, color }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
                h-48 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all
                ${selected ? 'border-primary shadow-neon bg-white/10' : 'border-white/10 glass'}
                ${color}
            `}
        >
            <span className="text-6xl">{icon}</span>
            <span className="text-xl font-bold">{label}</span>
        </motion.button>
    );
}
