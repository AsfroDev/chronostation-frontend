"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "./definitions";
import { handleLogin } from "./actions";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Form() {
  const [displayMsg, setDisplayMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await handleLogin({
        email: data.email,
        password: data.password,
      });
      setDisplayMsg("");
    } catch {
      setDisplayMsg("Usuário ou senha incorretos.");
    }
  };

  useEffect(() => {
    if (displayMsg) {
      const timer = setTimeout(() => setDisplayMsg(""), 6000);
      return () => clearTimeout(timer);
    }
  }, [displayMsg]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
      {/* Mensagem de erro com animação */}
      <div
        className={`transition-all duration-500 transform ${
          displayMsg ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } bg-red-200 text-red-500 text-sm px-4 py-1 text-center rounded-lg`}
      >
        {displayMsg}
      </div>

      {/* Campo de email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`mt-1 input_default ${
            errors.email ? "border-red-500" : "border-gray-300"
          } shadow-sm`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
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
          {...register("password")}
          className={`mt-1 input_default ${
            errors.password ? "border-red-500" : "border-gray-300"
          } shadow-sm`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      
      <div className="w-full flex justify-end -translate-y-2">
        <Link href={"/forgot-password"} className="hover:underline text-sm">
          Esqueceu a senha?
        </Link>
      </div>
      
      {/* Botão de submit */}
      <button
        type="submit"
        className="primary_button"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin h-6 w-6" />
        ) : (
          "Conectar"
        )}
      </button>
    </form>
  );
}
