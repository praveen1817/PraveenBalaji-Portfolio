import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          {title && (
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-600 max-w-2xl text-lg md:text-xl">
              {subtitle}
            </p>
          )}
          {title && (
            <div className="h-1 w-20 bg-slate-200 rounded-full mt-6 mx-auto md:mx-0"></div>
          )}
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default Section;
