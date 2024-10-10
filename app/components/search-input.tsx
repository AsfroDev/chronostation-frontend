import { Search } from 'lucide-react'

export default function SerachInput() {
  return (
    <div className="border-[var(--lines-middle)] flex items-center gap-2 rounded-full border bg-white px-3 h-18">
      <Search size={25} className="stroke-1" />
      <input type="text" className="outline-none placeholder:text-sm w-72" placeholder='Encontre jogos, consoles, categorias...' />
    </div>
  )
}
