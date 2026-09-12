import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authService } from '@/services/authService';
import { LoginForm, loginSchema } from '@/types/auth';

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  async function aoEntrar(data: LoginForm) {
    setIsLoading(true);
    setServerError(null);

    try {
      await authService.login({
        email: data.email,
        password: data.senha,
      });
      window.location.href = '/baldin';
    } catch (error: unknown) {
      const err = error as { response?: { data?: { detail?: string } } };
      const msg =
        err?.response?.data?.detail || 'Não foi possível entrar. Confira seus dados.';
      setServerError(msg);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    ...form,
    aoEntrar,
    isLoading,
    serverError,
  };
}
