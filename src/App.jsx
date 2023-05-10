import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import AboutMe from './components/About/AboutMe'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
    </>
  )
}

export default App
