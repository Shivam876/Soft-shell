import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Solutions',
    content: 'SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth and professional from start to finish.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Innovate Inc.',
    content: 'We were able to offset a significant portion of our software costs by selling unused licenses through SoftSell. Their valuation was fair and payment was quick.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col h-full">
                <blockquote className="flex-grow">
                  <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 