import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginForm } from '@/types/auth';
import { authService } from '@/services/authService';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  async function aoSalvar(data: LoginForm) {
    setIsLoading(true);
    setServerError(null);

    try {
      await authService.login({
        email: data.email,
        password: data.senha,
      });
      
      router.push('/');
    } catch (error: unknown) {
      const err = error as { response?: { data?: { detail?: string } } };
      const msg =
        err?.response?.data?.detail || 'E-mail ou senha incorretos.';
      setServerError(msg);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    ...form,
    aoSalvar,
    isLoading,
    serverError,
  };
}
