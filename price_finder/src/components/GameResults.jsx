import { motion } from 'framer-motion'

function GameResults({ gameData }) {
  if (
    !gameData.success ||
    !gameData.results ||
    !gameData.results.items ||
    gameData.results.items.length === 0
  ) {
    return (
      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl">
          No game found or invalid search
        </h1>
      </motion.section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl">
        Search Results <span className='text-teal-200'>({gameData.results.items.length} found)</span>
      </h1>
      <p className="text-teal-200 mb-8">{gameData.message}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameData.results.items.map((item, index) => (
          <motion.article
            key={index}
            className="bg-gradient-to-r from-green-600 via-yellow-300 to-blue-400 bg-opacity-50 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title || 'N/A'}
            </h2>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Availability: {item.text || 'N/A'}
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Lowest Price:</span>{' '}$
              {item.game_info && item.game_info.lowest_price
                ? item.game_info.lowest_price
                : 'N/A'}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Platforms:</span>{' '}
              {item.game_info && item.game_info.platforms
                ? item.game_info.platforms.map((p) => p.name).join(', ')
                : 'N/A'}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Release Date:</span>{' '}
              {item.game_info && item.game_info.release_date
                ? new Date(item.game_info.release_date * 1000).toLocaleDateString()
                : 'N/A'}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default GameResults