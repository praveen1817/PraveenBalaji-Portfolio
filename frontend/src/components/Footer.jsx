import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">Praveen Balaji S</h3>
          <p className="text-slate-500 text-sm">Backend-focused Software Developer</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/praveen1817" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/praveenbalaji-s" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:praveen42165@gmail.com" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
        
        <div className="text-sm text-slate-500 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Praveen Balaji S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
