
import React, { useState, useEffect } from 'react';
import { PageView } from '../App';

interface NavbarProps {
  navigateTo: (view: PageView) => void;
  currentView: PageView;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Como Funciona', href: '#informacao-importante' },
    { name: 'Antecipação FGTS', href: '#antecipacao-fgts' },
    { name: 'Simulação', href: 'https://portal.credliber.com.br/credit/alphacred', isExternal: true },
    { name: 'Sobre Nós', href: '#sobre-nos' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    if (link.isExternal) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled || currentView !== 'home' ? 'bg-blue-950 py-3 shadow-2xl' : 'bg-blue-950/95 lg:bg-blue-950/80 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
            <span className="text-2xl sm:text-3xl font-black tracking-tighter">
              <span className="text-white">Alpha</span> <span className="text-slate-400">Cred</span><span className="text-gold-accent group-hover:text-amber-400 transition-colors">Liber</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-slate-300 hover:text-gold-accent font-bold text-sm uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://portal.credliber.com.br/credit/alphacred"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-accent text-blue-950 px-7 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)] transform hover:-translate-y-0.5"
            >
              Simular Agora
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-accent focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-950 border-t border-white/10 shadow-2xl animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                onClick={(e) => handleLinkClick(e, link)}
                className="block px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-gold-accent rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://portal.credliber.com.br/credit/alphacred"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full px-3 py-4 bg-gold-accent text-blue-950 text-center rounded-xl font-black uppercase tracking-widest text-sm shadow-xl"
              >
                Simular Antecipação
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;