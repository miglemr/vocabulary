import AllWords from '@/components/words/AllWords'

import { getWords } from '@/lib/data'

export default async function Home() {
  const words = await getWords()

  return (
    <main className="flex min-h-screen sm:min-h-0 flex-col items-center justify-around p-4">
      <AllWords words={words} />
    </main>
  )
}
