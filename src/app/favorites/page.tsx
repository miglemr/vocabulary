'use client'

import Link from 'next/link'

import FavoriteWords from '@/components/FavoriteWords'
import Menu from '@/components/Menu'
import useFavoriteWords from '@/hooks/useFavoriteWords'

function Favorites() {
  const menuItems = ['all', 'quizzes']

  const { words, isLoading } = useFavoriteWords()

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-4">
      {isLoading ? <p className="pt-24">Loading</p> : <FavoriteWords words={words} />}
      <section className="fixed bottom-0 left-0 right-0 flex w-full sm:hidden items-center justify-between bg-white p-4">
        <Menu items={menuItems} />
        <Link href="/">🔩</Link>
      </section>
    </main>
  )
}
export default Favorites
