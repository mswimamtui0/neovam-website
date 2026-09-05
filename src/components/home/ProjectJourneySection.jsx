import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiCpu, FiCloud, FiDollarSign, FiLayers } from 'react-icons/fi';

const ProjectJourneySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 md:gap-12 items-center">

          {/* Left - Journey intro */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white grid place-items-center">
                <FiLayers className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">The Project</div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">NeoVam</h3>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AI, Cloud <span className="text-gradient">&</span> Fintech
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              NeoVam is an AI-powered technology company delivering digital products that accelerate transformation across Africa — from AI agents and messaging to secure cloud infrastructure and fintech payments.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Visit NeoVam
              <FiArrowRight />
            </Link>
          </div>

          {/* Right - Journey card */}
          <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-600 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 grid place-items-center">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">NeoVam AI</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Describe the journey. NeoVam builds the AI agent, payments, cloud infrastructure, and software integration — all under one roof.
                </p>
              </div>
              <div className="flex gap-2 flex-none">
                <FiCloud className="w-5 h-5 text-indigo-500" />
                <FiDollarSign className="w-5 h-5 text-primary-500" />
              </div>
            </div>

            <ul className="space-y-3.5">
              {[
                'Build customer-facing AI products without starting from a blank codebase',
                'Deploy one solution across web, messaging, and fintech channels',
                'Connect knowledge bases, internal tools, databases, and payment actions',
                'Hand complex initiatives to your team with full context attached'
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex-none">
                    <FiCheck className="w-3 h-3" />
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-dark-600">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300"
              >
                Visit NeoVam Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectJourneySection;