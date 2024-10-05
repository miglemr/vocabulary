import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import QuizCard from '../QuizCard'
import { words } from '@/utils/tests/mockData'

const quiz = {
  question: words[0].definition,
  answer: words[0],
  options: words.slice(0, 3),
}

describe('<QuizCard/>', () => {
  it('renders question and options', () => {
    render(<QuizCard quiz={quiz} />)

    const question = screen.getByText(quiz.answer.definition)

    expect(question).toBeInTheDocument()
    quiz.options.forEach(option => {
      expect(screen.getByText(option.word)).toBeInTheDocument()
    })
  })

  it('changes border color of options when answer is selected', () => {
    render(<QuizCard quiz={quiz} />)

    fireEvent.click(screen.getByText(quiz.answer.word))

    const buttons = screen.getAllByRole('button', { name: 'Quiz option' })

    buttons.forEach(button => {
      if (button.textContent !== quiz.answer.word) {
        expect(button).toHaveClass('border-red-300')
      } else {
        expect(button).toHaveClass('border-green-300')
      }
    })
  })

  it('displays message "Correct!" if answer is correct', () => {
    render(<QuizCard quiz={quiz} />)

    fireEvent.click(screen.getByText(quiz.answer.word))

    expect(screen.getByText('Correct!')).toBeInTheDocument()
  })

  it('displays message "Incorrect" if answer is incorrect', () => {
    render(<QuizCard quiz={quiz} />)

    fireEvent.click(screen.getByText(quiz.options[2].word))

    expect(screen.getByText('Incorrect')).toBeInTheDocument()
  })
})
