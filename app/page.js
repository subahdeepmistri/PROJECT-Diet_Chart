"use client";

import { useState } from 'react';
import InputForm from '@/components/InputForm';
import ResultsDashboard from '@/components/ResultsDashboard';
import { calculateDailyCalories } from '@/lib/calculator';
import { generateMealPlan, getAlternativeMeal, calculatePlanTotals } from '@/lib/generator';
import styles from './page.module.css';

export default function Home() {
  const [plan, setPlan] = useState(null);

  const handleGenerate = (formData) => {
    // 1. Calculate Calories
    const analysis = calculateDailyCalories(
      formData.age,
      formData.gender,
      formData.weight,
      formData.height,
      formData.activity,
      formData.goal
    );

    // 2. Generate Plan
    const generatedPlan = generateMealPlan(
      analysis.targetCalories,
      formData.preference,
      formData.goal,
      analysis
    );

    // 3. Set Full Data
    setPlan({
      ...generatedPlan,
      analysis: analysis, // Pass calculation details to results
      user: formData
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwap = (mealType) => {
    if (!plan) return;

    // Get current meal ID (assuming single item in array for now)
    const currentMeal = plan.mealPlan[mealType][0];

    // Get alternative
    const newMeal = getAlternativeMeal(mealType, currentMeal.id, plan.user.preference);

    // Update plan structure
    const updatedMealPlan = {
      ...plan.mealPlan,
      [mealType]: [newMeal]
    };

    // Recalculate totals
    const newTotals = calculatePlanTotals(updatedMealPlan);

    // Update state
    setPlan(prev => ({
      ...prev,
      mealPlan: updatedMealPlan,
      macros: newTotals
    }));
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.logo}>Diets.in</div>
        </div>
      </header>

      {plan ? (
        /* Results View */
        <div className="container" style={{ padding: '2rem 0' }}>
          <ResultsDashboard plan={plan} onReset={() => setPlan(null)} onSwap={handleSwap} />
        </div>
      ) : (
        /* Landing View */
        <>
          <section className={styles.hero}>
            <div className="container">
              <h1 className={styles.heroTitle}>
                Get your personalized Indian<br />diet plan
              </h1>
              <p className={styles.heroSubtitle}>
                Based on your unique body type, fitness goal, and lifestyle.
                Backed by science, designed for Indian homes.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
              </button>
            </div>
          </section>

          <section className={styles.stepsSection}>
            <div className="container">
              <h2 className={styles.sectionTitle}>How it works</h2>
              <div className={styles.stepsGrid}>
                <div className={styles.stepCard}>
                  <span className={styles.stepIcon}>📝</span>
                  <h3 className={styles.stepTitle}>1. Enter Details</h3>
                  <p className={styles.stepDesc}>Tell us about your body stats and activity level.</p>
                </div>
                <div className={styles.stepCard}>
                  <span className={styles.stepIcon}>🎯</span>
                  <h3 className={styles.stepTitle}>2. Choose Goal</h3>
                  <p className={styles.stepDesc}>Select Fat Loss, Muscle Gain, or Healthy Weight.</p>
                </div>
                <div className={styles.stepCard}>
                  <span className={styles.stepIcon}>🥗</span>
                  <h3 className={styles.stepTitle}>3. Get Plan</h3>
                  <p className={styles.stepDesc}>Receive a custom day-wise meal plan instantly.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="calculator" className={styles.formSection}>
            <div className="container">
              <InputForm onGenerate={handleGenerate} />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
