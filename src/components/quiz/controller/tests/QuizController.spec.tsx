import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import QuizController from '../QuizController'
import { words } from '@/utils/tests/mockData'

const quizQuestionWords = words.slice(4)

const quizCreateFn = () => ({
  question: words[0].definition,
  answer: words[0],
  options: words.slice(0, 3),
})

describe('<QuizController/>', () => {
  it('renders question and options', () => {
    render(
      <QuizController
        allWords={words}
        quizQuestionWords={quizQuestionWords}
        quizCreateFn={quizCreateFn}
      />,
    )

    const quiz = quizCreateFn()

    expect(screen.getByText(quiz.question)).toBeInTheDocument()
    quiz.options.forEach(option => {
      expect(screen.getByText(option.word)).toBeInTheDocument()
    })
  })

  it('renders question and options if quizQuestionWords prop is not defined', () => {
    render(<QuizController allWords={words} quizCreateFn={quizCreateFn} />)

    const quiz = quizCreateFn()

    expect(screen.getByText(quiz.question)).toBeInTheDocument()
    quiz.options.forEach(option => {
      expect(screen.getByText(option.word)).toBeInTheDocument()
    })
  })
})
