import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { IoChevronDownOutline, IoChevronUpCircleOutline } from "react-icons/io5";


function Accordion() {
    const items = [
        {
            title: "How much pricer about",
            content: "Sed purus .........................",
        },
        {
            title: "How much pricer about",
            content: "Sed purus .........................",
        },
        {
            title: "How much pricer about",
            content: "Sed purus .........................",
        }
    ];



    return (
        <div className='w-full'>
            {items.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <DisclosureButton className={` w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${open ? 'border-1-2 border-green' : 'border mb-4'}`}>
                                <span className=' font-bold text-lg'>{item.title}</span>
                                {open ? (
                                    <IoChevronDownOutline className=' w-5 h-5 text-green' />
                                ) : (
                                    <IoChevronUpCircleOutline className=' w-5 h-5 text-gray-500' />
                                )}

                            </DisclosureButton>
                            <DisclosurePanel className=" bg-white p-4 border-1-2 border-green rounded-sm mb-2">
                                <p className=' text-gray-600'>{item.content}</p>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};
export default Accordion;
