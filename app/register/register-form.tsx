'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterSchema } from './definitions'
import { handleRegister } from './actions'
import { Loader2 } from 'lucide-react'

export default function Form() {
  const [displayMsg, setDisplayMsg] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await handleRegister({
        email: data.email,
        password: data.password,
        name: data.name,
        loginProvider: 'Email',
      })
      setDisplayMsg('')
    } catch {
      setDisplayMsg('Não foi possível realizar o registro, no momento.')
    }
  }

  useEffect(() => {
    if (displayMsg) {
      const timer = setTimeout(() => setDisplayMsg(''), 6000)
      return () => clearTimeout(timer)
    }
  }, [displayMsg])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      {/* Mensagem de erro com animação */}
      <div
        className={`transform transition-all duration-500 ${
          displayMsg ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } rounded-lg bg-red-200 px-4 py-1 text-center text-sm text-red-500`}
      >
        {displayMsg}
      </div>

      {/* Campo de nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          type="name"
          {...register('name')}
          className={`input_default mt-1 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } shadow-sm`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>

      {/* Campo de email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`input_default mt-1 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } shadow-sm`}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      {/* Campo de senha */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Senha
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={`input_default mt-1 ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          } shadow-sm`}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Campo de confirmação de senha */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Confirme a Senha
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          className={`input_default mt-1 ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
          } shadow-sm`}
        />
        {errors.confirmPassword && (
          <span className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="flex w-full -translate-y-2 justify-start">
        <p className="text-sm hover:underline">
          Sua senha deve conter no mínimo seis digitos.
        </p>
      </div>

      {/* Botão de submit */}
      <button type="submit" className="primary_button" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          'Conectar'
        )}
      </button>
    </form>
  )
}
