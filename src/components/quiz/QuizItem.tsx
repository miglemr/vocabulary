import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { type Quiz } from '@/lib/createQuiz'

function QuizItem({ quiz }: { quiz: Quiz }) {
  const [answerSubmitted, setAnswerSubmitted] = useState(false)

  useEffect(() => {
    setAnswerSubmitted(false)
  }, [quiz])

  const getOptionButtonClasses = (option: string) => {
    const isCorrect = option === quiz.answer

    return classNames('border-2 rounded-xl p-2', {
      'hover:border-sky-300': !answerSubmitted,
      'border-green-300': answerSubmitted && isCorrect,
      'border-red-300': answerSubmitted && !isCorrect,
      'cursor-auto': answerSubmitted,
      disabled: answerSubmitted,
    })
  }

  return (
    <div className="flex flex-col">
      <p className="text-center">{quiz.question}</p>
      <div className="grid grid-cols-2 gap-4 gap-y-4 mt-10">
        {quiz.options.map((option, index) => (
          <button
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

export default QuizItem
