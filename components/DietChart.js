import styles from './DietChart.module.css';
import MealCard from './MealCard';

/**
 * Displays the meal plan.
 * @param {Object} props
 * @param {boolean} props.simple - If true, hides the header/stats (used when inside ResultsDashboard)
 */
export default function DietChart({ plan, onReset, simple = false, onSwap }) {
    // The plan object now has 'mealPlan' instead of 'meals', containing arrays
    const { mealPlan, target } = plan;

    // Helper to calculate total calories from the new structure
    const calculateTotal = (mealsObj) => {
        let total = 0;
        Object.values(mealsObj).forEach(arr => {
            arr.forEach(item => total += item.calories);
        });
        return total;
    };

    const total = calculateTotal(mealPlan);

    return (
        <div className={styles.container}>
            {!simple && (
                <header className={styles.header}>
                    <h2>Your Daily Plan</h2>
                    <div className={styles.stats}>
                        <div className={styles.statBox}>
                            <span className={styles.label}>Target</span>
                            <span className={styles.value}>{target}</span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.label}>Planned</span>
                            <span className={styles.value}>{total}</span>
                        </div>
                    </div>
                    {onReset && (
                        <button onClick={onReset} className={styles.resetBtnHeader}>
                            Reset
                        </button>
                    )}
                </header>
            )}

            <div className={styles.timeline}>
                <MealCard title="Breakfast" items={mealPlan.breakfast} icon="🌅" onSwap={() => onSwap('breakfast')} />
                <MealCard title="Lunch" items={mealPlan.lunch} icon="☀️" onSwap={() => onSwap('lunch')} />
                <MealCard title="Snack" items={mealPlan.snack} icon="🍎" onSwap={() => onSwap('snack')} />
                <MealCard title="Dinner" items={mealPlan.dinner} icon="🌙" onSwap={() => onSwap('dinner')} />
            </div>

            {!simple && onReset && (
                <button onClick={onReset} className={styles.resetBtn}>
                    Create New Plan
                </button>
            )}
        </div>
    );
}
