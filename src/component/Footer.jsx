import React from "react"
import video from '../assets/video.mp4'


const Footer = () => {
    return (
        <section className="footer">
            <div className="overlay"></div>
            <video src={video} autoPlay muted loop type="video/mp4"></video>
        </section>
    )
}

export default Footer