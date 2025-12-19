import { useState } from 'react';
import styles from './MealCard.module.css';

export default function MealCard({ title, meal }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <span className={styles.mealType}>{title}</span>
                    <h3 className={styles.mealName}>{meal.name}</h3>
                    <div className={styles.macros}>
                        <span>{meal.calories} kcal</span>
                        <span>P: {meal.protein}g</span>
                        <span>C: {meal.carbs}g</span>
                        <span>F: {meal.fats}g</span>
                    </div>
                </div>
                <button className={styles.toggleBtn}>
                    {isOpen ? '−' : '+'}
                </button>
            </div>

            {isOpen && (
                <div className={styles.details}>
                    <h4>Ingredients</h4>
                    <ul>
                        {meal.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                    <h4>Preparation</h4>
                    <ol>
                        {meal.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                </div>
            )}
        </div>
    );
}
