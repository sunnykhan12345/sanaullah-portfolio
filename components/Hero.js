"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      {/* Header */}
      <div>header</div>
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 w-full h-full xl:max-w-[768px] flex flex-col items-center xl:items-start
         justify-center text-center xl:text-left pt-10"
        >
          <h1 className="h1 mb-2 max-[320px] xl:max-w-none">
            <span className="text-accent"> I Build and </span>Desiged Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[467px] mb-7 text-center">
            Delivering Powerful, Custom Websites that blend aesthetics with
            perforums.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn bg-accent mb-8"> Contact Me</button>
          </ScrollLink>
        </div>
        {/* ikg */}
        <div className="hidden xl:flex bg-accent w-[55vw] h-[800px] absolute top-0 right-0">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality="100"
              priority
              className="object-contain"
            />
          </div>
          <div className="hidden xl:flex top-48 absolute left-[4vw]">
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              className="w-[160px] h-[160px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
