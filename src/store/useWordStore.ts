import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

import { createSelectors } from '@/utils/createSelectors'

const STORAGE_KEY = 'Words'

export type WordState = {
  _hasHydrated: boolean
  currentWordIndex: number
  favoriteIds: number[]
}

type WordActions = {
  setHasHydrated: (state: boolean) => void
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
          _hasHydrated: false,
          currentWordIndex: 0,
          favoriteIds: [],
          setHasHydrated: state => {
            set({
              _hasHydrated: state,
            })
          },
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
          onRehydrateStorage: () => state => {
            state?.setHasHydrated(true)
          },
        },
      ),
    ),
  ),
)
