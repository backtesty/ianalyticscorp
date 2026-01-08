import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Workflow from './components/Workflow';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>(Language.ES);
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-background text-slate-50 font-sans selection:bg-brand-500/30">
      <Header lang={lang} setLang={setLang} content={content.nav} />
      
      <main>
        <Hero content={content.hero} />
        {/*
        <TrustedBy content={content.trustedBy} />
         */}
        <Workflow content={content.workflow} />
        <Services content={content.services} />
        <Methodology content={content.methodology} />
      </main>
      
      <Footer content={content.footer} />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://api.whatsapp.com/send?phone=51904827958&text=Hola%20equipo%20de%20IAnalytics%2C%20quiero%20agendar%20una%20revisi%C3%B3n%20de%20mis%20procesos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-500 hover:to-violet-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.7)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          {lang === Language.ES ? 'Hablemos' : "Let's Chat"}
        </span>
      </a>
    </div>
  );
}

export default App;