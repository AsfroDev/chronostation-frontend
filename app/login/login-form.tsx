'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchema } from './definitions'
import { handleLogin } from './actions'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

export default function Form() {
  const [displayMsg, setDisplayMsg] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    try {
      await handleLogin({
        email: data.email,
        password: data.password,
      })
      setDisplayMsg('')
    } catch {
      setDisplayMsg('Usuário ou senha incorretos.')
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

      {/* Campo de email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="E-mail"
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
          placeholder="Senha"
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

      <div className="flex w-full -translate-y-2 justify-end">
        <Link href={'/forgot-password'} className="text-sm hover:underline">
          Esqueceu a senha?
        </Link>
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
