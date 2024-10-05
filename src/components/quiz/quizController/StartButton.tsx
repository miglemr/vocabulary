function StartButton({ onStart }: { onStart: () => void }) {
  return (
    <button
      className="rounded-full py-2 px-6 border-4 font-medium transition-all duration-200 hover:border-green-200"
      onClick={onStart}
    >
      Start
    </button>
  )
}
export default StartButton
