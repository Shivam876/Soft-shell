import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            Transform Your Unused Software Licenses into Cash
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300">
            The smart way to sell your enterprise software licenses. Fast, secure, and hassle-free.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Your License Valuation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 