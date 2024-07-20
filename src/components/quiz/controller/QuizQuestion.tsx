import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { type QuizType } from '@/lib/createQuiz'

function QuizQuestion({ quiz }: { quiz: QuizType }) {
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  useEffect(() => {
    setAnswerSubmitted(false)
  }, [quiz])

  const getOptionButtonClasses = (option: string) => {
    const isCorrect = option === quiz.answer

    return classNames('border-4 rounded-xl p-2 shadow-sm', {
      'hover:border-violet-300 transition-all duration-200': !answerSubmitted,
      'border-green-300': answerSubmitted && isCorrect,
      'border-red-300': answerSubmitted && !isCorrect,
      'cursor-auto': answerSubmitted,
      disabled: answerSubmitted,
    })
  }

  return (
    <div className="flex flex-col">
      <p aria-label="quiz-question" className="text-center font-semibold">
        {quiz.question}
      </p>
      <div className="grid grid-cols-2 gap-4 gap-y-4 mt-10 text-sm sm:text">
        {quiz.options.map((option, index) => (
          <button
            aria-label="quiz-option"
            key={index}
            className={getOptionButtonClasses(option)}
            value={option}
            onClick={() => setAnswerSubmitted(true)}
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
