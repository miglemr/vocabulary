'use client'

import { type Word } from '@prisma/client'

import WordCarousel from './WordCarousel'

function FavoriteWords({ words }: { words: Word[] }) {
  return <WordCarousel words={words} />
}

export default FavoriteWords
