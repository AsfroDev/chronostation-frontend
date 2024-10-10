'use client'

import { LogOut } from 'lucide-react'
import { handleLogout } from '../actions'

export default function Store() {
  const onclickLogout = async () => {
    await handleLogout()
  }

  return (
    <div className='flex items-center justify-center py-56'>
      <button className="rounded_button" onClick={onclickLogout}>
        <LogOut size={15} className='mr-2 text-[var(--text-middle)]'/>
        Logout
      </button>
    </div>
  )
}
