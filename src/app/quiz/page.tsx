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

function Quiz() {
  return (
    <section className="flex flex-col items-center">
      <header>
        <h1>Quiz</h1>
      </header>
      <ul className="sm:grid grid-cols-2 gap-16">
        {quizList.map((quiz, index) => (
          <li key={index}>
            <Link href={'/quiz' + quiz.link}>
              <div className="border-2 rounded-xl my-4 p-2 sm:p-4 hover:border-sky-400">
                <h1 className="text-center">{quiz.title}</h1>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Quiz
