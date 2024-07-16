'use client'

import { type Word } from '@prisma/client'

import { useWordStore } from '@/store/useWordStore'

import WordCarousel from './WordCarousel'

function AllWords({ words }: { words: Word[] }) {
  const hasHydrated = useWordStore.use._hasHydrated()
  const currentWordIndex = useWordStore.use.currentWordIndex()
  const setCurrentWordIndex = useWordStore.use.setCurrentWordIndex()

  const handleIndexChange = (index: number) => {
    setCurrentWordIndex(index)
  }

  if (!hasHydrated) return <div>Loading...</div>

  return (
    <WordCarousel words={words} initialIndex={currentWordIndex} onIndexChange={handleIndexChange} />
  )
}

export default AllWords
