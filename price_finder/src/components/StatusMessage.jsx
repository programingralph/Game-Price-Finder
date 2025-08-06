import { motion } from 'framer-motion'

function StatusMessage({ message }) {
  return (
    <motion.section
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-red-600 sm:text-4xl">{message}</h1>
    </motion.section>
  )
}

export default StatusMessage