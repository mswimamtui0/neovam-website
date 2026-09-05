import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const SLIDES = [
  { image: '/assets/hero.jpg', alt: 'NeoVam Technology' },
  { image: '/assets/group_discussion.png', alt: 'NeoVam Team Discussion' },
  { image: '/assets/work_mode.png', alt: 'NeoVam Work Mode' }
];

const SLIDE_INTERVAL = 5000;

const avatars = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-[1]">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-linear ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'}`}
            style={{ backgroundImage: `url(${slide.image})`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)', transition: 'opacity 1.2s ease, transform 7s ease' }}
            role="img"
            aria-label={slide.alt}
          ></div>
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-dark-950/55 dark:bg-dark-950/70"></div>
        {/* Richer aurora gradient mixture from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-primary-600/45 to-cyan-800/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent"></div>
      </div>

      {/* Soft glow orbs in brand mixture */}
      <div className="absolute inset-0 z-[1] opacity-60 dark:opacity-70 pointer-events-none">
        <div className="absolute top-1/4 left-[8%] w-96 h-96 bg-primary-500/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-violet-500/30 rounded-full filter blur-3xl animate-pulse-slow animate-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full filter blur-3xl animate-pulse-slow animate-delay-300"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/70 animate-float"
            style={{
              left: `${6 + i * 12}%`,
              top: `${12 + (i * 17) % 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full z-10 text-center">
        <div className="animate-fade-in">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[0.95] mb-6 text-white drop-shadow-lg" aria-label="NeoVam">
            <span className="bg-gradient-to-r from-primary-300 via-primary-200 to-white bg-clip-text text-transparent">POWERING AFRICA'S</span><br />
            <span>DIGITAL FUTURE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            NeoVam blends <span className="text-primary-300 font-semibold">AI</span>, <span className="text-primary-300 font-semibold">Cloud</span> & <span className="text-primary-300 font-semibold">Fintech</span> to build intelligent products that accelerate digital transformation for businesses and governments across Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 justify-center items-center animate-slide-up animate-delay-500">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-nav text-white text-base font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
            >
              Get Started Today
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 dark:bg-dark-800/40 backdrop-blur-md border border-white/40 dark:border-primary-300/40 text-white text-base font-semibold rounded-xl hover:bg-white/30 hover:text-white transition-all duration-300 touch-manipulation"
            >
              Explore Services
            </Link>
          </div>

          {/* Social proof / Stats */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 animate-slide-up animate-delay-700 flex-wrap">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-white/60 object-cover shadow-md" />
              ))}
            </div>
            <div className="text-left leading-tight">
              <strong className="block text-white font-bold text-lg">50+ Happy Clients</strong>
              <span className="text-xs text-gray-200 dark:text-gray-300">Trusted across 10+ countries</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-left leading-tight">
              <strong className="block text-white font-bold text-lg">100+ Projects</strong>
              <span className="text-xs text-gray-200 dark:text-gray-300">Delivered on time</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-left leading-tight">
              <strong className="block text-white font-bold text-lg">5.0 Rating</strong>
              <span className="text-xs text-gray-200 dark:text-gray-300">Client satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-20 right-4 sm:right-8 z-10 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 cursor-pointer p-0 ${index === currentSlide ? 'bg-white border-white scale-125' : 'bg-transparent border-white/60 hover:border-white'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center text-white">
          <FiChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
