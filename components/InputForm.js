import { useState } from 'react';
import styles from './InputForm.module.css';

export default function InputForm({ onGenerate }) {
    const [formData, setFormData] = useState({
        age: '',
        gender: 'male',
        weight: '',
        height: '',
        activity: 'moderate',
        goal: 'fatLoss',
        preference: 'veg'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.age || !formData.weight || !formData.height) {
            alert("Please fill all fields to generate your plan.");
            return;
        }
        onGenerate(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} id="diet-form">
            <h2 className={styles.title}>Calculate Your Plan</h2>

            {/* Section 1: Personal Info */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>👤 Personal Details</h3>
                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label>Age (years)</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="e.g. 25"
                            min="10"
                            max="100"
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="e.g. 70"
                            min="20"
                            max="200"
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="e.g. 175"
                            min="50"
                            max="250"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Lifestyle */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>🔥 Lifestyle & Activity</h3>
                <div className={styles.field}>
                    <label>How active are you?</label>
                    <select name="activity" value={formData.activity} onChange={handleChange}>
                        <option value="sedentary">Sedentary (Little to no exercise)</option>
                        <option value="light">Lightly Active (Exercise 1-3 days/week)</option>
                        <option value="moderate">Moderately Active (Exercise 3-5 days/week)</option>
                        <option value="active">Very Active (Hard exercise 6-7 days/week)</option>
                        <option value="extremely">Extremely Active (Physical job or training)</option>
                    </select>
                    <p className={styles.helper}>Be honest for accurate calorie results.</p>
                </div>
            </div>

            {/* Section 3: Goal & Diet */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>🎯 Goal & Preference</h3>
                <div className={styles.grid}>
                    <div className={`${styles.field} ${styles.fullWidth}`}>
                        <label>Your Goal</label>
                        <select name="goal" value={formData.goal} onChange={handleChange}>
                            <option value="fatLoss">Fat Loss (Lose Weight)</option>
                            <option value="muscleGain">Muscle Gain (Build Mass)</option>
                            <option value="weightGain">Weight Gain (Bulk Up)</option>
                            <option value="maintain">Maintain Weight</option>
                        </select>
                    </div>

                    <div className={`${styles.field} ${styles.fullWidth}`}>
                        <label>Diet Type</label>
                        <select name="preference" value={formData.preference} onChange={handleChange}>
                            <option value="veg">Vegetarian (Pure Veg)</option>
                            <option value="non-veg">Non-Vegetarian (Eggs/Chicken)</option>
                            <option value="vegan">Vegan (No Dairy/Meat)</option>
                            <option value="both">Flexitarian (Mixed)</option>
                        </select>
                    </div>
                </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
                Generate My Personal Plan →
            </button>
        </form>
    );
}
