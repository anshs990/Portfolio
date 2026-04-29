import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Shree Ramji. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anshs990"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shreeram07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-electric-500 dark:hover:text-electric-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Built with React */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <FiHeart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and React</span>
          </div>
        </div>

        {/* Back to top link */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToTop}
            className="text-sm text-electric-500 hover:text-electric-600 font-medium transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
