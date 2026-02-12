import React from 'react';
import { motion } from 'framer-motion';
import logo from '../media/logo.png';

export const TopLogo: React.FC<{ isLoaded?: boolean }> = ({ isLoaded = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="fixed top-8 left-8 md:top-12 md:left-12 z-[100]"
        >

            <div className="relative group">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-5 md:h-7 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] group-hover:scale-105"
                />
                <div className="absolute -inset-2 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};
