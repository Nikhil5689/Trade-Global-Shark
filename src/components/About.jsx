import { motion } from "framer-motion"

export default function About() {
  const exportItems = [
    { name: "Cosmetics", icon: "💄", description: "Premium beauty and skincare products" },
    { name: "Leather", icon: "👜", description: "High-quality leather goods and accessories" },
    { name: "Gems", icon: "💎", description: "Precious and semi-precious gemstones" },
    { name: "Agriculture", icon: "🌾", description: "Organic and conventional agricultural products" },
    { name: "Food & Bevarages", icon: "🍏", description: "Quality food items and beverages" }, 
    { name: "Handicrafts", icon: "🎨", description: "Artisanal crafts and handmade products" },
    { name: "Other Exports", icon: "📦", description: "Diverse range of quality products like Jewellery , Textiles , Toys , Stationery & Puja Items" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Trusted Global Trade Partner</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trade Shark Global has been at the forefront of international trade since 2012, specializing in the import
              and export of premium quality products. We bridge markets across continents, ensuring seamless trade
              relationships and exceptional service delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence, combined with deep market knowledge and strategic partnerships, makes us the
              preferred choice for businesses looking to expand their global footprint.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">800+</div>
                <div className="text-sm text-gray-600">Product Delievered</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-semibold text-gray-900 mb-8">Our Core Export Items</h3>
            {exportItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white  p-6 rounded-xl shadow-lg hover:shadow-xl transition-300px  duration-200 border-l-4 border-blue-900"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}