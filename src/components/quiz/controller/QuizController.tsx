import React, { useCallback, useEffect, useRef, useState } from 'react'
import _ from 'lodash'

import { Word } from '@prisma/client'

import QuizCard from './QuizCard'
import Button from '@/components/Button'

import { getCorrectWord, type QuizType } from '@/lib/createQuiz'

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

  const prevQuizWord = useRef('')

  const startNewQuiz = useCallback(() => {
    let newQuiz

    const wordList = quizQuestionWords ? quizQuestionWords : allWords
    const correctWord = getCorrectWord(wordList, prevQuizWord.current)

    if (!correctWord) return

    prevQuizWord.current = correctWord.word

    newQuiz = quizCreateFn(correctWord, allWords)

    setQuiz(newQuiz)
  }, [allWords, quizQuestionWords, quizCreateFn, prevQuizWord])

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
        <QuizCard quiz={quiz} />
        <Button onClick={handleNext}>Next</Button>
      </main>
    </div>
  )
}
export default QuizController
