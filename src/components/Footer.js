import React from 'react'
import { MdArrowUpward } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <section className='md:py-4 py-3 bg-black'>
                <div className='flex justify-evenly'>
                    <p className='md:text-base text-sm text-center text-white font-lufga'>Copyright &copy; azizportfolio | All right reserved</p>
                    <Link href="/">
                        <MdArrowUpward className='text-white md:w-6 w-4 md:h-6 h-4 hover:opacity-70' />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Footer