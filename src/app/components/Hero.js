"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./Header";
import Typewriter from "typewriter-effect";

const Hero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  // naooooeeee
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const circleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <section className="bg-[#f5f1ea] overflow-hidden xl:py-28 lg:py-20 md:py-16 py-8">
        {/* Animated background */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-yellow/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 bg-[#FDC435]/30 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <Header />
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            className="flex xl:gap-5 lg:flex-row flex-col md:gap-10 gap-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="lg:w-6/12 w-full xl:pt-16 pt-10">
              <motion.span
                className="block text-[#af9f8a] font-bold font-lufga md:text-xl text-lg capitalize"
                variants={textVariants}
              >
                Front-End Developer
              </motion.span>

              {/* Experience */}
              <motion.span
                className="block text-[#828282] font-medium font-lufga md:text-lg text-sm capitalize mt-1"
                variants={textVariants}
              >
                Experience: 1 year 5 months
              </motion.span>
              <motion.h2
                className="font-bold font-lufga lg:text-4xl md:text-3xl text-2xl text-[#25282B] md:pt-3 pt-1"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Hello, My Name Is
                <br />
                <span className="ext-blue-600 text-[#af9f8a]">
                  <Typewriter
                    options={{
                      strings: ["Sana Ullah"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                      cursor: "_",
                    }}
                  />
                </span>
              </motion.h2>

              <motion.p
                className="font-normal font-lufga lg:text-xl md:text-base text-sm text-[#828282] lg:pt-8 md:pt-4 pt-2"
                variants={textVariants}
              >
                I&apos;m a Front-End Developer crafting modern, responsive
                websites with clean code, seamless functionality, and great user
                experiences. Let&apos;s build something exceptional together.
              </motion.p>

              <div className="lg:pt-8 md:pt-4 pt-2 flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/sanaullah-dev/"
                  target="blank"
                  className="linkedin-btn md:py-2 py-1.5 md:px-4 px-2 md:rounded-lg rounded-md border border-[#25282B] bg-[#f5f1ea] capitalize font-medium font-lufga md:text-lg text-[#25282B] relative overflow-hidden group"
                >
                  <span className="relative z-10">LinkedIn</span>
                  <span className="btn-hover-bg-left"></span>
                </Link>
                <Link
                  href="https://github.com/sunnykhan12345"
                  target="blank"
                  className="upwork-btn md:py-2 py-1.5 md:px-4 px-2 md:rounded-lg rounded-md bg-[#af9f8a] text-white capitalize font-medium font-lufga md:text-lg  relative overflow-hidden group"
                >
                  <span className="relative z-10">Github</span>
                  <span className="btn-hover-bg-right"></span>
                </Link>
              </div>
            </div>

            {/* <div className="lg:w-6/12 w-full xl:pt-16 pt-10">
              <motion.span
                className="block text-[#FDC435] font-bold font-lufga md:text-xl text-lg capitalize"
                variants={textVariants}
              >
                front-End developer
              </motion.span>

              <motion.h2
                className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#25282B] md:pt-3 pt-1"
                variants={textVariants}
              >
                Hello, My Name <br /> Is Sana Ullah
              </motion.h2>

              <motion.p
                className="font-normal font-lufga lg:text-2xl md:text-base text-sm text-[#828282] lg:pt-8 md:pt-4 pt-2"
                variants={textVariants}
              >
                I&#39;m a Front-End Developer crafting modern, responsive
                websites with clean code, seamless functionality, and great user
                experiences. Let&#39;s build something exceptional together.
              </motion.p>
              <div className="lg:pt-8 md:pt-4 pt-2 flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/sanaullah-dev/"
                  target="blank"
                  className="linkedin-btn md:py-2 py-1.5 md:px-4 px-2 md:rounded-lg rounded-md border border-[#25282B] bg-[#F9FAFF] capitalize font-medium font-lufga md:text-lg text-[#25282B] relative overflow-hidden group"
                >
                  <span className="relative z-10">linkedin</span>
                  <span className="btn-hover-bg-left"></span>
                </Link>
                <Link
                  href="https://github.com/sunnykhan12345"
                  target="blank"
                  className="upwork-btn md:py-2 py-1.5 md:px-4 px-2 md:rounded-lg rounded-md bg-yellow capitalize font-medium font-lufga md:text-lg text-[#25282B] relative overflow-hidden group"
                >
                  <span className="relative z-10">Github</span>
                  <span className="btn-hover-bg-right"></span>
                </Link>
              </div>
            </div> */}
            {/* Right Content  */}
            <div className="lg:w-6/12 w-full flex-1 flex  items-center justify-center">
              <motion.div
                className="xl:w-[524px] md:w-[424px] w-[324px] xl:h-[524px] flex-shrink-0 md:h-[424px] h-[324px] rounded-full bg-[#af9f8a] flex items-center justify-center overflow-hidden relative"
                variants={circleVariants}
                animate={floatingAnimation}
              >
                {/* Animated ring around the circle */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[#FDC435]/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                />
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/images/sunny.png"
                    alt="abdul aziz picture"
                    height={510}
                    width={433}
                    className="object-cover xl:w-[433px] w-full xl:h-[510px] md:h-[400px] h-[320px] mt-5"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute lg:bottom-8 bottom-[40%]  md:left-1/2 left-[80%] transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#25282B] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-3 bg-[#25282B] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
