
import React from 'react';
import ROICounter from './ROICounter';
import { motion } from 'framer-motion';

const HormoziValueBar: React.FC = () => {
  const items = [
    { label: "Hours Reclaimed/Mo", value: 33, suffix: "+", desc: "Time Saved" },
    { label: "Proven ROI", value: 843, suffix: "%", desc: "Investment Return" },
    { label: "Data Entry Reduction", value: 95, suffix: "%", desc: "Efficiency Gain" },
    { label: "Manual Chaos Removed", value: 100, suffix: "%", desc: "System Reliability" },
  ];

  return (
    <section className="relative z-20 py-12 border-y border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ROICounter 
                targetValue={item.value} 
                suffix={item.suffix} 
                label={item.label} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HormoziValueBar;
