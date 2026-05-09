import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    
    // Simple Formspree integration or mailto fallback
    // For a production app, you'd replace this URL with your Formspree endpoint or custom backend
    try {
      // We'll use a mailto link as a fallback if no backend is provided, 
      // but simulate an API call for the UI experience
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If the user wants actual email sending without a backend, 
      // mailto is the simplest purely frontend approach
      window.location.href = `mailto:praveen42165@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0D%0A%0D%0AReply to: ${formData.email})`;
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
      
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Something went wrong. Please try again or email me directly." 
      });
    }
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Have a question or want to work together?"
    >
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50/50 rounded-full blur-2xl -z-10"></div>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
            <MessageSquare className="text-slate-700 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Send me a message</h3>
            <p className="text-slate-500 text-sm mt-1">I'll get back to you as soon as possible.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 block">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status.submitting}
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50 resize-y"
              placeholder="Hi Praveen, I'd like to talk about..."
            ></textarea>
          </div>
          
          {status.error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-red-500 text-sm font-medium"
            >
              {status.error}
            </motion.p>
          )}

          {status.submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Opening your email client to send the message!
            </motion.div>
          )}
          
          <button
            type="submit"
            disabled={status.submitting || status.submitted}
            className="w-full sm:w-auto px-8 py-4 accent-bg hover:bg-slate-800 text-white rounded-xl font-medium transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95 active:bg-slate-700"
          >
            {status.submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Processing...
              </>
            ) : status.submitted ? (
              <>
                <Send size={18} />
                Message Prepared
              </>
            ) : (
              <>
                <Mail size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
