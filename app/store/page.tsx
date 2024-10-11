'use client'

import { LogOut } from 'lucide-react'
import { handleLogout } from '../actions'
import SerachInput from '../components/search-input'

export default function Store() {
  const onclickLogout = async () => {
    await handleLogout()
  }

  return (
    <div>
      <div className="flex lg:hidden px-2 py-2 sm:w-3/4 mx-auto">
        <SerachInput />
      </div>
      <button className="rounded__secondary_button" onClick={onclickLogout}>
        <LogOut size={15} className="mr-2 text-[var(--text-middle)]" />
        Logout
      </button>
    </div>
  )
}
