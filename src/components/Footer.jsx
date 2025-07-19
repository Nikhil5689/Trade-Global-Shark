import { motion } from "framer-motion"
import email from "../assets/email.png" // Adjust the path as necessary
import phone from "../assets/phone.png" // Adjust the path as necessary
import linkedin from "../assets/linkedin.svg" // Adjust the path as necessary
import instagram from "../assets/instagram.png" // Adjust the path as necessary
import phonenew from "../assets/phonenew.png" // Adjust the path as necessary

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hitesh-sonawane-896296253",
      icon: <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tradesharkglobalexim?igsh=d2dtZnlvMXU4azA3",
      icon: <img src={instagram} alt="Instagram" className="w-6 h-6" />,
    },
    {
      name: "Email",
      href: "mailto:tradesharkglobalexim@gmail.com",
      icon: <img src={email} alt="Email" className="w-6 h-6" />,
    },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Trade Shark Global</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in international trade since 2012. Connecting global markets with excellence,
              integrity, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-4xl hover:text-blue-400 transition-colors duration-200 w-12 h-12 flex items-center justify-center "
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400">📍</span>
                <span className="text-sm">903, Tulsi Sapphire, Plot B1A, Sec 8, Ulwe, Navi Mumbai 410206</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📞</span>
                <a href="tel:+917982176193" className="text-sm hover:text-blue-400 transition-colors duration-200">
                  +91 79821 76193
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a
                  href="mailto:tradesharkglobalexim@gmail.com"
                  className="text-sm hover:text-blue-400 transition-colors duration-200 break-all"
                >
                  tradesharkglobalexim@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">© Trade Shark Global 2012–2025. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Made by Websolute */}
        <div className="pt-4 flex items-center justify-center text-gray-400 text-xs">
          <span>
            Made with <span className="text-red-500 text-base inline-block align-middle mx-1">♥</span> by{" "}
            <a
              href="https://websolute.in/"
              className="text-blue-400 hover:underline hover:text-blue-500 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Websolute
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}