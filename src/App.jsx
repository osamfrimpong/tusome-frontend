import Intro from "./Landing/Intro"
import Bar from "./Landing/Bar"
import Features from './Landing/Features'
import Findout from "./Landing/Findout"
import Footer from "./Landing/Footer"

function App() {

  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <Footer />
    </>
  )
}

export default App
