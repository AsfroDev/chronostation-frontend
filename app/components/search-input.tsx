import { Search } from 'lucide-react'

export default function SerachInput() {
  return (
    <div className="flex h-14 items-center gap-2 rounded-full border border-[var(--lines-middle)] bg-white px-2 w-full lg:w-fit">
      <button
        type="button"
        className="transition-bg group rounded-full bg-[var(--background-middle)] px-4 py-2 duration-200 hover:bg-[var(--text-strong)]"
      >
        <Search size={25} className="stroke-1 group-hover:text-white" />
      </button>
      <input
        type="text"
        className="h-full w-full lg:w-72 rounded-full pr-2 outline-none placeholder:text-sm"
        placeholder="Encontre jogos, consoles, categorias..."
      />
    </div>
  )
}
