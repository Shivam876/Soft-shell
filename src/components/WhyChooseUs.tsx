import { motion } from 'framer-motion';
import { ShieldCheckIcon, BanknotesIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Secure Transactions',
    description: 'Bank-level security protocols and encrypted data transfer',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Best Market Value',
    description: 'Get the highest value for your software licenses',
    icon: BanknotesIcon,
  },
  {
    title: 'Quick Process',
    description: 'Complete the entire process within 48 hours',
    icon: ClockIcon,
  },
  {
    title: 'Expert Support',
    description: '24/7 dedicated support from our license specialists',
    icon: UserGroupIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 