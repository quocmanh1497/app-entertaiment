/* */
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoCheckmarkCircle } from "react-icons/io5";



const categories = [
    { text: "Family camping", tilt: "-rotate-6" },
    { text: "Family ", tilt: "rotate-6" },
    { text: "Camping", tilt: "-rotate-6" },
    { text: "Fly ", tilt: "rotate-6" },
    { text: "Beach", tilt: "-rotate-6" },
    { text: "Family camping", tilt: "rotate-6" },
];

export default function Popular() {
    const Section = ({ title, text, children, image, reverse }) => {
        return (
            <div className='max-w-[1320px] mx-auto mt-16 px-3'>
                <div className={` lg:flex gap-8 justify-between ${reverse && 'flex-flow-reverse'}`}>
                    <div className=' lg:1/2'>
                        <h6 className='  text-green bg-[#ecf5e8] w-fit rounded-md px-5 font-bold'>{title}</h6>
                        <h6 className=' lg:text-5xl text-3xl font-bold pb-8 leading-tight'>{text}</h6>
                        <p className=' text-gray-600'>
                            Christmas (also known as Noel, Christmas) is a festival commemorating the birth of Jesus, held mainly on December 25 every year,
                            and is a religious and cultural holiday for every year.
                            proportion of people in the world.[gc 1] [2] [3] As a central feast of the liturgical year of Christmas,
                            it ends the Advent season and begins the Christmas season, which historically in the West lasts twelve days until the twelfth night (the night before Epiphany).
                        </p>
                    </div>
                    {children}
                </div>
                <div className="lg:1/2">
                    <div className={` lg:flex w-full ${reverse ? 'justify-start ' : 'justify-end'}`}
                    >
                        <img src={image} alt='' className='rounded-t-[300px]' />
                    </div>
                </div>
            </div >
        )
    }

    //Card
    const Card = ({ text, tilt }) => {
        return (
            <div className={` flex items-center w-fit gap-2 p-4 border rounded-lg cursor-pointer transition-transform transform hover: scale-105 bg-white shadow-xl ${tilt}`}>
                <IoCheckmarkCircle className='text-xl text-orange' />
                <span className="font-bold text-gray-800">{text}</span>
            </div>
        )
    }

    //ProgressBar
    const ProgressBar = ({ value, text }) => {
        return (
            <div className=' flex flex-col items-center'>
                <div className=' w-28'>
                    <CircularProgressbar value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            pathColor: "#63Ab45",
                            textColor: "#000",
                            trailColor: "#d6d6d6",
                            backgroundColor: "#f8f8f8"
                        })} />
                </div>
                <p className=' font-bold mt-2 translate-x-1'>{text}</p>
            </div>
        )
    }




    return (
        <>
            <Section
                image="src/assets/popular/icon-footer3.jpeg"
                text="great ooooooooo"
                title="who we are"
            >
                <div className='flex h-8 px-0 py-36 '>
                    {categories.map((category) => (
                        <Card
                            key={category.text}
                            text={category.text}
                            tilt={category.tilt}
                        />
                    ))}
                </div>
            </Section>



            <Section
                image='src/assets/icon.jpeg'
                text='Merry Christmas'
                title='Welcome'
                reverse
            >
                <div className=' flex justify-center items-center bg-gray-100 my-12'>
                    <div className=' bg-white p8 rounded-lg shadow-xl flex lg:flex-col items-center lg:gap-16 gap-4 w-full justify-center'>
                        <ProgressBar value={50} text="Satisfied Clients" />
                        <ProgressBar value={50} text="Success Rate" />
                    </div>
                </div>
            </Section>

        </>
    );
}
