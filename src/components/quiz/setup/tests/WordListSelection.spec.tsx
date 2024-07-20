import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import WordListSelection from '../WordListSelection'

describe('<WordListSelection/>', () => {
  it('renders word list options', () => {
    render(<WordListSelection isFavoritesAvailable={true} onSelect={vi.fn()} onCancel={vi.fn()} />)

    expect(screen.getByText('favorites')).toBeInTheDocument()
    expect(screen.getByText('all')).toBeInTheDocument()
  })

  it('changes border color of selected box', () => {
    render(<WordListSelection isFavoritesAvailable={true} onSelect={vi.fn()} onCancel={vi.fn()} />)

    fireEvent.click(screen.getByText('all'))

    const allWordsButton = screen.getByText('all').closest('button')
    expect(allWordsButton).toHaveClass('border-green-200')

    fireEvent.click(screen.getByText('favorites'))
    expect(allWordsButton).not.toHaveClass('border-green-200')
    const favoritesWordsButton = screen.getByText('favorites').closest('button')
    expect(favoritesWordsButton).toHaveClass('border-green-200')
  })

  it('disables favorites button if favorites list is not available', () => {
    render(<WordListSelection isFavoritesAvailable={false} onSelect={vi.fn()} onCancel={vi.fn()} />)

    expect(screen.getByText('favorites').closest('button')).toBeDisabled()
  })

  it('shows a tooltip message if favorites list is not available', async () => {
    render(<WordListSelection isFavoritesAvailable={false} onSelect={vi.fn()} onCancel={vi.fn()} />)

    await userEvent.hover(screen.getByText('favorites'))

    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toBeInTheDocument()
    expect(tooltip).toHaveTextContent('Need at least 5 words!')
  })
})
