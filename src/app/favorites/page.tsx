'use client'

import FavoriteWords from '@/components/words/FavoriteWords'

import { useFetchFavoriteWords } from '@/hooks/useFetchFavoriteWords'

function Favorites() {
  const { favoriteWords, isLoading } = useFetchFavoriteWords()

  return (
    <main className="flex min-h-screen sm:min-h-0 flex-col items-center justify-around p-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : favoriteWords.length !== 0 ? (
        <FavoriteWords words={favoriteWords} />
      ) : (
        <p>No favorite words</p>
      )}
    </main>
  )
}
export default Favorites
