'use client'

import _ from 'lodash'

import { Word } from '@prisma/client'

export type Quiz = {
  question: string
  answer: string
  options: string[]
}

const getQuizOptions = (correctWord: Word, allWords: Word[], partOfSpeech: string) => {
  const filteredWords = allWords
    .filter(word => word.partOfSpeech === partOfSpeech)
    .filter(word => word.word !== correctWord.word)
    .map(word => word.word)

  return _.shuffle([correctWord.word, ..._.sampleSize(filteredWords, 3)])
}

export const createDefinitionQuiz = (correctWord: Word, allWords: Word[]): Quiz => {
  const { partOfSpeech } = correctWord

  const options = getQuizOptions(correctWord, allWords, partOfSpeech)
  const question = correctWord.definition

  return {
    question,
    answer: correctWord.word,
    options,
  }
}

export const createSentenceQuiz = (correctWord: Word, allWords: Word[]): Quiz => {
  const { partOfSpeech } = correctWord

  const options = getQuizOptions(correctWord, allWords, partOfSpeech)
  const question = correctWord.example.replace(correctWord.word, '______')

  return {
    question,
    answer: correctWord.word,
    options,
  }
}
