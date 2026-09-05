import React from 'react';
import { FiZap, FiShield, FiCloud, FiDollarSign, FiUsers, FiMessageSquare } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
    color: '#f59e0b'
  },
  {
    icon: FiShield,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security and compliance for your most critical applications.',
    color: '#10b981'
  },
  {
    icon: FiCloud,
    title: 'Cloud-First Approach',
    description: 'Scalable cloud solutions that grow with your business needs and ambitions.',
    color: '#2563eb'
  },
  {
    icon: FiDollarSign,
    title: 'Fintech Innovations',
    description: 'Payment and financial integrations that unlock new revenue streams.',
    color: '#ec4899'
  },
  {
    icon: FiMessageSquare,  // New icon for Bulk SMS
    title: 'Bulk SMS Solutions',
    description: 'Reach millions of customers instantly with reliable bulk SMS and messaging solutions.',
    color: '#8b5cf6'  // Purple color
  },
  {
    icon: FiUsers,
    title: 'Dedicated Support',
    description: '24/7 expert support and partnership from day one to scale.',
    color: '#06b6d4'
  }
];

// Fan chart geometry (matches sample: 250/250 center, rOuter 230, 200deg sweep)
const cx = 250;
const cy = 250;
const rOuter = 230;
const startAngle = -100;
const totalSpan = 200;
const step = totalSpan / features.length;

const toXY = (angleDeg, r) => {
  const rad = (angleDeg * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

const slices = features.map((_, i) => {
  const a0 = startAngle + i * step;
  const a1 = startAngle + (i + 1) * step;
  const [x0, y0] = toXY(a0, rOuter);
  const [x1, y1] = toXY(a1, rOuter);
  const path = `M ${cx} ${cy} L ${x0} ${y0} A ${rOuter} ${rOuter} 0 0 1 ${x1} ${y1} Z`;
  const mid = (a0 + a1) / 2;
  const [lx, ly] = toXY(mid, rOuter * 0.62);
  return { path, left: `${(lx / 500) * 100}%`, top: `${(ly / 500) * 100}%` };
});

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-white dark:bg-dark-900">
      {/* ambient gradient blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-400/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-primary-600/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            Why NeoVam
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            Why Choose <span className="text-gradient">NeoVam?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 sm:gap-14 lg:gap-16 items-center">

          {/* Fan chart */}
          <div className="relative flex justify-center items-center min-h-[380px] sm:min-h-[420px] lg:min-h-[520px] order-first">
            {/* static decorative layers */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[470px] lg:h-[470px] rounded-full border-2 border-dashed border-primary-300/30 dark:border-primary-400/20"></div>
            </div>
            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[430px] lg:h-[430px] rounded-full bg-gradient-to-br from-primary-400/15 to-primary-700/15 blur-2xl"></div>

            {/* rotating fan + labels (labels counter-rotate to stay upright) */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px] animate-spin-slow">
              <svg viewBox="0 0 500 500" className="w-full h-auto" style={{ filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.12))' }}>
                {features.map((feature, i) => (
                  <path
                    key={i}
                    d={slices[i].path}
                    fill={feature.color}
                    stroke="#fff"
                    strokeWidth="3"
                    className="animate-fan-pop"
                    style={{ animationDelay: `${0.15 + i * 0.12}s`, transformBox: 'view-box', transformOrigin: 'center' }}
                  />
                ))}
              </svg>

              {/* Slice labels */}
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="absolute text-[10px] sm:text-xs font-bold text-white text-center leading-snug pointer-events-none animate-fade-in"
                  style={{ left: slices[i].left, top: slices[i].top, transform: 'translate(-50%,-50%)', width: '110px', animationDelay: `${0.6 + i * 0.12}s` }}
                >
                  <div className="animate-spin-rev">
                    <feature.icon className="w-5 h-5 mb-0.5 inline-block animate-icon-bounce" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="block text-[11px] sm:text-[13px] font-extrabold leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Center circle - fixed above the rotating fan */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white dark:bg-dark-800 border-8 border-primary-100 dark:border-primary-500/20 flex flex-col items-center justify-center text-center shadow-xl z-10">
              <b className="text-base sm:text-lg font-extrabold text-gradient-aurora">{'{ N }'}</b>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5">TECHNOLOGIES</span>
              <div className="flex gap-1.5 mt-2">
                {features.map((f, i) => (
                  <i key={i} className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: f.color, animationDelay: `${i * 0.2}s` }}></i>
                ))}
              </div>
            </div>
          </div>

          {/* Step cards */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[18px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative flex rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] dark:hover:shadow-glow transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* indicator left bar */}
                <div className="absolute inset-y-0 left-0 w-1.5 rounded-r-full" style={{ background: feature.color }}></div>

                <div
                  className="w-[80px] sm:w-[110px] min-w-[80px] sm:min-w-[110px] flex flex-col items-center justify-center gap-1 text-white relative overflow-hidden"
                  style={{ background: `linear-gradient(160deg, ${feature.color}, ${feature.color}cc)` }}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff66,transparent_55%)]"></div>
                  <span className="relative text-2xl sm:text-[34px] font-extrabold transition-transform duration-300 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="relative w-full text-center text-[11px] sm:text-xs font-bold tracking-wider uppercase opacity-90">
                    {feature.title.split(' ')[0]}
                  </span>
                </div>

                <div className="flex-1 p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: feature.color }}
                    >
                      <feature.icon className="text-base sm:text-lg" />
                    </div>
                    <h3 className="text-sm sm:text-lg font-extrabold text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;