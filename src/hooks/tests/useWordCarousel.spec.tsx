import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'

import { useWordCarousel } from '../useWordCarousel'
import { words } from '@/utils/tests/mockData'

describe('<useWordCarousel/>', () => {
  it('returns current word', () => {
    const initialIndex = 2
    const { result } = renderHook(() => useWordCarousel(words, initialIndex))

    expect(result.current.currentWord).toBe(words[initialIndex])
  })

  it('returns the first word if current word does not exist', () => {
    const initialIndex = words.length

    const { result } = renderHook(() => useWordCarousel(words, initialIndex))

    expect(result.current.currentWord).toBe(words[0])
  })
})
