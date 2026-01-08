import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { Content, Language } from '../types';
import { streamGeminiResponse } from '../services/geminiService';

interface DemoProps {
  content: Content['demo'];
  lang: Language;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Demo: React.FC<DemoProps> = ({ content, lang }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: content.agentGreeting }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([{ role: 'assistant', text: content.agentGreeting }]);
  }, [lang, content.agentGreeting]);

  // Auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    let fullResponse = '';
    // Add placeholder for assistant response
    setMessages(prev => [...prev, { role: 'assistant', text: '' }]);

    try {
      const generator = streamGeminiResponse(userMsg, lang);
      
      for await (const chunk of generator) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].text = fullResponse;
          return newMsgs;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Gemini 2.5 Flash Integration</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {content.title}
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {content.subtitle}
            </p>
            <div className="hidden lg:block p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-semibold mb-2">Why IAnalytics?</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Real-time Context Processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Multi-turn Reasoning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  Secure Enterprise Deployment
                </li>
              </ul>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[500px]">
              {/* Chat Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">agent_v1.0.tsx</span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-600'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-slate-800 text-white rounded-tr-sm' 
                        : 'bg-brand-900/20 text-slate-200 border border-brand-500/20 rounded-tl-sm'
                    }`}>
                      {msg.text}
                      {isLoading && idx === messages.length - 1 && msg.role === 'assistant' && msg.text === '' && (
                        <span className="animate-pulse">...</span>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-slate-900 border-t border-slate-800">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={content.placeholder}
                    className="w-full bg-slate-800 text-white pl-4 pr-12 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-center text-[10px] text-slate-600 mt-2">
                  {content.disclaimer}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Demo;