import React, { useState } from 'react';
import { ATELIER_IMAGES } from '../data/atelierData';

interface PrincipleItem {
  number: string;
  title: string;
  content: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'Monolithic Massing & Proportion',
    content:
      'We organize interior plans using solid volumes rather than flimsy drywall partitions. Travertine kitchen islands and plaster core volumes define movement naturally without clutter.'
  },
  {
    number: '02',
    title: 'Natural Light Calibration',
    content:
      'Shadow is treated as an active material. We design custom linen drapery bays and deep ceiling reveals that transform Seoul’s seasonal sun into soft, ambient illumination.'
  },
  {
    number: '03',
    title: 'Tactile Raw Materiality',
    content:
      'Honest materials tell stories over decades. We prioritize hand-applied lime plaster, fumed European oak, brushed stainless steel, and unpolished volcanic rocks.'
  },
  {
    number: '04',
    title: 'Seamless Residential Flow',
    content:
      'Bedrooms, ensuites, and dressing spaces merge into continuous tranquil zones with curbless transitions, concealed sliding panels, and unified continuous microcement flooring.'
  },
  {
    number: '05',
    title: 'Bespoke Atelier Furniture',
    content:
      "Each commission includes tailor-made banquettes, solid oak low tables, and recessed shelving detailed to match the room's precise millimeter tolerances."
  }
];

export const PrinciplesSection: React.FC = () => {
  // First item open by default just like in the user's reference
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1440px] mx-auto py-20 sm:py-28 px-6 sm:px-10" id="discipline">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title & Staggered Photo Pair (6 cols) */}
        <div className="lg:col-span-6">
          <span className="text-[10px] tracking-widest uppercase font-mono text-[#707070] block mb-3">
            03 / ATELIER FOUNDATIONS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl uppercase tracking-tight text-[#181818] mb-10 leading-none">
            Principles of
            <br />
            Spatial Serenity
          </h2>

          {/* Staggered Collage matching reference Image 2 small pair */}
          <div className="flex items-start gap-5">
            {/* Left smaller portrait */}
            <div className="w-5/12 aspect-[3/4] bg-stone-200 overflow-hidden shadow-sm group">
              <img
                alt="Architectural wood bench in cafe"
                className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-700"
                src={ATELIER_IMAGES.cafeTimber}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Right taller architectural texture */}
            <div className="w-7/12 aspect-[4/5] bg-stone-300 overflow-hidden shadow-sm -mt-6 group">
              <img
                alt="Living room interior detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ATELIER_IMAGES.livingWarm}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Numbered Clean Accordion List */}
        <div className="lg:col-span-6 lg:pt-14">
          <div className="border-t border-[#181818]/20 divide-y divide-[#181818]/20">
            {PRINCIPLES.map((principle, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={principle.number} className="py-5">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center text-xs sm:text-sm uppercase tracking-widest font-medium text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-display text-lg tracking-normal text-[#181818] group-hover:text-[#7d9296] transition-colors">
                      {principle.number}. {principle.title}
                    </span>
                    <span
                      className={`text-base font-light transition-transform duration-300 text-[#181818] ml-4 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 pr-8 text-xs text-[#181818]/70 leading-relaxed font-light animate-fadeIn">
                      {principle.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
