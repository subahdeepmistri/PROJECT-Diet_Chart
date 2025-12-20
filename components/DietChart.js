import MealCard from './MealCard';

/**
 * Displays the meal plan.
 * @param {Object} props
 * @param {boolean} props.simple - If true, hides the header/stats (used when inside ResultsDashboard)
 */
export default function DietChart({ plan, onReset, simple = false, onSwap }) {
    const { mealPlan, target } = plan;

    // Helper to calculate total calories from the new structure
    const calculateTotal = (mealsObj) => {
        let total = 0;
        if (!mealsObj) return 0;
        Object.values(mealsObj).forEach(arr => {
            if (Array.isArray(arr)) {
                arr.forEach(item => {
                    if (item && item.calories) {
                        total += item.calories;
                    }
                });
            }
        });
        return total;
    };

    const total = calculateTotal(mealPlan);

    return (
        <div className="space-y-6">
            {!simple && (
                <header className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl border border-white/10 mb-6 backdrop-blur-md">
                    <h2 className="text-xl font-bold text-white">Your Daily Plan</h2>
                    <div className="flex gap-4">
                        <div className="text-center px-4 border-r border-white/10">
                            <span className="block text-xs text-slate-400 uppercase">Target</span>
                            <span className="block text-lg font-bold text-neon-green">{target}</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-xs text-slate-400 uppercase">Planned</span>
                            <span className="block text-lg font-bold text-white">{total}</span>
                        </div>
                    </div>
                </header>
            )}

            <div className="flex flex-col gap-6 relative">
                {/* Vertical line connector */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-neon-green/50 to-transparent hidden md:block"></div>

                <MealCard title="Breakfast" items={mealPlan.breakfast} icon="🌅" onSwap={() => onSwap('breakfast')} delay={0.1} />
                <MealCard title="Lunch" items={mealPlan.lunch} icon="☀️" onSwap={() => onSwap('lunch')} delay={0.2} />
                <MealCard title="Snack" items={mealPlan.snack} icon="🍎" onSwap={() => onSwap('snack')} delay={0.3} />
                <MealCard title="Dinner" items={mealPlan.dinner} icon="🌙" onSwap={() => onSwap('dinner')} delay={0.4} />
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
