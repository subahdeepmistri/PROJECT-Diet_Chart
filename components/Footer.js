"use client";

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Privacy & Disclaimer */}
                <div className="glass rounded-xl p-4 md:p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        {/* Privacy Badge */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Your data stays private</p>
                                <p className="text-xs text-slate-500">All calculations happen locally. We don't store anything.</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-slate-700"></div>

                        {/* Disclaimer */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">General wellness info</p>
                                <p className="text-xs text-slate-500">Not medical advice. Consult a doctor for health conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <span>Made with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-red-400"
                        >
                            ❤️
                        </motion.span>
                        <span>for your health journey</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-600">
                        <span>© 2024 AI Diet Planner</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:inline">No signup required</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
