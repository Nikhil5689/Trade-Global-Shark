import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Team from "./components/Team"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App