import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <section className='xl:py-20 lg:py-16 md:py-12 py-8' id='projects'>
            <div className='md:container mx-auto px-5'>
                <h2 className='text-dark-black xl:text-4xl lg:text-3xl md:text-2xl text-xl uppercase font-semibold font-serif md:text-start text-center' data-aos="fade-down">Latest
                    <span className='text-orange'> Projects</span></h2>
                {/* project 1 */}
                <div className='xl:mt-14 lg:mt-10 md:mt-8 mt-4 flex xl:gap-28 lg:gap-20 md:gap-8 gap-4 lg:flex-nowrap flex-wrap'>
                    <Link href="#" className='lg:w-5/12 w-full' data-aos="zoom-out">
                        <Image src="/images/umrah.png" alt='quadruple' width={400} height={400} className='rounded-xl border-2 transition-all duration-500 w-full' />
                    </Link>
                    <div className='lg:w-6/12 w-full flex flex-col justify-center' data-aos="zoom-in">
                        <h2 className='font-medium font-sans capitalize text-dark-black lg:text-3xl md:text-xl text-lg md:text-start text-center'>umrah service</h2>
                        <p className='text-half-black md:text-base text-sm xl:my-5 lg:my-4 md:my-3 my-2'>We specialize in offering exceptional Umrah services that turn your spiritual aspirations into memorable journeys. We emphasize modern travel principles and reliable logistics to ensure your Umrah experience is not only seamless but also deeply fulfilling. Our dedicated team utilizes the latest technology to provide personalized packages that cater to the unique needs of every pilgrim.With a commitment to excellence, we guarantee a smooth travel experience that allows you to focus on your spiritual journey while we take care of the details.</p>
                        <div className='flex gap-2 md:justify-normal justify-center'>
                            <Link href="#" target='blank' className="font-medium font-sans uppercase md:text-lg text-base hover:text-orange duration-300 hover:opacity-75">live site</Link>
                            |
                            <Link href="https://github.com/abdulaziz4444" target='blank' className="font-medium font-sans uppercase md:text-lg text-base hover:text-orange duration-300 hover:opacity-75">github</Link>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className='xl:mt-12 lg:mt-10 md:mt-8 mt-4 flex xl:gap-28 lg:gap-20 md:gap-8 gap-4 lg:flex-nowrap flex-wrap'>
                    <Link href="https://quadsol.co/" className='lg:w-5/12 w-full' data-aos="zoom-out">
                        <Image src="/images/quadsol.png" alt='quadruple' width={400} height={500} className='rounded-xl border-2 transition-all duration-500 w-full' />
                    </Link>
                    <div className='lg:w-6/12 w-full flex flex-col justify-center' data-aos="zoom-in">
                        <h2 className='font-medium font-sans capitalize text-dark-black lg:text-3xl md:text-xl text-lg md:text-start text-center'>quadruple solutions</h2>
                        <p className='text-half-black md:text-base text-sm xl:my-5 lg:my-4 md:my-3 my-2'>specializes in delivering high-quality web development services that transform your digital ideas into captivating online experiences. We focus on modern design principles and robust functionality to ensure your website not only stands out but also meets the unique needs of your audience.

                            Our team of skilled developers utilizes cutting-edge technologies, including Next.js, JavaScript, and Tailwind CSS, to create responsive and visually stunning websites. With a commitment to excellence, we guarantee a seamless user experience that engages visitors and drives conversions.</p>
                        <div className='flex gap-2 md:justify-normal justify-center'>
                            <Link href="https://quadsol.co/" target='blank' className="font-medium font-sans uppercase md:text-lg text-base hover:text-orange duration-300 hover:opacity-75">live site</Link>
                            |
                            <Link href="https://github.com/abdulaziz4444" target='blank' className="font-medium font-sans uppercase md:text-lg text-base hover:text-orange duration-300 hover:opacity-75">github</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects