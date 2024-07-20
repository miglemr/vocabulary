import { describe, expect, it, type Mock, vi, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'

import { useFetchFavoriteWords } from '../useFetchFavoriteWords'
import { words } from '@/utils/tests/mockData'

const mockFavoriteWords = words.slice(3)

describe('<useFetchFavoriteWords/>', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('returns favorite words', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockFavoriteWords),
      }),
    ) as Mock

    const { result } = renderHook(() => useFetchFavoriteWords())

    await waitFor(() => expect(result.current.favoriteWords).toEqual(mockFavoriteWords))
  })

  it('sets isLoading tot true initially and false after fetching', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockFavoriteWords),
      }),
    ) as Mock

    const { result } = renderHook(() => useFetchFavoriteWords())

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current.isLoading).toBe(false))
  })

  it('sets error if fetch fails', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Failed to fetch'))) as Mock
    global.console.error = vi.fn()

    const { result } = renderHook(() => useFetchFavoriteWords())

    await waitFor(() => expect(result.current.error).toBe('Failed to fetch favorites'))
  })
})
