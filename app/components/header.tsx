import { UserRound } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import Logo from './logo'
import SerachInput from './search-input'
import ButtonMenu from './button-menu'

export default function Header() {
  return (
    <header className="flex justify-between border border-b-[var(--lines)] px-4 py-5 sm:px-8">
      <ButtonMenu />
      <Logo />
      <div className="hidden lg:flex">
        <SerachInput />
      </div>
      <div className="flex">
        <button className="circle_button mx-2 hidden md:block">
          <UserRound className="stroke-1 text-[var(--text_soft)]" size={30} />
        </button>
        <button className="circle_button mx-2">
          <ShoppingCart
            className="stroke-1 text-[var(--text_soft)]"
            size={30}
          />
        </button>
      </div>
    </header>
  )
}
