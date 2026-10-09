import React, { useState } from 'react';
import { ArrowDown, Eye, EyeOff, Compass } from 'lucide-react';
import heroImage from '../assets/images/hero_monolithic_architecture_1791305697212.jpg';
import { ATELIER_IMAGES } from '../data/atelierData';

interface FullBleedHeroProps {
  onScrollNext: () => void;
  onExploreWorks: () => void;
}

export const FullBleedHero: React.FC<FullBleedHeroProps> = ({
  onScrollNext,
  onExploreWorks,
}) => {
  const [cleanView, setCleanView] = useState(false);
  const [imgSrc, setImgSrc] = useState(heroImage);

  return (
    <section
      id="hero-banner"
      className="relative w-full h-[88vh] sm:h-[92vh] min-h-[600px] max-h-[960px] overflow-hidden select-none bg-stone-900"
    >
      {/* Background Architectural Photo (Full Bleed) */}
      <img
        src={imgSrc}
        onError={() => setImgSrc(ATELIER_IMAGES.livingWarm)}
        alt="OVEROOM Monolithic Architectural Sanctuary Interior"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        loading="eager"
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric Scrim / Vignette for text contrast */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          cleanView
            ? 'opacity-0'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-black/80'
        }`}
      />

      {/* Minimalist Top/Clean View Toggle */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20">
        <button
          onClick={() => setCleanView(!cleanView)}
          className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/20 transition-all cursor-pointer rounded-none"
          title={cleanView ? 'Show architectural details' : 'Unobstructed photo view'}
        >
          {cleanView ? (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>Show Details</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>Full View</span>
            </>
          )}
        </button>
      </div>

      {/* Content Overlay */}
      <div
        className={`relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col justify-between py-10 sm:py-14 transition-opacity duration-500 ${
          cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Top Header Monograph Mark */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white/90">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-[#98abae] inline-block"></span>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-stone-300">
              SEOUL · SPATIAL ATELIER · DOSAN &amp; HANNAM
            </span>
          </div>
          <div className="text-[9px] uppercase tracking-widest2 text-stone-400 font-mono hidden md:block">
            ARCHITECTURAL SANCTUARY ARCHIVE
          </div>
        </div>

        {/* Center Monumental Headline */}
        <div className="max-w-4xl">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#98abae] block mb-4">
            ARCHITECTURE OF STILLNESS
          </span>
          <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-light text-white leading-[0.92] tracking-tightest mb-6 drop-shadow-md">
            The Poetry of<br />
            Silence &amp; Void
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base font-light max-w-xl leading-relaxed">
            침묵과 빛의 여백을 짓는 공간 아틀리에. 가공되지 않은 미네랄의 물성과
            비움의 미학으로 일상에 영속적인 평온을 선사합니다.
          </p>
        </div>

        {/* Bottom Bar: Monograph Tag, Scroll Indicator, and CTA */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-white">
          {/* Edition Metadata */}
          <div className="text-[10px] uppercase font-mono tracking-widest text-stone-300">
            <span>VOL. 04 / RESIDENTIAL &amp; HOSPITALITY MONOGRAPHS</span>
          </div>

          {/* Center Smooth Scroll Indicator */}
          <button
            onClick={onScrollNext}
            className="group inline-flex items-center space-x-3 text-[10px] uppercase tracking-widest text-stone-200 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Scroll To Manifesto</span>
            <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:translate-y-0.5 transition-all">
              <ArrowDown className="w-3 h-3" />
            </span>
          </button>

          {/* Quick Action Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onExploreWorks}
              className="pill-button px-6 py-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-white border-white hover:bg-white hover:text-[#181818] inline-flex items-center space-x-2 font-medium cursor-pointer"
            >
              <Compass className="w-3 h-3" />
              <span>Explore Works</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
