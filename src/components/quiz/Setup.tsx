import { useState } from 'react'

import WordSelection from './wordSelection/WordSelection'
import Button from '@/components/Button'
import LoadingSpinner from '@/components/LoadingSpinner'

import { useWordStore } from '@/store/useWordStore'

function Setup({ onNextClick }: { onNextClick: (favoritesMode: boolean) => void }) {
  const [favoritesMode, setFavoritesMode] = useState(false)

  const hasHydrated = useWordStore.use._hasHydrated()
  const favoriteWordIds = useWordStore.use.favoriteIds()

  const handleNextClick = () => {
    onNextClick(favoritesMode)
  }

  if (!hasHydrated) return <LoadingSpinner />

  return (
    <div className="flex flex-col items-center space-y-10">
      <WordSelection
        onSelect={(isFavorites: boolean) => setFavoritesMode(isFavorites)}
        isFavoritesAvailable={favoriteWordIds.length >= 5}
      />
      <Button onClick={handleNextClick}>Next</Button>
    </div>
  )
}
export default Setup
