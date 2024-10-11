import Logo from './logo'
import SerachInput from './search-input'
import ButtonMenu from './button-menu'
import HeaderActions from './header-actions'

export default function Header() {
  return (
    <header className="flex justify-between border border-b-[var(--lines)] px-1 py-2 sm:px-2 md:py-5">
      <ButtonMenu />
      <Logo />
      <div className="hidden lg:flex">
        <SerachInput />
      </div>
      <div className="flex items-center gap-2">
        <HeaderActions />
      </div>
    </header>
  )
}
