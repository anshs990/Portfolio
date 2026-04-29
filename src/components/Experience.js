import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiMapPin, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      institution: 'Queen Mary University of London',
      role: 'MSc Machine Learning',
      location: 'London, UK',
      period: 'Sep 2025 – Present',
      logo: 'QMUL',
      bullets: [
        'Dissertation: AI-Based Oral Disease Detection from Dental Imaging',
        'Modules: Neural Networks, NLP, Computer Vision, Statistical ML',
        'Projects: LLaVA VQA, CIFAR-10 CNN, 3D Medical Segmentation',
      ],
    },
    {
      company: 'Wipro Limited',
      role: 'Systems Reliability & Data Operations Engineer',
      location: 'Banking & FinTech',
      period: 'Aug 2023 – Aug 2025',
      logo: 'Wipro',
      bullets: [
        'Automated incident diagnosis reducing investigation time by ~70%',
        'Managed 50+ monthly incidents across distributed banking systems',
        'Built Python automation and Grafana/Splunk monitoring pipelines',
      ],
    },
    {
      company: 'Capgemini',
      role: 'Software Engineer — Automation, Data & Platform',
      location: 'Banking & FinTech',
      period: 'Jan 2020 – Jul 2023',
      logo: 'Capgemini',
      bullets: [
        'Automated 8 high-frequency workflows saving ~90% manual effort',
        'Built SQL pipelines and observability dashboards for enterprise systems',
        'Managed cloud infrastructure (AWS/Azure) for 20+ person team',
      ],
    },
    {
      institution: 'SKITech (RTU)',
      role: 'B.Tech Electronics & Communication Engineering',
      location: 'Rajasthan, India',
      period: '2015 – 2019',
      logo: 'SKITech',
      bullets: [
        'Foundation in electronics, signal processing, and communication systems',
        'Developed strong programming fundamentals in C, C++, and Python',
        'Active participant in technical competitions and hackathons',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block timeline-line" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-electric-500 rounded-full border-4 border-white dark:border-navy-900 z-10 mt-6 md:mt-0" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="card p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {exp.logo}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {exp.company || exp.institution}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <FiMapPin className="w-3 h-3" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Role Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-electric-500/10 text-electric-500 text-sm font-medium rounded-full">
                          {exp.role}
                        </span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <FiCalendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Expandable Bullets */}
                      <button
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          )
                        }
                        className="flex items-center gap-2 text-electric-500 hover:text-electric-600 font-medium text-sm transition-colors"
                      >
                        {expandedIndex === index ? 'Show less' : 'Show more'}
                        {expandedIndex === index ? (
                          <FiChevronUp className="w-4 h-4" />
                        ) : (
                          <FiChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-2"
                          >
                            {exp.bullets.map((bullet, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                              >
                                <span className="text-electric-500 mt-1">
                                  •
                                </span>
                                {bullet}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
