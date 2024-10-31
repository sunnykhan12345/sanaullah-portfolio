import Link from 'next/link'
import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
    return (
        <section className='bg-[#EBF8F5] xl:py-20 lg:py-16 md:py-12 py-8'>
            <div className='md:container mx-auto px-5'>
                <div className='flex lg:flex-nowrap flex-wrap 2xl:gap-32 xl:gap-28 lg:gap-24 md:gap-12 gap-6'>
                    {/* left side  */}
                    <div className='lg:w-5/12 w-full 2xl:mt-16 lg:mt-12' data-aos="fade-up">
                        <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl uppercase font-semibold font-serif md:text-start text-center text-dark-black'>contact
                            <span className='text-orange'> with me </span></h2>
                        <p className='text-half-black md:text-base text-sm md:mt-4 mt-2 md:text-start text-center'>Feel free to reach out anytime! I am to respond to all messages within 24 hours on weekdays. Whether you have a project in mind or just want to say hello, I&#39;m here to chat and answer any questions you may have, thanks</p>
                       <div className='flex md:gap-4 gap-2 items-center md:mt-4 mt-2'>
                                <Link href="https://mailtoabdul24seven@gmail.com" target='_blank' className=' md:gap-2.5 gap-1.5   bg-half-black  w-10 h-10 flex justify-center items-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                                    <BiLogoGmail className='text-white w-6 h-6' />
                                </Link>
                                <div className=''>
                                <span className='text-orange capitalize font-medium font-mono lg:text-lg md:text-base text-sm'>email address</span>
                                <Link href="https://mailtoabdul24seven@gmail.com" target='blank' className='block md:text-base text-sm font-normal text-half-black  hover:opacity-75'>abdul24seven@gmail.com</Link>
                                </div>
                                </div>
                                <div className='flex md:gap-4 gap-2 items-center md:mt-4 mt-2'>
                                <Link href="tel:+923495674869" target='_blank' className=' md:gap-2.5 gap-1.5   bg-half-black  md:w-10 w-7 md:h-10 h-7 flex justify-center items-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                                    <FaPhoneAlt className='text-white md:w-6 w-3 md:h-6 h-3' />
                                </Link>
                                <div className=''>
                                <span className='text-orange capitalize font-medium font-mono lg:text-lg md:text-base text-sm'>phone number</span>
                                <Link href="tel:+923495674869" target='blank' className='block md:text-base text-sm font-normal text-half-black hover:opacity-75'>+92 34956748 69</Link>
                                </div>
                                </div>
                    </div>
                    {/* right side */}
                    <form className="lg:w-6/12 w-full border border-[#68686833] p-4 lg:space-y-6 md:sapce-y-5 space-y-3 rounded-xl" data-aos="fade-down">
                        <div>
                            <label className="block capitalize text-half-black font-medium mb-1 md:text-base text-sm" htmlFor="name">
                                name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block capitalize text-half-black font-medium mb-1 md:text-base text-sm" htmlFor="email">
                                email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block capitalize text-half-black font-medium mb-1 md:text-base text-sm" htmlFor="message">
                                message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Comment..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact