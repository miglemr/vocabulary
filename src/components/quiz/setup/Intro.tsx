import Link from 'next/link'

import Button from '@/components/Button'
import BackIcon from '@/components/BackIcon'

function Intro({
  title,
  description,
  onNextClick,
}: {
  title: string
  description: string
  onNextClick: () => void
}) {
  return (
    <div>
      <div className="mb-6">
        <Link aria-label="Go to previous page" href="/quiz">
          <BackIcon />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center space-y-12 max-w-96">
        <header className="space-y-8">
          <h1 className="text-center font-semibold">{title}</h1>
          <p className="text-center text-sm">{description}</p>
        </header>
        <Button onClick={onNextClick}>Next</Button>
      </div>
    </div>
  )
}
export default Intro
