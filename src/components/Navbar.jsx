import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
// import { delay } from "framer-motion/dom" // You don't need this import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Adjust this to your actual navbar height in px (for mobile)
  const NAVBAR_HEIGHT = 80

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "team", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Updated scrollToSection with offset and delay for mobile menu
  const scrollToSection = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      setTimeout(() => {
        const yOffset = -NAVBAR_HEIGHT
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }, 300) // Adjust delay if your menu transition is longer/shorter
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <img
              src={logo}
              alt="Trade Shark Global Logo"
              className="h-20 w-32 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="text-gray-700 hover:text-blue-900 focus:outline-none" 
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}