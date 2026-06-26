"use client";

import { Mail, Lock, Rocket } from "lucide-react";
import { useLoginForm } from "@/hooks/useLoginForm";
import { Input } from "@/components/ui/Input";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    aoSalvar,
    isLoading,
    serverError,
  } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <ThemeToggle />

      <div className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl p-6 md:p-10 border transition-colors duration-300 bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="text-center mb-8 md:mb-10">
          <div className="flex justify-center mb-4">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-lg transition-colors bg-violet-500 shadow-violet-500/30 dark:bg-violet-600 dark:shadow-violet-600/50">
              <Rocket className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Bem-vindo de volta</h1>
          <p className="mt-2 text-sm md:text-base text-zinc-500 dark:text-zinc-400">
            Entre na sua conta para acessar as reuniões.
          </p>
        </div>

        <form onSubmit={handleSubmit(aoSalvar)} className="space-y-5 md:space-y-6">
          <Input
            label="E-mail Corporativo"
            icon={Mail}
            type="email"
            placeholder="dev@baldin.com"
            registration={register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Senha de Acesso"
            icon={Lock}
            type="password"
            placeholder="••••••••"
            registration={register("senha")}
            error={errors.senha?.message}
          />

          {serverError && (
            <p className="text-sm text-red-500 text-center">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full font-bold py-3 rounded-lg shadow-lg transition-all active:scale-95 text-white
              bg-violet-500 hover:bg-violet-600 shadow-violet-500/20
              dark:bg-violet-600 dark:hover:bg-violet-700 dark:shadow-violet-900/20
              disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-center text-sm mt-4 text-zinc-600 dark:text-zinc-500">
            Ainda não tem acesso? <a href="/cadastro" className="hover:underline text-violet-500 dark:text-violet-400">Criar uma conta</a>
          </p>
        </form>
      </div>
    </div>
  );
}
