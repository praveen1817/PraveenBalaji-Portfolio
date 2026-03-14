import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Code2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Terminal className="w-6 h-6 text-slate-600" />,
      title: "Backend Focus",
      description: "Designing structured backend logic, database modeling, and scalable REST APIs."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-slate-600" />,
      title: "AI Integration",
      description: "Practical exposure to agent-based applications and leveraging LLMs for automated systems."
    },
    {
      icon: <Code2 className="w-6 h-6 text-slate-600" />,
      title: "Problem Solving",
      description: "Passionate about building intelligent automation and resilient software architectures."
    }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Behind the code"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-lg text-slate-600 leading-relaxed font-light space-y-6"
        >
          <p>
            I am a <strong className="text-slate-900 font-medium">Backend-focused Software Developer</strong> with hands-on experience in Node.js,Fast API, Express.js, MongoDB, and robust REST API development. 
            Throughout my academic journey and industrial internships, I have cultivated a strong foundation in designing backend logic and database models that scale efficiently.
          </p>
          <p>
            Beyond traditional backend systems, my true passion lies in <strong className="text-slate-900 font-medium">scalable systems, AI-powered applications, and intelligent automation</strong>. I've built context-aware tools using LLMs to drive actionable insights from data, bridging the gap between standard development and next-generation AI agents.
          </p>
        </motion.div>

        <div className="flex-1 w-full grid gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-6 items-start hover:shadow-md hover:border-slate-300 transition-all cursor-default"
            >
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
