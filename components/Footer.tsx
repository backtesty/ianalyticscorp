import React from 'react';
import { Zap, Github, Linkedin, Twitter } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
    content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
    return (
        <footer className="bg-background border-t border-surfaceHighlight pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-surfaceHighlight rounded-lg flex items-center justify-center">
                            <Zap className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight font-heading">IAnalytics</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
                    </div>
                </div>
                <div className="border-t border-surfaceHighlight pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} IAnalytics. {content.rights}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                         <a href="#" className="hover:text-slate-300">{content.privacy}</a>
                         <a href="#" className="hover:text-slate-300">{content.terms}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;