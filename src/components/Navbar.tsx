import Link from 'next/link'

import { NavItem } from '@/app/layout'

function Navbar({ items }: { items: NavItem[] }) {
  return (
    <nav className="flex justify-between items-center h-10 px-4">
      <ul className="flex space-x-4 font-semibold text-sm">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
