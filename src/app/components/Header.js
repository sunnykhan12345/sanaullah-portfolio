"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HamBurger from "./HamBurger";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkHover = {
    scale: 1.05,
    color: "#FDC435",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 md:py-5 py-3 transition-colors duration-300 ${
        scrolled ? "bg-[#F9FAFF] shadow-sm" : "bg-transparent"
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-yellow to-indigo-600 shadow-lg"
            aria-label="Sana Ullah Logo"
            title="Sana Ullah"
          >
            <span className="text-white font-bold text-4xl select-none">S</span>
          </motion.div>

          <motion.ul
            className="md:flex items-center gap-8 hidden"
            variants={headerVariants}
          >
            {["about", "projects", "contact"].map((item) => (
              <motion.li key={item} variants={itemVariants}>
                <motion.div whileHover={linkHover}>
                  <Link
                    href={`#${item}`}
                    className="font-medium font-lufga text-lg text-[#25282B] hover:text-[#FDC435] transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <div className="md:hidden block">
            <HamBurger />
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
