"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "./definitions";
import { handleLogin } from "./actions";

export default function Form() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await handleLogin({
        email: data.email,
        password: data.password,
      });
      setErrorMessage("");
    } catch {
      setErrorMessage("Usuário ou senha incorretos.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Mensagem de erro */}
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}

      {/* Campo de email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Campo de senha */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Senha
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Botão de submit */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Entrar
      </button>
    </form>
  );
}
