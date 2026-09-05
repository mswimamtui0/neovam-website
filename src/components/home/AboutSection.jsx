import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCpu, FiCloud, FiTarget } from 'react-icons/fi';
import Reveal from './Reveal';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-soft dark:bg-dark-900">
      {/* ambient glows */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
              About NeoVam
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Who <span className="text-gradient-aurora">We Are</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              NeoVam is a forward-thinking technology company based in <span className="text-primary-600 dark:text-primary-400 font-semibold">Dar es Salaam, Tanzania</span>, at the forefront of Africa's digital transformation.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              We specialize in delivering comprehensive technology solutions that bridge the gap between innovation and practical business needs. Our team of experts combines deep technical knowledge with an understanding of the African market to create solutions that truly make a difference.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="group text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-aurora rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiCpu className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">AI-Powered</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Intelligent Solutions</p>
              </div>

              <div className="group text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-aurora rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiCloud className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">Cloud-Native</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Scalable Architecture</p>
              </div>

              <div className="group text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-aurora rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiTarget className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">Result-Focused</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Measurable Impact</p>
              </div>
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 bg-gradient-nav text-white text-sm sm:text-base font-semibold rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
            >
              Learn More About Us
              <FiArrowRight className="hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative order-first lg:order-last mb-8 lg:mb-0 flex justify-center">
            {/* Perfect-circle orbit: square field, Neovam fixed center, badges on a constant radius */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] flex-shrink-0">
              {(() => {
                // Field is a perfect square → constants produce a true circle.
                // Percent radius keeps badges exactly on a circle around center (50,50).
                const R = 37;
                const items = [
                  { angle: 90, w: 64, bg: 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600', pad: 'p-1.5', content: () => <img src="/assets/africawestern.png" alt="African Western Education" className="w-full h-full object-contain" /> },
                  { angle: 30, w: 64, bg: 'bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-orange-300/70', pad: 'p-1.5', content: () => <img src="/assets/myshopii.png" alt="Myshopii" className="w-full h-full object-contain" /> },
                  { angle: -30, w: 68, bg: 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600', pad: 'p-1.5', content: () => <img src="/assets/vfsl.png" alt="Victory Financial Services" className="w-full h-full object-contain" /> },
                  { angle: -90, w: 60, bg: 'bg-gradient-aurora', pad: '', content: () => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-6 h-6 sm:w-7 sm:h-7"><path d="M4 17V7l8 6 8-6v10" /><path d="M4 17h16" /></svg>
                  ) },
                  { angle: -150, w: 64, bg: 'bg-gradient-aurora', pad: '', content: () => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" className="w-7 h-7 sm:w-8 sm:h-8"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
                  ) },
                  { angle: 150, w: 60, bg: 'bg-gradient-to-br from-green-400 to-green-600', pad: '', content: () => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-6 h-6 sm:w-7 sm:h-7"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.4 4.6 3.6 6L5 21l3.9-1.6c1 .3 2 .5 3.1.5 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/><circle cx="9" cy="11" r="1" fill="#fff"/><circle cx="15" cy="11" r="1" fill="#fff"/></svg>
                  ) },
                ];

                // Rotating track holds badges; origin pinned to exact center for a perfect circle.
                return (
                  <div
                    className="absolute inset-0 animate-[spinSlow_40s_linear_infinite]"
                    style={{ transformOrigin: '50% 50%' }}
                  >
                    {items.map((it, i) => {
                      const rad = (it.angle * Math.PI) / 180;
                      const x = 50 + R * Math.cos(rad);
                      const y = 50 + R * Math.sin(rad);
                      return (
                        // Static positioning wrapper (NOT animated) so the translate centering is never overridden
                        <div
                          key={i}
                          className="absolute"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: it.w,
                            height: it.w,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          {/* Animated counter-rotation keeps the logo upright; runs on inner element only */}
                          <div
                            className={`w-full h-full rounded-full ${it.bg} shadow-xl flex items-center justify-center overflow-hidden animate-[spinReverse_40s_linear_infinite] ${it.pad}`}
                          >
                            {it.content()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Fixed center — Neovam logo stays perfectly centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 shadow-2xl flex items-center justify-center p-3 z-10 animate-glow-pulse">
                <img src="/neovam_logo.png" alt="NeoVam" className="w-full h-full object-contain" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
