import { motion } from "framer-motion"
import hiteshprofile from "../assets/hiteshprofile.jpg" // Adjust the path as necessary
export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={hiteshprofile}
                  alt="Hitesh Sonawane - Director"
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Hitesh Sonawane</h3>
                <p className="text-lg text-blue-900 font-semibold">Director</p>
                <p className="text-gray-600 mt-2">Import/Export Specialist</p>
              </div>
            </motion.div>

            {/* Right Side - Quote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-8 h-8 text-blue-900/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic leading-relaxed pl-8">
                  "Success in global trade comes from building lasting relationships, understanding diverse markets, and
                  delivering excellence in every transaction. At Trade Shark Global, we don't just move products – we
                  connect dreams and opportunities across borders."
                </blockquote>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-4 border-blue-900 pl-6 mt-8"
              >
                <p className="text-gray-700 leading-relaxed">
                  With over a decade of experience in international trade, Hitesh Sonawane has built Trade Shark Global
                  into a trusted name in the import-export industry. His vision of connecting global markets with
                  integrity and innovation continues to drive our company's success.
                </p>
              </motion.div>

              <div className="flex items-center space-x-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">13+</div>
                  <div className="text-sm text-gray-600">Years Leading</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">Global</div>

                  <div className="text-sm text-gray-600">Network</div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">Excellence</div>
                  <div className="text-sm text-gray-600">Driven</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}