import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Digite um email válido'),
  password: z.string().min(6, 'Digite a senha inteira'),
});

export type LoginSchema = z.infer<typeof loginSchema>;