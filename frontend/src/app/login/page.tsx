"use client";

import { ArrowLeft, ArrowRight, Lock, LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLoginForm } from "@/hooks/useLoginForm";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    aoEntrar,
    isLoading,
    serverError,
  } = useLoginForm();

  return (
    <main className="cadastro-shell login-shell">
      <div className="grid-atmosphere" />
      <ThemeToggle />

      <div className="cadastro-layout login-layout">
        <section className="cadastro-intro login-intro">
          <Link href="/" className="cadastro-brand" aria-label="Voltar para a página inicial">
            <span className="brand-mark"><img src="/baldinIcon.png" alt="Ícone da Baldin" className="brand-icon" /></span>
            <span>Baldin</span>
          </Link>
          <div className="cadastro-intro-copy">
            <p className="eyebrow">Bom te ver por aqui</p>
            <h1>Seu próximo capítulo está <span>esperando.</span></h1>
            <p>Retome sua jornada na Baldin, acompanhe a comunidade e continue transformando curiosidade em movimento.</p>
            <div className="cadastro-signal"><span className="signal-dot" /><span>Aprender. Criar. Conectar.</span></div>
          </div>
        </section>

        <section className="cadastro-panel login-panel">
          <div className="cadastro-panel-heading">
            <div className="cadastro-icon"><LogIn size={23} /></div>
            <div><p className="eyebrow">Acesse sua conta</p><h2>Bem-vindo de volta.</h2></div>
          </div>
          <p className="cadastro-panel-description">Entre para continuar de onde parou e encontrar novas possibilidades na comunidade.</p>

          <form onSubmit={handleSubmit(aoEntrar)} className="cadastro-form">
            <Input
              label="E-mail"
              icon={Mail}
              type="email"
              placeholder="voce@exemplo.com"
              registration={register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Senha"
              icon={Lock}
              type="password"
              placeholder="Digite sua senha"
              registration={register("senha")}
              error={errors.senha?.message}
            />

            {serverError && <p className="cadastro-error">{serverError}</p>}

            <button type="submit" disabled={isLoading} className="cadastro-submit">
              {isLoading ? "Entrando..." : "Entrar na Baldin"} <ArrowRight size={17} />
            </button>

            <p className="cadastro-login">
              Ainda não faz parte? <Link href="/cadastro">Criar minha conta</Link>
            </p>
          </form>
          <Link href="/" className="cadastro-back"><ArrowLeft size={15} /> Voltar para a página inicial</Link>
        </section>
      </div>
    </main>
  );
}
