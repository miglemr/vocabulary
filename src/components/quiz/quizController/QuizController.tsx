import React, { useCallback, useRef, useState } from 'react'
import _ from 'lodash'

import { Word } from '@prisma/client'

import QuizCard from './QuizCard'
import StartButton from './StartButton'
import Button from '@/components/Button'

import { getCorrectWord, type QuizType } from '@/lib/createQuiz'
import { useWordStore } from '@/store/useWordStore'

function QuizController({
  allWords,
  favoritesMode,
  quizCreateFn,
}: {
  allWords: Word[]
  favoritesMode: boolean
  quizCreateFn: (correctWord: Word, allWords: Word[]) => QuizType
}) {
  const [quiz, setQuiz] = useState<QuizType>()

  const favoriteWordIds = useWordStore.use.favoriteIds()

  const prevQuizWord = useRef('')

  const startNewQuiz = useCallback(() => {
    let newQuiz
    let wordList

    if (favoritesMode) {
      wordList = allWords.filter(word => favoriteWordIds.includes(word.id))
    } else {
      wordList = allWords
    }

    const correctWord = getCorrectWord(wordList, prevQuizWord.current)

    if (!correctWord) return

    prevQuizWord.current = correctWord.word

    newQuiz = quizCreateFn(correctWord, allWords)

    setQuiz(newQuiz)
  }, [allWords, quizCreateFn, prevQuizWord, favoritesMode, favoriteWordIds])

  if (!quiz) return <StartButton onStart={startNewQuiz} />

  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col items-center space-y-12">
        <QuizCard quiz={quiz} />
        <Button onClick={startNewQuiz}>Next</Button>
      </main>
    </div>
  )
}
export default QuizController
