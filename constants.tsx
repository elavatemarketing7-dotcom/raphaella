
import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  UserRound, 
  MessageCircle, 
  Heart,
  MapPin,
  CalendarCheck,
  Award,
  Crown,
  GraduationCap,
  Star,
  Gem
} from 'lucide-react';

export const EXPERT = {
  name: "Raphaella Saldanha",
  role: "Harmonização Facial | Cirurgiã Dentista",
  cro: "CROSP 137472",
  address: "Av. Senador Feijó 686 Santos, SP",
  whatsapp: "https://api.whatsapp.com/send/?phone=5513981462173&text&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/dra.raphaellasaldanha/",
  videoHero: "https://i.imgur.com/ZY9jNTa.mp4"
};

export const IMAGES = {
  hero: "https://i.imgur.com/1gZO4l0.png",
  authority1: "https://i.imgur.com/25XFxp4.png",
  authority2: "https://i.imgur.com/qItgj7g.png",
  authority3: "https://i.imgur.com/Ww8PvjX.png",
};

export const GALLERY_RINO = [
  "https://i.imgur.com/NMNQG53.png",
  "https://i.imgur.com/TWHIPlj.png",
  "https://i.imgur.com/b1Z5u4l.png",
  "https://i.imgur.com/0iXRRRF.png",
  "https://i.imgur.com/hddoy2e.png"
];

export const GALLERY_MANDIBULA = [
  "https://i.imgur.com/wIX20ZB.png",
  "https://i.imgur.com/8CXRMf2.png",
  "https://i.imgur.com/N3xPawO.png",
  "https://i.imgur.com/mehE3G1.png",
  "https://i.imgur.com/M4Of9g3.png",
  "https://i.imgur.com/8Bcs342.png",
  "https://i.imgur.com/rpDKCef.png",
  "https://i.imgur.com/MQegHJr.png"
];

export const GALLERY_OLHEIRAS = [
  "https://i.imgur.com/VYt6pzZ.png",
  "https://i.imgur.com/2l2OHVj.png",
  "https://i.imgur.com/vsXaCdl.png"
];

export const GALLERY_BOTOX = [
  "https://i.imgur.com/5B2vyJ7.png",
  "https://i.imgur.com/jqs1Toz.png",
  "https://i.imgur.com/8RpStWu.png",
  "https://i.imgur.com/mK6sHGi.png"
];

export const GALLERY_BOCAS = [
  "https://i.imgur.com/T99vhHZ.png",
  "https://i.imgur.com/WRhSGdt.png",
  "https://i.imgur.com/BUgCBfX.png",
  "https://i.imgur.com/67EikSY.png"
];

export const GALLERY_HEART = [
  "https://i.imgur.com/mV3sqOP.png",
  "https://i.imgur.com/YlXaCfK.png",
  "https://i.imgur.com/HJKcK6J.png",
  "https://i.imgur.com/IbRflwC.png",
  "https://i.imgur.com/pVrwahw.png"
];

export const GALLERY_MENTORIA = [
  "https://i.imgur.com/d9MS9og.png",
  "https://i.imgur.com/F2PhW5K.png",
  "https://i.imgur.com/Xt6k97w.png",
  "https://i.imgur.com/3BSJTOc.png",
  "https://i.imgur.com/udnKDrQ.png"
];

export const TESTIMONIALS = [
  "https://i.imgur.com/DyJx1pz.png",
  "https://i.imgur.com/JAlcqe3.png",
  "https://i.imgur.com/1pIkqTm.png",
  "https://i.imgur.com/qrXUvQg.png",
  "https://i.imgur.com/Yz4lQlf.png"
];

export const WHY_TRUST = [
  {
    icon: <Gem className="w-8 h-8 text-[#c5a059]" />,
    title: "Refinamento Estético",
    desc: "Um olhar clínico treinado para identificar a beleza escondida e realçá-la com total sobriedade."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#c5a059]" />,
    title: "Protocolo de Segurança",
    desc: "Tecnologia de ponta e materiais premium para garantir resultados seguros e previsíveis."
  },
  {
    icon: <Award className="w-8 h-8 text-[#c5a059]" />,
    title: "Atendimento Exclusivo",
    desc: "Uma experiência boutique. Do diagnóstico à execução, você é acompanhada por mim."
  },
  {
    icon: <Star className="w-8 h-8 text-[#c5a059]" />,
    title: "Resultados Atemporais",
    desc: "Harmonização que não segue modismos, mas sim as proporções áureas da sua face."
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Consultoria Inicial",
    desc: "Diagnóstico profundo via WhatsApp para alinhar suas expectativas com as possibilidades reais."
  },
  {
    number: "02",
    title: "Planejamento Áureo",
    desc: "Mapeamento facial completo durante a consulta presencial, definindo pontos de luz e volume."
  },
  {
    number: "03",
    title: "O Despertar",
    desc: "Aplicação do Método Saldanha, revelando uma versão mais descansada, jovem e harmônica de si."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "O que você mais deseja transformar hoje?",
    options: ["Rugas e linhas de expressão", "Volume e contorno labial", "Formato e projeção do nariz", "Sinais de cansaço nas olheiras", "Estrutura e mandíbula"]
  },
  {
    id: 2,
    question: "Qual o seu maior medo em relação a procedimentos?",
    options: ["Ficar artificial", "Sentir dor", "Não ter o resultado esperado", "Investir e não durar"]
  },
  {
    id: 3,
    question: "Você prefere um resultado perceptível ou imperceptível?",
    options: ["Mudança notável e impactante", "Resultado extremamente sutil", "Equilíbrio entre ambos"]
  },
  {
    id: 4,
    question: "Como você conheceu o meu trabalho?",
    options: ["Instagram", "Indicação de amiga", "Pesquisa no Google", "Mentoria/Cursos"]
  }
];
