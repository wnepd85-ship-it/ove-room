import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
  onOpenArchive: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry, onOpenArchive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf8]/90 backdrop-blur-md border-b border-[#181818]/10 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Studio Logotype */}
        <a
          href="#"
          className="group flex flex-col tracking-widest text-left"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-serif-display text-xl sm:text-2xl font-normal tracking-wide text-[#181818] uppercase">
            OVEROOM
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#707070] group-hover:text-[#181818] transition-colors">
            오브룸 · Architecture &amp; Spatial Atelier
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-widest text-[#181818]/80">
          <button
            onClick={() => scrollTo('works')}
            className="hover:text-[#181818] transition-colors py-1 relative after:block after:w-0 after:h-[1px] after:bg-[#181818] hover:after:w-full after:transition-all cursor-pointer"
          >
            Works
          </button>
          <button
            onClick={() => scrollTo('philosophy')}
            className="hover:text-[#181818] transition-colors py-1 relative after:block after:w-0 after:h-[1px] after:bg-[#181818] hover:after:w-full after:transition-all cursor-pointer"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo('discipline')}
            className="hover:text-[#181818] transition-colors py-1 relative after:block after:w-0 after:h-[1px] after:bg-[#181818] hover:after:w-full after:transition-all cursor-pointer"
          >
            Discipline
          </button>
          <button
            onClick={() => scrollTo('monographs')}
            className="hover:text-[#181818] transition-colors py-1 relative after:block after:w-0 after:h-[1px] after:bg-[#181818] hover:after:w-full after:transition-all cursor-pointer"
          >
            Monographs
          </button>
          <button
            onClick={() => scrollTo('journal')}
            className="hover:text-[#181818] transition-colors py-1 relative after:block after:w-0 after:h-[1px] after:bg-[#181818] hover:after:w-full after:transition-all cursor-pointer"
          >
            Journal
          </button>
          <button
            onClick={onOpenArchive}
            className="hover:text-[#181818] text-[#707070] transition-colors py-1 flex items-center gap-1 cursor-pointer"
          >
            <span>Material Archive</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Action Contact CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenInquiry}
            className="pill-button px-5 sm:px-7 py-2 text-[10px] sm:text-[11px] uppercase tracking-widest inline-flex items-center font-medium cursor-pointer"
          >
            Inquire
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#181818] hover:opacity-70 transition-opacity"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfaf8] border-b border-[#181818]/10 px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-[#181818]">
            <button
              onClick={() => scrollTo('works')}
              className="text-left py-2 border-b border-[#181818]/5 hover:text-[#7d9296]"
            >
              Works
            </button>
            <button
              onClick={() => scrollTo('philosophy')}
              className="text-left py-2 border-b border-[#181818]/5 hover:text-[#7d9296]"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('discipline')}
              className="text-left py-2 border-b border-[#181818]/5 hover:text-[#7d9296]"
            >
              Discipline
            </button>
            <button
              onClick={() => scrollTo('monographs')}
              className="text-left py-2 border-b border-[#181818]/5 hover:text-[#7d9296]"
            >
              Monographs
            </button>
            <button
              onClick={() => scrollTo('journal')}
              className="text-left py-2 border-b border-[#181818]/5 hover:text-[#7d9296]"
            >
              Journal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArchive();
              }}
              className="text-left py-2 border-b border-[#181818]/5 text-[#707070] flex items-center justify-between"
            >
              <span>Material Archive Schedule</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="text-left py-2 font-medium text-[#181818] underline underline-offset-4"
            >
              Start Commission Inquiry →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
