import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { type Word } from '@prisma/client'
import { getNextIndex, getPrevIndex } from '@/utils/utils'

export function useWordCarousel(words: Word[], initialIndex: number) {
  const [index, setIndex] = useState(initialIndex)
  const [position, setPosition] = useState(0)

  const currentWord = words[index]

  if (!currentWord) {
    setIndex(prevIndex => getNextIndex(prevIndex, words.length))
  }

  const handlers = useSwipeable({
    onSwiping: ({ deltaY }) => {
      if (deltaY > 100 || deltaY < -100) {
        setPosition(0)
      } else {
        setPosition(deltaY)
      }
    },
    onSwipedDown: () => setIndex(prevIndex => getPrevIndex(prevIndex, words.length)),
    onSwipedUp: () => setIndex(prevIndex => getNextIndex(prevIndex, words.length)),
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
