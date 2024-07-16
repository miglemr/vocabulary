import _ from 'lodash'

import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'

function AudioButton({ url }: { url: string }) {
  const throttledStart = _.throttle(() => {
    const audio = new Audio(url)
    audio.play()
  }, 1000)

  return (
    <button onClick={throttledStart}>
      <VolumeUpRoundedIcon />
    </button>
  )
}
export default AudioButton
