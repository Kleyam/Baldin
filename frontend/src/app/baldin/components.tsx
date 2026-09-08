"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, BrainCircuit, CheckCircle2, Compass, Menu, MoveUpRight, Plus, Quote, Radar, Rocket, Sparkles, UsersRound, X } from "lucide-react";
import { communityPoints, faqs, features, journeySteps, navigation, pulseItems } from "./data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="baldin-header">
      <nav className="baldin-container nav-content" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label="Baldin, início"><span className="brand-mark"><Rocket size={19} /></span><span>Baldin</span></a>
        <div className="desktop-nav">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <div className="nav-actions"><a href="#jornada" className="button button-small hide-mobile">Começar agora <ArrowUpRight size={16} /></a><button className="icon-button mobile-only" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </nav>
      {menuOpen && <div className="mobile-nav">{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>}
    </header>
  );
}

export function Hero() {
  return <section id="inicio" className="hero-section"><div className="grid-atmosphere" /><div className="baldin-container hero-grid">
    <div className="hero-copy reveal"><p className="eyebrow">A próxima fase da sua jornada</p><h1>Sua vida <span>tech</span> em um só lugar.</h1><p className="hero-description">Aprenda no seu ritmo, encontre sua comunidade e transforme curiosidade em movimento. A Baldin reúne tudo que você precisa para evoluir na tecnologia.</p><div className="hero-actions"><a href="#jornada" className="button">Entrar na comunidade <ArrowRight size={17} /></a><a href="#mapa" className="button button-ghost">Explorar a Baldin <Compass size={17} /></a></div><div className="hero-proof"><span className="signal-dot" /><span>Uma comunidade em movimento</span><div className="avatar-stack"><i /><i /><i /><b>+</b></div></div></div>
    <div className="profile-window reveal-delay"><div className="window-bar"><span><i /><i /><i /></span><code>baldin.profile</code></div><div className="profile-image"><div className="profile-overlay" /><div className="profile-card"><p className="eyebrow">Seu próximo capítulo</p><strong>Aprender. Criar. Conectar.</strong><div className="progress"><span /></div><small>72% de uma jornada que está só começando</small></div></div></div>
  </div></section>;
}

export function Ticker() {
  return <div className="ticker"><div className="ticker-track"><span>APRENDIZADO CONTÍNUO</span><Sparkles size={15} /><span>COMUNIDADE REAL</span><Sparkles size={15} /><span className="cyan-text">PROJETOS QUE MOVEM</span><Sparkles size={15} /><span>FUTURO EM CONSTRUÇÃO</span><Sparkles size={15} /></div></div>;
}

export function FeaturesSection() {
  return <section id="recursos" className="baldin-section"><div className="baldin-container"><SectionHeading eyebrow="Tudo em um só lugar" title={<>Ferramentas para <span>destravar</span> seu potencial.</>} description="Uma experiência criada para tornar a evolução mais prática, conectada e possível." /><div className="feature-grid">{features.map(({ icon: Icon, index, title, description }) => <article className="feature-card" key={title}><span className="feature-icon"><Icon size={21} /></span><small>{index}</small><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{description}</p></div>;
}

export function EvolutionSection() {
  return <section id="mapa" className="baldin-section section-bottom"><div className="baldin-container evolution"><div className="evolution-main"><p className="eyebrow">Seu mapa de evolução</p><h2>Você não precisa descobrir o caminho <span>sozinho.</span></h2><p className="muted-copy">Acompanhe possibilidades, reconheça seus avanços e encontre novas direções com uma comunidade que entende a jornada.</p><div className="stats-grid"><div><BrainCircuit size={20} /><strong>∞</strong><small>possibilidades</small></div><div><UsersRound size={20} /><strong>+1k</strong><small>pessoas conectadas</small></div><div><Radar size={20} /><strong>24/7</strong><small>conteúdo em movimento</small></div></div></div><aside className="pulse-panel"><p className="eyebrow">Pulso da comunidade</p><h3>O que está acontecendo agora</h3>{pulseItems.map(([title, text, tag]) => <div className="pulse-item" key={title}><div><strong>{title}</strong><small>{text}</small></div><span>{tag}</span></div>)}</aside></div></section>;
}

export function CommunitySection() {
  return <section id="comunidade" className="baldin-section section-bottom"><div className="baldin-container community"><div className="community-visual"><div className="visual-label"><p className="eyebrow">Gente que faz acontecer</p><strong>Ideias ganham força quando encontram outras ideias.</strong></div></div><div className="community-copy"><p className="eyebrow">Mais que conteúdo</p><h2>Um lugar para <span>pertencer</span> enquanto você cresce.</h2><p className="large-copy">Aqui, cada pergunta pode abrir uma porta. Cada projeto pode aproximar pessoas. E cada pequeno avanço merece ser reconhecido.</p>{communityPoints.map(point => <p className="check-line" key={point}><CheckCircle2 size={18} />{point}</p>)}</div></div></section>;
}

export function JourneySection() {
  return <section id="jornada" className="baldin-section section-bottom"><div className="baldin-container"><SectionHeading eyebrow="Comece de onde estiver" title={<>Uma jornada com espaço para <span>você.</span></>} description="Não existe um jeito único de evoluir. Existe o próximo passo que faz sentido para você." /><div className="steps-grid">{journeySteps.map(([number, title, text]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div><div className="quotes-grid"><blockquote><Quote size={22} /><p>“A tecnologia ficou menos solitária quando encontrei pessoas com o mesmo brilho nos olhos.”</p><footer>Marina, produto e dados</footer></blockquote><blockquote><Quote size={22} /><p>“A Baldin me deu clareza para transformar o que eu estudava em algo que eu queria construir.”</p><footer>Caio, desenvolvimento</footer></blockquote></div></div></section>;
}

export function FaqSection() {
  return <section id="faq" className="baldin-section faq-section"><div className="baldin-container faq-container"><p className="eyebrow">Ainda ficou alguma dúvida?</p><h2>Perguntas <span>frequentes.</span></h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} /></summary><p>{answer}</p></details>)}</div></div></section>;
}

export function CallToAction() {
  return <section className="baldin-section"><div className="baldin-container cta-banner"><p className="eyebrow">Seu próximo passo começa agora</p><h2>O futuro não precisa esperar.</h2><p>Traga sua curiosidade. A gente encontra o caminho junto.</p><a href="#inicio" className="button button-light">Quero fazer parte <MoveUpRight size={17} /></a></div></section>;
}

export function Footer() {
  return <footer className="baldin-footer"><div className="baldin-container footer-content"><div className="brand"><span className="brand-mark"><Rocket size={19} /></span><span>Baldin</span></div><p>Uma comunidade para quem quer construir o próximo capítulo da tecnologia.</p><div className="footer-links">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><small>© 2026 Baldin. Feito para quem está em movimento.</small></div></footer>;
}
