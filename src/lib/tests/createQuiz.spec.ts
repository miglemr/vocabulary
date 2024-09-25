import { describe, expect, it } from 'vitest'

import { createDefinitionQuiz, createSentenceQuiz } from '../createQuiz'
import { words } from '@/utils/tests/mockData'

const correctWord = words[2]

describe('createDefinitionQuiz', () => {
  it('creates a quiz with the correct structure', () => {
    const quiz = createDefinitionQuiz(correctWord, words)

    expect(quiz.question).toBe(correctWord.definition)
    expect(quiz.answer.word).toBe(correctWord.word)
    expect(quiz.options).toHaveLength(4)
    expect(quiz.options).toContain(correctWord)
  })

  it('ensures word options are of the same part of speech', () => {
    const quiz = createDefinitionQuiz(correctWord, words)

    const otherOptions = quiz.options.filter(option => option.id !== correctWord.id)
    otherOptions.forEach(option => {
      const word = words.find(word => word.id === option.id)
      expect(word?.partOfSpeech).toBe(correctWord.partOfSpeech)
    })
  })
})

describe('createSentenceQuiz', () => {
  it('creates a quiz with the correct structure', () => {
    const quiz = createSentenceQuiz(correctWord, words)

    const exampleWithRemovedWord = correctWord.example.replace(correctWord.word, '______')
    expect(quiz.question).toBe(exampleWithRemovedWord)
    expect(quiz.answer).toBe(correctWord)
    expect(quiz.options).toHaveLength(4)
    expect(quiz.options).toContain(correctWord)
  })

  it('ensures word options are of the same part of speech', () => {
    const quiz = createSentenceQuiz(correctWord, words)

    const otherOptions = quiz.options.filter(option => option.id !== correctWord.id)
    otherOptions.forEach(option => {
      const word = words.find(word => word.id === option.id)
      expect(word?.partOfSpeech).toBe(correctWord.partOfSpeech)
    })
  })
})
