import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Menu from '@/components/menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vocabulary',
  description: 'Enhance your vocabulary',
}

export type NavItem = {
  title: string
  link: string
  imgSrc: string
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems: NavItem[] = [
    { title: 'All', link: '/', imgSrc: '/alphabet.png' },
    { title: 'Favorites', link: '/favorites', imgSrc: '/favorite.png' },
    { title: 'Quiz', link: '/quiz', imgSrc: '/quiz.png' },
  ]

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-hidden`}>
        <div className="hidden sm:block bg-light-green shadow-sm">
          <Navbar items={navItems} />
        </div>
        <main className="flex justify-center items-center">{children}</main>
        <div className="fixed sm:hidden bottom-0 left-0 right-0 p-4">
          <Menu items={navItems} />
        </div>
      </body>
    </html>
  )
}
