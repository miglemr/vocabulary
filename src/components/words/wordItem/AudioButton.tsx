import _ from 'lodash'

import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'

function AudioButton({ url }: { url: string }) {
  const audio = new Audio(url)

  const throttledStart = _.throttle(() => {
    audio.play()
  }, 1000)

  return (
    <button aria-label="Play audio" onClick={throttledStart}>
      <VolumeUpRoundedIcon />
    </button>
  )
}
export default AudioButton
