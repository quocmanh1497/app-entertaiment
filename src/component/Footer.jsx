import React from 'react'

//icon
import { GoArrowUpRight } from "react-icons/go";
import { BsSendCheck } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

export default function
    () {
    return (
        <footer className=' bg-[#1D231F] pt-44'>
            <div className=' max-w-[1320px] mx-auto px-3'>
                <div className=' lg:flex gap-16 pb-20'>
                    <div className=' flex justify-between items-center lg:pb-0 lg:w-1/2 pb-8 '>
                        <span className=' flex  gap-4 items-center lg:w-3/4'>
                            <img src='src/assets/icon-footer.jpeg' alt='' height={150} width={150} className=' rounded-3xl' />
                            <p className=' text-white font-bold'>Need any support for tour & travel ?</p>
                        </span>
                        <div className=' lg:w-1/4 lg:flex hidden justify-end'>
                            <button className=' bg-green rounded-full text-white w-16 h-16 flex items-center justify-center'>
                                <GoArrowUpRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className=' flex justify-between items-center lg:pb-0 lg:w-1/2 pb-8'>
                        <span className=' flex gap-4 items-center lg:w-3/4'>
                            <img src='src/assets/icon-footer2.jpeg' alt='' height={150} width={150} className=' rounded-3xl' />
                            <p className=' text-white font-bold'>Ready to Get Started With Vacations</p>
                        </span>
                        <div className=' lg:w-1/4 lg:flex hidden justify-end'>
                            <button className=' bg-orange rounded-full text-white w-16 h-16 flex items-center justify-center'>
                                <GoArrowUpRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' flex items-center justify-between'>
                        <div>
                            <img src='src/assets/logo1.png' alt='' width={130} className=' rounded-full' />
                            <p className=' my-5  text-white'>To take trivial example which us ever  undertakes laborious</p>
                            <div className=' flex items-center gap-2 text-white'>
                                <button className=' rounded-full p-3 hover:bg-white hover:text-black bg-[#262D28]'>
                                    <BsTwitter size={14} />
                                </button>
                                <button className=' rounded-full p-3 hover:bg-white hover:text-black bg-[#262D28]'>
                                    <FaFacebook size={14} />
                                </button>
                                <button className=' rounded-full p-3 hover:bg-white hover:text-black bg-[#262D28]'>
                                    <FaInstagram size={14} />
                                </button>
                                <button className=' rounded-full p-3 hover:bg-white hover:text-black bg-[#262D28]'>
                                    <FaLinkedin size={14} />
                                </button>
                            </div>
                        </div>


                        <div className=' lg:w-2/34 text-white'>
                            <h6 className=' text-xl font-bold my-5 lg:mt-0'>Pages</h6>
                            <ul className='flex flex-col gap-4'>
                                <a href='#' className=' hover:text-green' >About Us</a>
                                <a href='#' className=' hover:text-green' >Community Blog</a>
                                <a href='#' className=' hover:text-green' >Work with Us</a>
                                <a href='#' className=' hover:text-green'>Privacy Policy</a>
                                <a href='#' className=' hover:text-green' >Contact Us</a>
                            </ul>
                        </div>

                        <div className='flex flex-col lg:w-1/4 text-white'>
                            <h6 className=' text-white text-xl font-bold my-5 lg:mt-0'>Newsletter</h6>
                            <p className=' my-5'>Subscribe our Newsletter to get our latest  update & news</p>
                            <div className=' relative h-1/4 flex items-center'>
                                <input type='email' placeholder='Email address' className=' bg-white rounded-l-lg px-3 h-full w-full outline-none' />
                                <button className=' bg-green text-white w-12 h-full flex items-center justify-center text-2xl rounded-r-lg '><BsSendCheck /></button>
                            </div>
                            <label className=' pt-2'>
                                <input type='checkbox' /> I agree to all term and polices
                            </label>
                        </div>

                        <div className=' pt-[15px] lg:w-1/6'>
                            <ul className=' flex flex-col gap-4 text-white'>
                                <div className='flex items-center gap-4'>
                                    <button className=' flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green hover:bg-white'>
                                        <MdPhone className=' text-green' />
                                    </button>
                                    <span>
                                        <p>Drop a Line</p>
                                        <p>(+84)704010497</p>
                                    </span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <button className=' flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green'>
                                        <MdOutlineMailOutline className=' text-green' />
                                    </button>
                                    <span>
                                        <p>Email Address</p>
                                        <p>contact@example.com</p>
                                    </span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <button className=' flex items-center gap-2 bg-[#262d28] rounded-full w-fit justify-center p-4 hover:text-green'>
                                        <MdOutlineLocationOn className=' text-green' />
                                    </button>
                                    <span>
                                        <p>Visit office</p>
                                        <p>100 Le Dinh ly Street,Hai Chau,Da Nang</p>
                                    </span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-black text-white py-2 flex justify-center'>
                @2024 Copyrights by ManhNguyen. All Rights Reserved
            </div>
        </footer>
    )
}
