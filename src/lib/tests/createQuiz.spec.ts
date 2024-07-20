import { describe, expect, it } from 'vitest'

import { createDefinitionQuiz, createSentenceQuiz } from '../createQuiz'
import { words } from '@/utils/tests/mockData'

const correctWord = {
  id: 1,
  word: 'abstruse',
  definition: 'difficult to understand; obscure',
  partOfSpeech: 'adj',
  pronunciation: '/æbˈstruːs/',
  example: "The professor's lecture was so abstruse that many students struggled to follow along.",
  audio: 'https://media.merriam-webster.com/audio/prons/en/us/mp3/a/abstru01.mp3',
  difficulty: 'advanced',
}

describe('createDefinitionQuiz', () => {
  it('creates a quiz with the correct structure', () => {
    const quiz = createDefinitionQuiz(correctWord, words)

    expect(quiz.question).toBe(correctWord.definition)
    expect(quiz.answer).toBe(correctWord.word)
    expect(quiz.options).toHaveLength(4)
    expect(quiz.options).toContain(correctWord.word)
  })

  it('ensures word options are of the same part of speech', () => {
    const quiz = createDefinitionQuiz(correctWord, words)

    const otherOptions = quiz.options.filter(option => option !== correctWord.word)
    otherOptions.forEach(option => {
      const word = words.find(word => word.word === option)
      expect(word?.partOfSpeech).toBe(correctWord.partOfSpeech)
    })
  })
})

describe('createSentenceQuiz', () => {
  it('creates a quiz with the correct structure', () => {
    const quiz = createSentenceQuiz(correctWord, words)

    expect(quiz.question).toBe(
      "The professor's lecture was so ______ that many students struggled to follow along.",
    )
    expect(quiz.answer).toBe(correctWord.word)
    expect(quiz.options).toHaveLength(4)
    expect(quiz.options).toContain(correctWord.word)
  })

  it('ensures word options are of the same part of speech', () => {
    const quiz = createSentenceQuiz(correctWord, words)

    const otherOptions = quiz.options.filter(option => option !== correctWord.word)
    otherOptions.forEach(option => {
      const word = words.find(word => word.word === option)
      expect(word?.partOfSpeech).toBe(correctWord.partOfSpeech)
    })
  })
})
