import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Experience from './component/Experience'
import Work from './component/Work'
import Contact from './component/Contact'
import Footer from './component/Footer'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


const slides = [
                {url: 'http://localhost:3000/seller_product_details_customer5.PNG'},
                {url: 'http://localhost:3000/Ornamental.PNG'},
                {url: 'http://localhost:3000/input_reviews_customer6.PNG'}
            ]

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Work slides={slides}/>
            <Contact />
            <Footer />
        </>
    )
}

export default App