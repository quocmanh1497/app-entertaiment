import Hero from "./component/Hero"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Popular from "./component/Popular"
import Offers from "./component/Offers"
import Tour from "./component/Tour"
import Accordion from "./component/Accordion"




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
      <Popular />
      <Offers />
      <Tour />



      {/* <Accordion /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App
