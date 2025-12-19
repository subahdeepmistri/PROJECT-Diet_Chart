export function calculateDailyCalories(age, gender, weight, height, activity, goal) {
    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity Multipliers
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        extremely: 1.9
    };

    const tdee = bmr * (activityMultipliers[activity] || 1.2);

    // Goal Adjustments
    let targetCalories = tdee;
    if (goal === 'fatLoss') {
        targetCalories -= 500;
    } else if (goal === 'muscleGain') {
        targetCalories += 300;
    } else if (goal === 'weightGain') {
        targetCalories += 500;
    }

    // Ensure minimum safe calories
    const minCalories = gender === 'male' ? 1500 : 1200;
    return Math.max(Math.round(targetCalories), minCalories);
}
