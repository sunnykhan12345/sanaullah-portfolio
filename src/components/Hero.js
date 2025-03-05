
import React from "react";
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { Arrow } from '../../public/icons/Icons';


export default function Hero() {
  return (
    <section className="relative overflow-hidden  lg:py-16 md:py-12 py-6 bg-[#F5F4F0] ">
      <div className="md:container mx-auto  px-5">
        <div className="grid md:gap-12 gap-5 lg:justify-normal justify-center lg:grid-cols-2">
          {/* left side */}
          <div className="lg:max-w-2xl w-full flex flex-col  lg:gap-y-5 gap-y-3.5  2xl:mt-32 xl:mt-24 lg:mt-5 lg:order-1 order-2 " data-aos="zoom-out">
            <p className="md:text-sm text-xs font-lufga font-semibold text-[#2D4F46] md:text-start text-center">
              Turning Designs into Interactive Web Solutions
            </p>
            <h1 className="font-bold md:tracking-tight  xl:text-6xl lg:text-5xl md:text-4xl text-xl font-lufga text-[#232424] md:text-start text-center">
              I&apos;m <span className="text-goldenyellow">Abdul Aziz</span>
              <span className="block  ">Front-End Developer</span>
            </h1>
            <p className="md:max-w-xl  text-gray-600 font-lufga  md:text-base text-sm md:text-start text-center">
              As a Front-End Developer, I have a demonstrated history of delivering high-quality, responsive, and interactive web applications. I specialize in Next.js, React, Tailwind CSS and JavaScript backed by a solid foundation in HTML, CSS.
            </p>
            <div className='md:mt-4 mt-2 flex items-center  md:justify-normal justify-center lg:gap-16 md:gap-12 gap-5'>
              <Link href="#contact" className="w-fit bg-goldenyellow hover:text-goldenyellow hover:bg-[#2D4F46] transition-all duration-300 btn-ripple md:py-1 py-0.5 md:px-3 px-2 rounded-full flex items-center font-lufga md:gap-x-2 gap-x-1 border border-[#D0D5DD] group">
                <span href="#" className="font-medium lg:text-xl md:text-lg text-base text-white capitalize group-hover:text-goldenyellow">Reach Out</span>
                <Arrow className="md:w-[30px] w-[20px] group-hover:rotate-45 transition-all text-white duration-500 group-hover:text-goldenyellow" /></Link>

              <ul className=' flex md:gap-2.5 gap-1.5 md:justify-normal justify-center'>
                <li>
                  <Link href="https://www.facebook.com/abdul.bhai.07" target="blank" className='bg-[#232424] hover:bg-[#0866FF] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <FaFacebookF className='text-white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/abdulaziz4444" target='blank' className='bg-[#232424]  w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <TbBrandGithubFilled className='text-white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/abdulaziz-webdeveloper/" target='blank' className='bg-[#232424] hover:bg-[#0A66C2] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <FaLinkedinIn className='text-white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://mailtoabdul24seven@gmail.com" target='_blank' className='bg-[#232424] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <BiLogoGmail className='text-white' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="lg:max-w-none w-full flex lg:order-2 order-1 " data-aos="fade-up" data-aos-duration="1500">
            <Image
              src="/images/aziz.jpg"
              alt="person picture"
              width={400}
              height={400}
              className="w-full rounded-[45px] border-2 border-goldenyellow outline-double outline-goldenyellow outline-2 object-cover 2xl:h-[40rem] xl:h-[35rem] lg:h-[28rem] md:h-[35rem] h-[23rem]"
              priority
            />

          </div>
        </div>
      </div>
    </section>
  )
}


