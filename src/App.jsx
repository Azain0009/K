import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Showcase from './pages/Showcase'
import Reviews from './pages/Reviews'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Integration from './pages/Integration'
import Solving from './pages/Solving'
import Features from './pages/Features'
import Management from './pages/Management'
import Kozo from './pages/kozo'



function App() {
    return (
    <>
        <Navbar />
        <Showcase />
        <Management />  
        <Kozo />
        <Features />
        <Solving />
        <Integration />
        <Team />
        <Reviews />
        <Contact />
        <Footer />
        
      
    
    </>
      )
}

export default App
