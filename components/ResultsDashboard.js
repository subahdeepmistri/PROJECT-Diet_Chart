import DietChart from './DietChart';
import styles from './ResultsDashboard.module.css';

export default function ResultsDashboard({ plan, onReset, onSwap }) {
    // Use the pre-calculated macros and totals from the generator
    const { analysis, target, mealPlan, summary, tips, macros } = plan;
    const { bmr, tdee, goal } = analysis;

    const goalText = {
        fatLoss: 'Fat Loss',
        muscleGain: 'Muscle Gain',
        weightGain: 'Weight Gain',
        maintain: 'Maintenance'
    };

    // Helper for macro percentage calculation (visual only)
    const getPercent = (val, total) => Math.min(100, Math.round((val / total) * 100));
    // We use the macros provided by the plan, assuming standard calorie conversions for display width
    // But wait, the macros object from generator has raw grams. 
    // Let's rely on the pre-calculated values if available, or just use the grams.

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h2 className={styles.title}>Your AI Diet Plan</h2>
                <p className={styles.subtitle}>
                    Optimized for <strong style={{ color: 'var(--primary)' }}>{goalText[goal]}</strong> based on your metabolism.
                </p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--surface-alt)', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>"{summary}"</p>
                </div>
            </header>

            {/* Key Numbers */}
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.statLabel}>Daily Target</span>
                    <span className={`${styles.statValue} ${styles.highlight}`}>{target} kcal</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.statLabel}>BMR</span>
                    <span className={styles.statValue}>{bmr}</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.statLabel}>Maintenance</span>
                    <span className={styles.statValue}>{tdee}</span>
                </div>
            </div>

            {/* Macros */}
            <div className={styles.macroSection}>
                <h3 className={styles.sectionTitle}>Daily Nutrition Targets</h3>
                <div className={styles.macrosGrid}>
                    {/* Protein */}
                    <div className={styles.macroItem}>
                        <span className={styles.macroLabel}>Protein</span>
                        <span className={styles.macroValue} style={{ color: '#E25822' }}>{macros.protein}g</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `30%`, background: '#E25822' }}
                            />
                        </div>
                    </div>

                    {/* Fats */}
                    <div className={styles.macroItem}>
                        <span className={styles.macroLabel}>Fats</span>
                        <span className={styles.macroValue} style={{ color: '#FBC02D' }}>{macros.fats}g</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `30%`, background: '#FBC02D' }}
                            />
                        </div>
                    </div>

                    {/* Carbs */}
                    <div className={styles.macroItem}>
                        <span className={styles.macroLabel}>Carbs</span>
                        <span className={styles.macroValue} style={{ color: '#1976D2' }}>{macros.carbs}g</span>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `40%`, background: '#1976D2' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tips Section */}
            <div className={styles.macroSection} style={{ marginTop: '-1rem' }}>
                <h3 className={styles.sectionTitle}>AI Health Tips</h3>
                <ul style={{ textAlign: 'left', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                    {tips.map((tip, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{tip}</li>)}
                </ul>
            </div>

            {/* Meal Plan - passing the full plan object which now contains mealPlan with arrays */}
            <DietChart plan={plan} simple={true} onSwap={onSwap} />

            <div className={styles.actions}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    * Recipes are standard servings. Adjust portion sizes to match your exact calorie target.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button onClick={onReset} className={styles.recalcBtn}>
                        ← Change Details
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="btn btn-primary"
                        style={{ fontSize: '0.9rem', padding: '8px 16px' }}
                    >
                        🖨️ Save as PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
