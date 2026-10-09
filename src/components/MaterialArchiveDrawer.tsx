import React, { useEffect } from 'react';
import { X, Layers, Sparkles } from 'lucide-react';
import { MATERIAL_ARCHIVE } from '../data/atelierData';

interface MaterialArchiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onInquireMaterial: (materialName: string) => void;
}

export const MaterialArchiveDrawer: React.FC<MaterialArchiveDrawerProps> = ({
  isOpen,
  onClose,
  onInquireMaterial,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#fbfaf8] text-[#181818] border-l border-[#181818]/15 shadow-2xl flex flex-col h-full relative">
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-[#181818]/10 flex items-center justify-between bg-[#f4f1ec]">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#707070] mb-1">
                <Layers className="w-3.5 h-3.5 text-[#7d9296]" />
                <span>OVEROOM Atelier Archive</span>
              </div>
              <h2 className="font-serif-display text-2xl uppercase tracking-tight text-[#181818]">
                Materiality &amp; Tactile Palette
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
              aria-label="Close archive drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <div className="p-6 sm:p-8 bg-[#eae5dc]/40 border-b border-[#181818]/10 text-xs text-[#181818]/80 font-light leading-relaxed">
            Every OVEROOM space is formulated around mineral honesty. We curate unlacquered stones,
            quarried limestones, open-grain timber, and acoustic lime plasters that grow richer with
            touch and chronological patina.
          </div>

          {/* Material Cards List */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {MATERIAL_ARCHIVE.map((mat, index) => (
              <div
                key={mat.name}
                className="bg-[#f4f1ec] p-6 border border-[#181818]/10 space-y-3 relative group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#707070]">
                      0{index + 1} · {mat.koreanName}
                    </span>
                    <h3 className="font-serif-display text-lg uppercase tracking-wide text-[#181818]">
                      {mat.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#707070] bg-white px-2 py-0.5 border border-[#181818]/10">
                    {mat.origin}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#181818]/80 font-light pt-2 border-t border-[#181818]/10">
                  <div>
                    <strong className="font-medium text-[#181818]">Tactile Quality: </strong>
                    {mat.tactility}
                  </div>
                  <div>
                    <strong className="font-medium text-[#181818]">Acoustic Response: </strong>
                    {mat.acousticProperty}
                  </div>
                  <div>
                    <strong className="font-medium text-[#181818]">Natural Patina: </strong>
                    {mat.patinaBehavior}
                  </div>
                  <div>
                    <strong className="font-medium text-[#181818]">Applied Architecture: </strong>
                    {mat.recommendedUse}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onInquireMaterial(mat.name);
                    }}
                    className="text-[9px] uppercase tracking-widest text-[#181818] border-b border-[#181818]/30 pb-0.5 hover:border-[#181818] transition-colors cursor-pointer"
                  >
                    Specify in Project Brief →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="p-6 bg-[#f4f1ec] border-t border-[#181818]/10 flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono text-[#707070] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#7d9296]" />
              Physical sample boards available at Dosan Atelier
            </span>
            <button
              onClick={onClose}
              className="text-[10px] uppercase tracking-widest text-[#181818] font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
