import Quiz from '@/components/quiz/Quiz'

import { getWords } from '@/lib/data'
import { createDefinitionQuiz } from '@/lib/createQuiz'

async function DefinitionQuizStart() {
  const words = await getWords()

  if (words === null) {
    return <h1>Failed to fetch words. Please try again later.</h1>
  }

  return <Quiz words={words} quizCreateFn={createDefinitionQuiz} />
}
export default DefinitionQuizStart
