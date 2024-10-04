'use server'

import { redirect } from 'next/navigation'
import { clearToken } from '@/services/auth'

export async function handleLogout(){
  try {
    await clearToken()
    redirect('/login')
  } catch (error) {
    throw error
  }
}
