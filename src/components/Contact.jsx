import { motion } from "framer-motion"

export default function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      label: "Phone",
      value: "+91 79821 76193",
      href: "tel:+917982176193",
      description: "Call us for immediate assistance",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "tradesharkglobalexim@gmail.com",
      href: "mailto:tradesharkglobalexim@gmail.com",
      description: "Send us your inquiries",
    },
    {
      icon: "👨‍💼",
      label: "Role",
      value: "Director – Import/Export",
      href: null,
      description: "Hitesh Sonawane",
    },
    {
      icon: "📍",
      label: "Address",
      value: "903, Tulsi Sapphire, Plot B1A, Sec 8, Ulwe, Navi Mumbai 410206",
      href: null,
      description: "Visit our office",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get a Quote</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to expand your global trade? Get in touch with our experts today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Tulsi+Sapphire,+Sector+8,+Ulwe,+Navi+Mumbai,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trade Global Shark Office Location"
               
              ></iframe>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 border-l-4 border-blue-900"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-200 block mb-1"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium mb-1">{info.value}</p>
                      )}
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Join thousands of satisfied clients who trust Trade Global Shark for their international trade needs.
                Let's discuss how we can help your business grow globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+917982176193"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="mailto:tradesharkglobalexim@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-900 transition-all duration-200"
                >
                  Send Email
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}