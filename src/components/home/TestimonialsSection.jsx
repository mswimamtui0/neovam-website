import React from 'react';
import { FiStar } from 'react-icons/fi';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, TechCorp',
    content: 'NeoVam transformed our digital infrastructure. Their AI solutions increased our efficiency by 40%.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Michael Chen',
    title: 'CEO, InnovateLabs',
    content: 'Outstanding work on our fintech platform. Professional, reliable, and truly innovative.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Amanda Davis',
    title: 'Director, DataFlow',
    content: 'The cloud migration was seamless. NeoVam exceeded our expectations in every aspect.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-dark-900">
      {/* ambient glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-400/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            What Our Clients <span className="text-gradient-aurora">Are Saying</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">Trusted by businesses across Africa and beyond</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="group relative h-full p-6 sm:p-8 bg-white dark:bg-dark-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-glow hover:shadow-xl dark:hover:shadow-primary-400/20 hover:-translate-y-1 transition-all duration-300 border dark:border-gray-700">
                <span className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-aurora text-white text-2xl font-black grid place-items-center shadow-lg group-hover:rotate-6 transition-transform">
                  "
                </span>
                <div className="flex items-center gap-3 mb-4 sm:mb-6 pt-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover border-2 border-primary-200 dark:border-primary-400/40" loading="lazy" />
                  <div>
                    <h4 className="text-sm sm:text-base text-gray-900 dark:text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 italic leading-relaxed mb-3 sm:mb-4">"{testimonial.content}"</p>
                <div className="flex text-amber-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current animate-icon-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
