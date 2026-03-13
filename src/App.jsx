import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import StatsSection from "./Components/StatsSection"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsSection />
      <Hero />
    </div>
  )
}

export default App
