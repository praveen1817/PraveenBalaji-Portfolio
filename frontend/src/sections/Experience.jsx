import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "ST Software Solutions - Tirupur",
    role: "Full Stack Development Intern",
    date: "December 2026",
    description: "Contributed to development of a portfolio website for a civil construction materials company.",
    type: "Intern"
  },
  {
    company: "ACCENT TECHNO SOFT (ATS) - Coimbatore",
    role: "Full stack Development Intern | Offline",
    date: "December 2024 - January 2025",
    description: "Completed FULL STACK DEVELOPMENT internship, gaining proficiency in Express, Node js and executed assigned tasks.",
    type: "Intern"
  }
];

const Experience = () => {
  return (
    <Section 
      id="experience" 
      title="Industrial Experience" 
      subtitle="My professional journey and internships"
    >
      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-200 z-10 items-center justify-center group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 shadow-sm">
                <Briefcase size={14} className="text-slate-500 group-hover:text-blue-500" />
              </div>
              
              {/* Content Box */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md relative overflow-hidden group-hover:-translate-y-1 active:scale-[0.98] active:shadow-none cursor-pointer">
                  
                  {/* Minimal decorative corner */}
                  <div className={`absolute top-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -z-10 ${index % 2 === 0 ? '-right-10' : '-left-10'}`}></div>

                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-3">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-all">
                    {exp.role}
                  </h3>
                  
                  <h4 className="text-base font-medium text-slate-600 mb-4 flex items-center gap-2">
                    <Briefcase size={16} className="text-slate-400" />
                    {exp.company}
                  </h4>
                  
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
