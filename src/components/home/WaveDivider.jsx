import React from 'react';

const DEFAULT_COLORS = ['#1e50e0', '#1465c6', '#0f2470'];

const WaveDivider = ({ colors, className = '', flip = false }) => {
  const palette = colors && colors.length ? colors : DEFAULT_COLORS;

  return (
    <div
      className={`relative w-full leading-none pointer-events-none select-none ${className}`}
      style={flip ? { transform: 'rotate(180deg)' } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[50px] sm:h-[80px]"
      >
        {palette.map((color, i) => {
          const offset = 12 + i * 14;
          const d =
            i % 2 === 0
              ? `M0,${58 + offset} C240,${8 + offset} 480,${108 + offset} 720,${58 + offset} C960,${8 + offset} 1200,${108 + offset} 1440,${58 + offset} L1440,120 L0,120 Z`
              : `M0,${42 + offset} C320,${118 + offset} 640,${8 + offset} 960,${52 + offset} C1180,${88 + offset} 1320,${36 + offset} 1440,${68 + offset} L1440,120 L0,120 Z`;
          return <path key={i} fill={color} opacity={1 - i * 0.28} d={d} />;
        })}
      </svg>
    </div>
  );
};

export default WaveDivider;