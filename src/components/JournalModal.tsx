import React, { useEffect, useState } from 'react';
import { X, BookOpen, Clock, Calendar } from 'lucide-react';
import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/atelierData';

interface JournalModalProps {
  initialArticle: JournalArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({
  initialArticle,
  isOpen,
  onClose,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle>(
    initialArticle || JOURNAL_ARTICLES[0]
  );

  useEffect(() => {
    if (initialArticle) {
      setSelectedArticle(initialArticle);
    }
  }, [initialArticle]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbfaf8] text-[#181818] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#181818]/15 shadow-2xl relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Article Directory (desktop) */}
        <aside className="w-full md:w-72 bg-[#f4f1ec] border-b md:border-b-0 md:border-r border-[#181818]/10 p-6 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#707070] mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#7d9296]" />
              <span>OVEROOM Journal Archive</span>
            </div>
            <ul className="space-y-3">
              {JOURNAL_ARTICLES.map((art) => {
                const isActive = art.id === selectedArticle.id;
                return (
                  <li key={art.id}>
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className={`text-left w-full p-2.5 transition-all text-xs cursor-pointer ${
                        isActive
                          ? 'bg-[#181818] text-white'
                          : 'text-[#181818]/80 hover:bg-[#181818]/5'
                      }`}
                    >
                      <span className="font-mono text-[9px] block opacity-70">
                        {art.number} · {art.category}
                      </span>
                      <span className="font-serif-display text-sm block mt-0.5 leading-snug">
                        {art.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#181818]/10 text-[10px] text-[#707070] font-mono uppercase tracking-widest mt-6">
            Seoul Atelier Editions
          </div>
        </aside>

        {/* Right Article Body */}
        <main className="flex-1 p-6 sm:p-10 overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-1 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close reader"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl mx-auto space-y-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-[10px] font-mono uppercase tracking-widest text-[#707070]">
                <span>{selectedArticle.number}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#7d9296]" />
                  {selectedArticle.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#7d9296]" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h1 className="font-serif-display text-3xl sm:text-4xl uppercase tracking-tight text-[#181818] leading-tight">
                {selectedArticle.title}
              </h1>
            </div>

            {selectedArticle.imageUrl && (
              <div className="w-full aspect-[16/9] bg-stone-200 overflow-hidden">
                <img
                  alt={selectedArticle.title}
                  src={selectedArticle.imageUrl}
                  className="w-full h-full object-cover contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <p className="text-sm sm:text-base font-serif-display italic text-[#181818] leading-relaxed border-l-2 border-[#181818] pl-4 py-1">
              {selectedArticle.lead}
            </p>

            {selectedArticle.quote && (
              <blockquote className="my-6 p-6 bg-[#eae5dc] text-[#181818] font-serif-display text-lg uppercase tracking-tight leading-snug">
                "{selectedArticle.quote}"
              </blockquote>
            )}

            <div className="space-y-4 text-xs sm:text-sm text-[#181818]/80 leading-relaxed font-light">
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-8 border-t border-[#181818]/15 flex items-center justify-between text-xs text-[#707070]">
              <span className="font-mono text-[10px] uppercase">
                Published by OVEROOM Architectural Editorial
              </span>
              <button
                onClick={onClose}
                className="text-[10px] uppercase tracking-widest text-[#181818] underline underline-offset-4 cursor-pointer"
              >
                Close Essay
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
