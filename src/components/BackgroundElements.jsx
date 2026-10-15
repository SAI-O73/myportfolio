import React from 'react';
import { motion } from 'framer-motion';

/**
 * BackgroundElements Component
 * Lightweight, uncluttered ambient blue gradient shapes and subtle floating particles
 * giving a soft layered depth behind content.
 */
export default function BackgroundElements() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right ambient gradient orb */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-blue-100/60 to-royal-100/30 rounded-full blur-3xl opacity-70"
      />

      {/* Middle left ambient gradient orb */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -left-36 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-3xl opacity-60"
      />

      {/* Bottom right soft blue orb */}
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 -right-28 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-gradient-to-tl from-royal-100/50 to-transparent rounded-full blur-3xl opacity-50"
      />
    </div>
  );
}
