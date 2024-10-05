'use client'

import { useState } from 'react'

import { Word } from '@prisma/client'

import QuizController from './quizController/QuizController'
import Setup from './Setup'

import { type QuizType } from '@/lib/createQuiz'

function Quiz({
  words,
  quizCreateFn,
}: {
  words: Word[]
  quizCreateFn: (correctWord: Word, allWords: Word[]) => QuizType
}) {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [favoritesMode, setFavoritesMode] = useState(false)

  const handleNextClick = (favoritesMode: boolean) => {
    if (favoritesMode) {
      setFavoritesMode(true)
    }
    setIsQuizStarted(true)
  }

  if (isQuizStarted) {
    return (
      <QuizController allWords={words} favoritesMode={favoritesMode} quizCreateFn={quizCreateFn} />
    )
  }

  return <Setup onNextClick={handleNextClick} />
}

export default Quiz
