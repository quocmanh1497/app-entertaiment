import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


//icons
import { LiaWalkingSolid } from "react-icons/lia";
import { BsTrainFreightFront } from "react-icons/bs";
import { FaBusAlt } from "react-icons/fa";
import { GiWoodenPier } from "react-icons/gi";
import { FaBiking } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const offers = [
    {
        icon: <LiaWalkingSolid />,
        image: "",
        text: "Tent Camping",
    },
    {
        icon: <BsTrainFreightFront />,
        image: "",
        text: "Tent Camping",
    },
    {
        icon: <FaBusAlt />,
        image: "",
        text: "Tent Camping",
    },
    {
        icon: <GiWoodenPier />,
        image: "",
        text: "Tent Camping",
    },
    {
        icon: <FaBiking />,
        image: "",
        text: "Tent Camping",
    },
]

export default function Offers() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="bg-[url('src/assets/background2.jpeg')] pb-24">
            <div className=' max-w-[1320px] mx-auto py-24'>
                <div className='flex flex-col items-center'>
                    <div className=' relative w-fit px-8 py-2 flex items-center justify-center' >
                        <span className=' bg-green rounded-md opacity-60 relative font-semibold'>
                            <h6 className=' text-black relative font-semibold' >The fire every day of fit</h6>
                        </span>
                    </div>
                    <h3 className=' lg:text-5xl text-3xl font-bold pb-8 text-white lg:w-4/5 text-center py-4'>
                        MERRY CHRISTMAS</h3>
                </div>

                <div>
                    <Carousel responsive={responsive} autoPlay={true} itemClass="pb-6 px-2">
                        {offers.map((offer, index) => (
                            <div key={offer.image} className=' relative group rounded-lg p-8'
                                style={{
                                    backgroundImage: hoveredIndex === index ? `url(${item.image})` : 'none',
                                    backgroundColor: hoveredIndex === index ? "transparent" : "black",
                                    backgroundSize: "cover", backgroundPosition: "center",
                                }}
                            >
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                {hoveredIndex === index && (
                                    <div className=' absolute inset-0 bg-black opacity-50 rounded-[10px]'></div>
                                )}
                                <div className=' relative py-8 rounded-lg'>
                                    <span className={`text-7xl ${hoveredIndex === index ? 'text-green' : 'text-orange'}`}>
                                        {offer.icon}
                                    </span>
                                    <p className=' text-white text-xl font-bold py-4'>{offer.text}</p>
                                    <p className=' text-[#d3d3d3] leading-7'>Lorem ipsum dolor sit amo, sed</p>
                                </div>
                                <div className=' absolute -bottom-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    <button className=' bg-green text-white p-2 rounded-full'>
                                        <IoArrowForward className=' text-xl' />
                                    </button>
                                </div>
                            </div>
                        ))}

                    </Carousel>
                </div>
            </div>
        </div>
    )
}
