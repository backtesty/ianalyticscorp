import React from 'react';
import { Cpu, Users, Layers, MessageSquare, Shield, Code, ArrowUpRight } from 'lucide-react';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
}

const iconMap = {
  cpu: Cpu,
  users: Users,
  layers: Layers,
  message: MessageSquare,
  shield: Shield,
  code: Code,
};

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(18,24,38,0.8)_2px,transparent_2px)] bg-[size:60px_60px] opacity-[0.2] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-900/20 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest animate-[fadeInUp_0.5s_ease-out_forwards]">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight animate-[fadeInUp_0.7s_ease-out_0.1s_forwards] opacity-0">
            {content.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed animate-[fadeInUp_0.9s_ease-out_0.2s_forwards] opacity-0">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={index} 
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-surfaceHighlight to-transparent overflow-hidden hover:from-brand-500/50 hover:to-violet-600/50 transition-all duration-500"
              >
                {/* Inner Card Background */}
                <div className="relative h-full bg-background/90 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:bg-background/80">
                  
                  {/* Hover Light Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Header: Icon & Tech Markers */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-surface border border-surfaceHighlight flex items-center justify-center group-hover:scale-110 group-hover:border-brand-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
                            <Icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        {/* Tech dots decoration */}
                        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-surfaceHighlight rounded-full group-hover:bg-brand-500 transition-colors delay-100"></div>
                        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-surfaceHighlight rounded-full group-hover:bg-violet-500 transition-colors delay-75"></div>
                    </div>
                    
                    <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-brand-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-200 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>

                  {/* Bottom Tech Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-500 to-violet-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;