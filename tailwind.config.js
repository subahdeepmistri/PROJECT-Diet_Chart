/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Core - Calm Emerald palette
                background: '#0f172a',    // Slate 900
                surface: '#1e293b',       // Slate 800
                'surface-light': '#334155', // Slate 700

                // Primary - Calmer Emerald (replaces neon green)
                primary: {
                    DEFAULT: '#10B981',   // Emerald 500
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                },

                // Accent - Indigo for trust
                accent: {
                    DEFAULT: '#6366F1',
                    light: '#818CF8',
                    dark: '#4F46E5',
                },

                // Secondary - Cyan (kept for variety)
                secondary: '#06b6d4',

                // Text
                text: '#f8fafc',
                muted: '#94a3b8',

                // Macro Colors - Consistent & Distinct
                macro: {
                    calories: '#10B981',  // Emerald
                    protein: '#F87171',   // Red 400 (softer)
                    carbs: '#60A5FA',     // Blue 400 (softer)
                    fats: '#FBBF24',      // Amber 400
                },

                // Status Colors
                success: '#22C55E',
                warning: '#F59E0B',
                error: '#EF4444',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                'card': '16px',
                'button': '12px',
                'badge': '20px',
            },
            boxShadow: {
                // Calmer shadows
                'soft': '0 1px 3px rgba(0, 0, 0, 0.12)',
                'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
                'card-hover': '0 8px 24px rgba(0, 0, 0, 0.2)',
                'glow': '0 0 20px rgba(16, 185, 129, 0.15)',
                'glow-md': '0 0 30px rgba(16, 185, 129, 0.25)',
                // Legacy (for backward compat)
                'neon': '0 0 15px rgba(16, 185, 129, 0.4)',
                'neon-lg': '0 0 25px rgba(16, 185, 129, 0.5)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
};
