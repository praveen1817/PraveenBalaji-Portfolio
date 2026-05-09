import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-medium text-sm mb-6 border border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Backend-focused Software Developer
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Praveen Balaji S</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-balance">
              Building scalable backend systems, APIs, and AI-powered applications. Passionate about intelligent automation and clean architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 active:scale-95 text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://drive.google.com/file/d/11fP7WdW1wKsfks-9PTv1eDL7uKqbBU3X/view?usp=drive_link"
                title="Google Drive Resume Link Placeholder (Add your actual link!)"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white text-slate-700 hover:text-slate-900 active:bg-slate-100 active:scale-95 px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-50 border border-slate-200 shadow-sm w-full sm:w-auto justify-center"
              >
                Drive Resume
                <Download size={18} />
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 justify-center md:justify-start">
              <a href="https://github.com/praveen1817" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 active:scale-90 active:bg-slate-100 hover:shadow-md transition-all">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/praveenbalaji-s" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 active:scale-90 active:bg-slate-100 hover:shadow-md transition-all">
                <Linkedin size={22} />
              </a>
              <a href="mailto:praveen42165@gmail.com" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 active:scale-90 active:bg-slate-100 hover:shadow-md transition-all">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
          
          {/* Minimalist Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-md relative"
          >
            <div className="relative aspect-square rounded-full flex items-center justify-center p-2 mb-8 md:mb-0">
               {/* Elegant subtle rings decoration */}
              <div className="absolute inset-0 rounded-full border border-slate-200"></div>
              <div className="absolute inset-8 rounded-full border border-slate-100"></div>
              
              {/* Photo placeholder designed beautifully light */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-slate-50 flex items-center justify-center">
                <img src="/profile.jpeg" alt="Profile Photo" className="w-full h-full object-cover" />
                              </div>
              
              {/* Floating aesthetic dot */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-4 h-4 rounded-full bg-blue-100 border border-blue-200 shadow-sm"
              ></motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
