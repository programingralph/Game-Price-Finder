import { useState } from 'react'
import { motion } from 'framer-motion'

function GameSearch({ onSearch }) {
  const [gameName, setGameName] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (gameName.trim()) {
      onSearch(gameName)
      setGameName('')
    }
  }

  return (
    <motion.section
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:text-5xl">
        Welcome!
      </h1>
      <h2 className="text-lg text-teal-200 mb-8 sm:text-xl max-w-2xl mx-auto">
        Enter the name of your game below to find out its pricing and platform
        information
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Type exact name here"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          name="gameName"
          id="gameName"
          aria-label="Game name"
          className="w-full sm:w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-teal-200"
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Search
        </motion.button>
      </form>
    </motion.section>
  )
}

export default GameSearch