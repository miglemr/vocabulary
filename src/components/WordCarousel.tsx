'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { type Word } from '@prisma/client'

import WordItem from './word/WordItem'

function WordCarousel({ words }: { words: Word[] }) {
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState(0)

  const handlers = useSwipeable({
    onSwiping: e => {
      if (e.deltaY > 100 || e.deltaY < -100) {
        setPosition(0)
      } else {
        setPosition(e.deltaY)
      }
    },
    onSwipedDown: () => {
      setPosition(0)
      setIndex(prevIndex => (prevIndex - 1 + words.length) % words.length)
    },
    onSwipedUp: () => {
      setPosition(0)
      setIndex(prevIndex => (prevIndex + 1) % words.length)
    },
    onTouchEndOrOnMouseUp: () => {
      setPosition(0)
    },
    swipeDuration: 250,
  })

  return (
    <div
      {...handlers}
      className="space-y-12 flex-grow pt-24"
      style={{ transform: `translateY(${position}px)`, transition: 'transform 0.3s ease' }}
    >
      <WordItem word={words[index]} />
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

export default WordCarousel
