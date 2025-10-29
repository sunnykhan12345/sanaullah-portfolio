"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./project.module.css";

export default function Project() {
  // Static project data
  const projectsData = [
    {
      image: "images/talent.png",
      project_title: "Smart Home Automation",
      project_link: "#",
    },
    {
      image: "images/talent.png",
      project_title: "E-Commerce Platform",
      project_link: "#",
    },
    {
      image: "images/talent.png",
      project_title: "AI Chatbot",
      project_link: "#",
    },
    {
      image: "images/talent.png",
      project_title: "Mobile Banking App",
      project_link: "#",
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false, // ⚠️ Disable centerMode to prevent clipping
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className={styles.our_projects}>
      <div className="container">
        <div className={styles.our_project_top_conetnt}>
          <div className={styles.our_project_headings}>
            <h2 className="main-heading">Our Projects</h2>
          </div>
        </div>
      </div>

      <div className={`${styles.our_project_slider} project-slider`}>
        <Slider {...settings}>
          {projectsData.map((item, index) => (
            <div key={index}>
              <Link href={item.project_link} target="_blank">
                <div className={styles.project_slider_meta}>
                  <div className={styles.slider_img}>
                    <Image
                      src={`/${item.image}`} // ✅ Must start with /
                      alt={item.project_title}
                      width={653}
                      height={428}
                      className={styles.project_slider_img}
                      unoptimized={true} // ✅ Force Next.js to serve image directly
                    />
                  </div>
                  <div className={styles.project_slider_content}>
                    <h5 className={styles.project_slide_heading}>
                      {item.project_title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
