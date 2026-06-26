import { z } from "zod";

export const cadastroSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Insira um e-mail corporativo válido" }),

  senha: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),

  cargo: z
    .string()
    .min(1, { message: "Selecione um cargo para continuar" }),
});

export type CadastroForm = z.infer<typeof cadastroSchema>;
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Insira um e-mail válido" }),

  senha: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export type LoginForm = z.infer<typeof loginSchema>;


