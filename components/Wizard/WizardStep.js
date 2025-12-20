"use client";

import { motion } from 'framer-motion';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        };
    }
};

export default function WizardStep({ children, direction = 1 }) {
    return (
        <motion.div
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }}
            className="w-full max-w-lg mx-auto"
        >
            {children}
        </motion.div>
    );
}
