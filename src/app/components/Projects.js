// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     id: 1,
//     title: "Marvellex Software",
//     description:
//       "Marvellex Software is a comprehensive blockchain platform enabling secure crypto exchanges, staking, and token utilities on Ethereum and Binance chains. Over the past 1 year and 5 months, I led frontend development, delivering a polished UI/UX with clean, modern, and responsive designs using React.js, Next.js, and Tailwind CSS. I implemented key API integrations to ensure smooth data flow and real-time functionality across multiple pages, including dashboard, about, and homepage. Additionally, I developed a chatbox section supporting messaging, comments, and sending videos and images, enhancing user interaction and engagement. The project focused on optimizing performance, improving user experience, and maintaining scalability across devices.",
//     image: "/images/girl.png",
//     link: "https://marvellex.com/",
//     demoVideo: "https://www.youtube.com/embed/ysz5S6PUM-U",
//   },
//   {
//     id: 2,
//     title: "Jobify",
//     description:
//       "Jobify is a service marketplace platform where users can find a wide variety of services ranging from software development and plumbing to hair styling and more. I completed the frontend development for this project, focusing on creating a user-friendly, responsive interface with Next.js and Tailwind CSS. The platform features easy navigation, dynamic service listings, and a clean design to enhance user experience and accessibility.",
//     image: "/images/jobify.png",
//     link: "https://jobifyy.com/",
//     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
//   },
//   {
//     id: 3,
//     title: "My Real Estate Guru",
//     description:
//       "My Real Estate Guru is a dynamic real estate platform designed to connect buyers, sellers, and agents seamlessly. Over the past 3 months, I contributed to frontend development by building multiple responsive pages and designing a user-friendly chatbox UI. I implemented API integrations for real-time data handling and messaging functionality. Additionally, I resolved responsiveness issues across various screen sizes to ensure a smooth and consistent user experience on all devices.",
//     image: "/images/girl.png",
//     link: "https://realestateguru.example.com", // update with actual link if available
//     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
//   },
//   {
//     id: 4,
//     title: "Talent Tube",
//     description:
//       "Talent Tube is a video-sharing platform similar to TikTok, designed for creative professionals to showcase their short videos. Over 2 months, I worked on designing and developing the homepage, user profiles, and settings pages. I implemented responsive UI components using Next.js and Tailwind CSS, focusing on smooth video playback, user engagement features like likes and comments, and overall seamless user experience across devices.",
//     image: "/images/girl.png",
//     link: "https://tt.mlxsoft.com/",
//     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
//   },
//   {
//     id: 5,
//     title: "Continental Cleaning Services",
//     description:
//       "Continental Cleaning Services specializes in professional cleaning tailored to healthcare, life sciences, and advanced technology facilities. I contributed to the frontend development by building a clean, modern, and responsive user interface using Next.js and Tailwind CSS. The platform highlights service details with a focus on professionalism, ensuring an intuitive experience for clients looking for specialized cleaning solutions.",
//     image:
//       "/placeholder.svg?height=526&width=496&text=Continental+Cleaning+Services",
//     link: "https://www.continental.cleaning/",
//     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
//   },
//   {
//     id: 6,
//     title: "Binham Aviation & Umrah Services",
//     description:
//       "Binham Aviation is a professional aviation and Umrah service platform. Over the past months, I completed the frontend development using Next.js and Tailwind CSS, delivering a fully responsive, modern, and user-friendly interface. The project features smooth animations, intuitive navigation, and optimized performance to provide a seamless experience for users planning Umrah and Haj services.",
//     image: "/images/girl.png",
//     link: "https://www.binhamaviation.com/",
//     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
//   },
// ];

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [modalVideo, setModalVideo] = useState(null); // stores embed video URL or null
//   const projectsRef = useRef(null);

//   const visibleProjects = showAll ? projects : projects.slice(0, 3);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const imageVariants = {
//     hover: {
//       scale: 1.03,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const handleToggle = () => {
//     if (showAll) {
//       projectsRef.current?.scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => setShowAll(false), 300);
//     } else {
//       setShowAll(true);
//     }
//   };

//   const openModal = (videoUrl) => {
//     setModalVideo(videoUrl);
//   };

//   const closeModal = () => {
//     setModalVideo(null);
//   };

