"use client";

import React, { useState } from "react";

const projectData = [
  {
    id: 0,
    img: "/images/fitness.png",
    title: "Fitness Maker",
    des: "Haus of Axion is a luxury fitness platform offering personalized, in-home training experiences. It blends elite performance, tailored wellness, and high-end lifestyle coaching for a refined approach to fitness.",
    projectPath: "https://www.hausofaxion.ca/",

    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
  {
    id: 1,
    img: "/images/jobiffy.png",
    title: "Jobiffy Platform",
    des: "Jobifyy is a service marketplace app that connects users with skilled professionals across various fields. It allows users to post job requests, manage bookings, and grow businesses through a mobile-friendly platform available on Google Play.",
    projectPath: "https://jobifyy.com/",

    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
  {
    id: 2,
    img: "/images/tal.png",
    title: "Talent Tube",
    des: "Talent Tube is a video-based hiring platform where employers discover talent through skill reels. It supports paid trials, story-driven job posts, and one-tap bookings with Stripe escrow for a more confident hiring experience..",
    projectPath: "https://tt.mlxsoft.com/",

    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
  {
    id: 3,
    img: "/images/mlxs.png",
    title: "Marvellex Software",
    des: "Marvellex Software is a blockchain platform enabling secure crypto exchanges, staking, and token utilities on Ethereum and Binance chains. I led frontend development using React.js, Next.js, and Tailwind CSS, delivering responsive UI, real-time API integration, and interactive features like chat and media sharing.",
    projectPath: "https://marvellex.com/",
    githUrl: "#",
    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
  {
    id: 4,
    img: "/images/rl.png",
    title: "My Real Estate Guru",
    des: "My Real Estate Guru is a global real estate platform that connects buyers, renters, developers, designers, and manufacturers. It enables easy property listings, product showcases, and international lead generation through a unified and user-friendly portal.",
    projectPath: "https://myrealestate.guru/",

    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
  {
    id: 5,
    img: "/images/umr.png",
    title: "Umrah Booking App",
    des: "Booking platform for Umrah travel, hotel, and visa with custom packages.",
    projectPath: "https://www.binhamaviation.com/",
    // githUrl: "https://github.com/Saralhossain/binham-portal",
    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML", "Shadcn Ui"],
  },
];

const Project = () => {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="experience"
      className="lg:pt-20 pt-10 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the technologies used.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projectData.map((proj) => (
          <div
            key={proj.id}
            onClick={() => openModal(proj)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={proj.img}
                alt={proj.title}
                className="object-cover w-full rounded-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{proj.des}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700 text-white px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute -top-2 right-2 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full  object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.des}</p>

            <div className="flex justify-between mt-4">
              <a
                href={selectedProject.projectPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Visit Site
              </a>
              {/* <a
                href={selectedProject.githUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                View Code
              </a> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
