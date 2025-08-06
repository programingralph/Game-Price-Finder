import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import GameSearch from './components/GameSearch.jsx'
import GameResults from './components/GameResults.jsx'
import StatusMessage from './components/StatusMessage.jsx'

function App() {
  const [apiStatus, setApiStatus] = useState(null)
  const [gameData, setGameData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Fetch API status on mount
  useEffect(() => {
    const fetchApiStatus = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('https://www.nexarda.com/api/v3/status')
        setApiStatus(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching API status:', err.message)
        setError('Could not reach API')
        setApiStatus(null)
      } finally {
        setIsLoading(false)
      }
    }
    fetchApiStatus()
  }, [])

  // Handle game search
  const handleSearch = async (gameName) => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://www.nexarda.com/api/v3/search?type=games&q=${encodeURIComponent(gameName)}&currency=USD&output=json`
      )
      setGameData(response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching game data:', err.message)
      setError('Something went wrong!')
      setGameData(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.main
      className="min-h-screen bg-[url(background.png)] py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {isLoading ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="animate-spin h-8 w-8 text-blue-600 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-gray-600 mt-2">Loading...</p>
          </motion.div>
        ) : error ? (
          <StatusMessage message={error} />
        ) : gameData ? (
          <GameResults gameData={gameData} />
        ) : apiStatus ? (
          apiStatus.online ? (
            <GameSearch onSearch={handleSearch} />
          ) : (
            <StatusMessage message="API server is down" />
          )
        ) : (
          <StatusMessage message="Could not reach API" />
        )}
      </div>
    </motion.main>
  )
}

export default App