
import Card from "./component/Card"
import Header from "./component/Header"
import Popular from "./component/Popular"
import Offers from "./component/Offers"
import Tour from "./component/Tour"
import Accordion from "./component/Accordion"
import Explore from "./component/Explore"
import Blog from "./component/Blog"
import Footer from "./component/Footer"



import React, { Component, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutUs from "./page/AboutUs"
import Tours from "./page/Tours"
import News from "./page/News"
import Contact from "./page/Contact"










function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    // <>
    //   <Header />
    //   <Card />
    //   <Popular />
    //   <Offers />
    //   <Tour />
    //   <Explore />
    //   <Blog />
    //   {/* <Accordion /> */}
    //   <Footer />
    // </>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/home" element={<Card />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
