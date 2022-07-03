import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Experience from './component/Experience'
import Work from './component/Work'
import Contact from './component/Contact'
import Footer from './component/Footer'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}

export default App