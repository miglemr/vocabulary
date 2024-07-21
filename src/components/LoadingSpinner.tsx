import CircularProgress from '@mui/material/CircularProgress'

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <CircularProgress sx={{ color: '#a3a3a3' }} />
    </div>
  )
}
export default LoadingSpinner
