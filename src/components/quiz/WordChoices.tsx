import classNames from 'classnames'

function WordChoices({
  isFavoritesAvailable,
  onChoice,
}: {
  isFavoritesAvailable: boolean
  onChoice: (value: string) => void
}) {
  const favoritesClasses = classNames(
    'flex items-center justify-center w-32 h-32 border-2 rounded-md px-2',
    {
      'bg-gray-100': !isFavoritesAvailable,
    },
  )

  return (
    <main className="grid grid-rows-2 justify-center gap-y-4">
      <button onClick={() => onChoice('favorites')} disabled={!isFavoritesAvailable}>
        <div className={favoritesClasses}>
          <p>Favorites</p>
        </div>
      </button>
      <button onClick={() => onChoice('all')}>
        <div className="flex items-center justify-center w-32 h-32 border-2 rounded-md px-2">
          <p>All words</p>
        </div>
      </button>
    </main>
  )
}
export default WordChoices
