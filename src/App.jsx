import Hero from "./component/Hero"
import Footer from "./component/Footer"
import Header from "./component/Header"
import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App
