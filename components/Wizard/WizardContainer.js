"use client";

import { useWizard } from './WizardContext';
import { AnimatePresence } from 'framer-motion';
import Step1Gender from './Step1Gender';
import Step2Stats from './Step2Stats';
import Step3Activity from './Step3Activity';
import Step4Goal from './Step4Goal';
import Step5Diet from './Step5Diet';

export default function WizardContainer() {
    const { step } = useWizard();

    const steps = [
        <Step1Gender key="step1" />,
        <Step2Stats key="step2" />,
        <Step3Activity key="step3" />,
        <Step5Diet key="step5" />,
        <Step4Goal key="step4" />
    ];

    return (
        <div className="w-full max-w-2xl mx-auto p-4 relative min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                {steps[step]}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-8">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                />
            </div>
        </div>
    );
}
