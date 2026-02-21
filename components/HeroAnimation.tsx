
import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 90, 52, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i: number) => (
          <motion.circle
            key={i}
            r={Math.random() * 2 + 1}
            fill="#005A34"
            initial={{ 
              cx: Math.random() * 1000, 
              cy: Math.random() * 1000,
              opacity: 0 
            }}
            animate={{ 
              cy: [null, Math.random() * 1000],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Structural Connections */}
        <motion.path
          d="M 100 100 L 300 150 L 250 400 L 500 300 Z"
          stroke="rgba(0, 90, 52, 0.05)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
};

export default HeroAnimation;
