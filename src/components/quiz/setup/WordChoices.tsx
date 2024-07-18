import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import WordChoiceBox from './WordChoiceBox'
import BackButton from '@/components/BackButton'

const WORD_CHOICES = {
  FAVORITES: 'favorites',
  ALL: 'all',
}

function WordChoices({
  isFavoritesAvailable,
  onChoiceClick,
  onChoiceCancel,
}: {
  isFavoritesAvailable: boolean
  onChoiceClick: (value: string) => void
  onChoiceCancel: () => void
}) {
  const [wordChoice, setWordChoice] = useState<string | null>()

  const handleClick = (value: string) => {
    setWordChoice(value)
    onChoiceClick(value)
  }

  return (
    <div>
      <BackButton onClick={onChoiceCancel} className="mb-6" />
      <div className="flex flex-col items-center space-y-10">
        <header>
          <h1 className="text-center">Select the word list for your quiz</h1>
        </header>
        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:space-x-6 gap-y-4">
          <span onClick={() => handleClick(WORD_CHOICES.ALL)}>
            <WordChoiceBox
              name={WORD_CHOICES.ALL}
              imgSrc="/alphabet.png"
              isDisabled={false}
              clicked={wordChoice === WORD_CHOICES.ALL}
            />
          </span>

          <Tooltip title={!isFavoritesAvailable ? 'Need at least 5 words!' : ''}>
            <span onClick={() => handleClick(WORD_CHOICES.FAVORITES)}>
              <WordChoiceBox
                name={WORD_CHOICES.FAVORITES}
                imgSrc="/favorite.png"
                isDisabled={!isFavoritesAvailable}
                clicked={wordChoice === WORD_CHOICES.FAVORITES}
              />
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
export default WordChoices
