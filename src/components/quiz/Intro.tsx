import Link from 'next/link'

import BackIcon from '@/components/BackIcon'

function Intro({ title, description }: { title: string; description: string }) {
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
      </div>
    </div>
  )
}
export default Intro
