import { test as base } from '@playwright/test'
import type { Page } from '@playwright/test'
import { loginToShopwell } from '../helpers/login'
import { createBasicProduct } from '../helpers/createProduct'

/**
 * Extend Playwright test with custom fixtures for Shopwell integration tests
 */
export const test = base.extend<{
  authenticatedPage: Page
  createProduct: typeof createBasicProduct
}>({
  authenticatedPage: async ({ page }, use) => {
    await loginToShopwell(page)
    await use(page)
  },
  createProduct: async ({}, use) => {
    await use(createBasicProduct)
  },
})

export { expect } from '@playwright/test'
