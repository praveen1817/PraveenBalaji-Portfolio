import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-heading font-bold tracking-tight text-slate-900 group">
            Praveen <span className="text-slate-500 group-hover:text-slate-700 transition-colors">Balaji S</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => link.name !== 'Contact').map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-slate-900 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 mt-3 absolute w-full shadow-lg"
          >
            <nav className="flex flex-col container mx-auto px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center gap-2 pt-4 mt-2 border-t border-slate-100">
                <a href="https://github.com/praveen1817" target="_blank" rel="noreferrer" className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 rounded-full transition-all">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/praveenbalaji-s" target="_blank" rel="noreferrer" className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 rounded-full transition-all">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:praveen42165@gmail.com" className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100 rounded-full transition-all">
                  <Mail size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
