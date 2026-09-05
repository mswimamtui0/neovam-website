import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import WaveDivider from './WaveDivider';
import Reveal from './Reveal';

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark-900">
      {/* Aurora wave divider at top */}
      <div className="absolute top-0 left-0 w-full leading-none pointer-events-none rotate-180">
        <WaveDivider />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <Reveal>
          <div className="relative p-6 sm:p-8 md:p-12 bg-gradient-soft dark:bg-primary-900/20 rounded-2xl sm:rounded-3xl border border-primary-200 dark:border-primary-400/20 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-aurora/20 blur-3xl animate-pulse-slow pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-400/20 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to <span className="text-gradient-aurora">Transform Your Business?</span>
            </h2>
            <p className="relative text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Let's discuss how our AI, cloud, and fintech solutions can accelerate your digital transformation.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-nav text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
              >
                Start Your Project
                <FiArrowRight />
              </Link>
              <a
                href="tel:+255123456789"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 text-sm sm:text-base font-semibold rounded-xl hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white transition-all duration-300 touch-manipulation"
              >
                <FiPhone />
                Call Us Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