//   return (
//     <>
//       <section
//         ref={projectsRef}
//         className="bg-[#F9FAFF] xl:py-28 lg:py-20 md:py-16 py-8"
//         id="projects"
//       >
//         <div className="lg:max-w-[1296px] w-full mx-auto">
//           <h2 className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#25282B] capitalize text-center">
//             projects
//           </h2>
//           <div className="bg-yellow-500 h-1 w-28 mx-auto md:mt-3 mt-1"></div>
//           <div className="flex flex-col lg:gap-20 md:gap-10 gap-5 lg:mt-20 md:mt-10 mt-6">
//             {visibleProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 className="flex md:flex-row flex-col justify-center"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 {index % 2 === 0 ? (
//                   <>
//                     <div className="md:w-6/12 w-full bg-white lg:p-10 p-5 flex flex-col justify-center lg:rounded-tl-3xl lg:rounded-bl-3xl">
//                       <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
//                         {project.title}
//                       </h2>
//                       <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
//                         {project.description}
//                       </p>
//                       <div className="flex flex-wrap gap-3 mt-3">
//                         <Link
//                           href={project.link}
//                           target="_blank"
//                           className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
//                         >
//                           <span className="relative z-10">View Project</span>
//                           <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
//                         </Link>
//                         <button
//                           onClick={() => openModal(project.demoVideo)}
//                           className="group relative py-2 md:px-5 px-3 text-teal-600 font-lufga font-medium md:text-lg text-sm w-fit rounded-3xl border border-teal-600 overflow-hidden transition-all duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:shadow-lg"
//                         >
//                           <span className="relative z-10">Watch Demo</span>
//                           <span className="absolute inset-0 bg-teal-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
//                         </button>
//                       </div>
//                     </div>
//                     <motion.div
//                       className="md:w-6/12 w-full"
//                       variants={imageVariants}
//                       whileHover="hover"
//                     >
//                       <Image
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         width={496}
//                         height={526}
//                         className="w-full h-full object-center lg:rounded-tr-3xl lg:rounded-br-3xl"
//                       />
//                     </motion.div>
//                   </>
//                 ) : (
//                   <>
//                     <motion.div
//                       className="md:w-6/12 w-full md:order-1 order-2"
//                       variants={imageVariants}
//                       whileHover="hover"
//                     >
//                       <Image
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.title}
//                         width={496}
//                         height={526}
//                         className="w-full h-full object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl"
//                       />
//                     </motion.div>
//                     <div className="md:order-2 order-1 md:w-6/12 w-full bg-white lg:p-10 p-5 flex flex-col justify-center rounded-tr-3xl rounded-br-3xl">
//                       <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
//                         {project.title}
//                       </h2>
//                       <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
//                         {project.description}
//                       </p>
//                       <div className="flex flex-wrap gap-3 mt-3">
//                         <Link
//                           href={project.link}
//                           target="_blank"
//                           className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
//                         >
//                           <span className="relative z-10">View Project</span>
//                           <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
//                         </Link>
//                         <button
//                           onClick={() => openModal(project.demoVideo)}
//                           className="group relative py-2 md:px-5 px-3 text-teal-600 font-lufga font-medium md:text-lg text-sm w-fit rounded-3xl border border-teal-600 overflow-hidden transition-all duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:shadow-lg"
//                         >
//                           <span className="relative z-10">Watch Demo</span>
//                           <span className="absolute inset-0 bg-teal-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
//                         </button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//           {/* Toggle Button */}
//           <div className="flex justify-center lg:mt-16 md:mt-10 mt-5">
//             <button
//               onClick={handleToggle}
//               className="md:py-3 py-2 md:px-6 px-4 bg-[#25282B] text-white md:text-lg font-medium rounded-full hover:bg-[#FDC435] hover:text-black transition duration-300"
//             >
//               {showAll ? "See Less Projects" : "Explore All Projects"}
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Modal Overlay */}
//       {modalVideo && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeModal}
//           aria-modal="true"
//           role="dialog"
//         >
//           <div
//             className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-lg shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-400"
//               onClick={closeModal}
//               aria-label="Close video modal"
//             >
//               &times;
//             </button>
//             {/* Embedded Video */}
//             <iframe
//               src={modalVideo}
//               title="Project Demo Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full rounded-lg"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Projects;
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Marvellex Software",
    description:
      "Marvellex Software is a comprehensive blockchain platform enabling secure crypto exchanges, staking, and token utilities on Ethereum and Binance chains. Over the past 1 year and 5 months, I led frontend development, delivering a polished UI/UX with clean, modern, and responsive designs using React.js, Next.js, and Tailwind CSS. I implemented key API integrations to ensure smooth data flow and real-time functionality across multiple pages, including dashboard, about, and homepage. Additionally, I developed a chatbox section supporting messaging, comments, and sending videos and images, enhancing user interaction and engagement. The project focused on optimizing performance, improving user experience, and maintaining scalability across devices.",
    image: "/images/mlxc.png",
    link: "https://marvellex.com/",
    demoVideo: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "Jobify",
    description:
      "Jobify is a service marketplace platform where users can find a wide variety of services ranging from software development and plumbing to hair styling and more. I completed the frontend development for this project, focusing on creating a user-friendly, responsive interface with Next.js and Tailwind CSS. The platform features easy navigation, dynamic service listings, and a clean design to enhance user experience and accessibility.",
    image: "/images/jobify.png",
    link: "https://uat.jobifyy.com/",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 3,
    title: "My Real Estate Guru",
    description:
      "My Real Estate Guru is a dynamic real estate platform designed to connect buyers, sellers, and agents seamlessly. Over the past 3 months, I contributed to frontend development by building multiple responsive pages and designing a user-friendly chatbox UI. I implemented API integrations for real-time data handling and messaging functionality. Additionally, I resolved responsiveness issues across various screen sizes to ensure a smooth and consistent user experience on all devices.",
    image: "/images/real.png",
    link: "https://myrealestate.guru/", // update with actual link if available
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 4,
    title: "Talent Tube",
    description:
      "Talent Tube is a video-sharing platform similar to TikTok, designed for creative professionals to showcase their short videos. Over 2 months, I worked on designing and developing the homepage, user profiles, and settings pages. I implemented responsive UI components using Next.js and Tailwind CSS, focusing on smooth video playback, user engagement features like likes and comments, and overall seamless user experience across devices.",
    image: "/images/talent.png",
    link: "https://tt.mlxsoft.com/",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 5,
    title: "Continental Cleaning Services",
    description:
      "Continental Cleaning Services specializes in professional cleaning tailored to healthcare, life sciences, and advanced technology facilities. I contributed to the frontend development by building a clean, modern, and responsive user interface using Next.js and Tailwind CSS. The platform highlights service details with a focus on professionalism, ensuring an intuitive experience for clients looking for specialized cleaning solutions.",
    image: "/images/clean.png",
    link: "https://www.continental.cleaning/",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    id: 6,
    title: "Binham Aviation & Umrah Services",
    description:
      "Binham Aviation is a professional aviation and Umrah service platform. Over the past months, I completed the frontend development using Next.js and Tailwind CSS, delivering a fully responsive, modern, and user-friendly interface. The project features smooth animations, intuitive navigation, and optimized performance to provide a seamless experience for users planning Umrah and Haj services.",
    image: "/images/binham.png",
    link: "https://www.binhamaviation.com/",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [modalVideo, setModalVideo] = useState(null); // stores embed video URL or null
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

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <>
      <section
        ref={projectsRef}
        className="bg-[#F9FAFF] xl:py-28 lg:py-20 md:py-16 py-8"
        id="projects"
      >
        <div className="lg:max-w-[1296px] w-full mx-auto">
          <h2 className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#25282B] capitalize text-center">
            projects
          </h2>
          <div className="bg-yellow-500 h-1 w-28 mx-auto md:mt-3 mt-1"></div>
          <div className="flex flex-col lg:gap-20 md:gap-10 gap-5 lg:mt-20 md:mt-10 mt-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex md:flex-row flex-col justify-center  rounded-3xl shadow-lg  items-stretch 
              overflow-hidden 
             bg-gradient-to-br from-white via-[#fdfdfd] to-[#f7f9ff] 
             border border-gray-100 hover:shadow-xl transition-all duration-300" // Unified card styling
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-6/12 w-full lg:p-10 p-5 flex flex-col justify-center">
                      <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
                        {project.title}
                      </h2>
                      <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
                        >
                          <span className="relative z-10">View Project</span>
                          <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                        </Link>
                        {/* <button
                          onClick={() => openModal(project.demoVideo)}
                          className="group relative py-2 md:px-5 px-3 text-teal-600 font-lufga font-medium md:text-lg text-sm w-fit rounded-3xl border border-teal-600 overflow-hidden transition-all duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:shadow-lg"
                        >
                          <span className="relative z-10">Watch Demo</span>
                          <span className="absolute inset-0 bg-teal-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                        </button> */}
                      </div>
                    </div>
                    <motion.div
                      className="md:w-6/12 w-full overflow-auto"
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={496}
                        height={526}
                        className="w-full h-full object-contain rounded-3xl" // Added rounded-3xl
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      className="md:w-6/12 w-full md:order-1 order-2 overflow-auto"
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={496}
                        height={526}
                        className="w-full h-full object-contain rounded-3xl" // Added rounded-3xl
                      />
                    </motion.div>
                    <div className="md:order-2 order-1 md:w-6/12 w-full lg:p-10 p-5 flex flex-col justify-center">
                      <h2 className="font-bold lg:text-[40px] md:text-[30px] text-[22px] text-[#25282B] capitalize">
                        {project.title}
                      </h2>
                      <p className="lg:py-6 md:py-3 py-1.5 text-[#828282] font-normal font-lufga lg:text-lg md:text-base text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="group relative py-2 md:px-5 px-3 text-[#25282B] font-lufga font-medium md:text-lg text-sm bg-white w-fit rounded-3xl border border-[#25282B] overflow-hidden transition-all duration-300 ease-in-out hover:bg-[#25282B] hover:text-white hover:shadow-lg"
                        >
                          <span className="relative z-10">View Project</span>
                          <span className="absolute inset-0 bg-[#25282B] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                        </Link>
                        {/* <button
                          onClick={() => openModal(project.demoVideo)}
                          className="group relative py-2 md:px-5 px-3 text-teal-600 font-lufga font-medium md:text-lg text-sm w-fit rounded-3xl border border-teal-600 overflow-hidden transition-all duration-300 ease-in-out hover:bg-teal-600 hover:text-white hover:shadow-lg"
                        >
                          <span className="relative z-10">Watch Demo</span>
                          <span className="absolute inset-0 bg-teal-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></span>
                        </button> */}
                      </div>
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
      {/* Modal Overlay */}
      {modalVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video bg-black rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-400"
              onClick={closeModal}
              aria-label="Close video modal"
            >
              &times;
            </button>
            {/* Embedded Video */}
            <iframe
              src={modalVideo}
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
