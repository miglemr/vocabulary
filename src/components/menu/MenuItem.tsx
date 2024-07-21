import Link from 'next/link'
import Image from 'next/image'

import { type NavItem } from '@/app/layout'

function MenuItem({ item }: { item: NavItem }) {
  return (
    <li className="flex flex-col items-center justify-center w-28 h-28 border rounded-md shadow-sm">
      <Link href={item.link}>
        <div className="flex flex-col items-center space-y-3">
          <p className="text-xs text-center font-semibold capitalize">{item.title}</p>
          <Image src={item.imgSrc} alt={item.title} height={50} width={50} unoptimized={true} />
        </div>
      </Link>
    </li>
  )
}
export default MenuItem
