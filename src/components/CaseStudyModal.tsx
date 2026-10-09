import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, Camera } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbfaf8] text-[#181818] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#181818]/15 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#fbfaf8]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#181818]/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#707070]">
              {caseStudy.categoryNumber}
            </span>
            <span className="w-6 h-[1px] bg-[#181818]/20"></span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-[#181818]">
              Monograph Inspection
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image with overlay info */}
        <div className="relative aspect-[16/9] w-full bg-stone-200 overflow-hidden">
          <img
            alt={caseStudy.title}
            src={caseStudy.imageUrl}
            className="w-full h-full object-cover contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-6 right-6 text-white text-[10px] tracking-widest font-mono flex items-center justify-between drop-shadow">
            <span className="flex items-center gap-1.5">
              <Camera className="w-3 h-3" />
              {caseStudy.photographer}
            </span>
            <span>SEOUL · OVEROOM ARCHIVE</span>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-display text-3xl sm:text-5xl uppercase tracking-tight text-[#181818] mb-2">
              {caseStudy.title}
            </h2>
            <p className="font-serif-display text-lg sm:text-xl text-[#707070] italic">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#181818]/15 text-xs">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#707070] block font-mono">
                Location
              </span>
              <span className="font-medium text-[#181818] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#7d9296]" />
                {caseStudy.location}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#707070] block font-mono">
                Year Built
              </span>
              <span className="font-medium text-[#181818] flex items-center gap-1 mt-0.5">
                <Calendar className="w-3 h-3 text-[#7d9296]" />
                {caseStudy.year}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#707070] block font-mono">
                Scale
              </span>
              <span className="font-medium text-[#181818] flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-3 h-3 text-[#7d9296]" />
                {caseStudy.scale}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#707070] block font-mono">
                Category
              </span>
              <span className="font-medium text-[#181818] mt-0.5 block">{caseStudy.category}</span>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-[#181818]/80 leading-relaxed font-light">
            {caseStudy.fullNarrative.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Architectural Finish Schedule */}
          <div className="bg-[#f4f1ec] p-6 border border-[#181818]/10 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#707070] block border-b border-[#181818]/10 pb-2">
              Atelier Materiality &amp; Specification Schedule
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#707070] block">
                  Primary Stone Monolith:
                </span>
                <span className="font-medium text-[#181818]">
                  {caseStudy.specifications.stone}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#707070] block">
                  Bespoke Timber Joinery:
                </span>
                <span className="font-medium text-[#181818]">
                  {caseStudy.specifications.timber}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#707070] block">
                  Wall &amp; Ceiling Finish:
                </span>
                <span className="font-medium text-[#181818]">
                  {caseStudy.specifications.finish}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#707070] block">
                  Calibrated Lighting:
                </span>
                <span className="font-medium text-[#181818]">
                  {caseStudy.specifications.lighting}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#181818]/15">
            <span className="text-xs text-[#707070] font-light">
              Interested in commissioning a space with this materiality?
            </span>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onInquire(caseStudy.title);
                }}
                className="bg-[#181818] text-white text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-black transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Inquire For This Aesthetic →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
