import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vocabulary',
  description: 'Enhance your vocabulary',
}

export type NavItem = {
  title: string
  link: string
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems: NavItem[] = [
    { title: 'All', link: '/' },
    { title: 'Favorites', link: '/favorites' },
    { title: 'Quiz', link: '/quiz' },
  ]

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-hidden`}>
        <div className="hidden sm:block">
          <Navbar items={navItems} />
        </div>
        <main className="flex justify-center items-center">
          <div>{children}</div>
        </main>
        <div className="fixed sm:hidden bottom-0 left-0 right-0 p-4">
          <Menu items={navItems} />
        </div>
      </body>
    </html>
  )
}
