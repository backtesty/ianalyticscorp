import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-brand-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-violet-900/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-[0.05] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-surfaceHighlight bg-surfaceHighlight/50 backdrop-blur-md animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          <span className="text-slate-300 text-[10px] md:text-xs font-bold tracking-widest uppercase font-heading">
            {content.badge}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] font-heading">
            {content.title}
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-10 md:mb-12 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] w-full sm:w-auto">
          <a
            href="https://api.whatsapp.com/send?phone=51904827958&text=Hola%20equipo%20de%20IAnalytics%2C%20quiero%20agendar%20una%20revisi%C3%B3n%20de%20mis%20procesos"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-500 hover:to-violet-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transform hover:-translate-y-1"
          >
            <span>{content.cta}</span>
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          
          <a
             href="#workflow"
             className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-medium rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <span>{content.explore}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;