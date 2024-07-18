import Quiz from '@/components/quiz/Quiz'

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
    return <h1>Failed to fetch words. Please try again later.</h1>
  }

  return <Quiz words={words} quizDetails={quizDetails} />
}
export default SentenceQuizPage
