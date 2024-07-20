import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Intro from '../Intro'

const mockQuizDetails = {
  title: 'Test Title',
  description: 'Test quiz description',
}

const mockNextClickFn = vi.fn()

describe('<Intro/>', () => {
  it('renders title and description of the quiz', () => {
    render(
      <Intro
        title={mockQuizDetails.title}
        description={mockQuizDetails.description}
        onNextClick={mockNextClickFn}
      />,
    )

    expect(screen.getByRole('heading')).toHaveTextContent(mockQuizDetails.title)
    expect(screen.getByRole('paragraph')).toHaveTextContent(mockQuizDetails.description)
  })

  it('calls nextClickFn on Next button click', () => {
    render(
      <Intro
        title={mockQuizDetails.title}
        description={mockQuizDetails.description}
        onNextClick={mockNextClickFn}
      />,
    )

    fireEvent.click(screen.getByRole('button'))

    expect(mockNextClickFn).toBeCalled()
  })
})
