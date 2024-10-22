import Link from "next/link";
import React from "react";

const Logo = ({ Light = false }) => {
  const colorClass = Light ? "text-white" : "text-primary";
  return (
    <Link href={"/"} className="font-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Sana Ullah</span>
    </Link>
  );
};

export default Logo;
