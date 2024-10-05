import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import WordSelectionBox from './WordSelectionBox'

function WordSelection({
  isFavoritesAvailable,
  onSelect,
}: {
  isFavoritesAvailable: boolean
  onSelect: (isFavorites: boolean) => void
}) {
  const [isFavorites, setIsFavorites] = useState(false)

  const handleClick = (wordList: 'all' | 'favorites') => {
    if (wordList === 'all') {
      setIsFavorites(false)
    } else {
      setIsFavorites(true)
    }
  }

  useEffect(() => {
    onSelect(isFavorites)
  }, [isFavorites, onSelect])

  return (
    <div className="flex flex-col items-center space-y-8">
      <header>
        <h1 className="text-center text-sm">Select the word list you want to be quizzed on</h1>
      </header>
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:space-x-6 gap-y-4">
        <span onClick={() => handleClick('all')}>
          <WordSelectionBox
            name="all"
            imgSrc="/alphabet.png"
            isDisabled={false}
            active={!isFavorites}
          />
        </span>

        <Tooltip title={!isFavoritesAvailable ? 'Need at least 5 words!' : ''}>
          <span onClick={() => handleClick('favorites')}>
            <WordSelectionBox
              name="favorites"
              imgSrc="/favorite.png"
              isDisabled={!isFavoritesAvailable}
              active={isFavorites}
            />
          </span>
        </Tooltip>
      </div>
    </div>
  )
}
export default WordSelection
