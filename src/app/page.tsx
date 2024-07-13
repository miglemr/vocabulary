import Link from 'next/link'

import Words from '@/components/Words'
import Menu from '@/components/Menu'

import { getWords } from '@/lib/data'

export default async function Home() {
  const menuItems = ['favorites', 'quizzes']

  const words = await getWords()

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-4">
      <Words words={words} />
      <section className="fixed bottom-0 left-0 right-0 flex w-full sm:hidden items-center justify-between bg-white p-4">
        <Menu items={menuItems} />
        <Link href="/">🔩</Link>
      </section>
    </main>
  )
}
