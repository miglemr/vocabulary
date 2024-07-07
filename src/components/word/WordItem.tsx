import { type Word } from '@prisma/client'

import FavoriteButton from './FavoriteButton'
import AudioButton from './AudioButton'

function Word({ word }: { word: Word }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center">
        <h1>{word.word}</h1>
        <p>{word.pronunciation}</p>
      </div>
      <div className="flex justify-center">
        <p className="mr-2">{word.partOfSpeech}</p>
        <p>{word.definition}</p>
      </div>
      <div className="flex justify-center">
        <p>{word.example}</p>
      </div>
      <div className="flex w-full items-center justify-evenly">
        <AudioButton url={word.audio} />
        <FavoriteButton />
      </div>
    </div>
  )
}
export default Word
