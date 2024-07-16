import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useMediaQuery } from 'react-responsive'

import { type Word } from '@prisma/client'
import { getNextIndex, getPrevIndex } from '@/utils/utils'

export function useWordCarousel(words: Word[], initialIndex: number) {
  const [index, setIndex] = useState(initialIndex)

  const currentWord = words[index]

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  if (!currentWord) {
    setIndex(prevIndex => getNextIndex(prevIndex, words.length))
  }

  const handlers = useSwipeable({
    onSwipedDown: () => isMobile && setIndex(prevIndex => getPrevIndex(prevIndex, words.length)),
    onSwipedUp: () => isMobile && setIndex(prevIndex => getNextIndex(prevIndex, words.length)),
    onSwipedRight: () => !isMobile && setIndex(prevIndex => getPrevIndex(prevIndex, words.length)),
    onSwipedLeft: () => !isMobile && setIndex(prevIndex => getNextIndex(prevIndex, words.length)),
    swipeDuration: 250,
  })

  return {
    currentWord,
    handlers,
    index,
    setIndex,
  }
}
