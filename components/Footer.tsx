
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  navigateTo: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-white mb-2 cursor-pointer group" onClick={() => navigateTo('home')}>
              <span className="text-white">Alpha</span> <span className="text-slate-500">Cred</span><span className="text-gold-accent group-hover:text-amber-400 transition-colors">Liber</span>
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
              CNPJ: 41.313.421/0001-50
            </div>
            <p className="text-sm leading-relaxed max-w-lg mb-10 text-slate-400 font-medium">
              A <strong>Alpha CredLiber</strong> é uma plataforma de intermediação financeira que atua como correspondente bancário. Facilitamos o acesso ao crédito com tecnologia e conformidade institucional.
            </p>
            <div className="flex space-x-3">
              <span className="bg-blue-950/50 px-4 py-2 rounded-lg text-slate-300 text-[10px] font-black border border-blue-900/50 tracking-[0.2em] uppercase">Seguro</span>
              <span className="bg-blue-950/50 px-4 py-2 rounded-lg text-slate-300 text-[10px] font-black border border-blue-900/50 tracking-[0.2em] uppercase">Digital</span>
              <span className="bg-blue-950/50 px-4 py-2 rounded-lg text-gold-accent text-[10px] font-black border border-amber-900/30 tracking-[0.2em] uppercase">LGPD Compliance</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 border-b border-blue-900 pb-2 inline-block">Institucional</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => navigateTo('home')} className="hover:text-gold-accent transition-colors">Início</button></li>
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-gold-accent transition-colors text-left">Política de Privacidade</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-gold-accent transition-colors text-left">Termos de Uso</button></li>
              <li><button onClick={() => navigateTo('lgpd')} className="hover:text-gold-accent transition-colors text-left">LGPD</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 border-b border-blue-900 pb-2 inline-block">Canais de Atendimento</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase opacity-40 font-black tracking-widest mb-1">E-mail Institucional</span>
                <a href="mailto:Contato-ajuda@hotmail.com" className="text-white hover:text-gold-accent transition-colors text-base">Contato-ajuda@hotmail.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase opacity-40 font-black tracking-widest mb-1">Consultoria WhatsApp</span>
                <a href="https://wa.me/5547996168523" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold-accent transition-colors text-base">(47) 996168523</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900">
          <div className="bg-blue-950/20 p-10 rounded-[32px] border border-blue-900/20 mb-10">
            <h5 className="text-gold-accent font-black text-[10px] uppercase tracking-[0.3em] mb-6">Aviso Legal e Regulatório</h5>
            <div className="text-[11px] leading-relaxed opacity-60 text-justify text-slate-400 font-medium">
              <p className="mb-4">
                <strong>A Alpha CredLiber, inscrita no CNPJ sob o nº 41.313.421/0001-50, não é uma instituição financeira.</strong> Atuamos exclusivamente como correspondente bancário e intermediadora de serviços financeiros, operando sob a Resolução nº 3.954/2011 do Banco Central do Brasil.
              </p>
              <p>
                As taxas de juros, encargos, CET (Custo Efetivo Total) e prazos de liberação variam de acordo com a instituição financeira parceira escolhida no ato da consulta e estão sujeitos a alteração sem aviso prévio. Todas as simulações são meramente informativas e não garantem a aprovação do crédito.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-[0.2em] gap-6 font-black">
            <div className="text-center sm:text-left">© {new Date().getFullYear()} Alpha CredLiber • CNPJ: 41.313.421/0001-50 • Correspondente Bancário</div>
            <div className="flex space-x-8">
              <button onClick={() => navigateTo('lgpd')} className="hover:text-white transition-colors">Segurança</button>
              <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacidade</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
