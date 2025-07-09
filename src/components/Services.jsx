import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      title: "Import Services",
      description: "Comprehensive import solutions for businesses worldwide",
      icon: "📥",
      features: ["Custom Clearance", "Documentation", "Quality Assurance", "Logistics Management"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Export Services",
      description: "Seamless export operations to global markets",
      icon: "📤",
      features: ["Market Research", "Product Sourcing", "Export Documentation", "Shipping Solutions"],
      color: "from-green-500 to-green-700",
    },
    {
      title: "Trade Consultation",
      description: "Expert guidance for international trade success",
      icon: "💼",
      features: ["Market Analysis", "Risk Assessment", "Compliance Support", "Strategy Development"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control for all products",
      icon: "✅",
      features: ["Product Inspection", "Quality Testing", "Certification", "Standards Compliance"],
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Logistics Solutions",
      description: "End-to-end logistics and supply chain management",
      icon: "🚚",
      features: ["Warehousing", "Transportation", "Inventory Management", "Distribution"],
      color: "from-red-500 to-red-700",
    },
    {
      title: "Documentation Support",
      description: "Complete documentation and compliance assistance",
      icon: "📋",
      features: ["Legal Documentation", "Customs Forms", "Certificates", "Regulatory Compliance"],
      color: "from-teal-500 to-teal-700",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive trade solutions designed to help your business thrive in the global marketplace
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg //
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" // 
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
             

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}