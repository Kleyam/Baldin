import type { LucideIcon } from "lucide-react";
import { CalendarDays, Code2, MessageSquareMore, Newspaper } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
};

export const navigation = [
  ["Recursos", "#recursos"],
  ["Mapa de evolução", "#mapa"],
  ["Comunidade", "#comunidade"],
  ["FAQ", "#faq"],
] as const;

export const features: Feature[] = [
  { icon: Code2, index: "01", title: "Desafios práticos", description: "Construa projetos reais e transforme estudo em portfólio." },
  { icon: MessageSquareMore, index: "02", title: "Feed inteligente", description: "Troque ideias, dúvidas e descobertas com quem está evoluindo." },
  { icon: CalendarDays, index: "03", title: "Eventos ao vivo", description: "Encontre encontros, workshops e oportunidades para participar." },
  { icon: Newspaper, index: "04", title: "Radar tech", description: "Conteúdo selecionado para você acompanhar o que importa." },
];

export const faqs = [
  ["O que é a Baldin?", "A Baldin é uma comunidade para pessoas que querem aprender, criar e crescer na tecnologia em conjunto."],
  ["Preciso já trabalhar com tecnologia?", "Não. A comunidade foi pensada para diferentes momentos da jornada, do primeiro projeto à transição de carreira."],
  ["Como posso participar?", "Crie seu perfil, explore os conteúdos e escolha uma conversa, desafio ou evento para começar."],
] as const;

export const communityPoints = [
  "Aprenda com experiências reais, não só com teoria.",
  "Construa conexões que continuam além da tela.",
  "Encontre espaço para testar, errar e tentar de novo.",
];

export const journeySteps = [
  ["01", "Chegue com curiosidade", "Explore temas, pessoas e possibilidades sem precisar ter todas as respostas."],
  ["02", "Coloque a mão na massa", "Escolha um desafio, compartilhe uma ideia e transforme intenção em prática."],
  ["03", "Evolua em comunidade", "Celebre avanços, peça ajuda e ajude outras pessoas a avançarem também."],
] as const;

export const pulseItems = [
  ["IA aplicada", "Conversas e projetos em alta", "EM ALTA"],
  ["Portfolio review", "Encontro ao vivo nesta semana", "AO VIVO"],
  ["Trilha de dados", "Nova jornada disponível", "NOVO"],
] as const;
