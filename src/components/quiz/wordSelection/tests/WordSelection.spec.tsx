import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import WordSelection from '../WordSelection'

describe('<WordSelection/>', () => {
  it('renders word list options', () => {
    render(<WordSelection isFavoritesAvailable={true} onSelect={vi.fn()} />)

    expect(screen.getByText('favorites')).toBeInTheDocument()
    expect(screen.getByText('all')).toBeInTheDocument()
  })

  it('changes border color of selected box', () => {
    render(<WordSelection isFavoritesAvailable={true} onSelect={vi.fn()} />)

    fireEvent.click(screen.getByText('all'))

    const allWordsButton = screen.getByText('all').closest('button')
    expect(allWordsButton).toHaveClass('border-green-300')

    fireEvent.click(screen.getByText('favorites'))
    expect(allWordsButton).not.toHaveClass('border-green-300')
    const favoritesWordsButton = screen.getByText('favorites').closest('button')
    expect(favoritesWordsButton).toHaveClass('border-green-300')
  })

  it('disables favorites button if favorites list is not available', () => {
    render(<WordSelection isFavoritesAvailable={false} onSelect={vi.fn()} />)

    expect(screen.getByText('favorites').closest('button')).toBeDisabled()
  })

  it('shows a tooltip message if favorites list is not available', async () => {
    render(<WordSelection isFavoritesAvailable={false} onSelect={vi.fn()} />)

    await userEvent.hover(screen.getByText('favorites'))

    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveTextContent('Need at least 5 words!')
  })
})
