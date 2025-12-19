import { meals } from './database';

export function generateMealPlan(targetCalories, typePreference) {
    // Filter meals by preference (veg/non-veg) if specified.
    // If 'both', use all.

    const filterMeals = (mealList) => {
        if (typePreference === 'both') return mealList;
        return mealList.filter(m => m.type === typePreference);
    };

    const breakfastOptions = filterMeals(meals.breakfast);
    const lunchOptions = filterMeals(meals.lunch);
    const dinnerOptions = filterMeals(meals.dinner);
    const snackOptions = filterMeals(meals.snacks);

    // Random selection for variety (simple logic for now)
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const selectedBreakfast = getRandom(breakfastOptions) || meals.breakfast[0];
    const selectedLunch = getRandom(lunchOptions) || meals.lunch[0];
    const selectedDinner = getRandom(dinnerOptions) || meals.dinner[0];
    const selectedSnack = getRandom(snackOptions) || meals.snacks[0];

    const currentTotal = selectedBreakfast.calories + selectedLunch.calories + selectedDinner.calories + selectedSnack.calories;

    // Basic Adjustment: If calories are way off, we could suggest portions using a multiplier,
    // but for this MVP we'll just return the plan and show the total vs target.
    // In a real app, we'd have a knapsack algorithm here.

    return {
        target: targetCalories,
        total: currentTotal,
        meals: {
            breakfast: selectedBreakfast,
            lunch: selectedLunch,
            snack: selectedSnack,
            dinner: selectedDinner
        }
    };
}
