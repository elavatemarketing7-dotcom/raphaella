
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import Quiz from './components/Quiz';
import ResultsPage from './components/ResultsPage';
import LandingPage from './components/LandingPage';
import { EXPERT, IMAGES, GALLERY_MENTORIA } from './constants';
import Button from './components/Button';
import { Sparkles, ArrowRight, MessageCircle, Crown, Star, GraduationCap, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.GATEWAY);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  useEffect(() => {
    if (state === AppState.ANALYZING) {
      const interval = setInterval(() => {
        setAnalyzingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setState(AppState.RESULTS), 400); // Small delay for UX
            return 100;
          }
          return prev + 4;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [state]);

  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setState(AppState.ANALYZING);
  };

  if (state === AppState.GATEWAY) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c5a059]/30">
        {/* Fixed Background for Gateway */}
        <div className="fixed inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top opacity-40 scale-105 animate-subtle-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>

        {/* Header/Logo - Compacted */}
        <header className="relative z-20 pt-10 pb-4 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-6 h-[1px] bg-[#c5a059]" />
            <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
            <div className="w-6 h-[1px] bg-[#c5a059]" />
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#c5a059] mb-3">Exclusive Aesthetic Experience</p>
          <h1 className="signature text-3xl md:text-5xl text-center">Dra. {EXPERT.name}</h1>
        </header>

        {/* Content Container - Scrollable */}
        <main className="relative z-10 w-full max-w-md mx-auto px-5 pb-16 space-y-6">
          
          {/* 1. MAIN QUIZ/GATEWAY ACTION CARD - PRIMARY FOCUS */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-7 md:p-10 rounded-[2.5rem] w-full space-y-8 shadow-2xl ring-1 ring-white/5">
              <div className="text-center space-y-3">
                <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
                  Descubra seu perfil para uma <br />
                  <span className="text-white font-medium italic underline decoration-[#c5a059] underline-offset-4">naturalidade absoluta.</span>
                </p>
              </div>
              
              <div className="space-y-3.5">
                <Button 
                  size="xl" 
                  variant="primary" 
                  icon={<Sparkles className="w-4 h-4" />}
                  onClick={() => setState(AppState.QUIZ)}
                  className="premium-gradient py-6 shadow-[0_20px_40px_rgba(197,160,89,0.3)] border-none text-sm"
                >
                  AVALIAÇÃO PERSONALIZADA
                </Button>
                
                <Button 
                  size="xl" 
                  variant="outline" 
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => setState(AppState.LANDING)}
                  className="py-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-xs"
                >
                  ACESSAR PORTFÓLIO ELITE
                </Button>

                <div className="pt-2 flex items-center justify-center gap-4">
                  <div className="h-[1px] flex-1 bg-white/5" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-600">Ou fale agora</span>
                  <div className="h-[1px] flex-1 bg-white/5" />
                </div>

                <button 
                  onClick={() => window.open(EXPERT.whatsapp)}
                  className="flex items-center justify-center gap-2.5 w-full py-2 text-gray-400 hover:text-[#25D366] transition-all text-[10px] font-black uppercase tracking-[0.2em] group"
                >
                  <div className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  </div>
                  WhatsApp Dra. Raphaella
                </button>
              </div>
            </div>
          </section>

          {/* 2. MENTORIA VIP PRE-QUIZ BLOCK - MOVED BELOW & COMPACTED */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="glass-morphism rounded-[2rem] p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <GraduationCap className="w-10 h-10 text-[#c5a059]" />
              </div>
              
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[8px] font-black uppercase tracking-widest border border-[#c5a059]/20">
                  <Star className="w-2.5 h-2.5 fill-current" /> Programa Mentoria
                </div>
                
                <div className="space-y-1.5">
                  <h2 className="text-xl font-serif font-bold text-white leading-tight">
                    Mentoria VIP <span className="text-[#c5a059] italic">Elite</span>
                  </h2>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                    Domínio da Harmonização e Posicionamento Premium para Profissionais.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {GALLERY_MENTORIA.slice(0, 3).map((img, i) => (
                      <img key={i} src={img} className="w-7 h-7 rounded-full border border-[#0a0a0a] object-cover" alt="Student" />
                    ))}
                  </div>
                  <p className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Networking de Elite • Vagas Limitadas</p>
                </div>

                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full bg-white/5 border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] py-3.5"
                  onClick={() => window.open(EXPERT.whatsapp + "&text=Desejo informações sobre a Mentoria VIP Elite.")}
                >
                  SABER MAIS SOBRE A MENTORIA
                </Button>
              </div>
            </div>
          </section>

          {/* Trust Indicators - Simplified */}
          <section className="text-center space-y-4 animate-in fade-in duration-1000 delay-700">
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-[#c5a059] fill-current" />)}
            </div>
            <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold leading-relaxed max-w-[200px] mx-auto">
              Referência em Santos • Especialista em Faces Reais
            </p>
            
            <div className="flex flex-col items-center gap-1.5 opacity-20 pt-2">
               <ChevronDown className="w-3 h-3 animate-bounce" />
               <span className="text-[7px] font-black uppercase tracking-widest">Explore o site</span>
            </div>
          </section>
        </main>

        <style>{`
          @keyframes subtle-zoom {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.12); }
          }
          .animate-subtle-zoom {
            animation: subtle-zoom 20s infinite alternate ease-in-out;
          }
          .glass-morphism {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
          }
        `}</style>
      </div>
    );
  }

  if (state === AppState.QUIZ) {
    return <Quiz onComplete={handleQuizComplete} onClose={() => setState(AppState.LANDING)} />;
  }

  if (state === AppState.ANALYZING) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-8 space-y-10">
        <div className="relative">
             <div className="w-36 h-36 rounded-full border-8 border-gray-100 flex items-center justify-center overflow-hidden relative">
                <div 
                    className="absolute inset-0 bg-[#c5a059]/20 transition-all duration-300 ease-linear"
                    style={{ height: `${analyzingProgress}%`, top: `${100 - analyzingProgress}%` }}
                />
                <img src={IMAGES.hero} alt="Analyzing Profile" className="w-28 h-28 object-cover rounded-full z-10 shadow-lg" />
             </div>
             <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#c5a059] animate-[spin_10s_linear_infinite]" />
        </div>
        
        <div className="text-center space-y-5 w-full max-w-xs">
            <h2 className="text-2xl font-serif font-bold text-gray-800">Analisando...</h2>
            
            <div className="space-y-3">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                      className="h-full bg-[#c5a059] transition-all duration-300 shadow-sm"
                      style={{ width: `${analyzingProgress}%` }}
                  />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">IA Predict</span>
                <span className="text-[10px] text-[#c5a059] font-black uppercase tracking-widest">Lvl. Premium</span>
              </div>
            </div>

            <p className="text-[11px] text-[#c5a059] font-bold uppercase tracking-widest animate-pulse mt-4">
              Identificando perfil de naturalidade
            </p>
        </div>
      </div>
    );
  }

  if (state === AppState.RESULTS) {
    return <ResultsPage answers={quizAnswers} onContinue={() => setState(AppState.LANDING)} />;
  }

  return <LandingPage />;
};

export default App;
