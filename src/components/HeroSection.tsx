import React from 'react';
import { ATELIER_IMAGES } from '../data/atelierData';

interface HeroSectionProps {
  onLearnMethod: () => void;
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onLearnMethod,
  onExplorePortfolio,
}) => {
  return (
    <section
      className="max-w-[1440px] mx-auto pt-8 pb-16 sm:pt-14 sm:pb-24 px-6 sm:px-10"
      id="philosophy"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
        {/* Left Editorial Statement (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8">
          <div>
            {/* Index indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-[10px] tracking-widest text-[#707070] font-mono uppercase">
                01 / MANIFESTO
              </span>
              <span className="w-12 h-[1px] bg-[#181818]/20"></span>
            </div>

            {/* Big High-Fashion Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] uppercase text-[#181818] mb-8 tracking-[-0.04em]">
              True Architecture
              <br />
              Encompasses The
              <br />
              Mind, Void, And
              <br />
              Enduring Spirit.
            </h1>

            <p className="text-[#181818]/70 text-sm sm:text-base font-light leading-relaxed max-w-xl mb-6">
              OVEROOM (오브룸) is a Seoul-based architectural and interior sanctuary atelier. We
              choreograph the silent poetry between raw mineral materiality, proportion, and quiet
              natural daylight.
            </p>

            <p className="text-xs uppercase tracking-widest text-[#707070] font-light mb-12">
              정제된 미학과 물질성, 그리고 빛의 흐름을 탐구하는 공간 디자인 스튜디오
            </p>
          </div>

          {/* Bottom Sub-block with thumbnail offset */}
          <div className="pt-6 border-t border-[#181818]/15 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Small floating thumbnail */}
            <div className="sm:col-span-4 overflow-hidden shadow-sm aspect-[4/3] bg-stone-200 group cursor-pointer" onClick={onLearnMethod}>
              <img
                alt="Minimalist design interior detail"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                src={ATELIER_IMAGES.cafeTimber}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="sm:col-span-8 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-[#707070] block mb-1">
                Architectural Philosophy
              </span>
              <p className="text-xs text-[#181818]/80 leading-relaxed font-light">
                We reject fleeting decorative excess. Every volume is crafted as a monolithic
                sculpture that deepens with patina, time, and contemplative living.
              </p>
              <button
                onClick={onLearnMethod}
                className="mt-3 text-[10px] uppercase tracking-widest font-semibold text-[#181818] hover:opacity-60 inline-flex items-center space-x-2 text-left cursor-pointer"
              >
                <span>Learn Atelier Method</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Tall Architectural Photo (5 cols) */}
        <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-[640px] overflow-hidden group bg-stone-100">
          <img
            alt="OVEROOM Luxury Modern Minimalist Architecture"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            src={ATELIER_IMAGES.livingWarm}
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Inset Overlay Card matching reference image */}
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-xs bg-[#181818]/95 text-[#fbfaf8] p-6 backdrop-blur-sm border border-white/10 shadow-lg">
            <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 block mb-2 font-mono">
              01.0 / ATELIER CREED
            </span>
            <h2 className="font-serif-display text-lg tracking-wide uppercase mb-3 text-white">
              Silent Form &amp; Space
            </h2>
            <p className="text-[11px] leading-relaxed text-stone-300 font-light mb-4">
              "We believe that a space is not merely shelter, but a sanctuary that quietens the
              modern soul. Together with craftsmen, we sculpt enduring serenity."
            </p>
            <button
              onClick={onExplorePortfolio}
              className="text-[10px] uppercase tracking-widest text-stone-200 border-b border-stone-500 pb-1 hover:text-white transition-colors cursor-pointer text-left"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
