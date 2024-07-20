import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import QuizQuestion from '../QuizQuestion'

const quiz = {
  question: 'having complex patterns of colors',
  answer: 'kaleidoscopic',
  options: ['kaleidoscopic', 'obstreperous', 'cuisine', 'excessively'],
}

describe('<QuizQuestion/>', () => {
  it('renders question and options', () => {
    render(<QuizQuestion quiz={quiz} />)

    const question = screen.getByText('having complex patterns of colors')

    expect(question).toBeInTheDocument()
    quiz.options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })

  it('changes border color of options when answer is selected', () => {
    render(<QuizQuestion quiz={quiz} />)

    fireEvent.click(screen.getByText('kaleidoscopic'))

    quiz.options.forEach(option => {
      if (option !== quiz.answer) {
        expect(screen.getByText(option).closest('button')).toHaveClass('border-red-300')
      }
    })
    expect(screen.getByText('kaleidoscopic').closest('button')).toHaveClass('border-green-300')
  })
})
