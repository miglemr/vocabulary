import Link from 'next/link'

import Word from '@/components/Word'
import Favorite from '@/components/Favorite'
import Audio from '@/components/Audio'
import Menu from '@/components/Menu'

import { prisma } from '@/lib/prisma'

export default async function Home() {
  const menuItems = ['favorites', 'quizzes']

  const words = await prisma.word.findFirst()

  console.log(words)

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-4">
      <Word />
      <div className="flex w-full items-center justify-evenly">
        <Audio />
        <Favorite />
      </div>
      <div className="flex w-full sm:hidden items-center justify-between">
        <Menu items={menuItems} />
        <Link href="/preferences/levels">🔩</Link>
      </div>
    </main>
  )
}
