
import React from 'react';
import { BonusItem, FAQItem } from './types';
import { BookOpen, ShieldCheck, Printer, Smartphone, Users, Sparkles, Heart, Clock, Zap } from 'lucide-react';

export const BONUSES: BonusItem[] = [
  { id: '1', name: 'Bíblia Infantil', imageUrl: 'https://iili.io/fPxdhf2.png' },
  { id: '2', name: 'Bobbie Goods Cristão', imageUrl: 'https://iili.io/fPxdVV4.png' },
  { id: '3', name: 'Catequese: Os 7 Sacramentos', imageUrl: 'https://iili.io/fPMsMHG.png' },
  { id: '4', name: 'Catequese: Os 10 Mandamentos', imageUrl: 'https://iili.io/fPM6URR.png' },
];

export const BONUS_MATERIALS: BonusItem[] = [
  { id: 'b1', name: 'Quebra-cabeça para catequese', imageUrl: 'https://iili.io/fPVJJlR.png' },
  { id: 'b2', name: 'Adão e Eva para catequese', imageUrl: 'https://iili.io/fPGoeln.png' },
  { id: 'b3', name: 'Moisés para catequese', imageUrl: 'https://iili.io/fPxdeRe.png' },
  { id: 'b4', name: 'Caderno de Versículos Infantil', imageUrl: 'https://iili.io/fPGuttf.png' },
];

export const TEXT_TESTIMONIALS = [
  {
    name: "Ana Paula",
    role: "Catequista há 8 anos",
    content: "Minhas aulas mudaram completamente! As crianças ficam hipnotizadas com os quadrinhos e eu finalmente parei de sofrer criando tudo do zero."
  },
  {
    name: "Maria Luiza",
    role: "Mãe e Catequista",
    content: "Uma benção na minha vida. O conteúdo é tão claro que os pequenos aprendem brincando. A organização desse kit me deu uma paz enorme."
  },
  {
    name: "Cláudia Souza",
    role: "Catequista Paroquial",
    content: "O brilho nos olhos das crianças quando veem as atividades é emocionante. É o melhor investimento que já fiz para minha missão."
  },
  {
    name: "Regiane Alencar",
    role: "Catequista de Pré-Eucaristia",
    content: "Material impecável! O alívio de ter tudo pronto para imprimir não tem preço. Minha catequese agora é muito mais leve e alegre."
  }
];

export const BENEFITS = [
  {
    title: "Atenção Total",
    description: "Os quadrinhos prendem a atenção das crianças do início ao fim, facilitando o aprendizado.",
    icon: <Sparkles />
  },
  {
    title: "Pronto para Uso",
    description: "Economize horas de planejamento com materiais que você só precisa baixar e imprimir.",
    icon: <Printer />
  },
  {
    title: "Linguagem Clara",
    description: "Termos complexos explicados de forma simples e visual para a cabecinha dos pequenos.",
    icon: <Heart />
  },
  {
    title: "Mais Engajamento",
    description: "As crianças participam mais das aulas e ficam ansiosas pelo próximo encontro.",
    icon: <Users />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "O material é digital ou físico?",
    answer: "O material é 100% digital em formato PDF de alta qualidade. Você recebe o acesso no seu e-mail imediatamente após a confirmação do pagamento."
  },
  {
    question: "Como vou receber o material?",
    answer: "Assim que sua compra for aprovada, você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva para baixar todos os arquivos."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! Você pode imprimir o material para todos os seus alunos e usar em quantas turmas quiser, para sempre."
  },
  {
    question: "Funciona para qual idade?",
    answer: "O material foi desenhado para crianças na pré-catequese e primeira eucaristia, geralmente entre 6 e 11 anos."
  },
  {
    question: "Tenho garantia?",
    answer: "Sim, você tem 7 dias de garantia incondicional. Se não gostar do material por qualquer motivo, devolvemos seu dinheiro."
  }
];
