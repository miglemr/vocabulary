import Link from 'next/link'

function Navbar() {
  return (
    <nav className="hidden sm:flex justify-between items-center h-10 bg-slate-300 px-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Favorites</Link>
        </li>
        <li>
          <Link href="/">Quizzes</Link>
        </li>
      </ul>
      <div>
        <Link href="/">🔩</Link>
      </div>
    </nav>
  )
}
export default Navbar
