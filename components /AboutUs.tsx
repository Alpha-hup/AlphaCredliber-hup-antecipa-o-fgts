
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 mb-10 uppercase tracking-tighter">Referência em Intermediação Digital</h2>
          <div className="bg-white p-8 sm:p-16 rounded-[40px] shadow-2xl border border-slate-100 text-lg sm:text-xl text-gray-700 leading-relaxed text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full opacity-50"></div>
            <p className="mb-8 relative z-10 font-medium">
              A <strong>Alpha CredLiber</strong> atua com o compromisso de facilitar o acesso a alternativas de crédito planejado. Como intermediadores de soluções financeiras, integramos tecnologia e consultoria para que o trabalhador brasileiro possa gerir seus ativos com clareza.
            </p>
            <p className="mb-8 relative z-10 text-gray-600">
              Nossa operação é pautada pelo estrito cumprimento das normas regulatórias do Banco Central e da Caixa Econômica Federal. Atuamos como ponte entre clientes e o mercado de crédito, focando na agilidade do acesso aos recursos antecipados através de ativos regulamentados.
            </p>
            <p className="mb-10 relative z-10 text-sm text-slate-500 font-bold uppercase tracking-wider border-l-4 border-gold-accent pl-4">
              A Alpha CredLiber (CNPJ 41.313.421/0001-50) NÃO é uma instituição financeira. Atuamos exclusivamente como correspondente bancário seguindo as normas vigentes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 pt-12 border-t border-slate-100">
              <div className="text-center sm:text-left">
                <div className="text-blue-950 font-black text-xs uppercase tracking-widest mb-3 text-amber-600">Visão</div>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">Referência ética em intermediação de ativos FGTS digital no cenário nacional.</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-blue-950 font-black text-xs uppercase tracking-widest mb-3 text-amber-600">Missão</div>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">Conectar pessoas a recursos financeiros através de processos técnicos e seguros.</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-blue-950 font-black text-xs uppercase tracking-widest mb-3 text-amber-600">Valores</div>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">Transparência regulatória, integridade de dados e inovação responsável.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
