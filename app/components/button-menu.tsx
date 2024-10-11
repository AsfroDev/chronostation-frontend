import { Menu } from 'lucide-react'

export default function ButtonMenu() {
  return (
    <button className='rounded_button lg:hidden flex justify-center items-center'>
      <Menu size={30} className='stroke-1' />
    </button>
  )
}
