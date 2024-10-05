import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import QuizController from '../QuizController'
import { words } from '@/utils/tests/mockData'

const quizCreateFn = () => ({
  question: words[0].definition,
  answer: words[0],
  options: words.slice(0, 3),
})

describe('<QuizController/>', () => {
  it('displays a start button', () => {
    render(<QuizController allWords={words} favoritesMode={false} quizCreateFn={quizCreateFn} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders question and options after clicking on the start button', () => {
    render(<QuizController allWords={words} favoritesMode={false} quizCreateFn={quizCreateFn} />)

    fireEvent.click(screen.getByRole('button'))
    const quiz = quizCreateFn()

    expect(screen.getByText(quiz.question)).toBeInTheDocument()
    quiz.options.forEach(option => {
      expect(screen.getByText(option.word)).toBeInTheDocument()
    })
  })
})
