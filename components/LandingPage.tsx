
import React, { useRef, useState } from 'react';
import { EXPERT, IMAGES, WHY_TRUST, STEPS, TESTIMONIALS, GALLERY_MENTORIA } from '../constants';
import Button from './Button';
import Gallery from './Gallery';
import { 
  Instagram, 
  MessageCircle, 
  CheckCircle,
  MapPin,
  Clock,
  Navigation,
  Heart,
  ChevronRight,
  GraduationCap,
  Star,
  Quote,
  ShieldCheck,
  Gem,
  Menu,
  X,
  User,
  Image as ImageIcon,
  Map as MapIcon,
  Crown
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mentoriaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false);
    const offset = 80; // height of the fixed navbar
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Sobre Mim', icon: <User className="w-4 h-4" />, ref: aboutRef },
    { label: 'Prova Visual', icon: <ImageIcon className="w-4 h-4" />, ref: galleryRef },
    { label: 'Depoimentos', icon: <Quote className="w-4 h-4" />, ref: testimonialsRef },
    { label: 'Mentoria VIP', icon: <Crown className="w-4 h-4" />, ref: mentoriaRef },
    { label: 'Onde nos Encontrar', icon: <MapIcon className="w-4 h-4" />, ref: mapRef },
  ];

  return (
    <div className="bg-[#faf9f6] relative">
      {/* 
        LOGRADOURO SUPERIOR FIXO 
      */}
      <nav className="fixed top-0 left-0 w-full z-[200] glass-morphism border-b border-[#c5a059]/10 h-20 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          
          {/* Botão Menu Esquerda */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#c5a059]/5 flex items-center justify-center border border-[#c5a059]/10 group-hover:bg-[#c5a059] group-hover:text-white transition-all">
              <Menu className="w-5 h-5" />
            </div>
            <span className="hidden md:inline text-[10px] font-black uppercase tracking-widest text-gray-500">Menu</span>
          </button>

          {/* Logo Central */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="signature text-xl md:text-2xl font-bold tracking-tighter cursor-pointer text-center"
          >
            Dra. Raphaella
          </div>

          {/* CTA Direita */}
          <button 
            onClick={() => window.open(EXPERT.whatsapp)}
            className="p-2.5 md:px-5 md:py-2.5 rounded-full bg-[#c5a059] text-white text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#c5a059]/20 flex items-center gap-2"
          >
            <span className="hidden md:inline">Agendar Agora</span>
            <MessageCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* 
        DRAWER LATERAL (ABA DE NAVEGAÇÃO)
      */}
      <div className={`fixed inset-0 z-[300] transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <div className="signature text-xl">Dra. Raphaella</div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-400 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-[9px] font-black text-[#c5a059] uppercase tracking-[0.3em] mb-6">Navegação Exclusiva</p>
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(link.ref)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#c5a059]/5 hover:text-[#c5a059] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">{link.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto opacity-30" />
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100 mt-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c5a059]/20">
                  <img src={IMAGES.hero} alt="Expert" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Dra. Raphaella Saldanha</p>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest font-black">Santos, SP</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => window.open(EXPERT.instagram)} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </button>
                <button onClick={() => window.open(EXPERT.whatsapp)} className="flex-1 py-3 rounded-xl bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20"> {/* Padding for fixed navbar */}
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.hero} 
              alt={EXPERT.name} 
              className="w-full h-full object-cover object-top opacity-90 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-3/5 space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-[#c5a059]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">Padrão Ouro em Harmonização</span>
                </div>
                <h1 className="text-6xl md:text-[7.5rem] font-serif font-bold leading-[0.85] tracking-tighter text-[#111]">
                  Beleza <br />
                  <span className="italic font-normal text-[#c5a059]">Revelada,</span> <br />
                  Não Criada.
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                Dra. Raphaella Saldanha utiliza a ciência da simetria facial para devolver a você a autoconfiança de uma face em equilíbrio.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button 
                  size="xl" 
                  variant="primary" 
                  className="py-6 px-12 premium-gradient shadow-2xl"
                  onClick={() => window.open(EXPERT.whatsapp)}
                >
                  RESERVAR MINHA CONSULTA
                </Button>
                <div className="flex items-center gap-4 px-6 border-l border-gray-200">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-tight">
                    +1.500 Faces <br /> Transformadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Experience - Play Button Removed as requested */}
        <section className="py-24 px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7 relative group">
                  <div className="absolute -inset-10 bg-[#c5a059]/5 rounded-[4rem] blur-[80px] group-hover:bg-[#c5a059]/10 transition-all duration-700" />
                  <div className="relative rounded-[3rem] overflow-hidden shadow-[0_80px_150px_-30px_rgba(197,160,89,0.3)] bg-black">
                    <video 
                      src={EXPERT.videoHero} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="w-full aspect-video md:aspect-[16/10] object-cover opacity-90"
                    />
                  </div>
              </div>
              <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[0.9] text-[#111]">
                      O Método <br />
                      <span className="text-[#c5a059]">Saldanha.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                      Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Sinta a diferença de ser cuidada por quem entende que sua beleza é única.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { title: "Personalização Extrema", desc: "Cada face possui uma geometria própria que deve ser respeitada." },
                      { title: "Tecnologia Europeia", desc: "Uso exclusivo de preenchedores de padrão ouro internacional." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#faf9f6] flex items-center justify-center text-[#c5a059]">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#111] mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
          </div>
        </section>

        {/* Filosofia & Autoridade */}
        <section ref={aboutRef} className="py-24 px-8 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
               <div className="absolute -top-12 -left-12 text-[15rem] font-serif text-[#c5a059]/5 leading-none select-none">“</div>
               <div className="relative z-10 space-y-12">
                  <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                    A ética do <br /> <span className="text-[#c5a059]">rejuvenescimento.</span>
                  </h2>
                  <div className="space-y-6 text-xl text-gray-600 font-light italic leading-relaxed">
                     <p>
                      "Não acredito em rostos fabricados. Acredito na face que conta uma história, mas que o faz com vigor, frescor e equilíbrio."
                     </p>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c5a059]">
                        <img src={IMAGES.hero} alt="Signature" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <p className="signature text-2xl">Dra. Raphaella Saldanha</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Diretora Clínica • CROSP 137472</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8">
               <div className="space-y-8">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl translate-y-12">
                    <img src={IMAGES.authority1} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white shadow-xl border border-gray-50 text-center">
                     <ShieldCheck className="w-10 h-10 text-[#c5a059] mx-auto mb-4" />
                     <p className="text-[10px] font-black uppercase tracking-widest">Segurança Clínica Garantida</p>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src={IMAGES.authority2} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src={IMAGES.authority3} alt="Expert" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section ref={galleryRef} className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="flex flex-col md:flex-row items-end justify-between gap-10">
               <div className="space-y-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#c5a059]">Portfólio de Harmonização</span>
                  <h2 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-[#111]">Resultados.</h2>
               </div>
               <p className="text-gray-400 font-medium max-w-sm leading-relaxed border-l-2 border-[#c5a059]/20 pl-8">
                  Cada imagem reflete o compromisso com a anatomia e a individualidade. Resultados que falam por si mesmos.
               </p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* Depoimentos (Área de comentários) */}
        <section ref={testimonialsRef} className="py-24 px-8 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-serif font-bold">O que dizem as pacientes</h2>
              <p className="text-gray-400 font-medium">Experiências reais com o Método Saldanha.</p>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x">
              {TESTIMONIALS.map((img, i) => (
                <div key={i} className="snap-center shrink-0 w-[300px] md:w-[400px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl border border-white">
                  <img src={img} alt={`Depoimento ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentoria VIP */}
        <section ref={mentoriaRef} className="py-32 px-8 bg-[#0a0a0a] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c5a059]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
             <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="space-y-16">
                   <div className="space-y-6">
                      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/5">
                         <GraduationCap className="w-5 h-5 text-[#c5a059]" />
                         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c5a059]">Elite Educational Program</span>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none">
                         Mentoria <br />
                         <span className="italic text-[#c5a059]">VIP Elite</span>
                      </h2>
                   </div>
                   <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                      Treinamento imersivo para profissionais que buscam o domínio da Harmonização Orofacial de alto padrão.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      {[
                        { icon: <Star className="w-6 h-6" />, text: "Metodologia Própria" },
                        { icon: <ShieldCheck className="w-6 h-6" />, text: "Segurança em Intercorrências" },
                        { icon: <MessageCircle className="w-6 h-6" />, text: "Mentoring Vitalício" },
                        { icon: <Gem className="w-6 h-6" />, text: "Posicionamento de Luxo" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                           <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-500">
                              {item.icon}
                           </div>
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-300">{item.text}</span>
                        </div>
                      ))}
                   </div>
                   <Button 
                      variant="primary" 
                      size="xl" 
                      className="premium-gradient py-6 px-16 shadow-2xl shadow-[#c5a059]/20"
                      onClick={() => window.open(EXPERT.whatsapp + "&text=Desejo informações sobre a Mentoria VIP Elite.")}
                   >
                      SOLICITAR ACESSO À MENTORIA
                   </Button>
                </div>
                <div className="relative">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-6">
                         <img src={GALLERY_MENTORIA[0]} className="w-full rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="M1" />
                         <img src={GALLERY_MENTORIA[2]} className="w-full rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="M2" />
                      </div>
                      <div className="space-y-6 pt-12">
                         <img src={GALLERY_MENTORIA[1]} className="w-full rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="M3" />
                         <img src={GALLERY_MENTORIA[4]} className="w-full rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="M4" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-24">
             <div className="text-center space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif font-bold">Pilares da Excelência</h2>
                <p className="text-gray-400 font-medium max-w-lg mx-auto italic">Cada atendimento é uma obra de precisão e cuidado.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {WHY_TRUST.map((item, idx) => (
                <div key={idx} className="group p-12 rounded-[3rem] bg-[#faf9f6] border border-transparent hover:border-[#c5a059]/30 hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500">
                  <div className="mb-10 text-[#c5a059] transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localização */}
        <section ref={mapRef} className="py-32 px-8 bg-[#faf9f6] overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
              <div className="w-full lg:w-2/5 space-y-12">
                  <div className="space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a059]">Unidade Santos</span>
                    <h2 className="text-6xl font-serif font-bold tracking-tighter">Onde nos <br /> encontrar.</h2>
                  </div>
                  <div className="space-y-10">
                      <div className="flex items-start gap-8">
                          <div className="w-16 h-16 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-[#c5a059] shrink-0"><MapPin className="w-8 h-8" /></div>
                          <div>
                            <p className="text-2xl font-bold text-[#111]">{EXPERT.address}</p>
                            <p className="text-gray-400 font-medium text-lg">Santos - SP</p>
                          </div>
                      </div>
                  </div>
                  <div className="pt-6">
                    <Button 
                        variant="outline" 
                        icon={<Navigation className="w-5 h-5" />}
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EXPERT.address)}`)}
                        className="border-gray-900 text-gray-900 rounded-2xl py-6 px-10 font-bold"
                    >
                        INICIAR NAVEGAÇÃO
                    </Button>
                  </div>
              </div>
              <div className="w-full lg:w-3/5 h-[650px] relative">
                  <div className="absolute inset-0 bg-[#c5a059]/10 rounded-[4rem] -rotate-3 scale-105" />
                  <div className="relative h-full rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white ring-1 ring-black/5">
                    <iframe 
                        title="Dra Raphaella Saldanha Santos"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.124503373539!2d-46.3317769!3d-23.956037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030cfd84e8f3%3A0x64e3230b06b643a1!2sAv.%20Sen.%20Feij%C3%B3%2C%20686%20-%20Vila%20Mathias%2C%20Santos%20-%20SP%2C%2011015-502!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                    />
                  </div>
              </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-48 px-8 bg-[#0a0a0a] flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
              <img src={IMAGES.authority3} alt="Dra. Raphaella Saldanha" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-12">
              <div className="space-y-6">
                <h2 className="text-6xl md:text-9xl font-serif font-bold text-white leading-none tracking-tighter">
                    Sua face <br />
                    <span className="text-[#c5a059]">em harmonia.</span>
                </h2>
                <p className="text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Permita-se viver a experiência de uma beleza atemporal cuidada pela maior referência de Santos.
                </p>
              </div>
              <div className="space-y-8 pt-10">
                  <Button 
                      variant="primary" 
                      size="xl" 
                      icon={<MessageCircle className="w-6 h-6" />}
                      onClick={() => window.open(EXPERT.whatsapp)}
                      className="premium-gradient py-8 px-16 text-2xl shadow-[0_0_50px_rgba(197,160,89,0.3)] hover:scale-105 transition-all"
                  >
                      AGENDAR MINHA PRIMEIRA CONSULTA
                  </Button>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-24 px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
              <div className="space-y-8 max-w-md">
                  <p className="signature text-5xl">Dra. Raphaella Saldanha</p>
                  <p className="text-gray-400 font-medium leading-relaxed">
                     Referência em Harmonização Orofacial e Mentoria para Profissionais da Saúde em Santos e São Paulo.
                  </p>
                  <div className="flex gap-4">
                    <a href={EXPERT.instagram} className="w-14 h-14 rounded-2xl bg-[#faf9f6] flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition-all duration-500 shadow-sm">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-20">
                 <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a059]">Institucional</h4>
                    <ul className="space-y-4 text-sm font-bold text-gray-500">
                      <li><button onClick={() => scrollTo(aboutRef)} className="hover:text-[#c5a059] transition-all">Filosofia</button></li>
                      <li><button onClick={() => scrollTo(galleryRef)} className="hover:text-[#c5a059] transition-all">Portfólio</button></li>
                      <li><button onClick={() => scrollTo(testimonialsRef)} className="hover:text-[#c5a059] transition-all">Depoimentos</button></li>
                    </ul>
                 </div>
              </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
