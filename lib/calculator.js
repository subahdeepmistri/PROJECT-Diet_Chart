/**
 * Calculates BMR and Daily Calorie Targets using Mifflin-St Jeor Equation
 * 
 * @param {number} age - User's age in years
 * @param {string} gender - 'male' or 'female'
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in cm
 * @param {string} activity - Activity level: 'sedentary', 'light', 'moderate', 'active', 'extremely'
 * @param {string} goal - Goal: 'fatLoss', 'maintain', 'muscleGain', 'weightGain'
 * @param {Object} options - Optional parameters
 * @param {number} options.targetWeight - Target weight change in kg (for timeline calculation)
 * @returns {Object} Analysis object with bmr, tdee, targetCalories, etc.
 */
export function calculateDailyCalories(age, gender, weight, height, activity, goal, options = {}) {
    // Input validation with safe defaults
    const safeAge = Number(age) || 25;
    const safeWeight = Number(weight) || 70;
    const safeHeight = Number(height) || 170;
    const safeGender = gender === 'female' ? 'female' : 'male';
    const safeActivity = activity || 'moderate';
    const safeGoal = goal || 'maintain';

    // 1. Calculate BMR (Mifflin-St Jeor)
    let bmr;
    if (safeGender === 'male') {
        bmr = 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge + 5;
    } else {
        bmr = 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge - 161;
    }

    // 2. Activity Multipliers
    const activityMultipliers = {
        sedentary: 1.2,      // Little to no exercise
        light: 1.375,        // Light exercise (1-3 days/week)
        moderate: 1.55,      // Moderate exercise (3-5 days/week)
        active: 1.725,       // Heavy exercise (6-7 days/week)
        extremely: 1.9       // Very heavy exercise (twice daily)
    };

    const multiplier = activityMultipliers[safeActivity] || 1.55;
    const tdee = bmr * multiplier;

    // 3. Goal Adjustments
    let targetCalories = tdee;
    let deficit = 0;

    switch (safeGoal) {
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
    const minCalories = safeGender === 'male' ? 1500 : 1200;

    // If target is dangerously low, floor it
    if (targetCalories < minCalories && safeGoal === 'fatLoss') {
        targetCalories = minCalories;
    }

    // 5. Calculate Timeline (if target weight provided in options)
    let weeksToGoal = 0;
    const targetWeightChange = Number(options?.targetWeight) || 0;

    if (safeGoal !== 'maintain' && targetWeightChange > 0) {
        // 7700 calories approx = 1kg of fat/tissue
        const CALORIES_PER_KG = 7700;
        const totalDeficitNeeded = targetWeightChange * CALORIES_PER_KG;
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
        goal: safeGoal,
        weeksToGoal: weeksToGoal
    };
}
