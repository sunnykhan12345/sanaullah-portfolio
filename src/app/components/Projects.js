"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Talent Tube",
    description:
      "TalentTube is a modern portfolio platform tailored for creative professionals to showcase their work. I was responsible for translating Figma designs into a fully responsive frontend using Next.js and Tailwind CSS. The project features dynamic project sections, interactive animations using Framer Motion, and smooth mobile responsiveness. I ensured pixel-perfect implementation, optimized performance, and maintained scalable component structure.",
    image: "/images/girl.png",
    link: "https://tt.mlxsoft.com/",
  },
  {
    id: 2,
    title: "Marvellex",
    description:
      "Marvellex is a blockchain-driven platform offering secure crypto exchanges, staking, and token utilities across Ethereum and Binance chains. I developed interactive, fully responsive frontend pages using Tailwind CSS and Framer Motion, ensuring modern animations and consistent UI. The platform showcases features like MLX Classic, Marvellex Gold, MLX Wallet, and staking flows. My contributions focused on user-centric design, smooth navigation,reliable experience across all screen sizes.",
    image: "/images/girl.png",
    link: "https://marvellex.com/",
  },
  {
    id: 3,
    title: "Servifi",
    description:
      "Servifi is a security service platform with coverage across the UAE and Australia. I built modern responsive frontend pages using Tailwind CSS and Next.js, ensuring user-friendly navigation, professional visual layout, and SEO-ready structure for optimal engagement on all devices.Integrated smooth scroll and reusable layouts for scalability, and optimized asset delivery for fast performance. The interface aligns with Servifi's brand tone and improves accessibility for multilingual users.",
    image: "/images/girl.png",
    link: "https://nsevensecurity.com/",
  },
  {
    id: 4,
    title: "Security net",
    description:
      "SecurityNet AI is an AI-driven security analytics platform delivering predictive threat detection and smart surveillance solutions. I created responsive, visually engaging frontend pages using Tailwind CSS and Next.js, ensuring seamless usability, fast loading times, and clean UI across devices.Enabled modular feature sections and optimized site performance to align with enterprise-grade security standards and enhance user trust.",
    image: "/images/girl.png",
    link: "https://www.securitynet.ai/",
  },
  {
    id: 5,
    title: "Erenasia",
    description:
      "Erenasia is a logistics and supply chain platform offering tailored freight, shipping, and tracking services across Asia-Pacific regions. I built sleek, mobile-friendly frontend interfaces using Tailwind CSS and Next.js, with attention to intuitive navigation, fast loading, and SEO-optimized pages.Implemented reusable UI components and optimized media assets to ensure consistent branding and performance across browsers and devices.",
    image: "/images/girl.png",
    link: "https://www.erenasia.com/",
  },
  {
    id: 6,
    title: "MLX Soft",
    description:
      "MLX Soft is an IT services provider based in Islamabad delivering end-to-end web and mobile solutions, including UI/UX design, frontend development, and web security. I implemented responsive, high-performance frontend pages using Next.js and Tailwind CSS, ensuring fast load times, intuitive navigation, and mobile compatibility. My work focused on modular, reusable components and secure UI patterns, aligning with MLX Soft's commitment to scalable, enterprise-grade technology solutions.",
    image: "/images/girl.png",
    link: "https://mlxsoft.com/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleToggle = () => {
    if (showAll) {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setShowAll(false), 300);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section ref={projectsRef} className="bg-[#F9FAFF] xl:py-28 lg:py-20 md:py-16 py-8" id="projects">
      <div className="lg:max-w-[1100px] w-full mx-auto">
        <h2 className="font-bold font-lufga  lg:text-5xl md:text-3xl text-2x text-[#25282B] capitalize text-center">
          projects
        </h2>
        <div className="bg-yellow h-1 w-28 mx-auto md:mt-3 mt-1"></div>

        <div className="flex flex-col lg:gap-20 md:gap-10 gap-5 lg:mt-20 md:mt-10 mt-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex md:flex-row flex-col justify-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="md:w-6/12 w-full bg-white lg:p-10 p-5 flex flex-col justify-center lg:rounded-tl-3xl lg:rounded-bl-3xl">
                    <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
                      {project.title}
                    </h2>
                    <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="blank"
                      className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
                    >
                      <span className="relative z-10">view project</span>
                      <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                    </Link>
                  </div>
                  <motion.div
                    className="md:w-6/12 w-full "
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={496}
                      height={526}
                      className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="md:w-6/12 w-full md:order-1 order-2"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={496}
                      height={526}
                      className="w-full h-full object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl"
                    />
                  </motion.div>
                  <div className="md:order-2 order-1 md:w-6/12 w-full bg-white lg:p-10 p-5 flex flex-col justify-center rounded-tr-3xl rounded-br-3xl">
                    <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
                      {project.title}
                    </h2>
                    <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="blank"
                      className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
                    >
                      <span className="relative z-10">view project</span>
                      <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center lg:mt-16 md:mt-10 mt-5">
          <button
            onClick={handleToggle}
            className="md:py-3 py-2 md:px-6 px-4 bg-[#25282B] text-white md:text-lg font-medium rounded-full hover:bg-[#FDC435] hover:text-black transition duration-300"
          >
            {showAll ? "See Less Projects" : "Explore All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
