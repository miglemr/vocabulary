function Favorite({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean
  toggleFavorite: () => void
}) {
  return (
    <div>
      <button onClick={toggleFavorite}>{isFavorite ? <p>💗</p> : <p>💟</p>}</button>
    </div>
  )
}

export default Favorite
