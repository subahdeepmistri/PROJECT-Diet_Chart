"use client";

import WizardStep from './WizardStep';
import { useWizard } from './WizardContext';

export default function Step2Stats() {
    const { formData, updateData, nextStep, prevStep } = useWizard();

    return (
        <WizardStep>
            <h2 className="text-3xl font-heading mb-8 text-center text-primary">Body Stats</h2>

            <div className="space-y-8 glass-card">
                {/* Age */}
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label className="text-muted">Age</label>
                        <span className="text-xl font-bold">{formData.age} yrs</span>
                    </div>
                    <input
                        type="range" min="15" max="80"
                        value={formData.age}
                        onChange={(e) => updateData('age', parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                {/* Weights */}
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label className="text-muted">Weight</label>
                        <span className="text-xl font-bold">{formData.weight} kg</span>
                    </div>
                    <input
                        type="range" min="30" max="150"
                        value={formData.weight}
                        onChange={(e) => updateData('weight', parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                {/* Height */}
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label className="text-muted">Height</label>
                        <span className="text-xl font-bold">{formData.height} cm</span>
                    </div>
                    <input
                        type="range" min="120" max="220"
                        value={formData.height}
                        onChange={(e) => updateData('height', parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button onClick={prevStep} className="px-6 py-2 rounded-full border border-slate-600 hover:bg-slate-800 transition">
                    Back
                </button>
                <button onClick={nextStep} className="btn-neon">
                    Next
                </button>
            </div>
        </WizardStep>
    );
}
