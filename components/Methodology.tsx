import React from 'react';
import { Content } from '../types';
import { PenTool, Terminal, ShieldCheck, ChevronRight } from 'lucide-react';

interface MethodologyProps {
  content: Content['methodology'];
}

const Methodology: React.FC<MethodologyProps> = ({ content }) => {
  return (
    <section id="methodology" className="py-24 bg-background relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded border border-slate-800 bg-surfaceHighlight/50 text-brand-400 text-xs font-mono font-bold tracking-wider">
                    <span>$ init_process</span>
                    <span className="w-2 h-4 bg-brand-500 animate-pulse"></span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">{content.title}</h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed">{content.subtitle}</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Connecting Pipeline (Desktop) */}
                {/* Adjusted to align with the vertical center of the icons inside the cards */}
                <div className="hidden md:block absolute top-[108px] left-0 w-full h-1 bg-surfaceHighlight rounded-full overflow-hidden z-0">
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent animate-flow"></div>
                </div>

                {/* Connecting Pipeline (Mobile) */}
                <div className="md:hidden absolute left-8 top-[40px] bottom-[40px] w-1 bg-surfaceHighlight rounded-full overflow-hidden z-0">
                     <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-brand-500/50 to-transparent animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Step 1 */}
                    <MethodologyCard 
                        step="PHASE_01"
                        title={content.step1Title}
                        description={content.step1Desc}
                        icon={PenTool}
                        codeSnippet={
                            <>
                                <span className="text-violet-400">def</span> <span className="text-yellow-200">init_arch</span>():<br/>
                                &nbsp;&nbsp;agents = <span className="text-green-400">["Fin", "Legal"]</span><br/>
                                &nbsp;&nbsp;return Map(agents)
                            </>
                        }
                        colorClass="brand"
                        delay={0}
                        isLast={false}
                    />

                    {/* Step 2 */}
                    <MethodologyCard 
                        step="PHASE_02"
                        title={content.step2Title}
                        description={content.step2Desc}
                        icon={Terminal}
                        codeSnippet={
                            <>
                                <span className="text-brand-400">while</span> <span className="text-white">loss</span> U+003E 0.01:<br/>
                                &nbsp;&nbsp;optimize(dataset)<br/>
                                &nbsp;&nbsp;<span className="text-slate-600"># fine-tuning...</span>
                            </>
                        }
                        colorClass="violet"
                        delay={200}
                        isLast={false}
                    />

                    {/* Step 3 */}
                    <MethodologyCard 
                        step="PHASE_03"
                        title={content.step3Title}
                        description={content.step3Desc}
                        icon={ShieldCheck}
                        codeSnippet={
                            <>
                                "status": <span className="text-emerald-400">"PROD_READY"</span>,<br/>
                                "compliance": <span className="text-emerald-400">"SOC2"</span>,<br/>
                                "uptime": "99.99%"
                            </>
                        }
                        colorClass="emerald"
                        delay={400}
                        isLast={true}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

// Reusable Card Component for consistent alignment and logic
const MethodologyCard = ({ step, title, description, icon: Icon, codeSnippet, colorClass, delay, isLast }: any) => {
    // Dynamic color mapping based on the step type
    const colors = {
        brand: {
            bg: 'bg-brand-900/20',
            border: 'border-brand-500/30',
            text: 'text-brand-400',
            hoverBorder: 'hover:border-brand-500/50',
        },
        violet: {
            bg: 'bg-violet-900/20',
            border: 'border-violet-500/30',
            text: 'text-violet-400',
            hoverBorder: 'hover:border-violet-500/50',
        },
        emerald: {
            bg: 'bg-emerald-900/20',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            hoverBorder: 'hover:border-emerald-500/50',
        }
    };

    const currentColors = colors[colorClass as keyof typeof colors];

    return (
        <div 
            className="relative group pl-16 md:pl-0 h-full opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]" 
            style={{ animationDelay: `${delay}ms` }}
        >
             {/* Mobile Node Dot - aligned with the pipeline line */}
            <div className={`md:hidden absolute left-[28px] top-8 w-4 h-4 rounded-full bg-background border-2 ${currentColors.border.replace('/30', '')} z-10`}></div>

            <div className={`h-full bg-surface border border-surfaceHighlight rounded-xl p-1 shadow-2xl transition-all duration-500 ${currentColors.hoverBorder} hover:translate-y-[-8px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col`}>
                {/* Terminal Header */}
                <div className="bg-surfaceHighlight/30 rounded-t-lg px-4 py-3 flex items-center justify-between border-b border-white/5 backdrop-blur-sm">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors duration-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors duration-300"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors duration-300"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                        {step.toLowerCase()}.tsx
                    </span>
                </div>
                
                {/* Card Body - using flex-1 to push content */}
                <div className="flex-1 p-6 md:p-8 bg-background/50 rounded-b-lg backdrop-blur-sm flex flex-col">
                    {/* Icon Container with Glow */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${currentColors.bg} ${currentColors.border} rounded-2xl flex items-center justify-center mb-6 md:mb-8 ${currentColors.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                        <Icon className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    
                    <div className="mb-4 md:mb-6">
                        <span className={`text-xs font-mono ${currentColors.text} mb-2 md:mb-3 block tracking-wider font-bold`}>{'>'} {step}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{title}</h3>
                    </div>
                    
                    {/* Description fills space to push code block down */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 md:mb-8 flex-1">{description}</p>
                    
                    <div className="bg-black/40 rounded-lg p-4 font-mono text-[10px] md:text-[11px] text-slate-500 border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors shadow-inner relative">
                        <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            {codeSnippet}
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector Arrow (Desktop) - Only if not last */}
            {!isLast && (
                <div className="hidden md:flex absolute -right-8 top-[138px] z-10 text-slate-700 group-hover:text-slate-500 transition-colors duration-500 transform group-hover:translate-x-1">
                    <ChevronRight className="w-8 h-8 opacity-50" />
                </div>
            )}
        </div>
    );
};

export default Methodology;