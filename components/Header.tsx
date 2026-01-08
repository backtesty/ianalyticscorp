import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { Language, Content } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.home, href: '#home' },
    { label: content.workflow, href: '#workflow' },
    { label: content.services, href: '#services' },
    { label: content.methodology, href: '#methodology' },
  ];

  const toggleLang = () => {
    setLang(lang === Language.ES ? Language.EN : Language.ES);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-surfaceHighlight py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-violet-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-brand-900/50">
             <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight font-heading">
            IAnalytics
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center space-x-1 text-xs font-bold text-slate-400 hover:text-white border border-surfaceHighlight px-3 py-1 rounded-full hover:border-brand-500 transition-all"
          >
            <Globe className="w-3 h-3" />
            <span>{lang}</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceHighlight p-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-brand-400 font-medium block font-heading"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-slate-400 hover:text-white"
            >
              <Globe className="w-4 h-4" />
              <span>Switch to {lang === Language.ES ? 'English' : 'Español'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;