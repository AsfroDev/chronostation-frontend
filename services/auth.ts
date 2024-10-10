'use server'

import { cookies } from 'next/headers'

const API_URL = process.env.NEXT_PUBLIC_ENV_API

import {
  LoginCredentials,
  RegisterCredentials,
  UserResponse,
  User,
} from './auth-types'

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<UserResponse> => {
  const response = await fetch(API_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  const data: UserResponse = await response.json()

  const token = data.token.token
  await setToken(token)

  return data
}
export const registerUser = async (
  credentials: RegisterCredentials,
): Promise<UserResponse> => {
  const response = await fetch(API_URL + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  const data: UserResponse = await response.json()

  // const token = data.token.token
  // await setToken(token)

  return data
}

export const getUserData = (userResponse: UserResponse): User => {
  return userResponse.token.user
}

export const setToken = async (token: string) => {
  const cookieStore = cookies()
  cookieStore.set('token', token, {
    path: '/',
  })
}

export const getToken = async (): Promise<string | null> => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  return token ? token.value : null
}

export const isTokenValid = async (token: string | null) => {
  try {
    const response = await fetch(API_URL + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    if (response.status === 200) return true
    if (response.status === 401) return false

    return false
  } catch {
    return false
  }
}

export const clearToken = async () => {
  const cookieStore = cookies()
  cookieStore.delete('token')
}
