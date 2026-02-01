
import React from 'react';
import { PageView } from '../App';

interface LegalPageProps {
  type: PageView;
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Política de Privacidade',
      text: 'Na Alpha CredLiber, a privacidade e segurança de seus dados são prioridades. Coletamos apenas as informações necessárias para realizar simulações e atendimentos solicitados por você. Seus dados são processados conforme a Lei Geral de Proteção de Dados (LGPD) e nunca são compartilhados com terceiros sem sua autorização expressa, exceto com as instituições financeiras parceiras necessárias para a operação de crédito consultada.'
    },
    terms: {
      title: 'Termos de Uso',
      text: 'Ao acessar o site da Alpha CredLiber, você concorda em utilizar nossos serviços de forma ética e legal. Atuamos como correspondente bancário, facilitando a intermediação entre você e instituições financeiras. As simulações realizadas não constituem aprovação imediata de crédito, estando sujeitas às políticas internas de cada instituição parceira.'
    },
    lgpd: {
      title: 'Conformidade LGPD',
      text: 'A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é levada a sério em nossa operação. Você tem o direito de solicitar a consulta, correção ou exclusão de seus dados pessoais a qualquer momento através de nossos canais oficiais de contato. Utilizamos firewalls e protocolos de segurança avançados para proteger suas informações.'
    }
  };

  const active = content[type as keyof typeof content] || content.privacy;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-black text-blue-950 mb-8 border-b-4 border-amber-500 inline-block">{active.title}</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {active.text}
        </p>
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-sm text-gray-500 italic">
            Alpha CredLiber - Atualizado em Janeiro de 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;