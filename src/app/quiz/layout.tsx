export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center justify-center h-screen sm:h-96">{children}</main>
  )
}
