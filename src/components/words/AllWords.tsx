'use client'

import { useEffect, useRef } from 'react'

import { type Word } from '@prisma/client'

import WordItem from './word/WordItem'

import { useWordStore } from '@/store/useWordStore'
import { useWordCarousel } from '@/hooks/useWordCarousel'

function AllWords({ words }: { words: Word[] }) {
  const hasHydrated = useWordStore.use._hasHydrated()
  const currentWordIndex = useWordStore.use.currentWordIndex()
  const setCurrentWordIndex = useWordStore.use.setCurrentWordIndex()

  const { currentWord, handlers, index, setIndex, position } = useWordCarousel(
    words,
    currentWordIndex,
  )

  const initialValueSet = useRef(false)

  useEffect(() => {
    if (hasHydrated && !initialValueSet.current) {
      setIndex(currentWordIndex)
      initialValueSet.current = true
    }
  }, [currentWordIndex, setIndex, hasHydrated])

  useEffect(() => {
    if (hasHydrated && currentWordIndex !== index) {
      setCurrentWordIndex(index)
    }
  }, [index, currentWordIndex, setCurrentWordIndex, hasHydrated])

  if (!hasHydrated) return <div>Loading...</div>

  return (
    <div
      {...handlers}
      className="space-y-12 flex-grow pt-24"
      style={{ transform: `translateY(${position}px)`, transition: 'transform 0.3s ease' }}
    >
      <WordItem word={currentWord} />
      <div className="hidden sm:flex justify-between">
        <button
          onClick={() => setIndex(prevIndex => (prevIndex - 1 + words.length) % words.length)}
        >
          Prev
        </button>
        <button onClick={() => setIndex(prevIndex => (prevIndex + 1) % words.length)}>Next</button>
      </div>
    </div>
  )
}

export default AllWords
