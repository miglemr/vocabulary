import { type Word } from '@prisma/client'

import FavoriteButton from './FavoriteButton'
import AudioButton from './AudioButton'

import { useWordStore } from '@/store/useWordStore'

function WordItem({ word }: { word: Word }) {
  const favoriteIds = useWordStore.use.favoriteIds()
  const addFavorite = useWordStore.use.addFavorite()
  const removeFavorite = useWordStore.use.removeFavorite()

  const isFavorite = favoriteIds.includes(word.id)

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(word.id) : addFavorite(word.id)
  }

  return (
    <section aria-label="Word details" className="space-y-12">
      <div className="max-w-sm h-96 space-y-20">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-xl font-semibold">{word.word}</h1>
          <p aria-label="Pronunciation">{word.pronunciation}</p>
        </div>
        <p className="text-center text-sm">
          <span aria-label="Part of speech" className="mr-2">
            ({word.partOfSpeech})
          </span>
          <span aria-label="Definition">{word.definition}</span>
        </p>
        <p aria-label="Example sentence" className="text-center text-xs sm:text-sm">
          ({word.example})
        </p>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <AudioButton url={word.audio} />
        <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      </div>
    </section>
  )
}
export default WordItem
