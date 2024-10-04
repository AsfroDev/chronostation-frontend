"use server";

import { registerUser } from "@/services/auth";
import { UserResponse, RegisterCredentials } from "@/services/auth-types";
import { redirect } from "next/navigation";

export async function handleRegister(
  credentials: RegisterCredentials
): Promise<UserResponse> {
  try {
    await registerUser(credentials);
    redirect("/login");
  } catch (error) {
    throw error
  }
}
