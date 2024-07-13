'use client'

import { useEffect, useRef } from 'react'

import { type Word } from '@prisma/client'

import WordItem from './word/WordItem'

import { useWordStore } from '@/store/useWordStore'
import { useWordCarousel } from '@/hooks/useWordCarousel'

function Words({ words }: { words: Word[] }) {
  const currentWordIndex = useWordStore.use.currentWordIndex()
  const setCurrentWordIndex = useWordStore.use.setCurrentWordIndex()

  const isInitialRender = useRef(true)

  const { currentWord, handlers, index, setIndex, position } = useWordCarousel(
    words,
    currentWordIndex,
  )

  useEffect(() => {
    if (currentWordIndex !== undefined && isInitialRender.current) {
      setIndex(currentWordIndex)
      isInitialRender.current = false
    }
  }, [currentWordIndex, setIndex])

  useEffect(() => {
    if (!isInitialRender.current) {
      setCurrentWordIndex(index)
    }
  }, [index, currentWordIndex, setCurrentWordIndex])

  if (currentWordIndex === undefined) return <div>Loading</div>

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

export default Words
