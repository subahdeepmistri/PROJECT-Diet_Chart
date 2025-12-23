import { motion } from 'framer-motion';
import DietChart from './DietChart';
import Footer from './Footer';

export default function ResultsDashboard({ plan, onReset, onSwap }) {
    const { analysis, target, mealPlan, summary, tips, macros } = plan;
    const { bmr, tdee, goal } = analysis;

    const goalText = {
        fatLoss: 'Fat Loss',
        muscleGain: 'Muscle Gain',
        weightGain: 'Weight Gain',
        maintain: 'Maintenance'
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto p-4 md:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header Section */}
            <motion.header className="text-center mb-10" variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-green via-teal-400 to-neon-green bg-clip-text text-transparent mb-4 drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">
                    Your AI Diet Plan
                </h2>
                <p className="text-slate-300 text-lg mb-6">
                    Optimized for <strong className="text-neon-green">{goalText[goal]}</strong> based on your unique metabolism.
                </p>

                <div className="glass p-6 rounded-2xl border-l-4 border-neon-green mx-auto max-w-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-neon-green/5 group-hover:bg-neon-green/10 transition-colors duration-500"></div>
                    <p className="relative italic text-slate-200 text-lg leading-relaxed">
                        "{summary}"
                    </p>
                </div>
            </motion.header>

            {/* Key Stats Grid - Responsive */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10" variants={itemVariants}>
                <div className="glass-card p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-2">Daily Target</span>
                    <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">{target} <span className="text-lg md:text-xl text-primary font-normal">kcal</span></span>
                </div>
                <div className="glass-card p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-2">BMR</span>
                    <span className="text-xl md:text-2xl font-semibold text-slate-200">{bmr}</span>
                </div>
                <div className="glass-card p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-2">Maintenance</span>
                    <span className="text-xl md:text-2xl font-semibold text-slate-200">{tdee}</span>
                </div>

                {/* Timeline Card (Conditional) */}
                {analysis.weeksToGoal > 0 && (
                    <div className="glass-card p-4 md:p-6 flex flex-col items-center justify-center text-center border-primary/30 border">
                        <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-2">To Reach Goal</span>
                        <span className="text-xl md:text-2xl font-bold text-primary">
                            {analysis.weeksToGoal} <span className="text-sm text-slate-300 font-normal">Weeks</span>
                        </span>
                    </div>
                )}
            </motion.div>

            {/* Macros Section */}
            <motion.div className="mb-12" variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    Daily Nutrition Targets
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Protein */}
                    <div className="glass p-5 rounded-xl border border-red-400/20 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-slate-300 font-medium flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                Protein
                            </span>
                            <span className="text-2xl font-bold text-red-400">{macros.protein}g</span>
                        </div>
                        <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-red-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '30%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Builds & repairs muscle</p>
                    </div>

                    {/* Fats */}
                    <div className="glass p-5 rounded-xl border border-amber-400/20 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-slate-300 font-medium flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                                Fats
                            </span>
                            <span className="text-2xl font-bold text-amber-400">{macros.fats}g</span>
                        </div>
                        <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-amber-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '25%' }}
                                transition={{ duration: 1, delay: 0.6 }}
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Essential for hormones</p>
                    </div>

                    {/* Carbs */}
                    <div className="glass p-5 rounded-xl border border-blue-400/20 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-slate-300 font-medium flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                                Carbs
                            </span>
                            <span className="text-2xl font-bold text-blue-400">{macros.carbs}g</span>
                        </div>
                        <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '45%' }}
                                transition={{ duration: 1, delay: 0.7 }}
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Primary energy source</p>
                    </div>
                </div>
            </motion.div>

            {/* AI Tips */}
            <motion.div className="glass-card p-6 mb-12" variants={itemVariants}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    ⚡ AI Health Tips
                </h3>
                <ul className="space-y-3">
                    {tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className="text-neon-green mt-1">✓</span>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Meal Plan */}
            <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-sm">Your Daily Menu</h3>
                <DietChart plan={plan} simple={true} onSwap={onSwap} />
            </motion.div>

            {/* Actions */}
            <motion.div className="mt-12 text-center space-y-6" variants={itemVariants}>
                <p className="text-sm text-slate-400">
                    * Recipes are standard servings. Adjust portion sizes to match your exact calorie target.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button
                        onClick={onReset}
                        className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-primary hover:text-primary transition-all"
                    >
                        ← Change Details
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="btn-neon flex items-center gap-2"
                    >
                        Save as PDF
                    </button>
                </div>
            </motion.div>

            {/* Footer with Privacy & Disclaimer */}
            <Footer />
        </motion.div>
    );
}
