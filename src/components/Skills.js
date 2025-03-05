import React from "react";
import Link from "next/link";
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbSeo } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <section className="lg:py-16 md:py-12 py-8 bg-[#F5F4F0]" id="skills">
        <div className="md:container mx-auto px-5">
          <h2
            className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-goldenyellow font-medium font-lufga capitalize md:text-start text-center"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Expertise
          </h2>
          <div
            className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-4 gap-3 lg:mt-10 md:mt-5 mt-2"
            data-aos="zoom-in-up"
          >
            {/* card 1 */}
            <Link
              href="https://www.w3schools.com/html/"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                HTML
              </h2>
              <div className="flex justify-center mt-3">
                <FaHtml5 className="text-[#DD4B25] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 2 */}
            <Link
              href="https://www.w3schools.com/css/"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                CSS
              </h2>
              <div className="flex justify-center mt-3">
                <DiCss3 className="text-[#2465F1] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 3 */}
            <Link
              href="https://tailwindcss.com/docs/installation"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                tailwind CSS
              </h2>
              <div className="flex justify-center mt-3">
                <SiTailwindcss className="text-[#36B7F0] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 4 */}
            <Link
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                bootstrap
              </h2>
              <div className="flex justify-center mt-3">
                <FaBootstrap className="text-[#7952B3] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 5 */}
            <Link
              href="https://react.dev/learn"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                react.js
              </h2>
              <div className="flex justify-center mt-3">
                <FaReact className="text-[#087EA4] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 6 */}
            <Link
              href="https://nextjs.org/docs"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                next.js
              </h2>
              <div className="flex justify-center mt-3">
                <SiNextdotjs className="text-red-200 md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 7 */}
            <Link
              href="https://www.w3schools.com/js/"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                javaScript
              </h2>
              <div className="flex justify-center mt-3">
                <IoLogoJavascript className="text-[#E3C42F] md:w-10 w-7 md:h-10 h-7" />
              </div>
            </Link>
            {/* card 8 */}
            <Link
              href="https://www.w3schools.com/html/"
              target="blank"
              className="md:px-2 md:py-12 py-6 bg-white  bg-opacity-95 hover:bg-gradient-to-r from-yellow-100/20 to-red-300/20 border border-goldenyellow duration-300 rounded-tl-3xl rounded-br-3xl"
            >
              <h2 className="text-center text-[#232424] uppercase font-lufga font-medium lg:text-3xl md:text-2xl text-lg">
                SEO
              </h2>
              <div className="flex justify-center mt-3">
                <TbSeo className="text-pink-300 md:w-7 w-5 md:h-7 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
