"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Simple fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image animation
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Stagger container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="bg-[#F9FAFF]  xl:py-28 lg:py-20 md:py-16 py-8"
      ref={sectionRef}
      id="about"
    >
      <motion.div
        className="container flex xl:gap-40 md:gap-10 gap-7 items-center justify-center lg:flex-nowrap flex-wrap"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left side */}
        <div className="lg:w-7/12 w-full">
          <motion.h2
            className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#333333] capitalize"
            variants={fadeUp}
          >
            About me
          </motion.h2>
          <motion.p
            className="lg:py-8 md:py-4 py-2 lg:text-2xl md:text-base text-sm font-lufga font-normal text-[#828282]"
            variants={fadeUp}
          >
            I'm Sana Ullah, a passionate Front-End Developer with a strong focus
            on building elegant, high-performance web interfaces. My journey
            began with a curiosity for how websites work, and it quickly turned
            into a deep dedication to writing clean, scalable code. I specialize
            in JavaScript, Next.js, and Tailwind CSS, and I enjoy turning
            complex ideas into intuitive, user-friendly experiences. Whether
            I&#39;m designing responsive layouts or optimizing performance, I
            bring attention to detail and creative thinking to every project.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/Sana-ullah-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="upwork-btn bg-yellow md:py-2 py-1.5 md:px-6 px-4 font-lufga text-[#25282B] capitalize font-medium md:text-lg rounded-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Resume</span>
              <span className="btn-hover-bg-right"></span>
            </a>
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          className="lg:w-5/12 w-full flex-1 flex items-center justify-center"
          variants={imageAnimation}
        >
          <div className="relative md:w-[400px] w-[300px] md:h-[410px] h-[300px] rounded-full bg-gradient-to-tr from-yellow via-orange-300 to-yellow-400 p-1 shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/images/sunny.png"
                alt="About Image"
                width={400}
                height={410}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
