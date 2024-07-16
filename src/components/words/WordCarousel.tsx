import { useEffect } from 'react'

import { type Word } from '@prisma/client'

import WordItem from './word/WordItem'

import { useWordCarousel } from '@/hooks/useWordCarousel'
import { getPrevIndex, getNextIndex } from '@/utils/utils'

function WordCarousel({
  words,
  initialIndex = 0,
  onIndexChange,
}: {
  words: Word[]
  initialIndex?: number
  onIndexChange?: (index: number) => void
}) {
  const { currentWord, handlers, index, setIndex, position } = useWordCarousel(words, initialIndex)

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(index)
    }
  }, [index, onIndexChange])

  return (
    <div
      {...handlers}
      className="space-y-12"
      style={{ transform: `translateY(${position}px)`, transition: 'transform 0.3s ease' }}
    >
      <WordItem word={currentWord} />
      <div className="hidden sm:flex justify-between">
        <button onClick={() => setIndex(prevIndex => getPrevIndex(prevIndex, words.length))}>
          Prev
        </button>
        <button onClick={() => setIndex(prevIndex => getNextIndex(prevIndex, words.length))}>
          Next
        </button>
      </div>
    </div>
  )
}
export default WordCarousel
