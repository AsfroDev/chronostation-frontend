"use server";

import { loginUser } from "@/services/auth";
import { UserResponse, LoginCredentials } from "@/services/auth-types";
import { redirect } from "next/navigation";

export async function handleLogin(
  credentials: LoginCredentials
): Promise<UserResponse> {
  try {
    await loginUser(credentials);
    redirect("/");
  } catch (error) {
    throw error
  }
}
