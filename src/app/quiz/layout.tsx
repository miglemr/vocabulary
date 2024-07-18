export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center justify-center sm:justify-start sm:mt-14 h-screen p-2">
      {children}
    </main>
  )
}
