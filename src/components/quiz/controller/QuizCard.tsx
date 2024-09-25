import React, { useState, useEffect } from 'react'

import { type QuizType } from '@/lib/createQuiz'
import QuizOption from './QuizOption'

function QuizCard({ quiz }: { quiz: QuizType }) {
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    setAnswerSubmitted(false)
    setIsCorrect(null)
  }, [quiz])

  const handleOptionClick = (isCorrect: boolean) => {
    setAnswerSubmitted(true)

    isCorrect ? setIsCorrect(true) : setIsCorrect(false)
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
      <p aria-label="Quiz question" className="text-center font-semibold">
        {quiz.question}
      </p>
      <div className="grid grid-cols-2 gap-4 gap-y-4 mt-10 text-sm">
        {quiz.options.map(option => {
          const isCorrect = option.id === quiz.answer.id
          return (
            <QuizOption
              key={option.id}
              option={option}
              isCorrect={isCorrect}
              onClick={() => handleOptionClick(isCorrect)}
              answerSubmitted={answerSubmitted}
            />
          )
        })}
      </div>
    </div>
  )
}

export default QuizCard
