'use client'

import Image from 'next/image'
import LoadingSpinner from '@/components/LoadingSpinner'
import FavoriteWords from '@/components/words/FavoriteWords'
import Error from '@/components/Error'

import { useFetchFavoriteWords } from '@/hooks/useFetchFavoriteWords'

function Favorites() {
  const { favoriteWords, isLoading, error } = useFetchFavoriteWords()

  if (error) {
    return <Error errorMessage={error} />
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (favoriteWords.length === 0) {
    return (
      <div className="flex flex-col justify-center min-h-screen items-center space-y-8">
        <h2>Favorite words collection is empty</h2>
        <Image
          src="/empty-folder.png"
          alt="empty-folder-image"
          height={100}
          width={100}
          unoptimized={true}
        />
      </div>
    )
  }

  return <FavoriteWords words={favoriteWords} />
}
export default Favorites
