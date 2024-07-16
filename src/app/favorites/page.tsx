'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import FavoriteWords from '@/components/words/FavoriteWords'

import { useFetchFavoriteWords } from '@/hooks/useFetchFavoriteWords'

function Favorites() {
  const { favoriteWords, isLoading, error } = useFetchFavoriteWords()

  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (favoriteWords.length === 0) {
    return <p>No favorite words</p>
  }

  return <FavoriteWords words={favoriteWords} />
}
export default Favorites
