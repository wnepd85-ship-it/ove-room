import React from 'react';
import { ATELIER_IMAGES, JOURNAL_ARTICLES } from '../data/atelierData';
import { JournalArticle } from '../types';

interface JournalSectionProps {
  onOpenArticle: (article: JournalArticle) => void;
  onReadAllEssays: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onOpenArticle,
  onReadAllEssays,
}) => {
  const featuredArticle = JOURNAL_ARTICLES[0];
  const listArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <section className="max-w-[1440px] mx-auto py-20 sm:py-28 px-6 sm:px-10" id="journal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Headline & Oval CTA Button */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-6">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#707070] block mb-3">
              05 / PERSPECTIVES
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl uppercase tracking-tight text-[#181818] mb-8 leading-none">
              Latest On
              <br />
              The Journal
            </h2>
            <p className="text-xs text-[#181818]/70 leading-relaxed font-light mb-8 max-w-xs">
              Essays on architectural restraint, tactile finishes, daylight orientation, and the
              slow art of dwelling in modern cities.
            </p>
          </div>
          <div>
            <button
              onClick={onReadAllEssays}
              className="pill-button px-8 py-3 text-[10px] uppercase tracking-widest font-medium inline-block text-[#181818] border-[#181818] cursor-pointer"
            >
              Read Essays
            </button>
          </div>
        </div>

        {/* Center Editorial Photo */}
        <div className="lg:col-span-4">
          <div
            onClick={() => onOpenArticle(featuredArticle)}
            className="aspect-[4/5] overflow-hidden bg-stone-200 shadow-sm relative group cursor-pointer"
          >
            <img
              alt="Editorial Architecture Essay Cover"
              className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
              src={ATELIER_IMAGES.bathroomStone}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#fbfaf8]/90 backdrop-blur-sm p-4 border border-[#181818]/10 group-hover:bg-[#fbfaf8] transition-colors">
              <span className="text-[9px] uppercase tracking-widest font-mono text-[#707070] block mb-1">
                {featuredArticle.number}
              </span>
              <p className="font-serif-display text-sm uppercase text-[#181818]">
                {featuredArticle.title}
              </p>
            </div>
          </div>
        </div>

        {/* Right Numbered List of Articles */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Secondary visual slice */}
            <div className="w-full aspect-[16/9] overflow-hidden bg-stone-200 mb-8 group">
              <img
                alt="Architectural details"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ATELIER_IMAGES.livingWarm}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <span className="text-[9px] uppercase tracking-widest text-[#707070] block mb-4 border-b border-[#181818]/10 pb-2">
              Recent Monographs &amp; Musings
            </span>

            <ul className="divide-y divide-[#181818]/15 text-xs">
              {listArticles.map((article) => (
                <li
                  key={article.id}
                  onClick={() => onOpenArticle(article)}
                  className="py-3 group cursor-pointer flex items-baseline justify-between select-none"
                >
                  <span className="font-mono text-[10px] text-[#707070] mr-3">
                    {article.number}.
                  </span>
                  <span className="flex-1 font-serif-display text-base uppercase text-[#181818] group-hover:text-[#7d9296] transition-colors">
                    {article.title}
                  </span>
                  <span className="text-[10px] text-[#707070] group-hover:translate-x-1 transition-transform ml-2">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
