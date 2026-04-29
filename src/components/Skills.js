import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCpu,
  FiAperture,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCode,
} from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'ML/AI',
      icon: FiCpu,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'XGBoost',
        'SHAP',
        'HuggingFace',
        'OpenCV',
      ],
    },
    {
      name: 'GenAI/Agents',
      icon: FiAperture,
      skills: [
        'LangChain',
        'LangGraph',
        'CrewAI',
        'AutoGen',
        'RAG',
        'FAISS',
        'MCP',
        'OpenAI API',
        'Claude API',
      ],
    },
    {
      name: 'MLOps',
      icon: FiServer,
      skills: [
        'MLflow',
        'DVC',
        'Airflow',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'Grafana',
        'Prometheus',
      ],
    },
    {
      name: 'Data Eng',
      icon: FiDatabase,
      skills: [
        'Apache Spark',
        'Kafka',
        'Hadoop',
        'Databricks',
        'dbt',
        'PostgreSQL',
        'Azure Synapse',
        'BigQuery',
      ],
    },
    {
      name: 'Cloud',
      icon: FiCloud,
      skills: [
        'AWS',
        'GCP',
        'Azure',
        'Terraform',
        'Vercel',
        'SageMaker',
        'Bedrock',
      ],
    },
    {
      name: 'Languages',
      icon: FiCode,
      skills: [
        'Python',
        'SQL',
        'Bash',
        'Git',
        'FastAPI',
        'Flask',
        'Linux',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-navy-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25'
                    : 'bg-white dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-pill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
