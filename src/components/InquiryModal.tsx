import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTopic?: string;
  presetEmail?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  presetTopic,
  presetEmail,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(presetEmail || '');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(
    presetTopic ? `Inquiry regarding ${presetTopic}` : 'Residential Penthouse / Villa'
  );
  const [location, setLocation] = useState('Seoul (Hannam / Gangnam / Seongsu)');
  const [area, setArea] = useState('200 - 400 SQM');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetEmail) {
      setEmail(presetEmail);
    }
    if (presetTopic) {
      setProjectType(`Inquiry regarding ${presetTopic}`);
    }
  }, [presetEmail, presetTopic]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fbfaf8] text-[#181818] w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#181818]/15 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#fbfaf8]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-[#181818]/10 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#707070] block">
              Spatial Commission · Private Consultation
            </span>
            <h2 className="font-serif-display text-2xl uppercase tracking-tight text-[#181818]">
              Atelier Briefing
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#181818] hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#98abae]/20 flex items-center justify-center text-[#7d9296]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-3xl uppercase text-[#181818]">
                Inquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-[#181818]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong>{name || 'Client'}</strong>. Your spatial inquiry for{' '}
                <strong>{projectType}</strong> has been transmitted directly to our principal
                architectural director in Seoul. We will contact you at{' '}
                <strong>{email || 'your email'}</strong> within 24 business hours to arrange a
                private consultation.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="bg-[#181818] text-white text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-black transition-colors cursor-pointer"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs text-[#181818]/70 font-light leading-relaxed">
                We accept a deliberate limit of client commissions annually to ensure meticulous
                material research, custom timber crafting, and personal site superintendence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Minwoo Kim"
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@domain.com"
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+82 10-0000-0000"
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Target Area (SQM)
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  >
                    <option value="150 - 250 SQM">150 - 250 SQM</option>
                    <option value="250 - 450 SQM">250 - 450 SQM</option>
                    <option value="450 - 800 SQM">450 - 800 SQM</option>
                    <option value="800+ SQM Estate">800+ SQM Estate</option>
                    <option value="Commercial / Hospitality">Commercial / Hospitality</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Project Typology
                  </label>
                  <input
                    type="text"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                    Site / Neighborhood
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. UN Village, Hannam-dong"
                    className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#707070] mb-1 font-mono">
                  Project Notes &amp; Desired Atmosphere
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your spatial aspirations, timeline preferences, or specific stone/lighting questions..."
                  className="w-full bg-[#f4f1ec] border border-[#181818]/15 px-3 py-2 text-xs focus:ring-1 focus:ring-[#181818] outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-[#707070] font-mono">
                  Non-disclosure agreements honored upon request.
                </span>
                <button
                  type="submit"
                  className="bg-[#181818] text-white text-[10px] uppercase tracking-widest px-8 py-3 hover:bg-black transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
