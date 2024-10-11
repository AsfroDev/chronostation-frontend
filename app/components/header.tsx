import { UserRound } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import Logo from './logo'
import SerachInput from './search-input'
import ButtonMenu from './button-menu'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between border border-b-[var(--lines)] px-1 py-2 sm:px-2 md:py-5">
      <ButtonMenu />
      <Logo />
      <div className="hidden lg:flex">
        <SerachInput />
      </div>
      <div className="flex items-center gap-2">
        <Link href={'/login'} className="rounded_button hidden md:flex">
          <UserRound className="stroke-1 text-[var(--text_soft)]" size={30} />
          <div className="flex flex-col items-start -space-y-1">
            <h3 className="text-sm">Login/Cadastrar</h3>
            <p className="text-xs font-bold">Pedidos e Conta</p>
          </div>
        </Link>
        <button type="button" className="rounded_button flex">
          <ShoppingCart
            className="stroke-1 text-[var(--text_soft)]"
            size={28}
          />
        </button>
      </div>
    </header>
  )
}
