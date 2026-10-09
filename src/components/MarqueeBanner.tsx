import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'OVEROOM ARCHITECTURE',
    'RESIDENTIAL SANCTUARY',
    'CURATED MATERIALITY',
    'SPATIAL TRANQUILITY',
    'MINERAL LIGHTING',
    'SEOUL ATELIER'
  ];

  return (
    <section className="bg-[#98abae] text-[#181818] overflow-hidden py-5 sm:py-6 border-y border-[#181818]/10 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center text-2xl sm:text-4xl md:text-5xl font-serif-display uppercase tracking-wider font-light">
        {/* First set */}
        {items.map((item, index) => (
          <React.Fragment key={`first-${index}`}>
            <span className="mx-6 sm:mx-8">{item}</span>
            <span className="text-base sm:text-lg opacity-40 font-sans">✦</span>
          </React.Fragment>
        ))}
        {/* Duplicated set for seamless loop */}
        {items.map((item, index) => (
          <React.Fragment key={`second-${index}`}>
            <span className="mx-6 sm:mx-8">{item}</span>
            <span className="text-base sm:text-lg opacity-40 font-sans">✦</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
