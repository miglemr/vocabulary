import { useState, useEffect, useRef } from 'react'

import { Word } from '@prisma/client'

import { useWordStore } from '@/store/useWordStore'

const WORDS_API_BASE_URL = '/api/words'

function useFavoriteWords() {
  const [words, setWords] = useState<Word[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const initialWords = useRef([])

  const favoriteIds = useWordStore.use.favoriteIds()

  useEffect(() => {
    if (!favoriteIds) return

    if (initialWords.current.length === 0) {
      fetch(WORDS_API_BASE_URL + `?id=${favoriteIds.join(',')}`)
        .then(res => res.json())
        .then(data => {
          setWords(data)
          initialWords.current = data
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    } else {
      setWords(prevWords => prevWords.filter(word => favoriteIds.includes(word.id)))
      setIsLoading(false)
    }
  }, [favoriteIds])

  return {
    words,
    isLoading,
  }
}
export default useFavoriteWords
