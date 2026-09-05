import React from 'react';
import { FiTrendingUp, FiSend } from 'react-icons/fi';

const projects = [
  { name: 'African Western Education', abbr: 'AWE', img: '/assets/africawestern.png' },
  { name: 'Victory Financial Services', abbr: 'VFS', img: '/assets/vfsl.png' },
  { name: 'Myshopii', abbr: 'MS', img: '/assets/myshopii.png', cardClass: 'bg-orange-500 dark:bg-orange-500 border-orange-300 dark:border-orange-400 hover:border-orange-400' },
  { name: 'WhatsApp Chat Bot', abbr: 'WB', img: '/assets/whatsapp-bot.jpg', icon: FiSend },
  { name: 'Bulk SMS', abbr: 'BS', img: '/assets/bulk-sms-logo.png' }
];

const TrustedBySection = () => {
  const items = [...projects, ...projects];

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 bg-white dark:bg-dark-900">
      {/* ambient glow */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-primary-400/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-24 right-1/5 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm uppercase tracking-widest text-gray-500 dark:text-blue-300/70 font-semibold mb-8 sm:mb-10 animate-fade-in">
          Projects &amp; platforms built by NeoVam
        </p>

        <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
          <div className="flex gap-8 sm:gap-16 items-center w-max animate-marquee">
            {items.map((project, index) => (
              <div
                key={index}
                className={`w-44 h-24 rounded-2xl shadow-sm flex items-center justify-center p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  project.cardClass
                    ? project.cardClass
                    : 'bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-600 border-primary-200 dark:hover:border-primary-500/40'
                }`}
              >
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="max-h-14 max-w-[80%] object-contain"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <project.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-bold text-gray-700 dark:text-blue-100 whitespace-nowrap">
                      {project.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;