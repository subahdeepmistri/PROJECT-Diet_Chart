"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { WizardProvider, useWizard } from '@/components/Wizard/WizardContext';
import WizardContainer from '@/components/Wizard/WizardContainer';
import ResultsDashboard from '@/components/ResultsDashboard';
import HeroSection from '@/components/HeroSection';
import SamplePreview from '@/components/SamplePreview';
import TrustBadges from '@/components/TrustBadges';
import { calculateDailyCalories } from '@/lib/calculator';
import { generateMealPlan, getAlternativeMeal, calculatePlanTotals } from '@/lib/generator';

// Wrapper to bridge Context and Page Logic
function AppContent() {
  const { isFinished, formData } = useWizard();
  const [plan, setPlan] = useState(null);
  const [showWizard, setShowWizard] = useState(false);
  const wizardRef = useRef(null);

  // Memoized generate function to avoid stale closures
  const handleGenerate = useCallback((data) => {
    if (!data) return;

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
  }, []);

  // Effect to generate plan when wizard finishes
  useEffect(() => {
    if (isFinished && formData) {
      handleGenerate(formData);
    }
  }, [isFinished, formData, handleGenerate]);

  const handleGetStarted = useCallback(() => {
    setShowWizard(true);
    // Smooth scroll to wizard after state update
    setTimeout(() => {
      wizardRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }, []);

  // Memoized swap handler with defensive checks
  const handleSwap = useCallback((mealType) => {
    if (!plan?.mealPlan) return;

    const mealArray = plan.mealPlan[mealType];
    if (!mealArray || !Array.isArray(mealArray) || mealArray.length === 0) return;

    const currentMeal = mealArray[0];
    const currentId = currentMeal?.id ?? null;

    // Get alternative meal
    const newMeal = getAlternativeMeal(mealType, currentId, plan.user?.preference || 'both');

    if (!newMeal) return;

    const updatedMealPlan = { ...plan.mealPlan, [mealType]: [newMeal] };
    const newTotals = calculatePlanTotals(updatedMealPlan);

    setPlan(prev => ({
      ...prev,
      mealPlan: updatedMealPlan,
      macros: newTotals
    }));
  }, [plan]);

  // Show results dashboard if plan is generated
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
      {/* Hero Section */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* Sample Preview - only show if wizard not started */}
      {!showWizard && <SamplePreview />}

      {/* Wizard Section */}
      <section
        ref={wizardRef}
        id="wizard-section"
        className="py-12 scroll-mt-8"
      >
        {showWizard ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Let's Build Your Plan
              </h2>
              <p className="text-slate-400">
                Answer a few quick questions to get your personalized diet
              </p>
            </div>
            <WizardContainer />
          </>
        ) : (
          <div className="text-center">
            <button
              onClick={handleGetStarted}
              className="btn-neon text-lg px-10 py-4 inline-flex items-center gap-2 group"
            >
              Get Started Now
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            {/* Trust Badge */}
            <p className="mt-3 text-sm text-slate-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Free · No signup required
            </p>
          </div>
        )}
      </section>

      {/* Trust Badges & Footer */}
      <TrustBadges />
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
