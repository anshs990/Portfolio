import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: 'MSc Machine Learning',
      institution: 'Queen Mary University of London',
      period: '2025 – 2026',
      icon: FiBook,
      badge: { text: 'In Progress', color: 'electric' },
    },
    {
      title: 'B.Tech ECE',
      institution: 'SKITech RTU',
      period: '2015 – 2019',
      icon: FiBook,
      badge: null,
    },
    {
      title: 'IBM Dev Day Hackathon',
      institution: 'IBM',
      period: 'April 2026',
      icon: FiAward,
      badge: { text: 'Participant', color: 'yellow' },
    },
    {
      title: 'DeepLearning.AI Specialisations',
      institution: 'DeepLearning.AI',
      period: 'Ongoing',
      icon: FiAward,
      badge: { text: 'In Progress', color: 'electric' },
    },
    {
      title: 'AWS Solutions Architect Associate',
      institution: 'Amazon Web Services',
      period: 'Ongoing',
      icon: FiAward,
      badge: { text: 'In Preparation', color: 'gray' },
    },
    {
      title: 'Google Professional ML Engineer',
      institution: 'Google Cloud',
      period: 'Ongoing',
      icon: FiAward,
      badge: { text: 'In Preparation', color: 'gray' },
    },
    {
      title: 'Kaggle ML & Data Science',
      institution: 'Kaggle',
      period: 'Ongoing',
      icon: FiCheckCircle,
      badge: { text: 'In Progress', color: 'electric' },
    },
  ];

  const getBadgeColor = (color) => {
    const colors = {
      electric: 'bg-electric-500/10 text-electric-500',
      yellow: 'bg-yellow-500/10 text-yellow-500',
      gray: 'bg-gray-500/10 text-gray-500',
    };
    return colors[color] || colors.gray;
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Certifications & Education</h2>
          <p className="section-subtitle">
            Continuous learning and professional development
          </p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  {cert.badge && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(
                        cert.badge.color
                      )}`}
                    >
                      {cert.badge.text}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {cert.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {cert.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
