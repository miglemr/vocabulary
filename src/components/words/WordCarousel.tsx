import { useEffect } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

import { type Word } from '@prisma/client'

import WordItem from './wordItem/WordItem'

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
  const { currentWord, handlers, index, setIndex } = useWordCarousel(words, initialIndex)

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(index)
    }
  }, [index, onIndexChange])

  return (
    <div
      {...handlers}
      className="flex justify-center items-center h-screen sm:space-x-10 md:space-x-20 p-2 sm:p-0"
    >
      <div className="hidden sm:block">
        <button
          aria-label="prev-button"
          onClick={() => setIndex(prevIndex => getPrevIndex(prevIndex, words.length))}
        >
          <ArrowBackIosNewRoundedIcon color="disabled" />
        </button>
      </div>
      <WordItem word={currentWord} />
      <div className="hidden sm:block">
        <button
          aria-label="next-button"
          onClick={() => setIndex(prevIndex => getNextIndex(prevIndex, words.length))}
        >
          <ArrowForwardIosRoundedIcon color="disabled" />
        </button>
      </div>
    </div>
  )
}
export default WordCarousel
