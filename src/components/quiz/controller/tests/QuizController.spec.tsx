import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import QuizController from '../QuizController'
import { words } from '@/utils/tests/mockData'

const quizQuestionWords = words.slice(4)

const quizCreateFn = () => ({
  question: 'wicked or criminal',
  answer: 'nefarious',
  options: ['garrulous', 'lachrymose', 'nefarious', 'deleterious'],
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

    const quizQuestion = quizCreateFn()

    expect(screen.getByText(quizQuestion.question)).toBeInTheDocument()
    quizQuestion.options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })

  it('renders question and options if quizQuestionWords prop is not defined', () => {
    render(<QuizController allWords={words} quizCreateFn={quizCreateFn} />)

    const quizQuestion = quizCreateFn()

    expect(screen.getByText(quizQuestion.question)).toBeInTheDocument()
    quizQuestion.options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })
})
