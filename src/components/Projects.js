import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'ML/AI',
    'GenAI & Agents',
    'MLOps',
    'Data Engineering',
    'Computer Vision',
    'Data Science',
  ];

  const projects = [
    {
      title: 'Oral Disease Detection from Dental Imaging',
      category: 'Computer Vision',
      tech: ['PyTorch', 'ResNet', 'ViT', 'Mamba'],
      description:
        'MSc dissertation — benchmarking CNN, transformer, and state space architectures for dental disease detection and localisation.',
      featured: true,
      github: 'oral-disease-detection',
    },
    {
      title: 'Custom LLaVA Multimodal QA System',
      category: 'ML/AI',
      tech: ['PyTorch', 'LongCLIP', 'Qwen3', 'HuggingFace'],
      description:
        'Fine-tuned custom vision-language model for multimodal question answering; competed in cohort-wide accuracy ranking.',
      featured: true,
      github: 'llava-multimodal-qa',
    },
    {
      title: 'Trading Floor — 4-Agent Autonomous System',
      category: 'GenAI & Agents',
      tech: ['CrewAI', 'MCP', 'LangGraph', 'AWS Bedrock'],
      description:
        '4 autonomous agents powered by 6 MCP servers and 44 tools for real-time trading decisions.',
      featured: true,
      github: 'trading-floor-agents',
    },
    {
      title: 'Medical RAG Chatbot',
      category: 'GenAI & Agents',
      tech: ['LangChain', 'FAISS', 'AWS', 'Jenkins'],
      description:
        'Healthcare chatbot with RAG architecture for medical information retrieval using vector databases.',
      featured: false,
      github: 'medical-rag-chatbot',
    },
    {
      title: 'Production MLOps Suite (5 pipelines)',
      category: 'MLOps',
      tech: ['MLflow', 'DVC', 'K8s', 'Airflow'],
      description:
        'End-to-end MLOps platform with experiment tracking, model registry, CI/CD, and monitoring.',
      featured: false,
      github: 'mlops-suite',
    },
    {
      title: '3D Brain Tissue Segmentation',
      category: 'Computer Vision',
      tech: ['PyTorch', 'U-Net', 'LOOCV'],
      description:
        'Medical imaging segmentation using 3D U-Net with leave-one-out cross-validation.',
      featured: false,
      github: 'brain-segmentation',
    },
    {
      title: 'Customer Churn + Credit Risk Suite',
      category: 'Data Science',
      tech: ['XGBoost', 'SHAP', 'Prophet'],
      description:
        'Predictive models for customer churn and credit risk assessment with explainable AI.',
      featured: false,
      github: 'churn-credit-risk',
    },
    {
      title: 'Data Engineering Pipeline Suite',
      category: 'Data Engineering',
      tech: ['Spark', 'Kafka', 'Databricks'],
      description:
        'Scalable ETL pipelines for real-time and batch data processing.',
      featured: false,
      github: 'data-pipeline-suite',
    },
    {
      title: 'IBM Hackathon — MCP Agent',
      category: 'GenAI & Agents',
      tech: ['LangGraph', 'MCP', 'FastAPI'],
      description:
        'AI agent with MCP integration for automated tool calling built during IBM hackathon.',
      featured: false,
      github: 'ibm-mcp-agent',
    },
    {
      title: 'CIFAR-10 Custom CNN',
      category: 'Computer Vision',
      tech: ['PyTorch', 'NumPy'],
      description:
        'Custom convolutional neural network architecture for image classification.',
      featured: false,
      github: 'cifar10-cnn',
    },
    {
      title: 'Multi AI Agent System',
      category: 'GenAI & Agents',
      tech: ['LangGraph', 'FastAPI', 'Jenkins'],
      description:
        'Collaborative multi-agent system for complex task automation.',
      featured: false,
      github: 'multi-agent-system',
    },
    {
      title: 'LLM Fine-tuning Suite',
      category: 'ML/AI',
      tech: ['HuggingFace', 'PyTorch', 'RAG', 'SageMaker'],
      description:
        'Framework for fine-tuning large language models with RAG integration.',
      featured: false,
      github: 'llm-finetuning',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of AI/ML projects showcasing production-grade engineering
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/25'
                    : 'bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card card-hover p-6 group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {project.featured && (
                          <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                        <span className="text-xs font-medium px-2 py-1 bg-electric-500/10 text-electric-500 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-electric-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={`https://github.com/anshs990/${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric-500 hover:text-electric-600 font-medium text-sm transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
