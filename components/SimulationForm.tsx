
import React from 'react';

const SimulationForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white uppercase tracking-tight">Inicie sua Consulta de Condições</h2>
      <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg font-medium">
        Verifique as opções disponíveis para o seu perfil em nosso ambiente de consulta segura.
      </p>

      <div className="bg-slate-50 rounded-3xl p-8 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-gray-900 max-w-2xl mx-auto border-t-[8px] border-gold-accent">
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-100">
            <svg className="w-10 h-10 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-blue-950 mb-4">Intermediação Digital</h3>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Ao clicar abaixo, você acessará nossa plataforma de simulação onde serão apresentadas as taxas e condições das instituições parceiras.
          </p>
          
          <a
            href="https://portal.credliber.com.br/credit/alphacred"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-gold-accent text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-6"
          >
            Verificar Opções Disponíveis
          </a>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <span className="h-px w-10 bg-slate-200"></span>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
              Acesso a Plataforma de Intermediação
            </p>
            <span className="h-px w-10 bg-slate-200"></span>
          </div>
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-tight text-center">
              Importante: A Alpha CredLiber não garante aprovação automática. Valores e prazos são determinados pela instituição financeira final após análise técnica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationForm;
