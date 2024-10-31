import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const Header = () => {
    const { dropdown, setDropdown } = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown)
    }
    return (
        <nav className='w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]'>
            <div className='container mx-auto lg:px-3 w-full'>
                <div className='lg:w-full w-11/12 mx-auto h-full flex lg:justify-center items-center gap-16'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-2'>
                            <img src="src/assets/logo1.png" alt="" className='w-24 rounded-full' />
                        </div>
                    </div>
                    <ul className='flex items-center xl:gap-12 gap-x-4 max-lg:hidden'>
                        <a href='#home' className='leading-normal no-underline text-white text-lg hover:text-green'>Home</a>
                        <a href='#distraction' className='leading-normal no-underline text-white text-lg hover:text-green'>Distraction</a>
                        <a href='#news' className='leading-normal no-underline text-white text-lg hover:text-green'>News</a>
                        <a href='#page' className='leading-normal no-underline text-white text-lg hover:text-green'>Pages</a>
                        <a href='#contact' className='leading-normal no-underline text-white text-lg hover:text-green'>Contact</a>
                    </ul>

                    <div className='flex gap4 max-lg:hidden w-40 justify-center'>
                        <button className='rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green'>
                            <CiSearch size={32} />
                        </button>
                        <button className=' rounded-full text-white w10 h-10 flex items-center justify-center hover:bg-green hover:text-white'>
                            <BsPersonCircle size={24} />
                        </button>
                    </div>
                    {dropdown ?
                        (<div className=' lg:hidden text-2xl cursor-pointer text-black' onClick={showDropdown}>
                            <MdClose />
                        </div>
                        ) : (
                            <div className=' lg:hidden translate-x-60  right-10 text-6xl cursor-pointer text-white ' onClick={showDropdown}>
                                <HiMenuAlt3 />
                            </div>
                        )}
                </div>
                {dropdown && (
                    <div className=' lg:hidden w-full fixed top-24 bg-white transition-all'>
                        <div className=' w-full flex flex-col items-baseline gap-4'>
                            <ul className=' w-full flex flex-col justify-center'>
                                <a className=' px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-[#ffffff1a] border-solid' href='#home'>Home</a>
                                <a className=' px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-[#ffffff1a] border-solid' href='#distraction'>Distraction</a>
                                <a className=' px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-[#ffffff1a] border-solid' href='#news'>News</a>
                                <a className=' px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-[#ffffff1a] border-solid' href='#page'>Pages</a>
                                <a className=' px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-[#ffffff1a] border-solid' href='#contact'>Contact</a>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header