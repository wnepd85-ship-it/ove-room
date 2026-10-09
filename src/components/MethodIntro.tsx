import React from 'react';

interface MethodIntroProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const MethodIntro: React.FC<MethodIntroProps> = () => {
  return (
    <section className="bg-[#98abae]/20 py-12 px-6 sm:px-10 border-b border-[#181818]/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-mono text-[#707070] block mb-2">
            02 / CORE METHOD
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl uppercase tracking-tight text-[#181818]">
            The Method of Spatial Restraint
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#181818]/80 max-w-md font-light leading-relaxed">
          At OVEROOM atelier, we utilize an architectural approach integrating natural travertine
          massing, calibrated cove illuminations, tactile brushed oak, and sound-absorbing lime
          plaster finishes.
        </p>
      </div>
    </section>
  );
};
