import Quiz from '@/components/quiz/Quiz'

import { getWords } from '@/lib/data'
import { createSentenceQuiz } from '@/lib/createQuiz'

async function SentenceQuizStart() {
  const words = await getWords()

  if (words === null) {
    return <h1>Failed to fetch words. Please try again later.</h1>
  }

  return <Quiz words={words} quizCreateFn={createSentenceQuiz} />
}
export default SentenceQuizStart
