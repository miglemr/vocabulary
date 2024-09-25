import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

function Favorite({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean
  toggleFavorite: () => void
}) {
  return (
    <button aria-label="Add to favorites" onClick={toggleFavorite}>
      {isFavorite ? (
        <FavoriteRoundedIcon sx={{ color: '#E78895' }} />
      ) : (
        <FavoriteBorderRoundedIcon sx={{ color: '#E78895' }} />
      )}
    </button>
  )
}

export default Favorite
