import Link from 'next/link'

import CustomSwipeableDrawer from './CustomSwipeableDrawer'

import { NavItem } from '@/app/layout'

function Menu({ items }: { items: NavItem[] }) {
  return (
    <CustomSwipeableDrawer>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </CustomSwipeableDrawer>
  )
}

export default Menu
