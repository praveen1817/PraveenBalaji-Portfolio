import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';

const certificates = [
  { name: "Business Intelligence & Analytics", issuer: "NPTEL", icon: <Award className="w-5 h-5 text-blue-500" /> },
  { name: "Azure Fundamentals", issuer: "Microsoft", icon: <CheckCircle className="w-5 h-5 text-sky-500" /> },
  { name: "Java programming", issuer: "PrepInsta", icon: <CheckCircle className="w-5 h-5 text-orange-500" /> },
  { name: "React JS", issuer: "Udemy", icon: <CheckCircle className="w-5 h-5 text-purple-500" /> },
  { name: "Enterprises design thinking practitioner", issuer: "IBM", icon: <Award className="w-5 h-5 text-blue-600" /> },
  { name: "Produce Management", issuer: "MBA", icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
  { name: "Java", issuer: "GreatLearning", icon: <CheckCircle className="w-5 h-5 text-orange-500" /> }
];

const Certificates = () => {
  return (
    <Section 
      id="certificates" 
      title="Certifications & Education" 
      subtitle="Academic background and continuous learning"
    >
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        
        {/* Education Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-3xl p-8 h-full border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-all active:scale-[0.98] active:shadow-none cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:bg-blue-600 transition-colors">
              <GraduationCap className="text-blue-600 group-hover:text-white w-8 h-8 transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading border-b border-slate-100 pb-4">Formal Education</h3>
            
            <div className="space-y-4 relative z-10">
              <div>
                <span className="text-blue-600 font-medium text-sm">2022 - 2026</span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">Bachelor of Computer Science and Design</h4>
                <p className="text-slate-500 mt-2 text-base">SNS College of Engineering</p>
              </div>
              
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm shadow-sm group-hover:border-blue-200 transition-colors">
                CGPA: 8.03
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading border-b border-slate-100 pb-4">Professional Certificates</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <motion.div 
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white transition-colors border border-slate-100 hover:border-slate-300 hover:shadow-sm active:scale-[0.98] active:bg-slate-100 cursor-pointer"
              >
                <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{cert.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Certificates;
