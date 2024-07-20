import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Menu from '../Menu'
import { NavItem } from '@/app/layout'

const items: NavItem[] = [
  { title: 'Home', link: '/', imgSrc: '/home-icon.png' },
  { title: 'About', link: '/about', imgSrc: '/about-icon.png' },
]

describe('<Menu/>', () => {
  it('renders menu items', () => {
    render(<Menu items={items} />)

    items.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })
})
