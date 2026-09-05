import React, { useEffect, useRef } from 'react';

const partners = [
  { 
    name: 'Victory Financial Services', 
    img: '/assets/vfsl.png', 
    alt: 'Victory Financial Services' 
  },
  { 
    name: 'CRDB Bank Plc', 
    img: '/assets/crdb.jpg', 
    alt: 'CRDB Bank Plc' 
  },
  { 
    name: 'DSE', 
    img: '/assets/DSE.png', 
    alt: 'Dar es Salaam Stock Exchange' 
  },
  { 
    name: 'Selcom', 
    img: '/assets/selcom.webp', 
    alt: 'Selcom - Payment Solutions' 
  },
  { 
    name: 'ClickPesa', 
    img: '/assets/clickpesa.png', 
    alt: 'ClickPesa - Digital Payments' 
  }
];

const TrustLogosSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const curves = section.querySelectorAll('.trust-curve');

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      curves.forEach((curve, index) => {
        const amount = (index + 1) * 0.5;
        curve.style.marginLeft = `${x * amount}px`;
        curve.style.marginTop = `${y * amount}px`;
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-20 bg-gray-50 dark:bg-primary-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary-500/5 blur-3xl"></div>
      </div>

      <div className="trust-curve trust-curve-1"></div>
      <div className="trust-curve trust-curve-2"></div>
      <div className="trust-curve trust-curve-3"></div>

      <div className="trust-header relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          They Trust <span className="text-gradient-aurora">Us</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Leading institutions have entrusted NeoVam with the development of their software products.
        </p>
      </div>

      <div className="logos-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 md:p-10">
          {partners.map((partner) => (
            <div 
              className="logo-item flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 group" 
              key={partner.name}
            >
              <img
                src={partner.img}
                alt={partner.alt}
                loading="lazy"
                // ✅ REMOVED grayscale and opacity - now shows original colors!
                className="max-h-16 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            50+ Happy Clients
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            100+ Projects Delivered
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            10+ Countries Served
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            5.0 Client Rating
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogosSection;