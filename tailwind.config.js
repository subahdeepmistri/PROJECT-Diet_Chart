/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', // Slate 900
                surface: '#1e293b',    // Slate 800
                primary: '#39ff14',    // Neon Green
                secondary: '#06b6d4',  // Cyan
                text: '#f8fafc',       // Slate 50
                muted: '#94a3b8',      // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 10px rgba(57, 255, 20, 0.5)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
