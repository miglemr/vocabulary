export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen p-2 sm:pb-28">
      {children}
    </main>
  )
}
