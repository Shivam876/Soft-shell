import { motion } from 'framer-motion';
import { CloudArrowUpIcon, CurrencyDollarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Upload License',
    description: 'Simply upload your software license details through our secure platform',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Get Valuation',
    description: 'Receive an instant market-based valuation for your licenses',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Get Paid',
    description: 'Accept the offer and receive payment within 24-48 hours',
    icon: CurrencyDollarIcon,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 