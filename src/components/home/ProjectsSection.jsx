import React from 'react';
import { FiArrowRight, FiBookOpen, FiTrendingUp, FiBarChart2, FiSend } from 'react-icons/fi';
import Reveal from './Reveal';

const projects = [
  {
    name: 'Educational Agency System Management',
    tags: ['Education', 'Platform'],
    icon: FiBookOpen,
    description: 'A management platform for educational agencies — student registration, university application management, and partner/institution services in one place.',
    link: '#'
  },
  {
    name: 'Brokerage Software Solutions',
    tags: ['Finance', 'Trading'],
    icon: FiTrendingUp,
    description: 'Run an entire brokerage without stitching together 10 different systems — from order intake to settlement, payroll, and reporting.',
    link: '#'
  },
  {
    name: 'Fund Management System',
    tags: ['Investment', 'Finance'],
    icon: FiBarChart2,
    description: 'A full-stack system where clients browse live DSE market data, invest in funds and bonds, and manage portfolios on one platform.',
    link: '#'
  },
  {
    name: 'DSE Trained Chatbot',
    tags: ['AI', 'Finance', 'Chat'],
    icon: FiTrendingUp,
    description: 'A DSE trained AI assistant that answers market questions and guides clients through investing in stocks, funds, and bonds.',
    link: '#'
  },
  {
    name: 'Bulk SMS & Messaging Solutions',
    tags: ['Messaging', 'Marketing'],
    icon: FiSend,
    description: 'Reach millions of customers in one go — bulk SMS, promotional messaging, and communication tools for businesses and community groups.',
    link: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-soft dark:bg-dark-900">
      {/* ambient glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-400/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <Reveal className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            Solutions built by <span className="text-gradient-aurora">NeoVam</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From education agencies to brokerage, fund management, and messaging we design and ship platforms that make complex operations simple.
          </p>
        </Reveal>

        {/* Service scope cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 90}>
              <div
                className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-600 shadow-lg dark:shadow-none hover:shadow-2xl hover:border-primary-300 dark:hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card header gradient icon */}
                <div className="relative w-full h-24 sm:h-28 flex items-center justify-center border-b border-gray-100 dark:border-dark-600 bg-gradient-nav">
                  <project.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent pointer-events-none"></div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <div className="mb-2">
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-500/20 text-[10px] font-semibold text-primary-600 dark:text-indigo-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all duration-300"
                  >
                    Start Project
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View More */}
        <Reveal className="text-center mt-10 sm:mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-nav text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start a Project
            <FiArrowRight className="w-4 h-4" />
          </a>
        </Reveal>

      </div>
    </section>
  );
};

export default ProjectsSection;
