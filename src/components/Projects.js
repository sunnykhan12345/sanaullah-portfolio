"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsData from "./ProjectsData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="lg:pt-16 md:pt-12 pt-6 md:pb-10 pb-6 relative overflow-hidden bg-[#FDFFFC]"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
    >
      <div className="md:container mx-auto px-5">
        <h2
          className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-goldenyellow font-medium font-lufga capitalize md:text-start text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          latest projects
        </h2>
        {/* Slider */}
        <div className=" lg:mt-10 md:mt-5 mt-2 relative">
          <Slider ref={sliderRef} {...settings}>
            {ProjectsData.map((card) => (
              <Link
                href={card.link}
                key={card.id}
                target="blank"
                className="md:px-7 px-3"
              >
                <div className="bg-[#00BD901A]/20 rounded-[10px] overflow-hidden group">
                  {/* Top Image */}
                  <div className="relative">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      width={330}
                      height={220}
                      className="md:h-[240px] h-[170px] w-full object-cover"
                    />
                  </div>
                  {/* Bottom Section */}
                  <div className="bg-[#FEB36A] hover:bg-goldenyellow transition-all duration-300 md:px-5 px-2.5  lg:pt-12 pt-8 md:pb-5 pb-2.5">
                    <h2 className="font-semibold font-lufga uppercase md:text-[22px] text-[18px] text-[#232424] lg:leading-[28px]">
                      {card.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
          {/* Custom  Buttons */}
          <div className="flex md:justify-between md:gap-0 gap-40 justify-center items-center lg:mt-5 mt-2">
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] flex items-center justify-center rounded-full bg-[#2D4F46] group hover:bg-goldenyellow transition-all duration-300 btn-ripple border-[1.5px] border-darkTeal hover:border-goldenYellow"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="md:w-[50px] w-[30px] md:h-[50px] h-[30px]  flex items-center justify-center rounded-full bg-[#2D4F46] group hover:bg-goldenyellow  transition-all duration-300 btn-ripple border-[1.5px] border-darkTeal hover:border-goldenYellow"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
