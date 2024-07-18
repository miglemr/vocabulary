'use client'

import { useState } from 'react'

import { Word } from '@prisma/client'

import Intro from './setup/Intro'
import WordChoices from './setup/WordChoices'
import QuizController from './QuizController'
import Button from '@/components/Button'

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
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [isChoicesVisible, setIsChoicesVisible] = useState(false)
  const [wordChoice, setWordChoice] = useState<string | null>(null)

  const favoriteWordIds = useWordStore.use.favoriteIds()

  const handleNextClick = () => {
    setIsIntroVisible(false)
    setIsChoicesVisible(true)
  }

  const handleChoiceClick = (value: string) => setWordChoice(value)

  const handleChoiceCancel = () => {
    setIsChoicesVisible(false)
    setIsIntroVisible(true)
  }

  const handleStart = () => {
    if (wordChoice === 'favorites') {
      const favoriteWords = words.filter(word => favoriteWordIds.includes(word.id))
      setQuizQuestionWords(favoriteWords)
    }
    setIsChoicesVisible(false)
    setIsQuizStarted(true)
  }

  if (isIntroVisible) {
    return (
      <Intro
        title={quizDetails.title}
        description={quizDetails.description}
        onNextClick={handleNextClick}
      />
    )
  }

  if (isChoicesVisible) {
    return (
      <div className="flex flex-col items-center space-y-10">
        <WordChoices
          onChoiceClick={handleChoiceClick}
          onChoiceCancel={handleChoiceCancel}
          isFavoritesAvailable={favoriteWordIds.length >= 5}
        />
        <Button onClick={handleStart} disabled={!wordChoice}>
          Start
        </Button>
      </div>
    )
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
}
export default Quiz
