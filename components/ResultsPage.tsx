
import React from 'react';
import { EXPERT, IMAGES } from '../constants';
import Button from './Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ResultsPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ answers, onContinue }) => {
  const buildWhatsappUrl = () => {
    const message = `Olá Dra. Raphaella! Acabei de realizar o seu quiz de avaliação e meu perfil deu compatível. Minhas respostas: \n\n` + 
      answers.map((a, i) => `${i+1}. ${a}`).join('\n') +
      `\n\nGostaria de saber mais sobre o método!`;
    return `${EXPERT.whatsapp}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-hidden relative">
      {/* Background Hero Image - High Quality and Sophisticated */}
      <div className="absolute inset-0 opacity-50 scale-105 animate-pulse-slow">
        <img src={IMAGES.authority1} alt="Expert Profile" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end p-6 md:p-12 min-h-screen pb-16">
        <div className="max-w-md w-full text-center space-y-5">
          <div className="inline-block px-5 py-1.5 rounded-full border border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-2 animate-pulse">
            Análise de Perfil Estético
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.1]">
            Perfil Compatível.<br />
            <span className="text-[#d4af37]">Você é a Paciente ideal.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
            Com base nas suas respostas, o Método da <strong className="text-white font-bold italic">Dra. {EXPERT.name}</strong> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>

          <div className="space-y-3.5 pt-4">
            <Button 
              size="xl" 
              variant="primary" 
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.location.href = buildWhatsappUrl()}
              className="text-sm py-5 shadow-2xl"
            >
              1- Enviar minha avaliação a DRA
            </Button>

            <Button 
              size="xl" 
              variant="whatsapp" 
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.location.href = EXPERT.whatsapp}
              className="text-sm py-5"
            >
              2- CHAMAR NO WHATSSAP SEM COMPROMISSO
            </Button>

            <Button 
              size="xl" 
              variant="outline" 
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={onContinue}
              className="text-sm py-5 text-white border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              3- NÃO ENVIAR E CONTINUAR NO SITE
            </Button>
          </div>
        </div>

        <div className="mt-10 text-center opacity-40">
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                Exclusividade & Naturalidade • Santos/SP
            </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;
