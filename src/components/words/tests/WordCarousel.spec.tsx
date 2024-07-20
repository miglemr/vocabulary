import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import WordCarousel from '../WordCarousel'
import { words } from '@/utils/tests/mockData'

describe('<WordCarousel/>', () => {
  it('renders word by initial index', () => {
    render(<WordCarousel words={words} initialIndex={2} onIndexChange={vi.fn()} />)

    expect(screen.getByRole('heading')).toHaveTextContent(words[2].word)
  })

  it('renders first word if no initial index was provided', () => {
    render(<WordCarousel words={words} onIndexChange={vi.fn()} />)

    expect(screen.getByRole('heading')).toHaveTextContent(words[0].word)
  })
})
