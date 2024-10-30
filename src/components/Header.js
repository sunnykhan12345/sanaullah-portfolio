"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mobile from './Mobile';

const Header = () => {
 
    return (
        <>
            <nav className={`z-50 bg-[#EBF8F5] sticky top-0 transition-transform duration-500`}>
                <div className='md:flex hidden justify-between items-center bg-dark-black py-[0.2rem] xl:px-5 px-2'>
                    <Link href="/">
                        <Image src="/images/aziz.png" alt="logo" width={70} height={70} />
                    </Link>
                    <ul className="flex xl:gap-20 lg:gap-16 gap-10">
                        <li>
                            <Link href="#" className="text-white font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif">about</Link>
                        </li>
                        <li>
                            <Link href="#skills" className="text-white font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif">skills</Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-white font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif">project</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white font-normal xl:text-xl text-base capitalize transition-all duration-500 hover:text-orange font-serif">contact</Link>
                        </li>
                    </ul>
                    <Link href="/resume.pdf" target='blank' download="Abdul_Aziz_Resume.pdf" className="bg-orange xl:py-[0.8rem] py-[0.6rem] xl:px-[1.6rem] px-[1rem] text-white font-bold lg:text-xl text-base font-serif rounded-full capitalize tracking-custom font-lufga transition-all duration-500 ease-in-out transform hover:bg-white hover:text-orange">resume
                    </Link>
                </div>
                <div className='md:hidden flex justify-between items-center bg-dark-black py-[0.2rem] px-3'>
                    <Link href="/" className='md:hidden block'>
                        <Image src="/images/aziz.png" alt="logo" width={50} height={50} />
                    </Link>
                    <Mobile />
                </div>
            </nav>
        </>
    );
};

export default Header;
