/**
 * Calculates Macro Splits based on Daily Calories and Goal
 * Returns grams and percentages.
 */
export function calculateMacros(dailyCalories, goal) {
    let ratios = { p: 0.3, f: 0.3, c: 0.4 }; // Default Maintenance

    switch (goal) {
        case 'fatLoss':
            // Higher Protein, Lower Carb
            ratios = { p: 0.40, f: 0.35, c: 0.25 };
            break;
        case 'muscleGain':
            // Moderate Protein, Higher Carb for energy
            ratios = { p: 0.30, f: 0.25, c: 0.45 };
            break;
        case 'weightGain':
            // Balanced high calorie
            ratios = { p: 0.30, f: 0.30, c: 0.40 };
            break;
        default:
            ratios = { p: 0.30, f: 0.30, c: 0.40 };
    }

    // Calories per gram: Protein=4, Fat=9, Carb=4
    const proteinCals = dailyCalories * ratios.p;
    const fatCals = dailyCalories * ratios.f;
    const carbCals = dailyCalories * ratios.c;

    return {
        protein: {
            grams: Math.round(proteinCals / 4),
            calories: Math.round(proteinCals),
            percentage: Math.round(ratios.p * 100)
        },
        fats: {
            grams: Math.round(fatCals / 9),
            calories: Math.round(fatCals),
            percentage: Math.round(ratios.f * 100)
        },
        carbs: {
            grams: Math.round(carbCals / 4),
            calories: Math.round(carbCals),
            percentage: Math.round(ratios.c * 100)
        }
    };
}
