import Link from 'next/link'

const quizList = [
  {
    link: '/sentence',
    title: 'Sentence Completion',
  },
  {
    link: '/definition',
    title: 'Word Definition',
  },
]

function QuizPage() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <header className="flex flex-col items-center space-y-10">
        <p className="text-sm text-center max-w-md">
          Put your word knowledge to the test and sharpen your vocabulary skills! Practice your
          favorite words or discover new ones to expand your vocabulary.
        </p>
        <h1>Select quiz</h1>
      </header>
      <ul className="sm:grid grid-cols-2 gap-16">
        {quizList.map((quiz, index) => (
          <li key={index}>
            <Link href={'/quiz' + quiz.link}>
              <div className="border-2 border-transparent bg-violet-300/60 rounded-xl my-4 p-2 sm:p-4 hover:border-violet-300 transition-all duration-300">
                <p className="text-center">{quiz.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuizPage
