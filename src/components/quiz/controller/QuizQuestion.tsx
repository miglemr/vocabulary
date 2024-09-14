import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { type QuizType } from '@/lib/createQuiz'

function QuizQuestion({ quiz }: { quiz: QuizType }) {
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    setAnswerSubmitted(false)
    setIsCorrect(null)
  }, [quiz])

  const getOptionButtonClasses = (option: string) => {
    const isCorrect = option === quiz.answer

    return classNames('border-4 rounded-xl p-2 shadow-sm', {
      'hover:border-dark-pink transition-all duration-200': !answerSubmitted,
      'border-green-300': answerSubmitted && isCorrect,
      'border-red-300': answerSubmitted && !isCorrect,
      'cursor-auto': answerSubmitted,
      disabled: answerSubmitted,
    })
  }

  const handleAnswerClick = (option: string) => {
    setAnswerSubmitted(true)

    if (option === quiz.answer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="h-10 mb-5 flex items-center justify-center">
        {isCorrect === null ? null : isCorrect ? (
          <div className="bg-green-300/10 py-2 px-4 rounded-md text-green-900">Correct!</div>
        ) : (
          <div className="bg-red-300/10 py-2 px-4 rounded-md text-red-900">Incorrect</div>
        )}
      </div>
      <p aria-label="quiz-question" className="text-center font-semibold">
        {quiz.question}
      </p>
      <div className="grid grid-cols-2 gap-4 gap-y-4 mt-10 text-sm">
        {quiz.options.map((option, index) => (
          <button
            aria-label="quiz-option"
            key={index}
            className={getOptionButtonClasses(option)}
            value={option}
            onClick={() => handleAnswerClick(option)}
          >
            <div>
              <p>{option}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestion
