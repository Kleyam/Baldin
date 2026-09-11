"use client";

import { ArrowLeft, ArrowRight, Code2, Lock, Mail, Rocket, User } from "lucide-react";
import Link from "next/link";
import { useRegisterForm } from "@/hooks/useRegisterForm";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function CadastroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    aoSalvar,
    isLoading,
    serverError,
  } = useRegisterForm();

  return (
    <main className="cadastro-shell">
      <div className="grid-atmosphere" />
      <ThemeToggle />

      <div className="cadastro-layout">
        <section className="cadastro-intro">
          <Link href="/" className="cadastro-brand" aria-label="Voltar para a página inicial">
            <span className="brand-mark"><img src="/baldinIcon.png" alt="Ícone da Baldin" className="brand-icon" /></span>
            <span>Baldin</span>
          </Link>
          <div className="cadastro-intro-copy">
            <p className="eyebrow">Seu próximo capítulo começa aqui</p>
            <h1>Entre para uma comunidade que <span>cresce junto.</span></h1>
            <p>A Baldin reúne pessoas interessadas em tecnologia, aprendizado e desenvolvimento profissional. Crie seu perfil e encontre seu espaço nessa jornada.</p>
            <div className="cadastro-signal"><span className="signal-dot" /><span>Mais de 500 pessoas já estão conectadas</span></div>
          </div>
        </section>

        <section className="cadastro-panel">
          <div className="cadastro-panel-heading">
            <div className="cadastro-icon"><Rocket size={23} /></div>
            <div><p className="eyebrow">Comece agora</p><h2>Junte-se à Baldin.</h2></div>
          </div>
          <p className="cadastro-panel-description">Crie sua conta para acessar a comunidade e começar a construir seu próximo capítulo.</p>

          <form onSubmit={handleSubmit(aoSalvar)} className="cadastro-form">
          <Input
            label="Nome Completo"
            icon={User}
            placeholder="Seu nome"
            registration={register("nome")}
            error={errors.nome?.message}
          />

          <Input
            label="E-mail Corporativo"
            icon={Mail}
            type="email"
            placeholder="dev@baldin.com"
            registration={register("email")}
            error={errors.email?.message}
          />

          <Select
            label="Função / Cargo"
            icon={Code2}
            registration={register("cargo")}
            error={errors.cargo?.message}
          >
            <option value="">Selecione sua função...</option>
            <option value="frontend">Desenvolvedor Frontend</option>
            <option value="backend">Desenvolvedor Backend</option>
            <option value="design">Designer</option>
          </Select>

          <Input
            label="Senha de Acesso"
            icon={Lock}
            type="password"
            placeholder="••••••••"
            registration={register("senha")}
            error={errors.senha?.message}
          />

          {serverError && (
            <p className="cadastro-error">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="cadastro-submit"
          >
            {isLoading ? "Cadastrando..." : "Confirmar cadastro"} <ArrowRight size={17} />
          </button>

          <p className="cadastro-login">
            Já tem acesso? <a href="/login">Entrar no painel</a>
          </p>
          </form>
          <Link href="/" className="cadastro-back"><ArrowLeft size={15} /> Voltar para a página inicial</Link>
        </section>
      </div>
    </main>
  );
}