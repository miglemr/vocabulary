import AllWords from '@/components/words/AllWords'
import Error from '@/components/Error'

import { getWords } from '@/lib/data'

export default async function Home() {
  const words = await getWords()

  if (words === null) {
    return <Error errorMessage="Failed to fetch words. Please try again later." />
  }

  return <AllWords words={words} />
}
