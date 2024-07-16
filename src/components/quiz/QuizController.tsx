import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'

import { Word } from '@prisma/client'

import QuizItem from './QuizItem'

import { type Quiz } from '@/lib/createQuiz'

function QuizController({
  words,
  quizCreateFn,
}: {
  words: Word[]
  quizCreateFn: (correctWord: Word, allWords: Word[]) => Quiz
}) {
  const [quiz, setQuiz] = useState<Quiz>()

  const startNewQuiz = useCallback(() => {
    let newQuiz

    const correctWord = _.sample(words)

    if (!correctWord) return

    newQuiz = quizCreateFn(correctWord, words)

    setQuiz(newQuiz)
  }, [words, quizCreateFn])

  const handleNext = () => {
    startNewQuiz()
  }

  useEffect(() => {
    startNewQuiz()
  }, [startNewQuiz])

  if (!quiz) return <div></div>

  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col items-center space-y-12">
        <QuizItem quiz={quiz} />
        <button onClick={handleNext} className="w-fit border-2 rounded-md px-2">
          Next
        </button>
      </main>
    </div>
  )
}
export default QuizController
