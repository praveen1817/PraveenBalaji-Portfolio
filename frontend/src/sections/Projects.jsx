import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server } from 'lucide-react';

const projects = [
  {
    title: "AI Stock Analyzer",
    date: "January 2026",
    description: "Developed a context-aware AI Stock Analyzer that ingests stock-related data, performs intelligent analysis using LLM reasoning and tools, and generates actionable market insights through an automated, scalable AI infrastructure.",
    tags: ["LLM", "AI Infrastructure", "Python", "Data Analysis"],
    icon: <Sparkles className="w-10 h-10 text-purple-400" />,
    liveUrl: "https://ai-stock-project.netlify.app/login", // Replace with live URL
    repoUrl: "https://github.com/praveen1817/ai-stock-analyser" // Replace with GitHub repository URL
  },
  {
    title: "Full Stack Food Application",
    date: "September - November 2025",
    description: "Designed and developed a full Stack Food Delivery Application Demo model. This is a personal achievement for myself where I gained proficiency in backend and API Design.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    icon: <Server className="w-10 h-10 text-blue-400" />,
    liveUrl: "#", // Replace with live URL
    repoUrl: "https://github.com/praveen1817/food-delivery-application" // Replace with GitHub repository URL
  },
  {
    title: "Authentication System with Protected Routes",
    date: "January 2026",
    description: "A Backend Project with Node js and express js along with sql database to provide a safter authenticating roote for the user reggistration and login form . For protected routes ensured using of JWT , Bcrypt for password hasingnsights through an automated, scalable AI infrastructure.",
    tags: ["Node JS", "Javascript", "Express", "API Design"],
    icon: <Sparkles className="w-10 h-10 text-purple-400" />,
    liveUrl: "#", // Replace with live URL
    repoUrl: "https://github.com/praveen1817/User-Registeration-Authentication" // Replace with GitHub repository URL
  }
];

const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      subtitle="Selected works demonstrating my technical abilities"
    >
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all hover:shadow-lg hover:border-slate-300 active:scale-[0.98] active:shadow-sm"
          >
            <div className="h-full p-8 flex flex-col relative overflow-hidden">
              
              {/* Minimal decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 group-hover:bg-slate-100 transition-colors"></div>

              <div className="flex justify-between items-start mb-6 align-top relative z-10">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
                  {project.icon}
                </div>
                
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="Github Repository" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 active:scale-90 active:bg-slate-300 transition-all border border-slate-200" onClick={(e) => e.stopPropagation()}>
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Project URL" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 active:scale-90 active:bg-slate-300 transition-all border border-slate-200" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Clickable Card Body */}
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-grow flex flex-col relative z-0">

              <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider font-semibold mb-3">
                <span>{project.date}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 group-hover:border-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
