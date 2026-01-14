
import React, { useState } from 'react';
import { 
  GALLERY_RINO, 
  GALLERY_MANDIBULA, 
  GALLERY_OLHEIRAS, 
  GALLERY_BOTOX, 
  GALLERY_BOCAS, 
  GALLERY_HEART 
} from '../constants';
import { Heart, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { title: "Rinomodelação", images: GALLERY_RINO, desc: "A harmonia perfeita do perfil facial." },
    { title: "Mandíbula", images: GALLERY_MANDIBULA, desc: "Definição e projeção com elegância." },
    { title: "Olheiras", images: GALLERY_OLHEIRAS, desc: "Revitalização do olhar e frescor facial." },
    { title: "Botox", images: GALLERY_BOTOX, desc: "Prevenção e suavização de linhas." },
    { title: "Lábios", images: GALLERY_BOCAS, desc: "Volume, hidratação e contorno labial." },
    { title: "Global <3", images: GALLERY_HEART, desc: "Transformações globais e personalizadas." }
  ];

  return (
    <div className="space-y-16">
      {/* Category Selector - Tabs Design */}
      <div className="flex flex-col space-y-8">
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar snap-x">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`snap-start shrink-0 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                activeTab === idx 
                ? "bg-[#c5a059] border-[#c5a059] text-white shadow-[0_10px_20px_rgba(197,160,89,0.3)] scale-105" 
                : "bg-white border-gray-100 text-gray-400 hover:border-[#c5a059]/30 hover:text-[#c5a059]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Category Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-[#c5a059] pl-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#111]">
              {categories[activeTab].title}
            </h3>
            <p className="text-xs font-medium text-gray-400 italic">{categories[activeTab].desc}</p>
          </div>
        </div>
      </div>

      {/* Grid Display - Animate on change */}
      <div key={activeTab} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {categories[activeTab].images.map((img, i) => (
          <div 
            key={i} 
            className="aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden group relative shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <img 
              src={img} 
              alt={`${categories[activeTab].title} resultado ${i + 1}`} 
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1">
                  <span className="text-white text-[9px] font-black uppercase tracking-widest block">Caso Clínico Real</span>
                  <span className="text-[#c5a059] text-[8px] font-bold uppercase tracking-widest block">Método Saldanha</span>
                </div>
            </div>
          </div>
        ))}
        
        {/* Call to Action Card in Grid */}
        <div className="aspect-[4/5] bg-[#c5a059]/5 border border-dashed border-[#c5a059]/30 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center space-y-4 group cursor-pointer hover:bg-[#c5a059]/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[#c5a059] text-white flex items-center justify-center animate-bounce shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#c5a059]">Sua vez de brilhar</p>
          <p className="text-[11px] font-medium text-gray-500 leading-tight">Agende sua análise facial personalizada hoje.</p>
        </div>
      </div>

      {/* Ethical Disclaimer */}
      <div className="p-10 bg-[#faf9f6] rounded-[3rem] border border-gray-100 text-center">
        <Heart className="w-6 h-6 text-[#c5a059] mx-auto mb-4 fill-current opacity-30" />
        <p className="text-[10px] text-gray-400 italic font-medium max-w-md mx-auto leading-relaxed uppercase tracking-tighter">
          * Resultados autorizados para fins educacionais e de portfólio. Cada anatomia é única e os resultados dependem da resposta biológica individual.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
