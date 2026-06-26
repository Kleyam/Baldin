import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cadastroSchema, CadastroForm } from '@/types/auth';
import { authService } from '@/services/authService';
import { useState } from 'react';
import { isAxiosError } from 'axios';

interface UseRegisterFormProps {
  onSuccess?: (nome: string) => void;
}

export function useRegisterForm({ onSuccess }: UseRegisterFormProps = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
  });

  async function aoSalvar(data: CadastroForm) {
    setIsLoading(true);
    setServerError(null);

    try {
      await authService.register({
        full_name: data.nome,
        email: data.email,
        password: data.senha,
        cargo: data.cargo,
      });

      if (onSuccess) {
        onSuccess(data.nome);
      } else {
        alert(`Bem-vindo à Baldin Tech, ${data.nome}!`);
      }
    } catch (error: unknown) {
      let msg = 'Erro ao cadastrar. Tente novamente.';
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
