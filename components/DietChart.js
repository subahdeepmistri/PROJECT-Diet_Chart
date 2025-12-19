import styles from './DietChart.module.css';
import MealCard from './MealCard';

export default function DietChart({ plan, onReset }) {
    const { meals, target, total } = plan;

    return (
        <div className={styles.container}>
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
                <div className={styles.diff} style={{ color: total < target ? 'var(--secondary)' : 'var(--primary)' }}>
                    {total < target ? `Deficit: ${target - total}` : `Surplus: ${total - target}`} kcal
                </div>
            </header>

            <div className={styles.timeline}>
                <MealCard title="Breakfast" meal={meals.breakfast} />
                <MealCard title="Lunch" meal={meals.lunch} />
                <MealCard title="Snack" meal={meals.snack} />
                <MealCard title="Dinner" meal={meals.dinner} />
            </div>

            <button onClick={onReset} className={styles.resetBtn}>
                Create New Plan
            </button>
        </div>
    );
}
