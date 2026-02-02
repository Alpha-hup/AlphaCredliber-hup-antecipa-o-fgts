
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) return 'Por favor, informe seu nome.';
    if (!formData.whatsapp.trim()) return 'Por favor, informe seu WhatsApp.';
    if (!formData.message.trim()) return 'Por favor, escreva sua mensagem.';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    // Configurações de destino
    const phoneNumber = '5547996168523';
    const text = `Olá, meu nome é ${formData.name.trim()}.
Meu WhatsApp é ${formData.whatsapp.trim()}.
Mensagem: ${formData.message.trim()}.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Simula processamento e abre WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSent(true);
      setIsSubmitting(false);
      setFormData({ name: '', whatsapp: '', message: '' });
      
      // Feedback temporário de sucesso
      setTimeout(() => {
        setSent(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Entre em Contato</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Dúvidas sobre o Saque-Aniversário? Nossa equipe está à disposição para ajudar você através dos nossos canais oficiais.
          </p>
          
          <div className="space-y-6">
            <a href="https://wa.me/message/PQEZMH5VYYD4N1" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <div className="bg-blue-900 p-3 rounded-lg text-white mr-4 group-hover:bg-amber-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">WhatsApp</div>
                <div className="text-lg font-semibold text-blue-900">(47) 996168523</div>
              </div>
            </a>

            <a href="mailto:Contato-ajuda@hotmail.com" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <div className="bg-blue-900 p-3 rounded-lg text-white mr-4 group-hover:bg-amber-500 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">E-mail</div>
                <div className="text-lg font-semibold text-blue-900">Contato-ajuda@hotmail.com</div>
              </div>
            </a>

            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="bg-blue-900 p-3 rounded-lg text-white mr-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Atendimento</div>
                <div className="text-lg font-semibold text-blue-900">Seg. a Sex. 09h às 22h / Sab. 09h às 18h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nome</label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp</label>
              <input 
                type="tel" 
                value={formData.whatsapp} 
                onChange={e => setFormData({...formData, whatsapp: e.target.value})} 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mensagem</label>
              <textarea 
                rows={4} 
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})} 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            
            {error && (
              <p className="text-xs text-red-500 font-bold bg-red-50 p-2 rounded border border-red-100 animate-pulse">
                {error}
              </p>
            )}

            <p className="text-[10px] text-gray-500 italic">
              Seus dados são utilizados apenas para contato, conforme nossa Política de Privacidade, em conformidade com a LGPD.
            </p>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center ${
                sent 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-900 hover:bg-blue-800'
              } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {sent ? 'Mensagem Enviada!' : 'Enviar Mensagem via WhatsApp'}
            </button>
            
            {sent && (
              <p className="text-center text-sm text-green-600 font-bold animate-bounce mt-2">
                Sucesso! Nossa equipe entrará em contato em breve.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
