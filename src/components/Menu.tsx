import Link from 'next/link'

import CustomSwipeableDrawer from './CustomSwipeableDrawer'

function Menu({ items }: { items: string[] }) {
  return (
    <CustomSwipeableDrawer>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={`/${item}`} className="text-transform: capitalize">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </CustomSwipeableDrawer>
  )
}

export default Menu
