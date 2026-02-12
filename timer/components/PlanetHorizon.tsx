
import React from 'react';
import { motion } from 'framer-motion';

export const PlanetHorizon: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[40vh] pointer-events-none overflow-hidden flex items-end justify-center">
      {/* The Glow/Atmosphere */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="relative w-[150%] md:w-[120%] aspect-square rounded-full flex flex-col items-center"
        style={{
          transform: 'translateY(85%)',
          background: 'radial-gradient(circle at 50% 0%, rgba(88, 37, 227, 0.4) 0%, rgba(88, 37, 227, 0.1) 40%, transparent 70%)',
          boxShadow: '0 -20px 100px rgba(88, 37, 227, 0.3)',
        }}
      >
        {/* Crisp Edge Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent blur-[1px]" />
      </motion.div>
      
      {/* Additional ambient fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  );
};
