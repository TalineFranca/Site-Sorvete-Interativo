import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Flavors } from './components/Flavors'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Flavors />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
