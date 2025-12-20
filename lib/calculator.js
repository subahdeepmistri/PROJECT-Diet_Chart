/**
 * Calculates BMR and Daily Calorie Targets using Mifflin-St Jeor Equation
 */
export function calculateDailyCalories(age, gender, weight, height, activity, goal) {
    // 1. Calculate BMR (Mifflin-St Jeor)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 2. Activity Multipliers
    const activityMultipliers = {
        sedentary: 1.2,      // Little to no exercise
        light: 1.375,        // Light exercise (1-3 days/week)
        moderate: 1.55,      // Moderate exercise (3-5 days/week)
        active: 1.725,       // Heavy exercise (6-7 days/week)
        extremely: 1.9       // Very heavy exercise (twice daily)
    };

    const tdee = bmr * (activityMultipliers[activity] || 1.2);

    // 3. Goal Adjustments
    let targetCalories = tdee;
    let deficit = 0;

    switch (goal) {
        case 'fatLoss':
            deficit = -500; // ~0.5kg weight loss per week
            break;
        case 'muscleGain':
            deficit = 300; // Lean bulk
            break;
        case 'weightGain':
            deficit = 500; // Aggressive gain
            break;
        default:
            deficit = 0; // Maintain
    }

    targetCalories += deficit;

    // 4. Safety Bounds
    // Minimum 1200 (female) or 1500 (male) is a safe floor for self-guided diets
    const minCalories = gender === 'male' ? 1500 : 1200;

    // If target is dangerously low, floor it (unless TDEE is already lower, effectively maintenance)
    if (targetCalories < minCalories && goal === 'fatLoss') {
        targetCalories = minCalories;
    }


    // 5. Calculate Timeline (if target weight provided)
    let weeksToGoal = 0;
    if (goal !== 'maintain' && activity.targetWeight) {
        // 7700 calories approx = 1kg of fat/tissue
        const CALORIES_PER_KG = 7700;
        const totalDeficitNeeded = Number(activity.targetWeight) * CALORIES_PER_KG;
        // Daily deficit is absolute (e.g. 500 deficit = 500 burned)
        // Deficit is negative for loss, positive for gain. We need absolute rate.
        const dailyRate = Math.abs(deficit);

        if (dailyRate > 0) {
            weeksToGoal = Math.ceil(totalDeficitNeeded / (dailyRate * 7));
        }
    }

    return {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories: Math.round(targetCalories),
        deficit: deficit,
        goal: goal,
        weeksToGoal: weeksToGoal
    };
}
