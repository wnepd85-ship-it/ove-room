/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { FullBleedHero } from './components/FullBleedHero';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { MethodIntro } from './components/MethodIntro';
import { DisciplinesGrid } from './components/DisciplinesGrid';
import { PrinciplesSection } from './components/PrinciplesSection';
import { MonographsSection } from './components/MonographsSection';
import { JournalSection } from './components/JournalSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { JournalModal } from './components/JournalModal';
import { MaterialArchiveDrawer } from './components/MaterialArchiveDrawer';
import { InquiryModal } from './components/InquiryModal';
import { PolicyModal } from './components/PolicyModals';
import { CaseStudy, JournalArticle } from './types';
import { CASE_STUDIES, JOURNAL_ARTICLES } from './data/atelierData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>();
  const [inquiryEmail, setInquiryEmail] = useState<string | undefined>();
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenInquiry = (topic?: string, email?: string) => {
    setInquiryTopic(topic);
    setInquiryEmail(email);
    setIsInquiryOpen(true);
  };

  const handleOpenArticle = (article: JournalArticle) => {
    setSelectedArticle(article);
    setIsJournalModalOpen(true);
  };

  const handleReadAllEssays = () => {
    setSelectedArticle(JOURNAL_ARTICLES[0]);
    setIsJournalModalOpen(true);
  };

  const handleLearnMethod = () => {
    // Open the primary architectural materiality case study or scroll
    setSelectedCaseStudy(CASE_STUDIES[0]);
  };

  const handleExplorePortfolio = () => {
    const worksEl = document.getElementById('works');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#181818] font-sans antialiased selection:bg-[#98abae] selection:text-white">
      {/* Navigation */}
      <Header
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenArchive={() => setIsArchiveOpen(true)}
      />

      {/* Full-Bleed Architectural Hero Section */}
      <FullBleedHero
        onScrollNext={() => {
          const el = document.getElementById('philosophy');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreWorks={handleExplorePortfolio}
      />

      {/* Main Content */}
      <main>
        {/* 01 / MANIFESTO Hero */}
        <HeroSection
          onLearnMethod={handleLearnMethod}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* Marquee Ticker */}
        <MarqueeBanner />

        {/* 02 / CORE METHOD Overview */}
        <MethodIntro />

        {/* 4-Column Discipline Grid */}
        <DisciplinesGrid onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* 03 / ATELIER FOUNDATIONS Principles & Accordion */}
        <PrinciplesSection />

        {/* 04 / TESTIMONIALS Kind Words & Monographs */}
        <MonographsSection />

        {/* 05 / PERSPECTIVES Latest On The Journal */}
        <JournalSection
          onOpenArticle={handleOpenArticle}
          onReadAllEssays={handleReadAllEssays}
        />

        {/* 06 / SPATIAL COMMISSIONS Inquiry Banner */}
        <InquirySection
          onOpenDetailedInquiry={(email) => handleOpenInquiry('Spatial Commission', email)}
        />
      </main>

      {/* Site Footer */}
      <Footer
        onOpenArchive={() => setIsArchiveOpen(true)}
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Modals & Slide-over Drawers */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInquire={(title) => handleOpenInquiry(title)}
      />

      <JournalModal
        initialArticle={selectedArticle}
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
      />

      <MaterialArchiveDrawer
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        onInquireMaterial={(material) => handleOpenInquiry(material)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        presetTopic={inquiryTopic}
        presetEmail={inquiryEmail}
      />

      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
    </div>
  );
}
