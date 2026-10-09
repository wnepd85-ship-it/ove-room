import React, { useState } from 'react';
import { ATELIER_IMAGES } from '../data/atelierData';
import { CheckCircle2 } from 'lucide-react';

interface InquirySectionProps {
  onOpenDetailedInquiry: (presetEmail?: string) => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ onOpenDetailedInquiry }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenDetailedInquiry(email);
      setSubmitted(false);
      setEmail('');
    }, 1200);
  };

  return (
    <section
      className="bg-[#98abae] text-[#181818] py-20 sm:py-28 px-6 sm:px-10 relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Large headline & prompt (8 cols) */}
          <div className="lg:col-span-8 z-10">
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#181818]/70 block mb-3">
              06 / SPATIAL COMMISSIONS
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#181818] leading-[1.0] mb-8">
              Commission Your
              <br />
              Spatial Sanctuary
              <br />
              With OVEROOM Atelier
            </h2>
            <p className="text-xs sm:text-sm text-[#181818]/80 max-w-lg mb-8 leading-relaxed font-light">
              We accept a limited number of residential and commercial atelier commissions per year
              to ensure rigorous material dedication and exquisite on-site detailing.
            </p>

            {submitted ? (
              <div className="bg-[#181818] text-white p-4 max-w-md flex items-center space-x-3 text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#98abae] shrink-0" />
                <span>
                  Thank you. Directing you to the atelier commission consultation form...
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-white/90 border-0 px-5 py-3 text-xs focus:ring-1 focus:ring-[#181818] text-[#181818] placeholder-stone-400 flex-1 rounded-none outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#181818] text-white text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inquire
                </button>
              </form>
            )}
          </div>

          {/* Staggered photo stamps mimicking the bottom right photo inserts in reference */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end gap-4 relative">
            <div className="w-36 sm:w-44 aspect-[3/4] bg-stone-100 shadow-md overflow-hidden rotate-[-2deg] group">
              <img
                alt="Cafe interior detail"
                className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                src={ATELIER_IMAGES.cafeTimber}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-32 sm:w-40 aspect-[3/4] bg-stone-100 shadow-md overflow-hidden rotate-[3deg] mt-8 group">
              <img
                alt="Living room detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ATELIER_IMAGES.livingWarm}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
