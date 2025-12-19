"use client";

import { useState } from 'react';
import InputForm from '@/components/InputForm';
import DietChart from '@/components/DietChart';
import { calculateDailyCalories } from '@/lib/calculator';
import { generateMealPlan } from '@/lib/generator';

export default function Home() {
  const [plan, setPlan] = useState(null);

  const handleGenerate = (formData) => {
    const calories = calculateDailyCalories(
      formData.age,
      formData.gender,
      formData.weight,
      formData.height,
      formData.activity,
      formData.goal
    );

    const generatedPlan = generateMealPlan(calories, formData.preference);
    setPlan(generatedPlan);
  };

  return (
    <main style={{ minHeight: '100vh', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <h1 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2rem' }}>Indian Fitness Diet</h1>
        <p style={{ color: 'var(--text-muted)' }}>Get your personalized meal plan in seconds.</p>
      </header>

      {plan ? (
        <DietChart plan={plan} onReset={() => setPlan(null)} />
      ) : (
        <InputForm onGenerate={handleGenerate} />
      )}
    </main>
  );
}
