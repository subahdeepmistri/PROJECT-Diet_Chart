"use client";

import { createContext, useContext, useState } from 'react';

const WizardContext = createContext();

export function WizardProvider({ children }) {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        gender: '',
        age: 25,
        height: 170,
        weight: 70,
        activity: '',
        goal: '',
        goalIntensity: 0, // for slider
        preference: 'both' // veg, non-veg, vegan, both
    });
    const [isFinished, setIsFinished] = useState(false);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => Math.max(0, prev - 1));

    const updateData = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const finishWizard = () => setIsFinished(true);

    const restart = () => {
        setStep(0);
        setIsFinished(false);
    };

    return (
        <WizardContext.Provider value={{
            step,
            setStep,
            nextStep,
            prevStep,
            formData,
            updateData,
            isFinished,
            finishWizard,
            restart
        }}>
            {children}
        </WizardContext.Provider>
    );
}

export const useWizard = () => useContext(WizardContext);
