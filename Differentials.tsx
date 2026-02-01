
import React from 'react';

const Differentials: React.FC = () => {
  const diffs = [
    {
      icon: (
        <svg className="w-8 h-8 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04 Pelotas 12 21.23a11.952 11.952 0 0012-11.35z" />
        </svg>
      ),
      title: 'Segurança de Elite',
      description: 'Proteção de dados rigorosa seguindo as diretrizes da LGPD e protocolos bancários avançados.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Experiência Digital',
      description: 'Processo fluído via smartphone, otimizado para sua agilidade e conforto.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparência Total',
      description: 'Clareza absoluta em todas as etapas, sem taxas ocultas ou termos ambíguos.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Consultoria Especializada',
      description: 'Equipe de alto nível focada em oferecer a melhor solução para o seu planejamento.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight">Excelência Alpha CredLiber</h2>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <span className="h-0.5 w-8 bg-gold-accent"></span>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Por que somos a sua melhor escolha</p>
          <span className="h-0.5 w-8 bg-gold-accent"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {diffs.map((diff, index) => (
          <div key={index} className="group p-10 rounded-[32px] bg-white border border-slate-100 hover:border-gold-accent/30 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="mb-8 inline-block p-5 bg-slate-50 rounded-2xl group-hover:bg-amber-50 transition-colors border border-slate-100">
              {diff.icon}
            </div>
            <h3 className="text-xl font-black text-blue-950 mb-4">{diff.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">{diff.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differentials;