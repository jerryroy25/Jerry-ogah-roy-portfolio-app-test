
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface ROICounterProps {
  targetValue: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const ROICounter: React.FC<ROICounterProps> = ({ targetValue, suffix = "", label, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, { 
        duration: duration,
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, count, targetValue, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-cyan-500/10 rounded-xl backdrop-blur-sm group hover:border-cyan-500/30 transition-all duration-500">
      <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2 font-mono tracking-tighter">
        {displayValue}{suffix}
      </div>
      <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] text-center font-bold">
        {label}
      </div>
    </div>
  );
};

export default ROICounter;
