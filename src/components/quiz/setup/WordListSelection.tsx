import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import WordListSelectBox from './WordListSelectBox'
import BackIcon from '@/components/BackIcon'

export type WordList = 'favorites' | 'all'

function WordListSelection({
  isFavoritesAvailable,
  onSelect,
  onCancel,
}: {
  isFavoritesAvailable: boolean
  onSelect: (wordList: WordList) => void
  onCancel: () => void
}) {
  const [selectedWordList, setSelectedWordList] = useState<WordList | null>(null)

  const handleClick = (wordList: WordList) => {
    setSelectedWordList(wordList)
    onSelect(wordList)
  }

  return (
    <div>
      <button aria-label="back-button" onClick={onCancel} className="mb-6">
        <BackIcon />
      </button>
      <div className="flex flex-col items-center space-y-8">
        <header>
          <h1 className="text-center text-sm">Select the word list you want to be quizzed on</h1>
        </header>
        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:space-x-6 gap-y-4">
          <span onClick={() => handleClick('all')}>
            <WordListSelectBox
              name="all"
              imgSrc="/alphabet.png"
              isDisabled={false}
              clicked={selectedWordList === 'all'}
            />
          </span>

          <Tooltip title={!isFavoritesAvailable ? 'Need at least 5 words!' : ''}>
            <span onClick={() => handleClick('favorites')}>
              <WordListSelectBox
                name={'favorites'}
                imgSrc="/favorite.png"
                isDisabled={!isFavoritesAvailable}
                clicked={selectedWordList === 'favorites'}
              />
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
export default WordListSelection
