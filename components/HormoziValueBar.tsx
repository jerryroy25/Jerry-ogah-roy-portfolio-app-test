
import React from 'react';
import ROICounter from './ROICounter';
import { motion } from 'framer-motion';

const HormoziValueBar: React.FC = () => {
  const items = [
    { label: "Automated Daily Tasks", value: 73, suffix: "%", desc: "Dream Outcome" },
    { label: "Max Proven ROI", value: 2471, suffix: "%", desc: "Likelihood" },
    { label: "Deployment Cycle", value: 78, suffix: "h", desc: "Time Delay" },
    { label: "Effort for You", value: 0, suffix: "%", desc: "Effort & Sacrifice" },
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
