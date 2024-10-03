"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_ENV_API;

import { LoginCredentials, UserResponse, User } from "./auth-types";

export const loginUser = async (
  credentials: LoginCredentials
): Promise<UserResponse> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data: UserResponse = await response.json();

  const token = data.token.token;
  await setToken(token);

  return data;
};

export const getUserData = (userResponse: UserResponse): User => {
  return userResponse.token.user;
};

export const setToken = async (token: string) => {
  const cookieStore = cookies();
  cookieStore.set("token", token, {
    path: "/",
  });
};

export const getToken = async (): Promise<string | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return token ? token.value : null;
};

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  return true;
};

export const clearToken = async () => {
  const cookieStore = cookies();
  cookieStore.delete("token");
};
