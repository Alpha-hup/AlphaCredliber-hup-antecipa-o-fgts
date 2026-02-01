
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Opte pelo Saque-Aniversário',
      description: 'Acesse o aplicativo FGTS da Caixa e selecione a modalidade Saque-Aniversário.',
    },
    {
      number: '02',
      title: 'Autorize a Instituição',
      description: 'No mesmo app, autorize o banco parceiro da Almeida CredLiber a consultar seu saldo.',
    },
    {
      number: '03',
      title: 'Análise de Crédito',
      description: 'Realizamos a consulta de acordo com as regras oficiais do programa.',
    },
    {
      number: '04',
      title: 'Contratação e Liberação',
      description: 'Após a aprovação, a liberação ocorre conforme os prazos contratuais estabelecidos.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">Como Funciona o Processo</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Um passo a passo simples, digital e totalmente alinhado com as diretrizes da Caixa Econômica Federal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-5xl font-black text-blue-50 mb-4 absolute top-4 right-4 group-hover:text-blue-100 transition-colors">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;