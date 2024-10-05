import Link from 'next/link'

import Intro from '@/components/quiz/Intro'
import Button from '@/components/Button'

async function DefinitionQuizPage() {
  const quizDetails = {
    title: 'Word Definition',
    description:
      'Put your word knowledge to the test by matching definitions to the correct words. Each question provides a definition, and your task is to choose the word that best fits the definition from four options.',
  }

  return (
    <div>
      <Intro title={quizDetails.title} description={quizDetails.description} />
      <div className="flex justify-center mt-6">
        <Link aria-label="Go to next page" href="/quiz/definition/start">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  )
}
export default DefinitionQuizPage
