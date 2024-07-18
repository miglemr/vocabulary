import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import CustomSwipeableDrawer from '@/components/CustomSwipeableDrawer'

import MenuItem from './MenuItem'
import { type NavItem } from '@/app/layout'

function Menu({ items }: { items: NavItem[] }) {
  return (
    <CustomSwipeableDrawer icon={<MenuRoundedIcon fontSize="small" />}>
      <nav className="flex justify-center">
        <ul className="grid grid-cols-2 gap-6">
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </CustomSwipeableDrawer>
  )
}

export default Menu
