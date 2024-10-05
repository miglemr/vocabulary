import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Intro from '../Intro'

const mockQuizDetails = {
  title: 'Test Title',
  description: 'Test quiz description',
}

describe('<Intro/>', () => {
  it('renders title and description of the quiz', () => {
    render(<Intro title={mockQuizDetails.title} description={mockQuizDetails.description} />)

    expect(screen.getByRole('heading')).toHaveTextContent(mockQuizDetails.title)
    expect(screen.getByRole('paragraph')).toHaveTextContent(mockQuizDetails.description)
  })
})
