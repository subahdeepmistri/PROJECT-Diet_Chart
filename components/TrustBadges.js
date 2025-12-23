"use client";

import { motion } from "framer-motion";

export default function TrustBadges() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8 mb-6"
                >
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-xl">🔒</span>
                        <span className="text-sm">No Signup Required</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-xl">🆓</span>
                        <span className="text-sm">100% Free Forever</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-xl">🤖</span>
                        <span className="text-sm">AI-Powered Accuracy</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-xl">🇮🇳</span>
                        <span className="text-sm">Made for Indians</span>
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs text-slate-600 max-w-2xl mx-auto"
                >
                    ⚠️ <strong>Disclaimer:</strong> This tool provides general dietary guidance based on standard
                    nutritional calculations. It is not a substitute for professional medical advice.
                    Consult a healthcare provider before making significant dietary changes.
                </motion.p>
            </div>
        </section>
    );
}
