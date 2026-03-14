import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      
    ]
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 70 },
      { name: "REST API", level: 90 },
      { name: "React JS", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Middleware Design", level: 80 },
      { name: "Docker", level: 75 }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Git", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Render", level: 75 },
      { name: "Antigravity", level: 75 },
      { name: "Visual Studio", level: 75 },
    
    ]
  }
];

const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Technical Expertise" 
      subtitle="My toolbox for building robust applications"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md active:scale-[0.98] active:shadow-none cursor-pointer"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4 font-heading text-center">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill, index) => {
                const colors = [
                  "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
                  "hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700",
                  "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
                  "hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700",
                  "hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700",
                ];
                const colorClass = colors[index % colors.length];
                
                return (
                  <span 
                    key={skill.name}
                    className={`px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-medium text-sm transition-all duration-300 cursor-default ${colorClass} hover:-translate-y-0.5 active:scale-95`}
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
