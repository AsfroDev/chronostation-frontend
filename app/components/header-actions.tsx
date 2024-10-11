import { ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'

export default function HeaderActions() {
  return (
    <>
      <Link href={'/login'} className="rounded_button hidden md:flex">
        <UserRound className="stroke-1 text-[var(--text_soft)]" size={30} />
        <div className="flex flex-col items-start -space-y-1">
          <h3 className="text-sm">Login/Cadastrar</h3>
          <p className="text-xs font-bold">Pedidos e Conta</p>
        </div>
      </Link>
      <button type="button" className="rounded_button flex relative">
        <ShoppingCart className="stroke-1 text-[var(--text_soft)]" size={28} />
        <div className="hidden flex-col items-start -space-y-1 sm:flex">
          <h3 className="text-sm">Carrinho</h3>
          <p className="text-xs font-bold">0 items</p>
        </div>
        <div className='bg-[var(--text-soft)] px-2 py-1 rounded-full aspect-square absolute left-9 top-5 sm:hidden'>
            <p className='text-xs text-white'>0</p>
        </div>
      </button>
    </>
  )
}
