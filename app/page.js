"use client";

import { useState, useEffect } from 'react';
import { WizardProvider, useWizard } from '@/components/Wizard/WizardContext';
import WizardContainer from '@/components/Wizard/WizardContainer';
import ResultsDashboard from '@/components/ResultsDashboard';
import { calculateDailyCalories } from '@/lib/calculator';
import { generateMealPlan, getAlternativeMeal, calculatePlanTotals } from '@/lib/generator';

// Wrapper to bridge Context and Page Logic
function AppContent() {
  const { isFinished, formData } = useWizard();
  const [plan, setPlan] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isFinished && formData) {
      handleGenerate(formData);
    }
  }, [isFinished, formData]);

  const handleGenerate = (data) => {
    // 1. Calculate Calories
    const analysis = calculateDailyCalories(
      data.age,
      data.gender,
      data.weight,
      data.height,
      data.activity,
      data.goal,
      { targetWeight: data.targetWeight }
    );

    // 2. Generate Plan
    const generatedPlan = generateMealPlan(
      analysis.targetCalories,
      data.preference,
      data.goal,
      analysis
    );

    // 3. Set State
    setPlan({
      ...generatedPlan,
      analysis: analysis,
      user: data
    });
  };

  const handleSwap = (mealType) => {
    if (!plan || !plan.mealPlan[mealType]) return;

    const currentMeal = plan.mealPlan[mealType][0];
    const currentId = currentMeal ? currentMeal.id : null;

    // Pass null if no current meal exists, generator should handle it
    const newMeal = getAlternativeMeal(mealType, currentId, plan.user.preference);

    const updatedMealPlan = { ...plan.mealPlan, [mealType]: [newMeal] };
    const newTotals = calculatePlanTotals(updatedMealPlan);

    setPlan(prev => ({
      ...prev,
      mealPlan: updatedMealPlan,
      macros: newTotals
    }));
  };

  if (plan) {
    return (
      <div className="container mx-auto py-8 px-4">
        <ResultsDashboard
          plan={plan}
          onReset={() => window.location.reload()}
          onSwap={handleSwap}
        />
      </div>
    );
  }

  return (
    <>
      <section className="py-12 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI Diet Planner
        </h1>
        <p className="text-muted max-w-lg mx-auto text-lg">
          Premium nutrition plans tailored to your biochemistry.
        </p>
      </section>

      <section className="mt-8">
        <WizardContainer />
      </section>
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black" suppressHydrationWarning>
      <WizardProvider>
        <AppContent />
      </WizardProvider>
    </main>
  );
}
