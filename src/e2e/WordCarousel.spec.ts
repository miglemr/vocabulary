import { test, expect } from '@playwright/test'

import { wordOrder } from './utils/data'

const { firstWord, secondWord, lastWord } = wordOrder

test.describe('word carousel navigation', () => {
  test('word is rendered correctly', async ({ page }) => {
    await page.goto('/')

    const wordSection = page.getByLabel('word-section')
    await expect(page.getByRole('heading')).toHaveText(firstWord.word)
    await expect(wordSection).toContainText(firstWord.pronunciation)
    await expect(wordSection).toContainText(firstWord.definition)
    await expect(wordSection).toContainText(`(${firstWord.partOfSpeech})${firstWord.definition}`)
    await expect(wordSection).toContainText(`(${firstWord.example})`)
  })

  test('previous button renders the last word', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('prev-button').click()

    const wordSection = page.getByLabel('word-section')
    await expect(page.getByRole('heading')).toHaveText(lastWord.word)
    await expect(wordSection).toContainText(lastWord.pronunciation)
    await expect(wordSection).toContainText(lastWord.definition)
    await expect(wordSection).toContainText(`(${lastWord.partOfSpeech})${lastWord.definition}`)
    await expect(wordSection).toContainText(`(${lastWord.example})`)
  })

  test('next word renders the next word', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('next-button').click()

    const wordSection = page.getByLabel('word-section')
    await expect(page.getByRole('heading')).toHaveText(secondWord.word)
    await expect(wordSection).toContainText(secondWord.pronunciation)
    await expect(wordSection).toContainText(secondWord.definition)
    await expect(wordSection).toContainText(`(${secondWord.partOfSpeech})${secondWord.definition}`)
    await expect(wordSection).toContainText(`(${secondWord.example})`)
  })
})

test.describe('word order persistance', () => {
  test('selected word perists after page refresh', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('next-button').click()
    await page.goto('/')

    await expect(page.getByRole('heading')).toHaveText(secondWord.word)
  })
})

test.describe('word carousel favorite button', () => {
  test('favorite word appears in favorites collection', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('favorite-button').click()
    await page.goto('/favorites')

    await expect(page.locator('[aria-label="word-section"] h1')).toHaveText(firstWord.word)
  })

  test('unfavoriting a word removes it from favorites collection', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('favorite-button').click()
    await page.goto('/favorites')
    await expect(page.locator('[aria-label="word-section"] h1')).toHaveText(firstWord.word)
    await page.goto('/')

    await page.getByLabel('favorite-button').click()
    await page.goto('/favorites')

    await expect(page.getByRole('paragraph')).toHaveText('No favorite words')
  })
})
