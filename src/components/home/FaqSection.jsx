import React, { useState } from 'react';
import { FiChevronDown, FiMessageCircle, FiPhoneCall, FiHeadphones } from 'react-icons/fi';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'How long does it take to get a project estimate?',
    answer: 'We typically provide initial estimates within 24-48 hours after receiving your project details. For complex projects, we may schedule a consultation call to better understand your requirements.'
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We work with organizations of all sizes, from startups to enterprise clients. We offer flexible pricing models and can scale our services to match your needs and budget.'
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints, client feedback sessions, and iterative improvements. You\'ll have full visibility into the project progress throughout the development cycle.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements as needed.'
  },
  {
    question: 'Which industries and platforms do you serve?',
    answer: 'From fintech and brokerages to eCommerce, education, and messaging platforms — we build on Django, React, Node, and cloud infrastructure to deliver solutions that scale across Africa.'
  }
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Frequently Asked <span className="text-gradient-aurora">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Answers to the questions we hear most from our clients.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[534px_minmax(0,1fr)] gap-8 md:gap-10 items-start">
          {/* Visual */}
          <Reveal className="hidden lg:block relative rounded-[27px] overflow-hidden lg:sticky lg:top-28 bg-gradient-nav" style={{ height: '701px' }}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
              <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full border-2 border-white/30"></div>
              <div className="absolute bottom-1/3 right-10 w-40 h-40 rounded-full border-2 border-white/30"></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-white/95 dark:bg-dark-800 flex items-center justify-center p-6 shadow-2xl animate-float">
                <img src="/neovam_logo.png" alt="NeoVam" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-xl mb-2 flex items-center justify-center gap-2">
                  <FiPhoneCall className="w-5 h-5 animate-pulse" /> We're a call away
                </p>
                <p className="text-indigo-100 text-sm">Our customer service team is ready to assist you.</p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 dark:bg-dark-800/80 backdrop-blur border border-white/20 animate-float">
              <p className="text-white font-semibold text-lg mb-1 flex items-center gap-2"><FiHeadphones className="w-5 h-5" /> Still have questions?</p>
              <p className="text-indigo-100 text-sm">Reach out anytime — we're happy to help you get started.</p>
            </div>
          </Reveal>

          {/* FAQ list */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div
                    className={`overflow-hidden rounded-[19px] border transition-colors duration-300 ${
                      isOpen
                        ? 'border-primary-400 dark:border-primary-500/60 bg-white dark:bg-dark-800 shadow-lg'
                        : 'border-gray-200 dark:border-dark-600 bg-white/70 dark:bg-dark-800/60 backdrop-blur'
                    }`}
                  >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[78px] px-5 sm:px-6 flex items-center justify-between gap-5 cursor-pointer text-left"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full flex-none transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-primary text-white rotate-180'
                          : 'bg-primary-500/10 text-primary-500'
                      }`}
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;