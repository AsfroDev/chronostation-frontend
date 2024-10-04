import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(4, 'Digite um nome verdadeiro'),
    email: z.string().email('Digite um email válido'),
    password: z.string().min(6, 'Digite uma senha com no mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword'],
  })

export type RegisterSchema = z.infer<typeof registerSchema>
