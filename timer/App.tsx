
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer } from './components/Timer';
import { PlanetHorizon } from './components/PlanetHorizon';
import { BackgroundStars } from './components/BackgroundStars';
import { NewsletterForm } from './components/NewsletterForm';
import { TopLogo } from './components/TopLogo';


const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to trigger entry animations smoothly
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050508] overflow-hidden text-white font-sans">
      {/* Fixed Layout Elements */}
      <TopLogo isLoaded={isLoaded} />

      {/* Background Layer */}
      <BackgroundStars />


      {/* Content Layer */}
      <div className="z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6.5C13.5 6.5 6.5 13.5 3 17.5C6.5 15.5 11 12.5 16 11.5C11 11.5 7.5 13.5 4 16.5C10.5 10.5 16 6.5 21 6.5Z" fill="#5825E3" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg md:text-2xl font-light tracking-[0.15em] md:tracking-[0.2em] text-gray-400 uppercase mb-2">We are</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-[0.1em] text-white uppercase leading-tight">Coming Soon...</h1>
        </motion.div>

        {/* Timer Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <Timer targetDate="2026-06-30T23:59:59" />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-lg"
        >
          <NewsletterForm />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 text-sm tracking-widest uppercase"
        >
          © 2026 Nexera, All rights reserved.
        </motion.div>
      </div>

      {/* Foreground/Atmosphere: Planet Horizon */}
      <PlanetHorizon isLoaded={isLoaded} />
    </div>
  );
};

export default App;
