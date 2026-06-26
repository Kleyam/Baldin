import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginForm } from '@/types/auth';
import { authService } from '@/services/authService';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';

interface UseLoginFormProps {
  onSuccess?: () => void;
}

export function useLoginForm({ onSuccess }: UseLoginFormProps = {}) {
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
      
      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/');
      }
    } catch (error: unknown) {
      let msg = 'E-mail ou senha incorretos.';
      if (isAxiosError(error) && error.response?.data?.detail) {
        msg = error.response.data.detail;
      }
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
