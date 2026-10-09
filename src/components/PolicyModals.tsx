import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbfaf8] text-[#181818] w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-[#181818]/15 shadow-2xl relative p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#181818]/10 pb-4 mb-6">
          <h2 className="font-serif-display text-2xl uppercase tracking-tight text-[#181818]">
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Spatial Practice'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs text-[#181818]/80 leading-relaxed font-light">
            <p>
              OVEROOM CO., LTD. (오브룸) respects the utmost discretion of our private residential
              and commercial clientele. Client names, site plans, property addresses, and private
              art collections documented during spatial commissions are protected under strict
              confidentiality protocols.
            </p>
            <h4 className="font-serif-display text-sm uppercase text-[#181818] font-semibold mt-4">
              1. Information Collection &amp; Use
            </h4>
            <p>
              Information gathered through our inquiry forms is solely utilized for direct
              architectural consultation, feasibility assessment, and project coordination. We do
              not distribute or broker client data to third-party commercial marketing entities.
            </p>
            <h4 className="font-serif-display text-sm uppercase text-[#181818] font-semibold mt-4">
              2. Photography &amp; Monograph Publication
            </h4>
            <p>
              Architectural photography and journal features of private residences are published
              strictly with mutual written client consent. Client identities remain anonymous unless
              explicitly requested.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-[#181818]/80 leading-relaxed font-light">
            <p>
              The architectural and interior practices of OVEROOM are executed in accordance with
              rigorous professional standards, Korean architectural statutes, and artisanal
              craftsmanship agreements.
            </p>
            <h4 className="font-serif-display text-sm uppercase text-[#181818] font-semibold mt-4">
              1. Commission Scopes
            </h4>
            <p>
              Each project commences with comprehensive spatial programming, natural daylight
              orientation analysis, and tectonic stone sourcing. Feasibility studies and schematic
              models are custom-developed for each site.
            </p>
            <h4 className="font-serif-display text-sm uppercase text-[#181818] font-semibold mt-4">
              2. Material Authenticity
            </h4>
            <p>
              OVEROOM guarantees the sourcing of authentic, natural geological stones, certified
              sustainably harvested European hardwoods, and artisanal metalwork. Natural variances in
              veining, grain, and patina are inherent indicators of mineral authenticity.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#181818]/10 text-right">
          <button
            onClick={onClose}
            className="text-[10px] uppercase tracking-widest text-[#181818] font-medium underline underline-offset-4 cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
