import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F9FAFF]">
        <Image
          src="/images/footer-image.png"
          width={1440}
          height={344}
          alt="footer image"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default Footer;
