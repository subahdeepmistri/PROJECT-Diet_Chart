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
        if (!formData.age || !formData.weight || !formData.height) {
            alert("Please fill all fields");
            return;
        }
        onGenerate(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Your Details</h2>

            <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Age (years)</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="e.g. 25" required />
                </div>

                <div className={styles.field}>
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label>Weight (kg)</label>
                    <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g. 70" required />
                </div>

                <div className={styles.field}>
                    <label>Height (cm)</label>
                    <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 175" required />
                </div>
            </div>

            <div className={styles.field}>
                <label>Activity Level</label>
                <select name="activity" value={formData.activity} onChange={handleChange}>
                    <option value="sedentary">Sedentary (No exercise)</option>
                    <option value="light">Lightly Active (1-3 days/week)</option>
                    <option value="moderate">Moderately Active (3-5 days/week)</option>
                    <option value="active">Very Active (6-7 days/week)</option>
                    <option value="extremely">Extremely Active</option>
                </select>
            </div>

            <div className={styles.field}>
                <label>Fitness Goal</label>
                <select name="goal" value={formData.goal} onChange={handleChange}>
                    <option value="fatLoss">Fat Loss</option>
                    <option value="muscleGain">Muscle Gain</option>
                    <option value="weightGain">Weight Gain</option>
                </select>
            </div>

            <div className={styles.field}>
                <label>Diet Preference</label>
                <select name="preference" value={formData.preference} onChange={handleChange}>
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                    <option value="both">Both (Flexitarian)</option>
                </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
                Generate My Plan
            </button>
        </form>
    );
}
