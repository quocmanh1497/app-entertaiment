import React from 'react'


//icons
import { FaVest } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { FaPlaneSlash } from "react-icons/fa";
import { RiPlaneLine } from "react-icons/ri";

const Why_us = [
    {
        text: "Safety First Always",
        icons: <FaVest />,
    },
    {
        text: "Low price & friendly",
        icons: <TbReportMoney />,
    },
    {
        text: "Trusted travel guide",
        icons: <FaPlaneSlash />,
    },
]

export default function Explore() {
    return (
        <div>

            <div className=' px-3'>

                <div className=' max-w-[1320px] mx-auto bg-[url(src/assets/explore/explore6.jpeg)] bg-green bg-no-repeat bg-cover rounded-[10px] relative z-10 lg:mb-0 -mb-24'>
                    <div className=' lg:p-16 py-8 px-4 lg:flex justify-between items-center'>
                        <div className=' flex items-center gap-4 lg:mb-0 mb-4 lg:w-3/4'>
                            <RiPlaneLine size={150} color='red' />
                            <span className=' text-black'>
                                <p className=' text-sm'>Question and ...</p>
                                <h4 className=' lg:text-4xl text-2xl font-bold'> Ready for adventure, let's explore the newest and most interesting things</h4>
                            </span>
                            <button className=' translate-x-40 bg-red-600 rounded-full text-lg  shadow  py-4 px-8 font-bold text-white'>
                                Explore
                            </button>
                        </div>
                    </div>
                </div>


                <div className=' lg:flex lg:-mt-20'>
                    <img
                        src="src/assets/explore/explore2.jpeg"
                        alt=''
                        className=' lg:w-1/2 w-full lg:h-auto h-[350px] object-cover'
                    />
                    <div className=' lg:w-1/2 bg-[url()] bg-no-repeat bg-cover lg:p-20 lg:pt-44 pr-4 py-20 px-3 bg-[#f3f8f6] '>
                        <div className=' flex flex-col'>
                            <div className=' relative w-fit px-8 py-2 items-center flex justify-center flex-wrap' >
                                <span className=' bg-black rounded-md  opacity-15  w-full h-full z-10'></span>
                                <h6 className=' text-green relative font-semibold'>
                                    Why choose us
                                </h6>
                            </div>
                            <h3 className=' lg:text-5xl text-3xl font-bold pb-8 py-4'>
                                Great opportunity for adventure & travels
                            </h3>
                        </div>
                        <div className='flex flex-col gap-4 pt-8'>
                            {Why_us.map((item) => (
                                <div key={item} className=' flex items-center gap-4'>
                                    <span className=' bg-green rounded-md p-4 text-white'>
                                        {item.icons}
                                    </span>
                                    <span className=' lg:w-2/3'>
                                        <p className=' font-bold text-xl  pb-2'>{item.text}</p>
                                        <p className='text-gray-400'>Christmas is an opportunity to heal spiritual wounds</p>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
