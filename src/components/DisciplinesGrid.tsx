import React from 'react';
import { CASE_STUDIES } from '../data/atelierData';
import { CaseStudy } from '../types';

interface DisciplinesGridProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const DisciplinesGrid: React.FC<DisciplinesGridProps> = ({ onSelectCaseStudy }) => {
  return (
    <section className="w-full bg-[#181818] border-b border-[#181818]/10" id="works">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {CASE_STUDIES.map((study) => (
          <article
            key={study.id}
            onClick={() => onSelectCaseStudy(study)}
            className="relative h-[480px] sm:h-[580px] group overflow-hidden flex flex-col justify-end p-8 text-white cursor-pointer select-none"
          >
            <img
              alt={`${study.title} Architecture & Interior Detail`}
              className="absolute inset-0 w-full h-full object-cover object-center contrast-105 opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              src={study.imageUrl}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-300 block mb-2">
                {study.categoryNumber}
              </span>
              <h3 className="font-serif-display text-2xl uppercase tracking-wide mb-2 leading-tight">
                {study.title}
              </h3>
              <p className="text-[11px] text-stone-300/90 font-light leading-relaxed line-clamp-3 mb-4">
                {study.description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCaseStudy(study);
                }}
                className="text-[9px] uppercase tracking-widest border-b border-white/40 pb-1 text-white inline-block hover:border-white transition-colors cursor-pointer"
              >
                View Case Study
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
