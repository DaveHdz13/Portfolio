import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/About/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <AboutMe id="aboutMe"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </>
  )
}

export default App
