import RoundedDiv from '@/components/RoundedDiv'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function BackButton(props: any) {
  return (
    <button {...props}>
      <RoundedDiv>
        <ArrowBackIcon sx={{ width: '15px', height: '15px' }} />
      </RoundedDiv>
    </button>
  )
}

export default BackButton
