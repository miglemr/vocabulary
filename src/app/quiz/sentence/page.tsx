import Link from 'next/link'

import QuizSetup from '@/components/quiz/QuizSetup'

import { getWords } from '@/lib/data'
import { createSentenceQuiz } from '@/lib/createQuiz'

const quizDetails = {
  title: 'Sentence Completion',
  description:
    'Choose the correct word to complete each sentence. Each question presents a sentence with one missing word and four possible options. Select the word that best fits the context of the sentence.',
  createFn: createSentenceQuiz,
}

async function SentenceQuizPage() {
  const words = await getWords()

  if (words === null) {
    return (
      <main className="p-2 space-y-20">
        <Link href="/quiz">Back to quiz page</Link>
        <p>Failed to fetch words. Please try again later.</p>
      </main>
    )
  }

  return (
    <main className="p-2 space-y-20">
      <Link href="/quiz">Back to quiz page</Link>
      <QuizSetup words={words} quizDetails={quizDetails} />
    </main>
  )
}
export default SentenceQuizPage
