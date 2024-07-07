import Link from 'next/link'

import WordCarousel from '@/components/WordCarousel'
import Menu from '@/components/Menu'

import { getWords } from '@/lib/data'

export default async function Home() {
  const menuItems = ['favorites', 'quizzes']

  const words = await getWords()

  return (
    <main className="flex min-h-screen sm:min-h-0 flex-col items-center justify-around p-4">
      <WordCarousel words={words} />
      <section className="flex w-full sm:hidden items-center justify-between">
        <Menu items={menuItems} />
        <Link href="/">🔩</Link>
      </section>
    </main>
  )
}
