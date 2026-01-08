import React, { useState, useEffect } from 'react';
import { Content } from '../types';
import { Database, BrainCircuit, UserCheck, Zap, CheckCircle2, FileText, Globe, ShieldCheck, Network, Share2, Server, Code2 } from 'lucide-react';

interface WorkflowProps {
    content: Content['workflow'];
}

const Workflow: React.FC<WorkflowProps> = ({ content }) => {
    const [activeTab, setActiveTab] = useState<'fintech' | 'legal' | 'logistics'>('fintech');
    const [currentStep, setCurrentStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance steps
    useEffect(() => {
        if (isPaused) return;
        
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 4);
        }, 5000); // 5 seconds per step to allow time to see details

        return () => clearInterval(timer);
    }, [activeTab, isPaused]);

    // Reset when tab changes
    useEffect(() => {
        setCurrentStep(0);
        setIsPaused(false);
    }, [activeTab]);

    const steps = content.steps[activeTab];

    const icons = {
        ingest: Database,
        brain: BrainCircuit,
        human: UserCheck,
        action: Zap
    };

    const getIcon = (iconName: string) => {
        const Icon = icons[iconName as keyof typeof icons] || Database;
        return Icon;
    };

    return (
        <section id="workflow" className="py-16 md:py-24 bg-background relative overflow-hidden">
             {/* Background Pulse */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-600/5 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

             <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-heading">{content.title}</h2>
                    <p className="text-slate-400 text-base md:text-lg">{content.subtitle}</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16 md:mb-20">
                    <div className="bg-surfaceHighlight p-1 rounded-xl inline-flex flex-wrap justify-center border border-slate-800 backdrop-blur-sm">
                        {(Object.keys(content.tabs) as Array<keyof typeof content.tabs>).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                                    activeTab === tab 
                                    ? 'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-lg' 
                                    : 'text-slate-400 hover:text-white hover:bg-surface/50'
                                }`}
                            >
                                {content.tabs[tab]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animation Container */}
                <div className="max-w-5xl mx-auto">
                    
                    {/* Progress Bar & Nodes */}
                    <div className="relative mb-12 md:mb-24 px-2 md:px-4">
                        {/* Base Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-surfaceHighlight -translate-y-1/2 rounded-full"></div>
                        
                        {/* Active Progress Line */}
                        <div 
                            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-brand-500 to-violet-500 -translate-y-1/2 rounded-full transition-all duration-1000 ease-in-out"
                            style={{ width: `${(currentStep / 3) * 100}%` }}
                        >
                            {/* Glowing Head of Line */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20"></div>
                        </div>

                        {/* Nodes */}
                        <div className="relative flex justify-between">
                            {steps.map((step, index) => {
                                const Icon = getIcon(step.icon);
                                const isActive = index === currentStep;
                                const isCompleted = index < currentStep;

                                return (
                                    <div 
                                        key={index} 
                                        className={`relative flex flex-col items-center cursor-pointer group`}
                                        onClick={() => {
                                            setCurrentStep(index);
                                            setIsPaused(true); // Pause auto-play if user interacts
                                        }}
                                    >
                                        {/* Node Circle */}
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 z-10 ${
                                            isActive 
                                                ? 'bg-surface border-brand-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-110' 
                                                : isCompleted 
                                                    ? 'bg-surfaceHighlight border-brand-500/50 text-brand-400' 
                                                    : 'bg-surface border-slate-800 text-slate-600'
                                        }`}>
                                            <Icon className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-300 ${isActive ? 'text-white' : ''}`} />
                                            
                                            {/* Human Loop Pulse */}
                                            {isActive && step.icon === 'human' && (
                                                <div className="absolute inset-0 rounded-2xl border-2 border-yellow-500/50 animate-ping"></div>
                                            )}
                                        </div>

                                        {/* Label - Hidden on Mobile to prevent overlap */}
                                        <div className={`absolute top-20 text-center w-40 transition-all duration-500 hidden md:block ${
                                            isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'
                                        }`}>
                                            <h4 className={`text-sm font-bold font-heading mb-1 ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                                {step.title}
                                            </h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dynamic Detail Card */}
                    <div className="relative min-h-[300px]">
                        {steps.map((step, index) => {
                            if (index !== currentStep) return null;
                            const Icon = getIcon(step.icon);
                            
                            return (
                                <div key={index} className="bg-surface border border-surfaceHighlight rounded-2xl p-6 md:p-10 animate-[fadeInUp_0.5s_ease-out_forwards] shadow-2xl relative overflow-hidden">
                                    
                                    {/* Decorative Background Icons based on type */}
                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
                                        <Icon className="w-64 h-64 text-white" />
                                    </div>

                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                        
                                        {/* Animated Visuals Area */}
                                        <div className="w-full md:w-5/12 flex justify-center items-center h-48 md:h-64 bg-surfaceHighlight/30 rounded-xl border border-white/5 overflow-hidden relative order-2 md:order-1">
                                            {step.icon === 'ingest' && (
                                                <div className="flex gap-4 transform scale-75 md:scale-100">
                                                    <FileText className="w-10 h-10 text-slate-400 animate-bounce" style={{ animationDelay: '0s' }} />
                                                    <div className="h-0.5 w-8 bg-slate-600 self-center"></div>
                                                    <Code2 className="w-10 h-10 text-brand-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                    <div className="h-0.5 w-8 bg-slate-600 self-center"></div>
                                                    <Server className="w-10 h-10 text-violet-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                                                </div>
                                            )}
                                            {step.icon === 'brain' && (
                                                <div className="relative w-full h-full flex items-center justify-center transform scale-90 md:scale-100">
                                                    {/* Connectivity Lines */}
                                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                                        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                                                        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                                                        <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                                                        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                                                    </svg>

                                                    {/* Central Orchestrator */}
                                                    <div className="relative z-20 flex flex-col items-center">
                                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-surface border border-brand-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                                            <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-brand-400" />
                                                        </div>
                                                        <span className="text-[8px] md:text-[10px] font-bold text-brand-300 mt-1 bg-brand-900/50 px-2 py-0.5 rounded">ORCHESTRATOR</span>
                                                    </div>

                                                    {/* Hybrid RAG Node (Bottom Left) */}
                                                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-20 flex flex-col items-center">
                                                         <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                                                            <Database className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                                                         </div>
                                                         <span className="text-[8px] md:text-[9px] font-bold text-emerald-400 mt-1">Hybrid RAG</span>
                                                    </div>

                                                    {/* Parallel Agents (Right Side) */}
                                                    <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 flex flex-col gap-1 md:gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[8px] md:text-[9px] font-bold text-violet-400">MCP</span>
                                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-surfaceHighlight border border-violet-500/50 rounded-full flex items-center justify-center">
                                                                <Share2 className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 pl-3 md:pl-4">
                                                            <span className="text-[8px] md:text-[9px] font-bold text-violet-400">A2A</span>
                                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-surfaceHighlight border border-violet-500/50 rounded-full flex items-center justify-center">
                                                                <Network className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[8px] md:text-[9px] font-bold text-violet-400">API</span>
                                                            <div className="w-6 h-6 md:w-8 md:h-8 bg-surfaceHighlight border border-violet-500/50 rounded-full flex items-center justify-center">
                                                                <Code2 className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {step.icon === 'human' && (
                                                <div className="flex flex-col items-center gap-2 transform scale-90 md:scale-100">
                                                    <div className="relative">
                                                        <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 relative z-10" />
                                                        <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full animate-pulse"></div>
                                                    </div>
                                                    <span className="text-[8px] md:text-[10px] font-mono font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">VALIDATING</span>
                                                </div>
                                            )}
                                            {step.icon === 'action' && (
                                                <div className="relative transform scale-90 md:scale-100">
                                                    <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-green-500 relative z-10" />
                                                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Content */}
                                        <div className="w-full md:w-7/12 text-center md:text-left order-1 md:order-2">
                                            <div className="inline-flex items-center gap-2 mb-4 justify-center md:justify-start w-full">
                                                <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border ${
                                                    step.icon === 'human' 
                                                    ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' 
                                                    : 'bg-brand-500/10 text-brand-300 border-brand-500/20'
                                                }`}>
                                                    {step.icon === 'human' ? 'Human-in-the-Loop' : 'Automated Process'}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                                                <span className="text-slate-500 text-[10px] md:text-xs font-mono">STEP 0{currentStep + 1} / 04</span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 font-heading">{step.title}</h3>
                                            <p className="text-slate-300 text-base md:text-lg leading-relaxed">{step.desc}</p>
                                            
                                            {/* Extra Technical Badges for Brain Step */}
                                            {step.icon === 'brain' && (
                                                <div className="flex flex-wrap gap-2 mt-4 md:mt-6 justify-center md:justify-start">
                                                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">Multi-Agent Swarm</span>
                                                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">RAG (Vector DB)</span>
                                                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">Model Context Protocol</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Manual Navigation Dots */}
                    <div className="flex justify-center mt-6 md:mt-8 gap-2">
                        {[0, 1, 2, 3].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => { setCurrentStep(idx); setIsPaused(true); }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${currentStep === idx ? 'w-8 bg-brand-500' : 'w-2 bg-slate-800 hover:bg-slate-700'}`}
                                aria-label={`Go to step ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Workflow;