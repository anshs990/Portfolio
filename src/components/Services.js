import React from 'react';
import { motion } from 'framer-motion';
import {
  FiActivity,
  FiMessageSquare,
  FiUsers,
  FiServer,
  FiDatabase,
  FiImage,
  FiArrowRight,
} from 'react-icons/fi';

const Services = ({ scrollToContact }) => {
  const services = [
    {
      icon: FiActivity,
      title: 'ML Model Development',
      description:
        'End-to-end machine learning models from data to deployment. Classification, regression, clustering, time series.',
      tech: ['Python', 'PyTorch', 'Scikit-learn', 'XGBoost', 'FastAPI'],
    },
    {
      icon: FiMessageSquare,
      title: 'RAG & LLM Applications',
      description:
        'Custom chatbots, knowledge bases, and LLM-powered tools using your company data.',
      tech: ['LangChain', 'FAISS', 'OpenAI', 'Claude', 'HuggingFace'],
    },
    {
      icon: FiUsers,
      title: 'AI Agent Development',
      description:
        'Multi-agent systems, browser automation, research agents, and autonomous workflows using latest agentic frameworks.',
      tech: ['CrewAI', 'LangGraph', 'AutoGen', 'MCP'],
    },
    {
      icon: FiServer,
      title: 'MLOps Pipeline Setup',
      description:
        'Automated ML pipelines with experiment tracking, CI/CD, model registry, and monitoring from scratch.',
      tech: ['MLflow', 'DVC', 'Docker', 'Kubernetes', 'GitHub Actions'],
    },
    {
      icon: FiDatabase,
      title: 'Data Engineering',
      description:
        'Scalable data pipelines, ETL workflows, and data infrastructure for ML teams.',
      tech: ['Spark', 'Kafka', 'Airflow', 'Databricks', 'dbt'],
    },
    {
      icon: FiImage,
      title: 'Computer Vision Solutions',
      description:
        'Image classification, object detection, segmentation, and medical imaging analysis.',
      tech: ['PyTorch', 'YOLO', 'OpenCV', 'U-Net', 'HuggingFace'],
    },
  ];

  const handleGetQuote = () => {
    scrollToContact();
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-navy-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Freelance Services</h2>
          <p className="section-subtitle">
            Specialized AI/ML solutions tailored to your business needs
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleGetQuote}
                  className="w-full btn-outline flex items-center justify-center gap-2"
                >
                  Get a Quote
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
