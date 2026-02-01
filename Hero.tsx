
import React from 'react';

const Hero: React.FC = () => {
  const whatsappNumber = '5547996168523';
  const message = 'Olá! Estou entrando em contato pelo site Alpha CredLiber.\n\nGostaria de falar com um especialista sobre a antecipação do Saque-Aniversário do FGTS.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Elementos decorativos prateados e azulados */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-blue-600 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-slate-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-800 mb-8 backdrop-blur-sm">
            <span className="text-blue-100 text-sm font-bold tracking-wide uppercase">Intermediação de Ativos FGTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Antecipe seu FGTS com <span className="text-gold-accent">Segurança</span> e Transparência
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-slate-300 font-medium leading-relaxed">
            Consulte as condições para antecipar seus recursos de forma 100% digital. Atuamos como correspondente bancário para conectar você às melhores opções de mercado.
          </p>
          
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://portal.credliber.com.br/credit/alphacred"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 border border-transparent text-xl font-bold rounded-2xl text-white bg-gold-accent hover:bg-amber-600 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
              >
                Simular Agora
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 border-2 border-slate-300 text-xl font-bold rounded-2xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1"
              >
                Falar com Consultor
              </a>
            </div>
            <div className="mt-10 flex flex-col items-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-gold-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Consultoria técnica em conformidade bancária</span>
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">
                Correspondente Bancário • Resolução 3.954/11 BCB • Dados Protegidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
