'use client'

import { LogOut } from 'lucide-react'
import { handleLogout } from '../actions'
import SerachInput from '../components/search-input'
import CategoriesBar from '../components/categories-bar'

export default function Store() {
  const onclickLogout = async () => {
    await handleLogout()
  }

  return (
    <>
      <div className="mx-auto flex px-2 py-2 sm:w-3/4 lg:hidden">
        <SerachInput />
      </div>
      <div className="hidden sm:block">
        <CategoriesBar />
      </div>
      <button className="rounded__secondary_button" onClick={onclickLogout}>
        <LogOut size={15} className="mr-2 text-[var(--text-middle)]" />
        Logout
      </button>
    </>
  )
}
