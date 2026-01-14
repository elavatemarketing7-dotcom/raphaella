
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, EXPERT, IMAGES } from '../constants';
import { X, ChevronRight } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((currentStep) / QUIZ_QUESTIONS.length) * 100);
  }, [currentStep]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4">
      {/* Background Overlay simulating the landing page behind */}
      <div className="absolute inset-0 bg-[#faf9f6]/95 backdrop-blur-sm" />

      {/* Hero Name & Photo - Visible throughout the whole quiz */}
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center z-[110] pointer-events-none">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#d4af37] overflow-hidden shadow-2xl mb-2 bg-white ring-8 ring-[#d4af37]/10">
           <img src={IMAGES.hero} alt={EXPERT.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-serif italic text-lg text-[#d4af37] font-bold drop-shadow-sm">Dra. {EXPERT.name}</h3>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors z-[120]"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Compact Quiz Card for Mobile */}
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative z-[110] mt-28 border border-[#d4af37]/10 animate-in fade-in zoom-in duration-300">
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-[#d4af37] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-xl md:text-2xl font-serif font-bold text-center mb-6 leading-tight text-gray-800">
          {QUIZ_QUESTIONS[currentStep].question}
        </h2>

        <div className="space-y-2.5">
          {QUIZ_QUESTIONS[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left bg-[#faf9f6] border border-transparent hover:border-[#d4af37] hover:bg-white rounded-2xl transition-all duration-300 text-sm font-semibold flex justify-between items-center group active:scale-[0.98]"
            >
              <span className="text-gray-700 group-hover:text-[#d4af37]">{option}</span>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#d4af37] transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Etapa {currentStep + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <button 
            onClick={onClose}
            className="text-[10px] text-[#d4af37] hover:underline font-bold uppercase tracking-widest"
          >
            Ir para o site
          </button>
        </div>
      </div>

      {/* Footer text */}
      <div className="absolute bottom-6 text-center px-8 z-[110]">
        <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-tighter opacity-60">
          Avaliação exclusiva e personalizada <br /> Santos • São Paulo
        </p>
      </div>
    </div>
  );
};

export default Quiz;
