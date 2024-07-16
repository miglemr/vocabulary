import Link from 'next/link'

import QuizSetup from '@/components/quiz/QuizSetup'

import { getWords } from '@/lib/data'
import { createDefinitionQuiz } from '@/lib/createQuiz'

const quizDetails = {
  title: 'Word Definition',
  description:
    'Put your word knowledge to the test by matching definitions to the correct words. Each question provides a definition, and your task is to choose the word that best fits the definition from four options.',
  createFn: createDefinitionQuiz,
}

async function DefinitionQuizPage() {
  const words = await getWords()

  return (
    <main className="p-2 space-y-20">
      <Link href="/quiz">Back to quiz page</Link>
      <QuizSetup words={words} quizDetails={quizDetails} />
    </main>
  )
}
export default DefinitionQuizPage
