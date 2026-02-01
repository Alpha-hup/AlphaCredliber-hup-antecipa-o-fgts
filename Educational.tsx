
import React from 'react';

const Educational: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 mb-6">O que é a Antecipação do Saque-Aniversário?</h2>
        </div>
        <div className="space-y-8 text-gray-700 leading-relaxed text-center sm:text-left">
          <p className="text-xl sm:text-2xl font-medium text-blue-900/80">
            A antecipação é uma modalidade de crédito que permite utilizar o saldo acumulado no FGTS como garantia para acessar valores que seriam liberados apenas na data do aniversário.
          </p>
          <p className="text-lg">
            Trata-se de uma alternativa financeira para quem busca taxas diferenciadas sem comprometer a renda mensal, visto que a quitação ocorre mediante o saldo retido no fundo, sem necessidade de pagamento via boletos.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-900 shadow-sm text-left">
            <p className="text-blue-900 font-black mb-3 uppercase tracking-widest text-sm">Regulação e Prazos</p>
            <p className="text-blue-900 font-medium italic text-lg leading-relaxed">
              "A liberação dos valores e as taxas aplicadas dependem das diretrizes de cada instituição financeira parceira e da conclusão do processo de autorização digital no aplicativo oficial do FGTS."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-blue-950">Quitação via saldo: O fundo é utilizado para honrar o contrato.</span>
            </div>
            <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-blue-950">Acessibilidade: Opção viável para diversos perfis de crédito.</span>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-400 pt-8 font-medium italic">
            Alpha CredLiber: Atuamos exclusivamente como intermediadores em conformidade com as políticas bancárias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Educational;
