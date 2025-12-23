"use client";

import WizardStep from './WizardStep';
import StepHeader from './StepHeader';
import { useWizard } from './WizardContext';
import { useState } from 'react';

export default function Step2Stats() {
    const { formData, updateData, nextStep, prevStep } = useWizard();
    const [editingField, setEditingField] = useState(null);

    const handleManualInput = (field, value) => {
        const numValue = parseInt(value);
        if (!isNaN(numValue)) {
            const limits = {
                age: { min: 15, max: 80 },
                weight: { min: 30, max: 150 },
                height: { min: 120, max: 220 }
            };
            const clampedValue = Math.max(limits[field].min, Math.min(limits[field].max, numValue));
            updateData(field, clampedValue);
        }
        setEditingField(null);
    };

    return (
        <WizardStep>
            <StepHeader
                step={2}
                total={5}
                section="Personal Info"
                title="About You"
                helper="Enter your current measurements. This helps us calculate your daily calorie needs accurately."
            />

            <div className="space-y-6 glass-card p-6">
                {/* Age */}
                <SliderField
                    label="Your Age"
                    value={formData.age}
                    unit="yrs"
                    min={15}
                    max={80}
                    onChange={(val) => updateData('age', val)}
                    editing={editingField === 'age'}
                    onEdit={() => setEditingField('age')}
                    onManualSubmit={(val) => handleManualInput('age', val)}
                    icon="🎂"
                />

                {/* Weight */}
                <SliderField
                    label="Current Weight"
                    value={formData.weight}
                    unit="kg"
                    min={30}
                    max={150}
                    onChange={(val) => updateData('weight', val)}
                    editing={editingField === 'weight'}
                    onEdit={() => setEditingField('weight')}
                    onManualSubmit={(val) => handleManualInput('weight', val)}
                    icon="⚖️"
                />

                {/* Height */}
                <SliderField
                    label="Your Height"
                    value={formData.height}
                    unit="cm"
                    min={120}
                    max={220}
                    onChange={(val) => updateData('height', val)}
                    editing={editingField === 'height'}
                    onEdit={() => setEditingField('height')}
                    onManualSubmit={(val) => handleManualInput('height', val)}
                    icon="📏"
                />
            </div>

            {/* Helper tip */}
            <p className="text-center text-xs text-slate-500 mt-4">
                💡 Click on any value to type it manually
            </p>

            <div className="flex justify-between mt-8">
                <button onClick={prevStep} className="px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-800 transition flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <button onClick={nextStep} className="btn-neon flex items-center gap-2">
                    Continue
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </WizardStep>
    );
}

function SliderField({ label, value, unit, min, max, onChange, editing, onEdit, onManualSubmit, icon }) {
    const [inputValue, setInputValue] = useState(value.toString());

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onManualSubmit(inputValue);
        } else if (e.key === 'Escape') {
            onManualSubmit(value);
        }
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <label className="text-slate-400 flex items-center gap-2">
                    <span>{icon}</span>
                    {label}
                </label>
                {editing ? (
                    <input
                        type="number"
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={() => onManualSubmit(inputValue)}
                        onKeyDown={handleKeyDown}
                        className="w-20 bg-slate-800 border border-primary rounded-lg px-2 py-1 text-center text-xl font-bold text-primary focus:outline-none"
                    />
                ) : (
                    <button
                        onClick={onEdit}
                        className="text-xl font-bold text-white hover:text-primary transition cursor-pointer group flex items-center gap-1"
                    >
                        {value} <span className="text-slate-400">{unit}</span>
                        <svg className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                )}
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-slate-600">
                <span>{min} {unit}</span>
                <span>{max} {unit}</span>
            </div>
        </div>
    );
}
