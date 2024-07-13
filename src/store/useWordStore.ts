import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

import { createSelectors } from '@/utils/createSelectors'

const STORAGE_KEY = 'Words'

export type WordState = {
  currentWordIndex: number | undefined
  favoriteIds: number[] | undefined
}

type WordActions = {
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  setCurrentWordIndex: (id: number) => void
}

type WordStore = WordState & WordActions

export const useWordStore = createSelectors(
  create<WordStore>()(
    devtools(
      persist(
        set => ({
          currentWordIndex: undefined,
          favoriteIds: undefined,
          addFavorite: (id: number) =>
            set(state => ({
              favoriteIds: state.favoriteIds ? [...state.favoriteIds, id] : [id],
            })),
          removeFavorite: (id: number) =>
            set(state => ({
              favoriteIds: state.favoriteIds
                ? state.favoriteIds.filter(existingId => existingId !== id)
                : state.favoriteIds,
            })),
          setCurrentWordIndex: (index: number) =>
            set(() => ({
              currentWordIndex: index,
            })),
        }),
        {
          name: STORAGE_KEY,
        },
      ),
    ),
  ),
)
