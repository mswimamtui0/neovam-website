import React from 'react';
import { FiSend, FiZap, FiShoppingCart, FiBookOpen, FiTrendingUp, FiBarChart2, FiActivity } from 'react-icons/fi';
import Reveal from './Reveal';

const ProjectFlowSection = () => {
  const channels = [
    { icon: FiSend, title: 'WhatsApp Chat Bot', desc: 'Automated customer conversations', cls: 'left-[1%] top-[120px] w-[27%]' },
    { icon: FiZap, title: 'Bulk SMS', desc: 'Marketing & broadcast messaging', cls: 'left-[1%] top-[300px] w-[27%]' },
    { icon: FiShoppingCart, title: 'Myshopii', desc: 'Multi-vendor eCommerce marketplace', cls: 'left-[1%] top-[480px] w-[27%]', orange: true }
  ];

  const platforms = [
    { icon: FiBookOpen, title: 'African Western Education', desc: 'Education agency platform', cls: 'left-[72%] top-[120px] w-[27%]' },
    { icon: FiTrendingUp, title: 'StockEx Pro', desc: 'Full brokerage & HR suite', cls: 'left-[72%] top-[300px] w-[27%]' },
    { icon: FiBarChart2, title: 'Victory Financial Services', desc: 'DSE brokerage & investment', cls: 'left-[72%] top-[480px] w-[27%]' }
  ];

  const connectors = [
    'M450 170 C575 170 575 340 635 365',
    'M450 350 C575 350 575 395 635 395',
    'M450 530 C575 530 575 450 635 425',
    'M1015 365 C1040 365 1040 170 1155 170',
    'M1015 395 C1040 395 1040 350 1155 350',
    'M1015 425 C1040 425 1040 530 1155 530',
    'M245 220 L245 300',
    'M245 400 L245 480',
    'M1360 220 L1360 300',
    'M1360 400 L1360 480'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            How Our <span className="text-gradient-aurora">Solutions Flow</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Inside the platforms NeoVam has designed, built, and delivered — messaging, commerce, education, and finance working together.
          </p>
        </Reveal>

        <div className="relative w-full mx-auto bg-gray-50 dark:bg-dark-800 rounded-3xl border border-gray-100 dark:border-dark-600 overflow-hidden"
          style={{ minHeight: '640px' }}>

          {/* Flow layer */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1600 640"
            preserveAspectRatio="none"
            style={{ pointerEvents: 'none', zIndex: 1 }}
          >
            {/* Static underlay */}
            {connectors.map((d) => (
              <path
                key={`s-${d}`}
                d={d}
                fill="none"
                stroke="#c7d2fe"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="dark:stroke-indigo-900"
              />
            ))}
            {/* Animated active layer */}
            {connectors.map((d, i) => (
              <path
                key={`a-${i}`}
                d={d}
                fill="none"
                stroke={i % 2 === 0 ? '#2f6bf0' : '#6d28d9'}
                strokeWidth="4"
                strokeLinecap="round"
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(109,40,217,0.6))',
                  strokeDasharray: '16 1000',
                  animation: 'flowPulse 2.2s linear infinite',
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </svg>

          <style>{`
            @keyframes flowPulse {
              to { stroke-dashoffset: -1000; }
            }
          `}</style>

          {/* Left channel cards */}
          {channels.map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.cls} z-10 flex items-center gap-4 rounded-[26px] bg-white dark:bg-dark-700 px-5 py-4 h-[100px] shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-aurora text-white grid place-items-center flex-none group-hover:rotate-6 transition-transform">
                <node.icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{node.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{node.desc}</p>
              </div>
            </div>
          ))}

          {/* Right platform cards */}
          {platforms.map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.cls} z-10 flex items-center gap-4 rounded-[26px] bg-white dark:bg-dark-700 px-5 py-4 h-[100px] shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-aurora text-white grid place-items-center flex-none group-hover:rotate-6 transition-transform">
                <node.icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{node.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{node.desc}</p>
              </div>
            </div>
          ))}

          {/* Central hub */}
          <div className="absolute left-[39%] top-[330px] w-[22%] h-[140px] z-10 flex flex-col items-center justify-center rounded-[28px] bg-gradient-nav text-white px-4 text-center shadow-xl">
            <div className="w-12 h-12 rounded-full bg-white/15 text-white grid place-items-center mb-2 animate-icon-bounce">
              <FiActivity className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Powered by NeoVam</h3>
            <p className="text-xs sm:text-sm text-indigo-100 mt-1">Design · Build · Deploy · Support</p>
          </div>

          {/* Bottom label */}
          <div className="absolute left-[39%] top-[500px] z-10 rounded-full bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-600 px-5 py-2.5 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap shadow-sm">
            All built &amp; delivered by NeoVam
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFlowSection;