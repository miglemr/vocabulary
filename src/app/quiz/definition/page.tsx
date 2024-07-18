import Quiz from '@/components/quiz/Quiz'

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

  if (words === null) {
    return <h1>Failed to fetch words. Please try again later.</h1>
  }

  return <Quiz words={words} quizDetails={quizDetails} />
}
export default DefinitionQuizPage
