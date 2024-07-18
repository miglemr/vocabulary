import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'

import { Word } from '@prisma/client'

import QuizQuestion from './QuizQuestion'
import Button from '@/components/Button'

import { type QuizType } from '@/lib/createQuiz'

function QuizController({
  allWords,
  quizQuestionWords,
  quizCreateFn,
}: {
  allWords: Word[]
  quizQuestionWords?: Word[]
  quizCreateFn: (correctWord: Word, allWords: Word[]) => QuizType
}) {
  const [quiz, setQuiz] = useState<QuizType>()

  const startNewQuiz = useCallback(() => {
    let newQuiz

    const correctWord = quizQuestionWords ? _.sample(quizQuestionWords) : _.sample(allWords)

    if (!correctWord) return

    newQuiz = quizCreateFn(correctWord, allWords)

    setQuiz(newQuiz)
  }, [allWords, quizQuestionWords, quizCreateFn])

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
        <QuizQuestion quiz={quiz} />
        <Button onClick={handleNext}>Next</Button>
      </main>
    </div>
  )
}
export default QuizController
