import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const Hero = ({ scrollToSection }) => {
  const roles = [
    'ML Engineer',
    'AI Engineer',
    'MLOps Engineer',
    'Data Engineer',
    'GenAI Engineer',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Type or delete character
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/anshs990',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/shreeram07',
      label: 'LinkedIn',
    },
    {
      icon: FiMail,
      href: 'mailto:shreeram.tech.dev@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="animated-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: Math.random() * 3 + 6 + 's',
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-electric-500 to-indigo-600 bg-clip-text text-transparent">
              Shree Ramji
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 h-12 flex items-center justify-center">
            <span className="text-electric-500">{displayedText}</span>
            <span className="typewriter-cursor ml-1 h-8 md:h-10"></span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            5.5 years of enterprise engineering · MSc ML @ QMUL · Building production-grade AI systems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2"
            >
              View My Projects
              <FiArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline"
            >
              Hire Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-navy-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-electric-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
