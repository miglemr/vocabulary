import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { type Word } from '@prisma/client'

export function useWordCarousel(words: Word[], initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex)
  const [position, setPosition] = useState(0)

  const currentWord = words[index]

  const handlers = useSwipeable({
    onSwiping: ({ deltaY }) => {
      if (deltaY > 100 || deltaY < -100) {
        setPosition(0)
      } else {
        setPosition(deltaY)
      }
    },
    onSwipedDown: () => setIndex(prevIndex => (prevIndex - 1 + words.length) % words.length),
    onSwipedUp: () => setIndex(prevIndex => (prevIndex + 1) % words.length),
    onTouchEndOrOnMouseUp: () => setPosition(0),
    swipeDuration: 250,
  })

  return {
    currentWord,
    handlers,
    index,
    setIndex,
    position,
  }
}
