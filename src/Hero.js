import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { Arrow } from '../public/icons/Icons';


const Hero = () => {
  return (
    <section className='lg:py-16 md:py-12 py-8 bg-[#EBF8F5]'>
      <div className='md:container mx-auto  2xl:px-5 xl:px-0 px-5'>
        <div className='flex 2xl:gap-44 lg:gap-0 md:gap-10 gap-5  lg:flex-nowrap flex-wrap'>
          <div className='lg:w-7/12 w-full flex flex-col xl:mt-16 lg:mt-10 md:mt-6 mt-0'data-aos="fade-down">
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl capitalize text-dark-black md:text-start text-center r'>hi,</h5>
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl  capitalize md:py-4 py-0.5 text-dark-black md:text-start text-center r'>i&#39;m
              <span className='text-orange'> abdul aziz</span>
            </h5>
            <h5 className='font-serif font-medium 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl capitalize text-dark-black md:text-start text-center r'>front-end developer</h5>
            <p className=' font-normal md:text-base text-sm text-half-black xl:w-11/12 lg:w-10/12 md:text-start text-center  lg:mt-8 md:mt-6 mt-2'>I&#39;m a Front-End Developer with a proven track record of delivering high-quality, responsive, and interactive web applications. Expert in Next.js, React, and Tailwind CSS, with a strong foundation in HTML, CSS, and JavaScript. Adept at translating complex design requirements into visually appealing and I&#39;m open to Job opportunities where I can contribute, learn and grow. If you have A good opportunity that matches my skills and experience then don't hesitate to contact me..</p>
            <div className='lg:mt-8 mt-4 flex items-center lg:gap-16 md:gap-12 gap-5 md:justify-normal justify-center'>
            <Link href="#" className="w-fit bg-orange md:py-1 py-0.5 md:px-3 px-2 rounded-full flex items-center md:gap-x-2 gap-x-1 border border-[#D0D5DD] group transition-all duration-500 ease-in-out transform hover:bg-white hover:scale-105"data-aos="zoom-out-down">
                      <span href="#" className="font-medium font-serif lg:text-xl md:text-lg text-base text-white capitalize group-hover:text-orange">Reach Out</span>
                      <Arrow className="md:w-[30px] w-[20px] group-hover:rotate-45 transition-all text-white duration-500 group-hover:text-orange" /></Link>
                    
            <ul className=' flex md:gap-2.5 gap-1.5 md:justify-normal justify-center' data-aos="zoom-out-up">
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
              <Link href="https://mailtoabdul24seven@gmail.com" target='_blank' className='bg-dark-black hover:bg-gray-00 w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                <BiLogoGmail className='text-white' />
              </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className='lg:w-5/12 w-full' data-aos="fade-up">
            <Image src="/images/abdul.png" alt='abdul aziz picture' width={409} height={454} className='lg:w-[409px] w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero