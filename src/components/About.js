import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const stats = [
    { value: '5.5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '2', label: 'Tier-1 Companies' },
    { value: 'MSc ML', label: '@ QMUL' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shree_Ramji_Resume.pdf';
    link.download = 'Shree_Ramji_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about me and my journey in AI/ML
          </p>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
                <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-navy-800 dark:to-navy-700 rounded-full flex items-center justify-center overflow-hidden border-4 border-electric-500/30">
                  <span className="text-6xl md:text-7xl font-bold text-gray-400 dark:text-gray-500">
                    SR
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                AI/ML Engineer with{' '}
                <span className="font-semibold text-electric-500">
                  5.5 years of industry experience
                </span>{' '}
                at Capgemini and Wipro in banking and financial services.
                Currently completing{' '}
                <span className="font-semibold text-electric-500">
                  MSc Machine Learning
                </span>{' '}
                at Queen Mary University of London, with a dissertation on
                AI-based oral disease detection from dental imaging.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I build production-grade ML systems, intelligent agents, and
                data pipelines that solve real problems.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="card p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-electric-500 to-indigo-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="btn-primary flex items-center gap-2 mt-4"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
