import React from 'react';
import { FiStar, FiTrendingUp, FiUsers, FiGlobe } from 'react-icons/fi';
import Reveal from './Reveal';
import WaveDivider from './WaveDivider';

const stats = [
  { icon: FiUsers, number: '50+', label: 'Happy Clients' },
  { icon: FiTrendingUp, number: '100+', label: 'Projects Completed' },
  { icon: FiGlobe, number: '10+', label: 'Countries Served' },
  { icon: FiStar, number: '5.0', label: 'Client Rating' }
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-24 pb-16 sm:pb-20 md:pb-28 bg-white dark:bg-dark-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Our Impact in Numbers</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">Measurable results that speak for themselves</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group text-center p-3 sm:p-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-400/10 dark:bg-primary-400/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:bg-gradient-aurora group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="text-primary-600 dark:text-primary-400 group-hover:text-white text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Aurora wave divider into the next section */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <WaveDivider />
      </div>
    </section>
  );
};

export default StatsSection;
