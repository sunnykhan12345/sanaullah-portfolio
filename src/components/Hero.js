
import React from "react";
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { Arrow } from '../../public/icons/Icons';


export default function Hero() {
  return (
    <section className="relative overflow-hidden xl:py-20 lg:py-16 md:py-12 py-6 bg-multicolor-moving-gradient">
      <div className="md:container mx-auto  px-5">
        <div className="grid md:gap-12 gap-5 lg:justify-normal justify-center lg:grid-cols-2">
          {/* left side */}
          <div className="lg:max-w-2xl w-full flex flex-col  lg:gap-y-5 gap-y-3.5  2xl:mt-32 xl:mt-24 lg:mt-5 lg:order-1 order-2 " data-aos="zoom-out">
            <p className="md:text-sm text-xs font-semibold text-orange">
              Turning Designs into Interactive Web Solutions
            </p>
            <h1 className="font-bold tracking-tight  xl:text-6xl lg:text-5xl md:text-4xl text-lg font-serif">
              I&apos;m <span className="text-orange">Abduul Aziz</span>
              <span className="block  ">Front-End Developer</span>
            </h1>
            <p className="md:max-w-xl  text-halfblack lg:text-lg md:text-base text-sm ">
              As a Front-End Developer, I have a demonstrated history of delivering high-quality, responsive, and interactive web applications. I specialize in Next.js, React, Tailwind CSS and JavaScript backed by a solid foundation in HTML, CSS.
            </p>
            <div className='md:mt-4 mt-3 flex items-center lg:gap-16 md:gap-12 gap-5'>
              <Link href="#contact" className="w-fit bg-orange md:py-1 py-0.5 md:px-3 px-2 rounded-full flex items-center md:gap-x-2 gap-x-1 border border-[#D0D5DD] group transition-all duration-500 ease-in-out transform hover:bg-white hover:scale-105">
                <span href="#" className="font-medium lg:text-xl md:text-lg text-base text-white capitalize group-hover:text-orange">Reach Out</span>
                <Arrow className="md:w-[30px] w-[20px] group-hover:rotate-45 transition-all text-white duration-500 group-hover:text-orange" /></Link>

              <ul className=' flex md:gap-2.5 gap-1.5 md:justify-normal justify-center'>
                <li>
                  <Link href="https://www.facebook.com/abdul.bhai.07" target="blank" className='bg-dark-black hover:bg-[#0866FF] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <FaFacebookF className='text-white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/abdulaziz4444" target='blank' className='bg-dark-black hover:bg-dark-black w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
                    <TbBrandGithubFilled className='text-white' />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/abdulaziz-webdeveloper/" target='blank' className='bg-dark-black hover:bg-[#0A66C2] w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-opacity-80 duration-500'>
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
          {/* right side */}
          <div className="lg:max-w-none w-full flex lg:order-2 order-1 " data-aos="fade-up" data-aos-duration="1500">
            <Image
              src="/images/aziz.jpg"
              alt="person picture"
              width={400}
              height={400}
              className="w-full rounded-[45px] border-2 border-[#F9A825] outline-double outline-[#C77800] outline-2 object-cover 2xl:h-[40rem] xl:h-[35rem] lg:h-[28rem] md:h-[35rem] h-[23rem]"
              priority
            />

          </div>
        </div>
      </div>
    </section>
  )
}


