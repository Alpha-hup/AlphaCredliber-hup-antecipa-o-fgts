
import React from 'react';

const Authorization: React.FC = () => {
  const banks = [
    { id: '01', name: 'QI Sociedade de Crédito', status: 'Instituição Habilitada' },
    { id: '02', name: 'Singulare Corretora', status: 'Instituição Habilitada' },
    { id: '03', name: 'J17 Financeira', status: 'Instituição Habilitada' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight">Autorização de Consulta FGTS</h2>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <span className="h-0.5 w-8 bg-gold-accent"></span>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Rigorosamente conforme as normas da Caixa</p>
          <span className="h-0.5 w-8 bg-gold-accent"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {banks.map((bank) => (
          <div key={bank.id} className="bg-white border border-slate-200 rounded-3xl p-10 text-center hover:shadow-xl hover:border-gold-accent/20 transition-all group">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8 border border-slate-100 group-hover:bg-amber-50 transition-colors">
              <span className="text-xl font-black text-gold-accent">{bank.id}</span>
            </div>
            <h3 className="text-xl font-black text-blue-950 mb-3">{bank.name}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">{bank.status}</p>
            <div className="h-px w-10 bg-slate-100 mx-auto"></div>
          </div>
        ))}
      </div>

      <div id="informacao-importante" className="mt-20 bg-blue-950 rounded-[48px] p-8 sm:p-20 text-white overflow-hidden relative shadow-2xl scroll-mt-24 border border-blue-900">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black text-gold-accent mb-8 flex items-center uppercase tracking-tight">
                <svg className="w-10 h-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Diretrizes de Segurança
              </h3>
              
              <div className="space-y-6 mb-12">
                {[
                  "Acesse o App FGTS e ative a modalidade Saque-Aniversário",
                  "Autorize as instituições parceiras da Alpha CredLiber",
                  "Sua solicitação será analisada conforme o programa oficial",
                  "A contratação final é 100% digital e segura"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="bg-gold-accent text-blue-950 w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs mr-5 shrink-0 shadow-lg">
                      {idx + 1}
                    </div>
                    <p className="text-base text-blue-50 font-medium tracking-wide">{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs text-blue-200/80 font-medium leading-relaxed uppercase tracking-wider">
                  A Alpha CredLiber, inscrita no CNPJ sob o nº 41.313.421/0001-50, atua como intermediadora de serviços financeiros, conectando clientes a instituições financeiras autorizadas, conforme a legislação vigente.
                </p>
              </div>
            </div>
            
            <div className="flex-shrink-0 pt-6 lg:pt-0 w-full lg:w-auto">
              <a 
                href="#simulacao"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gold-accent text-blue-950 px-12 py-6 rounded-2xl font-black text-xl hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] block text-center transform hover:-translate-y-1"
              >
                Simular Agora
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Ornaments */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/10 rounded-full -ml-32 -mb-32 pointer-events-none blur-2xl"></div>
      </div>
    </div>
  );
};

export default Authorization;
