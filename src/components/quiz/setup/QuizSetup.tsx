import { useState } from 'react'

import Intro from './Intro'
import WordListSelection from './WordListSelection'
import { type WordList } from './WordListSelection'
import Button from '@/components/Button'

function QuizSetup({
  title,
  description,
  isFavoritesAvailable,
  onStart,
}: {
  title: string
  description: string
  isFavoritesAvailable: boolean
  onStart: (wordList: WordList) => void
}) {
  const [isIntroVisible, setIsIntroVisible] = useState(true)
  const [isWordSelectionVisible, setIsWordSelectionVisible] = useState(false)
  const [selectedWordList, setSelectedWordList] = useState<WordList | null>(null)

  const handleNextClick = () => {
    setIsIntroVisible(false)
    setIsWordSelectionVisible(true)
  }

  const handleWordListSelect = (wordList: WordList) => setSelectedWordList(wordList)

  const handleWordSelectionCancel = () => {
    setIsWordSelectionVisible(false)
    setIsIntroVisible(true)
  }

  if (isIntroVisible) {
    return <Intro title={title} description={description} onNextClick={handleNextClick} />
  }

  if (isWordSelectionVisible) {
    return (
      <div className="flex flex-col items-center space-y-10">
        <WordListSelection
          onSelect={handleWordListSelect}
          onCancel={handleWordSelectionCancel}
          isFavoritesAvailable={isFavoritesAvailable}
        />
        <Button
          onClick={() => selectedWordList && onStart(selectedWordList)}
          disabled={!selectedWordList}
        >
          Start
        </Button>
      </div>
    )
  }
}
export default QuizSetup
