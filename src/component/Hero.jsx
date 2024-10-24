import React from 'react'
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { TbChristmasTree } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

function Hero() {
    return (
        <div>
            <section className=' relative bg-black lg:h-[80vh]'
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="3000"
            >
                <img src="src/assets/noel(3).jpg" alt="" className=' absolute h-full w-full object-cover'
                />
                <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto'>
                    <span className=' lg:text-5xl text-3xl text-white text-center font-bold relative'>
                        Where do you want to go for Christmas?
                        <div className=' bg-orange text-white text-lg left-8p px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]'>
                            Explore
                        </div>
                    </span>
                    <p className=' text-white text-center text-2xl my-8'>
                        Checkout Beautiful Place Around
                    </p>

                    {/* button */}
                    <div className=' bg-white p-6 rounded-lg shadow lg:flex items-center justify-between w-full'>

                        <div className=' flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4'>
                            < MdOutlineParagliding className=' text-red-600 text-3xl mr-2' />
                            <div className='flex flex-col w-full'>
                                <p className=' text-red-600 text-sm'>Location</p>
                                <select className=' focus:outline-none'>
                                    <option value="">Location</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4'>
                            <TbChristmasTree className=' text-red-600 text-3xl mr-2' />
                            <div className='flex flex-col w-full'>
                                <p className=' text-red-600 text-sm'>Type</p>
                                <select className=' focus:outline-none'>
                                    <option value="">Booking</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4'>
                            <AiOutlineCalendar className=' text-red-600 text-3xl mr-2' />
                            <div className='flex flex-col w-full'>
                                <p className=' text-red-600 text-sm'>Date From</p>
                                <select className=' focus:outline-none'>
                                    <option value="">Date</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4'>
                            <FaUsers className=' text-red-600 text-3xl mr-2' />
                            <div className='flex flex-col w-full'>
                                <p className=' text-red-600 text-sm'>Guest</p>
                                <input
                                    type="number"
                                    min={0}
                                    className=' focus:outline-none w16'
                                />
                            </div>
                        </div>
                        <div className=' flex items-center mr-4 lg:mt-0 mt-4'>
                            <IoMdOptions className=' lg:block hidden text-3xl mr-2' />
                            <button className=' bg-green text-white flex items-center justify-center gap-4 px-6 py-3 outline-none border-none rounded-lg font-semibold text-sm w-full'>
                                <MdSearch size={20} />SEARCH
                            </button>
                        </div>
                    </div>
                    <img
                        src="src/assets/arrow.avif" alt='' className='lg:block hidden my-4 -ml-96'
                    />
                    <p className=' text-white font-semibold lg:text-3xl text-xl lg:py-0 py-8'>Our Browse the select</p>
                </div>
            </section>
        </div>
    )
}

export default Hero