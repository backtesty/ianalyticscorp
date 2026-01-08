import React from 'react';
import { Content } from '../types';

interface TrustedByProps {
    content: Content['trustedBy'];
}

// Placeholder SVGs for logos to maintain a clean look without external assets
const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity px-8">
        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">{name[0]}</span>
        </div>
        <span className="text-lg font-heading font-bold text-slate-300">{name}</span>
    </div>
);

const TrustedBy: React.FC<TrustedByProps> = ({ content }) => {
    const companies = [
        "FinCorp", "LogiChain", "LegalAI", "BankOne", "SecureTrust", 
        "GlobalShip", "LawTech", "NextGen Fin"
    ];

    return (
        <section className="py-12 bg-background border-y border-surfaceHighlight overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{content.title}</p>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {companies.map((company, i) => (
                        <LogoPlaceholder key={`a-${i}`} name={company} />
                    ))}
                    {companies.map((company, i) => (
                        <LogoPlaceholder key={`b-${i}`} name={company} />
                    ))}
                </div>
                
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center ml-full">
                    {/* Duplicate for seamless loop if needed, though pure CSS marquee usually handles the first div doubling content */}
                </div>
                
                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>
        </section>
    );
};

export default TrustedBy;