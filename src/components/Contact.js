import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with a form backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', purpose: '', message: '' });
    }, 3000);
  };

  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:shreeram.tech.dev@gmail.com',
      value: 'shreeram.tech.dev@gmail.com',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shreeram07',
      value: 'linkedin.com/in/shreeram07',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/anshs990',
      value: 'github.com/anshs990',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-navy-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Let's talk!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, freelance
                projects, or collaborations. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card hover:border-electric-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {link.label}
                      </div>
                      <div className="text-gray-900 dark:text-white font-medium group-hover:text-electric-500 transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="card p-6 md:p-8">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 dark:text-white transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 dark:text-white transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Purpose Dropdown */}
                  <div>
                    <label
                      htmlFor="purpose"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      I'm looking for:
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 dark:text-white transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="job">Job opportunity</option>
                      <option value="freelance">Freelance project</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 dark:text-white transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? (
                      <>Message Sent!</>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
