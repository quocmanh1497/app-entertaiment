
/* eslint-disable react/props-types */
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Accordion from './Accordion';

//icon
import { BsPlay } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdStart } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";
import { WiTime3 } from "react-icons/wi";
import { MdPeopleOutline } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Tours = ({ image, name }) => (
    <div>
        <div className=' relative overflow-hidden rounded-t-lg'>
            <img src={image} alt='' className=' rounded-t-lg hoverImg' />
            <div className=' absolute flex justify-between top-4 left-4 right-4'>
                <p className=' bg-[#14B0C3] rounded-md px4 text-white text-sm'>FEATURE</p>
                <button className=' bg-[#00000066] pl-1 rounded-md'><CiHeart />
                </button>
            </div>
        </div>
        <div className=' border border-[#ebe6de] rounded-b-lg relative '>
            <div className=' absolute w-full h-5 top-5 bg-white rounded-t-[20px]'></div>
            <div className=' px-6'>
                <div className=' flex items-center gap-4 justify-between relative'>
                    <span className=' flex justify-center'>
                        {[Array].map((_, indexedDB) => (
                            <FaRegStar key={indexedDB} className=' text-[#ffa001] text-xl' />
                        ))}
                    </span>
                    <span className=' flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg'>
                        <div className=' relative'>
                            <CiCamera size={24} />
                            <button className=' bg-green text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0'>5</button>
                        </div>
                        <IoCameraOutline size={24} />
                    </span>
                </div>
                <h4 className=' text-xl font-semibold py-4 hover:text-green'>{name}</h4>
                <span className=' flex items-center gap-2'>
                    <MdLocationPin className=' text-green text-xl' />
                    <p className=' text-[#757783] text-sm'>Main Street , NY</p>
                </span>
                <span className=' text-[#757783] flex py-4'>
                    <LiaDollarSignSolid className=' text-green text-xl' />From
                    <p className=' text-green'>$59.00</p>
                </span>
                <div className=' flex justify-between border-t py-2'>
                    <div className=' flex items-center gap-4'>
                        <span className=' flex items-center gap-1'>
                            <WiTime3 className=' text-green' />10 days
                        </span>
                        <span className=' flex items-center gap-1'>
                            <MdPeopleOutline className=' text-green' />50
                        </span>
                    </div>
                    <a href='#' className=' flex items-center gap-2 text-sm mt-2'>
                        Explore <MdArrowRightAlt /></a>
                </div>
            </div>
        </div>
    </div>
)




export default function Tour() {
    return (
        <div>
            {/* //sec 1 */}
            <section>
                <div className=' max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg'>
                    <div className=' w-full relative lg:w-1/2 lg:mt-0 -mt-24 z-10 lg:px-0 px-3'>
                        <img src="src/assets/tour/tours1.jpeg" alt='' className=' w-full h-64 lg:h-full rounded-md object-cover'
                        />
                        <div className=' absolute inset-0 flex items-center justify-center'>
                            <button className=' bg-green animate-pulse text-white rounded-full p-8'>
                                <BsPlay size={30} />
                            </button>
                        </div>
                    </div>


                    <div className=' w-full lg:w-1/2 py-24 lg:px-12 px-3'>
                        <div className=' relative w-fit px-8 py-2 flex items-center justify-center'>
                            <span className=' bg-green rounded-md opacity-15 absolute w-full h-full z-10'></span>
                            <h6 className=' text-green relative font-semibold'>
                                Availability
                            </h6>
                        </div>
                        <h3 className=' lg:text-5xl text-3xl font-bold pb-8 py-4'>
                            Enjoy real adventure
                        </h3>
                        <Accordion />
                    </div>
                </div>
            </section>


            <section className=' container mx-auto py-12' data-aos="fade-down">
                <div className=' relative w-fit px-8 py-2 flex items-center justify-center'>
                    <span className=' bg-green rounded-md opacity-15 absolute w-full h-full z-10'></span>
                    <h6 className=' text-green relative font-semibold'>
                        Featured
                    </h6>
                </div>
                <h3 className=' lg:text-5xl text-3xl font-bold pb-8 py-4'>
                    Amazing tour places around the world
                </h3>
                <div>
                    <Carousel responsive={responsive} infinite autoPlay={true} itemClass='px-2 pb-4'>
                        <Tours image='src/assets/tour/tours.jpeg' name='Discovery item the ....' />
                        <Tours image='src/assets/tour/tours3.jpeg' name='Discovery' />
                        <Tours image='src/assets/tour/tours.jpeg' name='Discovery' />
                        <Tours image='src/assets/tour/tours3.jpeg' name='Discovery' />
                    </Carousel>
                </div>
            </section>
        </div>
    );
}
