import React from 'react';

interface FooterProps {
  onOpenArchive: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenArchive,
  onOpenPrivacy,
  onOpenTerms,
  onOpenInquiry,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-[#fbfaf8]/80 pt-16 pb-12 px-6 sm:px-10 border-t border-[#181818]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Atelier Info */}
          <div className="lg:col-span-5">
            <span className="font-serif-display text-2xl uppercase tracking-wider text-white block mb-3">
              OVEROOM (오브룸)
            </span>
            <p className="text-xs text-stone-400 font-light max-w-sm leading-relaxed mb-6">
              Architecture, Interior Architecture, Bespoke Millwork &amp; Tactile Space Curation.
              Headquartered in Seoul.
            </p>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono">
              Seoul · Gangnam · Seongsu
            </span>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white block mb-4">
              Sitemap
            </span>
            <ul className="space-y-2 text-xs font-light text-stone-400">
              <li>
                <button
                  onClick={() => scrollTo('works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Residential
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hospitality
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenArchive}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Material Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('journal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white block mb-4">
              Seoul Ateliers
            </span>
            <div className="text-xs font-light text-stone-400 space-y-3 leading-relaxed">
              <div>
                <p className="text-white font-medium">Dosan Flagship Atelier</p>
                <p>42 Eonju-ro 154-gil, Gangnam-gu, Seoul</p>
              </div>
              <div>
                <p className="text-white font-medium">Seongsu Material Lab</p>
                <p>18 Yeonmujang 5-gil, Seongdong-gu, Seoul</p>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white block mb-4">
              Direct Contact
            </span>
            <p className="text-xs font-light text-stone-400 leading-relaxed mb-2">
              <a href="mailto:atelier@overoom.kr" className="hover:text-white transition-colors">
                atelier@overoom.kr
              </a>
              <br />
              <a href="tel:+8225480890" className="hover:text-white transition-colors">
                +82 (0)2 548 0890
              </a>
            </p>
            <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-4">
              IG @overoom.official
            </p>
            <button
              onClick={onOpenInquiry}
              className="mt-4 text-[10px] uppercase tracking-widest text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors cursor-pointer"
            >
              Consult With Architect →
            </button>
          </div>
        </div>

        {/* Copyright & Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-widest font-mono">
          <div>
            © <span>{currentYear}</span> OVEROOM CO., LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <button onClick={onOpenPrivacy} className="hover:text-stone-300 cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenTerms} className="hover:text-stone-300 cursor-pointer">
              Terms of Spatial Practice
            </button>
            <a href="#top" onClick={scrollToTop} className="hover:text-stone-300 cursor-pointer">
              Back To Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
