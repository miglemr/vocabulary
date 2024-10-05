import Link from 'next/link'

import Intro from '@/components/quiz/Intro'
import Button from '@/components/Button'

async function SentenceQuizPage() {
  const quizDetails = {
    title: 'Sentence Completion',
    description:
      'Choose the correct word to complete each sentence. Each question presents a sentence with one missing word and four possible options. Select the word that best fits the context of the sentence.',
  }

  return (
    <div>
      <Intro title={quizDetails.title} description={quizDetails.description} />
      <div className="flex justify-center mt-6">
        <Link aria-label="Go to next page" href="/quiz/sentence/start">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  )
}
export default SentenceQuizPage
