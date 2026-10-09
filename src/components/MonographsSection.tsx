import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/atelierData';

export const MonographsSection: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentQuoteIndex];

  return (
    <section
      className="bg-[#eae5dc] py-20 sm:py-28 px-6 sm:px-10 border-y border-[#181818]/10"
      id="monographs"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-widest uppercase font-mono text-[#181818]/60 block mb-2">
            04 / TESTIMONIALS
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl uppercase tracking-wider text-[#181818]">
            Kind Words &amp; Monographs
          </h2>
        </div>

        {/* Featured Pull Quote with Next/Prev Controls */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="flex justify-between items-center mb-6 px-4">
            <button
              onClick={prevQuote}
              aria-label="Previous quote"
              className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity p-2 cursor-pointer"
            >
              ←
            </button>
            <span className="text-[10px] uppercase tracking-widest text-[#181818]/50">
              RESIDENTIAL CLIENT FEATURE ({currentQuoteIndex + 1} / {TESTIMONIALS.length})
            </span>
            <button
              onClick={nextQuote}
              aria-label="Next quote"
              className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity p-2 cursor-pointer"
            >
              →
            </button>
          </div>

          <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-[#181818] leading-snug uppercase tracking-tight min-h-[120px] flex items-center justify-center transition-all duration-300">
            "{current.quote}"
          </blockquote>

          <cite className="block mt-6 text-[10px] uppercase tracking-[0.25em] font-medium text-[#181818]/70 not-italic">
            — {current.author} · {current.project}
          </cite>
        </div>

        {/* Card Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#181818]/15">
          <div className="bg-[#f4f1ec]/70 p-6 sm:p-8 border border-[#181818]/10 flex flex-col justify-between hover:bg-[#f4f1ec] transition-colors">
            <p className="text-xs leading-relaxed text-[#181818]/80 font-light mb-6">
              "Working with OVEROOM was like commissioning a permanent sculpture. Their restraint
              with travertine and cove lighting created an environment where our family feels true
              sanctuary amidst Gangnam’s bustle."
            </p>
            <div className="border-t border-[#181818]/10 pt-4">
              <span className="font-serif-display text-sm uppercase text-[#181818] block">
                Cheongdam Villa
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#181818]/60">
                320 sqm Sanctuary
              </span>
            </div>
          </div>

          <div className="bg-[#f4f1ec]/70 p-6 sm:p-8 border border-[#181818]/10 flex flex-col justify-between hover:bg-[#f4f1ec] transition-colors">
            <p className="text-xs leading-relaxed text-[#181818]/80 font-light mb-6">
              "Their deep knowledge of acoustic dampening and raw concrete gave our flagship coffee
              atelier an immediate identity. Customers describe the space as meditative and
              emotionally cooling."
            </p>
            <div className="border-t border-[#181818]/10 pt-4">
              <span className="font-serif-display text-sm uppercase text-[#181818] block">
                Kaizen Seongsu Atelier
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#181818]/60">
                Commercial Hospitality
              </span>
            </div>
          </div>

          <div className="bg-[#f4f1ec]/70 p-6 sm:p-8 border border-[#181818]/10 flex flex-col justify-between hover:bg-[#f4f1ec] transition-colors">
            <p className="text-xs leading-relaxed text-[#181818]/80 font-light mb-6">
              "The bespoke bed frame and limestone bathroom integration feel effortlessly
              timeless. Two years later, the natural materials have aged with stunning grace."
            </p>
            <div className="border-t border-[#181818]/10 pt-4">
              <span className="font-serif-display text-sm uppercase text-[#181818] block">
                UN Village Hannam
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#181818]/60">
                Private Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
