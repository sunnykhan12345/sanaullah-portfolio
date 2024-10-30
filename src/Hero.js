import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";


const Hero = () => {
  return (
    <section className='lg:py-16 md:py-12 py-8 bg-[#EBF8F5]'>
      <div className='md:container mx-auto  2xl:px-5 xl:px-0 px-5'>
        <div className='flex 2xl:gap-44 lg:gap-0 md:gap-10 gap-5  lg:flex-nowrap flex-wrap'>
          <div className='lg:w-7/12 w-full flex flex-col xl:mt-24 lg:mt-20 md:mt-8 mt-0'data-aos="fade-down">
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl capitalize text-dark-black lg:text-start text-center r'>hi,</h5>
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl  capitalize md:py-4 py-0.5 text-dark-black lg:text-start text-center r'>i&#39;m
              <span className='text-orange'> abdul aziz</span>
            </h5>
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl capitalize text-dark-black lg:text-start text-center r'>front-end developer</h5>
            <p className=' font-normal md:text-base text-sm text-half-black xl:w-11/12 lg:w-10/12 lg:text-start text-center  lg:mt-8 md:mt-6 mt-2'>Front-End Developer with a proven track record of delivering high-quality, responsive, and interactive web applications. Expert in Next.js, React, and Tailwind CSS, with a strong foundation in HTML, CSS, and JavaScript. Adept at translating complex design requirements into visually appealing, intuitive user interfaces optimized for performance and accessibility.</p>
            <ul className='lg:mt-6 mt-4 flex gap-2.5 lg:justify-normal justify-center' data-aos="zoom-out-up">
              <li>
              <Link  href="https://www.facebook.com/abdul.bhai.07" target="blank" className='bg-dark-black hover:bg-[#0866FF] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                <FaFacebookF className='text-white' />
              </Link>
              </li>
              <li>
              <Link href="https://github.com/abdulaziz4444" target='blank' className='bg-dark-black hover:bg-dark-black w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                <TbBrandGithubFilled  className='text-white'/>
              </Link>
              </li>
              <li>
              <Link href="https://www.linkedin.com/in/abdul-aziz-63498626b/" target='blank' className='bg-dark-black hover:bg-[#0A66C2] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                <FaLinkedinIn className='text-white' />
              </Link>
              </li>
              <li>
              <Link href="mailto:aziz.abdul4566@gmail.com" target='_blank' className='bg-dark-black hover:bg-gray-00 w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                <BiLogoGmail className='text-white' />
              </Link>
              </li>
            </ul>
          </div>
          <div className='lg:w-5/12 w-full' data-aos="fade-up">
            <Image src="/images/abdul.png" alt='abdul aziz picture' width={409} height={454} className='lg:w-[603px] w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero