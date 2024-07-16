'use client'

import { useEffect } from 'react'

import { type Word } from '@prisma/client'

import WordItem from './word/WordItem'

import { useWordCarousel } from '@/hooks/useWordCarousel'

function FavoriteWords({ words }: { words: Word[] }) {
  const { currentWord, handlers, position, setIndex } = useWordCarousel(words)

  useEffect(() => {
    // if user removes last word from favorites
    if (!currentWord) {
      setIndex(0)
    }
  }, [currentWord, setIndex, words])

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

export default FavoriteWords
