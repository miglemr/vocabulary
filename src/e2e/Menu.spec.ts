import { test, expect } from '@playwright/test'

test.use({
  viewport: { width: 375, height: 667 },
})

test.describe('menu', () => {
  test('clicking menu icon displays menu items', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('menu-button').click()

    await expect(page.getByRole('list')).toBeVisible()
  })

  test('clicking done button closes the menu', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('menu-button').click()

    await page.getByRole('button', { name: 'Done' }).click()

    await expect(page.getByRole('list')).not.toBeVisible()
  })
})
