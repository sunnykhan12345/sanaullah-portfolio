import React from 'react'
import Link from 'next/link';
import { FaHtml5,FaBootstrap,FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss,SiNextdotjs  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbSeo } from "react-icons/tb";


const Skills = () => {
  return (
    <>
      <section className='xl:py-20 lg:py-16 md:py-12 py-8 bg-[#171717] bg-cover bg-skillbg lg:rounded-[30px] rounded-3xl' id='skills'>
        <div className='md:container mx-auto px-5'>
          <h2 className='text-orange xl:text-4xl lg:text-3xl md:text-2xl text-xl uppercase font-semibold font-serif' data-aos="fade-down">Expertise</h2>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-4 gap-3 xl:mt-12 lg:mt-10 md:mt-8 mt-4'>
            {/* card 1 */}
            <Link href="https://www.w3schools.com/html/" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg' data-aos="zoom-in-down">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>HTML</h2>
              <div className='flex justify-center mt-3'>
                <FaHtml5 className='text-[#DD4B25] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 2 */}
            <Link href="https://www.w3schools.com/css/" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg' data-aos="zoom-in-down">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>CSS</h2>
              <div className='flex justify-center mt-3'>
                <DiCss3 className='text-[#2465F1] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 3 */}
            <Link href="https://tailwindcss.com/docs/installation" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg' data-aos="zoom-in-down">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>tailwind CSS</h2>
              <div className='flex justify-center mt-3'>
                <SiTailwindcss className='text-[#36B7F0] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 4 */}
            <Link href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg' data-aos="zoom-in-down">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>bootstrap</h2>
              <div className='flex justify-center mt-3'>
                <FaBootstrap className='text-[#7952B3] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 5 */}
            <Link href="https://react.dev/learn" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg' data-aos="zoom-in-up">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>react.js</h2>
              <div className='flex justify-center mt-3'>
                <FaReact className='text-[#087EA4] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 6 */}
            <Link href="https://nextjs.org/docs" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg'data-aos="zoom-in-up">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>next.js</h2>
              <div className='flex justify-center mt-3'>
                <SiNextdotjs  className='text-red-200 md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 7 */}
            <Link href="https://www.w3schools.com/js/" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg'data-aos="zoom-in-up">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>javaScript</h2>
              <div className='flex justify-center mt-3'>
                <IoLogoJavascript className='text-[#E3C42F] md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
            {/* card 8 */}
            <Link href="https://www.w3schools.com/html/" target='blank' className='md:px-2 md:py-12 py-6 backdrop-blur-sm bg-[#68686833]/20 hover:bg-[#68686833]/30 bg-opacity-40 border border-[#515262] duration-300 rounded-lg'data-aos="zoom-in-up">
              <h2 className='text-center text-white capitalize font-mono font-medium md:text-3xl text-xl'>SEO</h2>
              <div className='flex justify-center mt-3'>
                <TbSeo className='text-pink-300 md:w-10 w-7 md:h-10 h-7' />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills