import CircularProgress from '@mui/material/CircularProgress'

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <CircularProgress />
    </div>
  )
}
export default LoadingSpinner
