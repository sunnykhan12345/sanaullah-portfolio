import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Mobile = () => {
  return (
    <>
      <section className="md:hidden block">
        <Sheet>
          <SheetTrigger className="bg-goldenyellow rounded-lg w-8 h-8 flex justify-center items-center">
            <Menu className="text-[#232424] w-5 h-5" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <div className="flex flex-col gap-6">
                <ul className="flex flex-col  gap-6">
                  <li data-aos="fade-down" data-aos-delay="300">
                    <Link
                      href="/"
                      className="text-[#232424] font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
                    >
                      home
                    </Link>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="400">
                    <Link
                      href="#skills"
                      className="text-[#232424] font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
                    >
                      skills
                    </Link>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="500">
                    <Link
                      href="#projects"
                      className="text-[#232424] font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans"
                    >
                      project
                    </Link>
                  </li>
                  <li data-aos="fade-down" data-aos-delay="600">
                    <Link
                      href="#contact"
                      className="text-[#232424] font-semibold md:text-base text-sm font-lufga capitalize transition-all duration-500 hover:text-goldenyellow font-sans mt-4"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/Abdul-Resume.pdf"
                  target="blank"
                  download="Abdul_Aziz_Resume.pdf"
                  className="xl:py-[0.8rem] py-[0.6rem] xl:px-[1.6rem] px-[1rem] text-[#232424] font-semibold md:text-base text-sm font-lufga rounded-full capitalize tracking-custom bg-[#E8B237] w-fit mx-auto hover:text-[#E8B237] hover:bg-[#2D4F46] transition-all duration-300 btn-ripple"
                  data-aos="fade-down"
                  data-aos-delay="750"
                >
                  resume
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default Mobile;
