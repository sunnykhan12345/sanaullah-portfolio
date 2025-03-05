"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <>
      <nav className={`z-50 bg-[#FDFFFC] sticky top-0`} data-aos="fade-down">
        <div className="md:flex hidden justify-between items-center bg-black py-[0.2rem] xl:px-5 px-2">
          <Link href="/" data-aos="fade-down" data-aos-delay="200">
            <Image src="/images/aziz.png" alt="logo" width={70} height={70} />
          </Link>
          <ul className="flex xl:gap-20 lg:gap-16 gap-10">
            <li data-aos="fade-down" data-aos-delay="300">
              <Link
                href="/"
                className="text-white font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
              >
                home
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="400">
              <Link
                href="#skills"
                className="text-white font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
              >
                skills
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="500">
              <Link
                href="#projects"
                className="text-white font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
              >
                project
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="600">
              <Link
                href="#contact"
                className="text-white font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
              >
                contact
              </Link>
            </li>
          </ul>
          <Link
            href="/Abdul-Resume.pdf"
            target="blank"
            download="Abdul_Aziz_Resume.pdf"
            className="xl:py-[0.8rem] py-[0.6rem] xl:px-[1.6rem] px-[1rem] text-white font-semibold md:text-base text-sm font-lufga rounded-full capitalize tracking-custom bg-[#E8B237] hover:text-[#E8B237] hover:bg-[#2D4F46] transition-all duration-300 btn-ripple"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            resume
          </Link>
        </div>
        <div className="md:hidden flex justify-between items-center bg-dark-black py-[0.2rem] px-3 z-30">
          <Link href="/" className="md:hidden block">
            <Image src="/images/aziz.png" alt="logo" width={50} height={50} />
          </Link>
          <Mobile />
        </div>
      </nav>
    </>
  );
};

export default Header;
