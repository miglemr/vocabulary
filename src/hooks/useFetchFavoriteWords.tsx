import { useState, useEffect, useRef } from 'react'

import { Word } from '@prisma/client'

import { useWordStore } from '@/store/useWordStore'
import { WORDS_API_BASE_URL } from '@/lib/config'

export function useFetchFavoriteWords() {
  const [favoriteWords, setfavoriteWords] = useState<Word[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const hasHydrated = useWordStore.use._hasHydrated()
  const favoriteIds = useWordStore.use.favoriteIds()

  const initialWords = useRef([])

  useEffect(() => {
    if (!hasHydrated) return

    const url = WORDS_API_BASE_URL + `?id=${favoriteIds.join(',')}`

    if (initialWords.current.length === 0) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setfavoriteWords(data)
          initialWords.current = data
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    } else {
      setfavoriteWords(prevWords => prevWords.filter(word => favoriteIds.includes(word.id)))
    }
  }, [favoriteIds, hasHydrated])

  return {
    favoriteWords,
    isLoading,
  }
}
