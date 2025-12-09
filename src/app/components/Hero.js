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
      <section className="g-[#f5f1ea] lg:pb-0  lg:text-start text-center relative bg-[#050414] overflow-hidden lg:pt-32 md:pt-20 pt-14">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>

        {/* Animated background */}
        <motion.div
          className="absolute top-20 left-10 lg:w-14 w-10 lg:h-14 h-10 bg-[#a855f7] rounded-full"
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
          className="absolute bottom-32 right-20 w-16 h-16 bg-[#a855f7] rounded-full"
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
              <motion.h2
                className="font-bold font-lufga  md:text-3xl text-2xl text-white ext-[#25282B] md:pt-3 pt-1"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Hello, i am
                <br />
              </motion.h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Sana Ullah
              </h2>
              <motion.h2
                className="flex font-bold font-lufga  md:text-3xl text-xl text-white ext-[#25282B] md:pt-3 pt-1"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                i am
                <span className="lg:pl-2 pl-1 ext-blue-600 ext-[#af9f8a] text-[#a855f7] md:text-4xl text-xl">
                  <Typewriter
                    options={{
                      strings: ["FrontEnd Developer"],
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
                className="font-normal lg:mb-5 font-lufga lg:text-lg leading-relaxed md:text-base text-sm text-gray-400 lg:pt-8 md:pt-4 pt-2"
                variants={textVariants}
              >
                I&apos;m a Front-End Developer crafting modern, responsive
                websites with clean code, seamless functionality, and great user
                experiences. Let&apos;s build something exceptional together.
              </motion.p>
              <Link href="/Sana-ullah-Resume.pdf" target="_blank" className="">
                <button
                  className="inline-block text-white lg:py-3  py-2 lg:px-8 px-4 rounded-full mt-5 lg:text-lg text-base font-bold transition duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg,#8245ec,#a855f7)",
                    boxShadow:
                      "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                  }}
                >
                  Download CV
                </button>
              </Link>
            </div>

            {/* Right Content  */}
            <div className="lg:w-6/12 lg:mt-10 w-full flex-1 flex  items-center justify-center md:justify-end">
              <motion.div
                className="xl:w-[500px] md:w-[424px] w-[270px] xl:h-[500px] flex-shrink-0 md:h-[424px] h-[270px] rounded-full bg-[#af9f8a] flex items-center justify-center overflow-hidden relative"
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
