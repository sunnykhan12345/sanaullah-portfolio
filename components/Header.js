"use client";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute py-8 xl:py-[48px] w-full z-30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row  items-center gap-4 md:justify-between">
          {/* logo */}
          <Logo />

          {/* nav */}
          <div>
            <Nav
              containerStyles="hidden xl:flex "
              ListStyles="flex gap-6 no-underline"
              LinkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer "
            />
          </div>
          <div>social</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
