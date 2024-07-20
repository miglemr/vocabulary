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
    <button aria-label="favorite-button" onClick={toggleFavorite}>
      {isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
    </button>
  )
}

export default Favorite
