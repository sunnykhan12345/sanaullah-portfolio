import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const HamBurger = () => {
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
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation</SheetTitle>{" "}
            {/* Hidden but still present */}
          </SheetHeader>

          {/* Your nav links */}
          <motion.ul
            className="flex flex-col gap-6 mt-6"
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
        </SheetContent>
      </Sheet>
    </>
  );
};

export default HamBurger;
