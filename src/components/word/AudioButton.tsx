import _ from 'lodash'

function AudioButton({ url }: { url: string }) {
  const throttledStart = _.throttle(() => {
    const audio = new Audio(url)
    audio.play()
  }, 1000)

  return (
    <div>
      <button onClick={throttledStart}>🔉</button>
    </div>
  )
}
export default AudioButton
