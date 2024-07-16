function Intro({
  title,
  description,
  onStart,
}: {
  title: string
  description: string
  onStart: () => void
}) {
  return (
    <main className="flex flex-col items-center justify-center space-y-12">
      <header className="max-w-md space-y-8">
        <h1 className="text-center">{title}</h1>
        <p className="text-center text-sm">{description}</p>
      </header>
      <button onClick={onStart}>Start</button>
    </main>
  )
}
export default Intro
