'use client'

import { useEffect, useState } from 'react'

import { Word } from '@prisma/client'

import QuizController from './QuizController'
import Intro from './Intro'
import WordChoices from './WordChoices'

import { useWordStore } from '@/store/useWordStore'
import { type Quiz } from '@/lib/createQuiz'

export type QuizDetails = {
  title: string
  description: string
  createFn: (correctWord: Word, allWords: Word[]) => Quiz
}

function QuizSetup({ words, quizDetails }: { words: Word[]; quizDetails: QuizDetails }) {
  const [quizWords, setQuizWords] = useState<Word[]>([])
  const [favoriteWords, setFavoriteWords] = useState<Word[]>([])
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [isChoicesVisible, setIsChoicesVisible] = useState(false)

  const hasHydrated = useWordStore.use._hasHydrated()
  const favoriteWordIds = useWordStore.use.favoriteIds()

  const handleStart = () => {
    setIsIntroVisible(false)
    setIsChoicesVisible(true)
  }

  const handleChoice = (choice: string) => {
    if (choice === 'favorite') {
      setQuizWords(favoriteWords)
    }
    if (choice === 'all') {
      setQuizWords(words)
    }

    setIsChoicesVisible(false)
    setIsQuizStarted(true)
  }

  useEffect(() => {
    if (hasHydrated) {
      const filteredFavoriteWords = words.filter(word => favoriteWordIds.includes(word.id))
      setFavoriteWords(filteredFavoriteWords)
    }
  }, [hasHydrated, words, favoriteWordIds])

  return (
    <div>
      {isIntroVisible && (
        <Intro
          title={quizDetails.title}
          description={quizDetails.description}
          onStart={handleStart}
        />
      )}
      {favoriteWords && isChoicesVisible && (
        <WordChoices onChoice={handleChoice} isFavoritesAvailable={favoriteWords.length > 5} />
      )}
      {isQuizStarted && <QuizController words={quizWords} quizCreateFn={quizDetails.createFn} />}
    </div>
  )
}
export default QuizSetup
