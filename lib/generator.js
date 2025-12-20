import { meals } from './database';
import { calculateMacros } from './macros';

// 1. Module Scope Helpers
const filterMeals = (mealList, typePreference) => {
    if (typePreference === 'both') return mealList;
    return mealList.filter(m => m.type === typePreference);
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 2. Exported Utilities for Swapping functionality
export function getAlternativeMeal(mealType, currentMealId, typePreference) {
    const list = meals[mealType] || [];
    const options = filterMeals(list, typePreference);

    // Fallback if no options exist, return current meal to avoid undefined
    if (!options || options.length === 0) {
        // Find current meal in original list if possible
        return list.find(m => m.id === currentMealId) || list[0];
    }

    // Filter out the current meal to ensure we get a different one
    const candidates = options.filter(m => m.id !== currentMealId);

    // Initial fallback: if candidates empty, just return any valid option
    if (candidates.length === 0) return options[0];

    return getRandom(candidates);
}

export function calculatePlanTotals(mealPlan) {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    Object.values(mealPlan).forEach(mealArray => {
        if (!mealArray) return;
        mealArray.forEach(m => {
            if (!m) return;
            totalCalories += m.calories || 0;
            totalProtein += m.protein || 0;
            totalCarbs += m.carbs || 0;
            totalFats += m.fats || 0;
        });
    });

    return {
        calories: totalCalories,
        protein: totalProtein,
        carbs: totalCarbs,
        fats: totalFats
    };
}

// 3. Main Generator Function
export function generateMealPlan(targetCalories, typePreference, goal, originalAnalysis) {

    // Meal Selection (Simple randomized selection for MVP)
    const selectedMeals = {
        breakfast: [getRandom(filterMeals(meals.breakfast, typePreference)) || meals.breakfast[0]],
        lunch: [getRandom(filterMeals(meals.lunch, typePreference)) || meals.lunch[0]],
        snack: [getRandom(filterMeals(meals.snack, typePreference)) || meals.snack[0]],
        dinner: [getRandom(filterMeals(meals.dinner, typePreference)) || meals.dinner[0]]
    };

    // Calculate Totals using helper
    const totals = calculatePlanTotals(selectedMeals);

    // Generate AI Summary & Tips
    let summary = "";
    let tips = [
        "Stay hydrated! Drink at least 3-4 liters of water daily.",
        "Sleep is crucial. Aim for 7-9 hours for recovery."
    ];

    const deficit = originalAnalysis.deficit;

    if (goal === 'fatLoss') {
        summary = `Designed to help you burn fat while preserving muscle. Your daily deficit is approx ${Math.abs(deficit)} calories.`;
        tips.push("Focus on high volume, low calorie foods like salads.");
        tips.push("Try to get 10k steps daily to increase activity.");
    } else if (goal === 'muscleGain') {
        summary = `High protein plan to support muscle hypertrophy. Includes a slight surplus of ${deficit} calories.`;
        tips.push("Ensure you are progressively overloading your weights in the gym.");
        tips.push("Pre and post-workout nutrition is key for gains.");
    } else if (goal === 'weightGain') {
        summary = `Calorie-dense plan to help you bulk up effectively.`;
        tips.push("Don't skip meals. Consistency is key.");
        tips.push("Liquid calories (shakes) can help if you feel too full.");
    } else {
        summary = `Balanced maintenance plan to keep you healthy and energetic.`;
        tips.push("Focus on whole, unprocessed foods.");
    }

    // Construct Final Object
    return {
        summary: summary,
        macros: totals,
        mealPlan: selectedMeals,
        tips: tips,
        target: targetCalories
    };
}
