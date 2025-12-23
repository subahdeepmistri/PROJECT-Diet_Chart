import { useState } from 'react';
import MealCard from './MealCard';

/**
 * Displays the meal plan with portion control support.
 * @param {Object} props
 * @param {boolean} props.simple - If true, hides the header/stats (used when inside ResultsDashboard)
 */
export default function DietChart({ plan, onReset, simple = false, onSwap }) {
    const { mealPlan, target, user } = plan;

    // Check if snacks should be shown (based on user's meal count preference)
    const showSnacks = user?.mealCount !== '3';

    // Portion state for each meal
    const [portions, setPortions] = useState({
        breakfast: 1.0,
        lunch: 1.0,
        snack: 1.0,
        dinner: 1.0
    });

    const handlePortionChange = (mealType, newPortion) => {
        setPortions(prev => ({
            ...prev,
            [mealType]: newPortion
        }));
    };

    // Helper to calculate base calories from an array of meal items
    const getMealCalories = (items) => {
        if (!items || !Array.isArray(items)) return 0;
        return items.reduce((sum, item) => sum + (item?.calories || 0), 0);
    };

    // Calculate total with portion adjustments
    const calculateTotal = () => {
        let total = 0;
        const mealTypes = showSnacks
            ? ['breakfast', 'lunch', 'snack', 'dinner']
            : ['breakfast', 'lunch', 'dinner'];

        mealTypes.forEach(mealType => {
            const baseCalories = getMealCalories(mealPlan[mealType]);
            total += Math.round(baseCalories * portions[mealType]);
        });

        return total;
    };

    const total = calculateTotal();
    const diff = total - target;

    return (
        <div className="space-y-6">
            {!simple && (
                <header className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-white/10 mb-6 backdrop-blur-md">
                    <h2 className="text-xl font-bold text-white">Your Daily Plan</h2>
                    <div className="flex gap-4">
                        <div className="text-center px-4 border-r border-white/10">
                            <span className="block text-xs text-slate-400 uppercase">Target</span>
                            <span className="block text-lg font-bold text-primary">{target}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xs text-slate-400 uppercase">Planned</span>
                            <span className={`block text-lg font-bold ${Math.abs(diff) > 100 ? 'text-orange-400' : 'text-white'}`}>
                                {total}
                                {diff !== 0 && (
                                    <span className={`text-xs ml-1 ${diff > 0 ? 'text-orange-400' : 'text-green-400'}`}>
                                        ({diff > 0 ? '+' : ''}{diff})
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </header>
            )}

            <div className="flex flex-col gap-6 relative">
                {/* Vertical line connector */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>

                <MealCard
                    title="Breakfast"
                    items={mealPlan.breakfast}
                    icon="🌅"
                    onSwap={() => onSwap('breakfast')}
                    portion={portions.breakfast}
                    onPortionChange={(p) => handlePortionChange('breakfast', p)}
                    delay={0.1}
                />
                <MealCard
                    title="Lunch"
                    items={mealPlan.lunch}
                    icon="☀️"
                    onSwap={() => onSwap('lunch')}
                    portion={portions.lunch}
                    onPortionChange={(p) => handlePortionChange('lunch', p)}
                    delay={0.2}
                />
                {showSnacks && (
                    <MealCard
                        title="Snack"
                        items={mealPlan.snack}
                        icon="🍎"
                        onSwap={() => onSwap('snack')}
                        portion={portions.snack}
                        onPortionChange={(p) => handlePortionChange('snack', p)}
                        delay={0.3}
                    />
                )}
                <MealCard
                    title="Dinner"
                    items={mealPlan.dinner}
                    icon="🌙"
                    onSwap={() => onSwap('dinner')}
                    portion={portions.dinner}
                    onPortionChange={(p) => handlePortionChange('dinner', p)}
                    delay={showSnacks ? 0.4 : 0.3}
                />
            </div>

            {!simple && onReset && (
                <div className="text-center mt-8">
                    <button
                        onClick={onReset}
                        className="px-6 py-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-all font-medium"
                    >
                        Create New Plan
                    </button>
                </div>
            )}
        </div>
    );
}
