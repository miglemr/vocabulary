'use client'

import { useState } from 'react'

import { Word } from '@prisma/client'

import QuizController from './controller/QuizController'
import QuizSetup from './setup/QuizSetup'
import { type WordList } from './setup/WordListSelection'

import { useWordStore } from '@/store/useWordStore'
import { type QuizType } from '@/lib/createQuiz'

export type QuizDetails = {
  title: string
  description: string
  createFn: (correctWord: Word, allWords: Word[]) => QuizType
}

function Quiz({ words, quizDetails }: { words: Word[]; quizDetails: QuizDetails }) {
  const [quizQuestionWords, setQuizQuestionWords] = useState<Word[]>()
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  const favoriteWordIds = useWordStore.use.favoriteIds()

  const handleStart = (wordList: WordList) => {
    if (wordList === 'favorites') {
      const favoriteWords = words.filter(word => favoriteWordIds.includes(word.id))
      setQuizQuestionWords(favoriteWords)
    }
    setIsQuizStarted(true)
  }

  if (isQuizStarted) {
    return (
      <QuizController
        allWords={words}
        quizQuestionWords={quizQuestionWords && quizQuestionWords}
        quizCreateFn={quizDetails.createFn}
      />
    )
  }

  return (
    <QuizSetup
      title={quizDetails.title}
      description={quizDetails.description}
      onStart={handleStart}
      isFavoritesAvailable={favoriteWordIds.length >= 5}
    />
  )
}

export default Quiz
