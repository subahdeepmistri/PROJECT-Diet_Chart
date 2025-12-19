import { useState } from 'react';
import styles from './MealCard.module.css';

export default function MealCard({ title, items, icon, onSwap }) {
    const [isOpen, setIsOpen] = useState(false);

    // Calculate aggregate macros for the meal slot
    const totalMacros = items.reduce((acc, item) => ({
        calories: acc.calories + item.calories,
        protein: acc.protein + item.protein,
        carbs: acc.carbs + item.carbs,
        fats: acc.fats + item.fats
    }), { calories: 0, protein: 0, carbs: 0, fats: 0 });

    const mainItemName = items.map(i => i.name).join(' + ');

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerContent} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.topRow}>
                        <span className={styles.icon}>{icon}</span>
                        <span className={styles.mealType}>{title}</span>
                    </div>
                    <h3 className={styles.mealName}>{mainItemName}</h3>
                    <div className={styles.macros}>
                        <span className={styles.tag}>🔥 {totalMacros.calories} kcal</span>
                        <span className={styles.tag}>P: {totalMacros.protein}g</span>
                        <span className={styles.tag}>C: {totalMacros.carbs}g</span>
                        <span className={styles.tag}>F: {totalMacros.fats}g</span>
                    </div>
                </div>

                <button
                    className={styles.swapBtn}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onSwap) onSwap();
                    }}
                    title="Replace Dish"
                >
                    🔄
                </button>

                <div className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '−' : '+'}
                </div>
            </div>

            {isOpen && (
                <div className={styles.details}>
                    {items.map((item, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
                                {item.name}
                            </h4>

                            <h5>Ingredients</h5>
                            <ul>
                                {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                            </ul>

                            <h5 style={{ marginTop: '0.5rem' }}>Preparation</h5>
                            <ol>
                                {item.steps.map((step, i) => <li key={i}>{step}</li>)}
                            </ol>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
