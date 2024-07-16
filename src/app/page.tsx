import AllWords from '@/components/words/AllWords'

import { getWords } from '@/lib/data'

export default async function Home() {
  const words = await getWords()

  if (words === null) {
    return <p>Failed to fetch words. Please try again later.</p>
  }

  return <AllWords words={words} />
}
