import { test, expect, type Page } from '@playwright/test'

import { wordDefinitionQuizDetails } from './utils/data'

test.describe('quiz navigation', () => {
  test('quiz links are rendered', async ({ page }) => {
    await page.goto('/quiz')

    await expect(page.getByRole('link', { name: 'Word Definition' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Sentence Completion' })).toBeVisible()
  })

  test('clicking on quiz link navigates user to selected quiz page', async ({ page }) => {
    await page.goto('/quiz')

    await page.getByRole('link', { name: 'Word Definition' }).click()

    await expect(page).toHaveURL('/quiz/definition')
  })
})

test.describe('quiz intro', () => {
  test('renders quiz details', async ({ page }) => {
    await page.goto('/quiz/definition')

    await expect(page.getByRole('heading')).toHaveText(wordDefinitionQuizDetails.title)
    await expect(page.getByRole('paragraph')).toHaveText(wordDefinitionQuizDetails.description)
  })

  test('clicking back button navigates user to quiz page', async ({ page }) => {
    await page.goto('/quiz/definition')

    await page.getByLabel('Go to previous page').click()

    await expect(page).toHaveURL('/quiz')
  })

  test('clicking next button displays the word list selection prompt', async ({ page }) => {
    await page.goto('/quiz/definition')

    await page.getByRole('button', { name: 'Next' }).click()

    await expect(page.getByRole('heading')).toHaveText(
      'Select the word list you want to be quizzed on',
    )
  })
})

test.describe('quiz word list selection', () => {
  test('renders word list options', async ({ page }) => {
    await goToWordSelection(page)

    await expect(page.getByRole('button', { name: 'all' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'favorites' })).toBeVisible()
  })

  test('clicking back button displays quiz intro', async ({ page }) => {
    await goToWordSelection(page)

    await page.getByLabel('Go to previous page').click()

    await expect(page).toHaveURL('/quiz/definition')
  })

  test('favorites select button is active if there are enough words in favorites collection', async ({
    page,
  }) => {
    await addFiveFavoriteWords(page, 5)
    await goToWordSelection(page)

    await expect(page.getByRole('button', { name: 'favorites' })).not.toBeDisabled()
  })

  test('favorites select button is disabled if there are not enough words in favorites collection', async ({
    page,
  }) => {
    await addFiveFavoriteWords(page, 2)
    await goToWordSelection(page)

    await expect(page.getByRole('button', { name: 'favorites' })).toBeDisabled()
  })

  test('favorites select box with disabled button has a tooltip', async ({ page }) => {
    await addFiveFavoriteWords(page, 2)
    await goToWordSelection(page)

    await page.getByRole('button', { name: 'favorites' }).hover()

    const tooltip = page.getByRole('tooltip')
    await expect(tooltip).toBeVisible()
    await expect(tooltip).toContainText('Need at least 5 words!')
  })

  test('start button is disabled if nothing is selected', async ({ page }) => {
    await goToWordSelection(page)

    await expect(page.getByRole('button', { name: 'Start' })).toBeDisabled()
  })
})

test.describe('quiz flow', () => {
  test('clicking the start button starts the quiz', async ({ page }) => {
    await goToWordSelection(page)

    await page.getByRole('button', { name: 'all' }).click()
    await page.getByRole('button', { name: 'Start' }).click()

    expect(page.getByLabel('Quiz question')).toBeVisible()
    expect(await page.getByLabel('Quiz option').all()).toHaveLength(4)
  })

  test('clicking on a word after answer submission displays a card with word details', async ({
    page,
  }) => {
    await startQuiz(page)
    await page.getByLabel('Quiz option').first().click()

    await page.getByLabel('Word details').first().click()

    await expect(page.getByLabel('Definition')).toBeVisible()
  })
})

const goToWordSelection = async (page: Page) => {
  await page.goto('/quiz/definition')
  await page.getByRole('button', { name: 'Next' }).click()
}

const addFiveFavoriteWords = async (page: Page, n: number) => {
  await page.goto('/')

  for (let i = 1; i <= n; i++) {
    await page.getByLabel('Add to favorites').click()
    await page.getByLabel('Next word').click()
  }
}

const startQuiz = async (page: Page) => {
  await goToWordSelection(page)

  await page.getByRole('button', { name: 'all' }).click()
  await page.getByRole('button', { name: 'Start' }).click()
}
