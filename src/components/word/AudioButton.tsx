function AudioButton({ url }: { url: string }) {
  const start = () => {
    const audio = new Audio(url)
    audio.play()
  }

  return (
    <div>
      <button onClick={start}>🔉</button>
    </div>
  )
}
export default AudioButton
