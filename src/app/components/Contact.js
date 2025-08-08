// "use client";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaEnvelope,
//   FaFacebook,
//   FaGithub,
// } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Footer from "./Footer";

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   // Simple fade up animation
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Stagger container
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   // Social icons animation
//   const socialContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.8,
//       },
//     },
//   };

//   const socialIcon = {
//     hidden: { opacity: 0, scale: 0.5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <section className="bg-[#F9FAFF] xl:pt-20 lg:pt-10 md:pt-7" ref={sectionRef} id="contact">
//         <div className="container">
//           {/* Title */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeUp}
//             className="text-center"
//           >
//             <h2 className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#25282B] capitalize">
//               Contact
//             </h2>
//             <motion.div
//               className="bg-yellow h-1 w-28 mx-auto md:mt-3 mt-1"
//               initial={{ width: 0 }}
//               animate={isInView ? { width: "7rem" } : { width: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             />
//           </motion.div>

//           {/* Form */}
//           <motion.form
//             className="flex flex-col md:space-y-6 space-y-3 max-w-md mx-auto lg:mt-20 md:mt-10 mt-6"
//             variants={container}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             {/* Name Field */}
//             <motion.div variants={fadeUp}>
//               <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="w-full bg-white border border-[#E8ECF4] rounded-lg outline-none py-2 px-3 md:mt-2 mt-1 focus:border-yellow transition-colors"
//               />
//             </motion.div>

//             {/* Email Field */}
//             <motion.div variants={fadeUp}>
//               <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full bg-white border border-[#E8ECF4] rounded-lg outline-none py-2 px-3 md:mt-2 mt-1 focus:border-yellow transition-colors"
//               />
//             </motion.div>

//             {/* Message Field */}
//             <motion.div variants={fadeUp}>
//               <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
//                 message
//               </label>
//               <textarea
//                 name="message"
//                 rows={5}
//                 className="w-full p-2 bg-white border border-[#E8ECF4] rounded-lg focus:outline-none outline-none md:mt-2 mt-1 focus:border-yellow transition-colors"
//               ></textarea>
//             </motion.div>
//             <motion.div variants={fadeUp}>
//               <button
//                 type="submit"
//                 className="upwork-btn bg-yellow text-[#25282B] text-lg font-lufga font-medium md:px-6 px-4 md:py-2 py-1.5 md:rounded-lg rounded-md md:mt-6 mt-0 self-end relative overflow-hidden group"
//               >
//                 <span className="relative z-10">Send</span>
//                 <span className="btn-hover-bg-right"></span>
//               </button>
//             </motion.div>

//             {/* Social Icons */}
//             <motion.div
//               className="flex justify-center items-center gap-6 w-full md:pt-6 pt-2"
//               variants={socialContainer}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//             >
//               <motion.div
//                 variants={socialIcon}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FaGithub className="text-3xl text-black cursor-pointer hover:text-yellow transition-colors" />
//               </motion.div>
//               <motion.div
//                 variants={socialIcon}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FaLinkedin className="text-3xl text-black cursor-pointer hover:text-yellow transition-colors" />
//               </motion.div>
//               <motion.div
//                 variants={socialIcon}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FaEnvelope className="text-3xl text-black cursor-pointer hover:text-yellow transition-colors" />
//               </motion.div>
//               <motion.div
//                 variants={socialIcon}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FaInstagram className="text-3xl text-black cursor-pointer hover:text-yellow transition-colors" />
//               </motion.div>
//               <motion.div
//                 variants={socialIcon}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FaFacebook className="text-3xl text-black cursor-pointer hover:text-yellow transition-colors" />
//               </motion.div>
//             </motion.div>
//           </motion.form>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Contact;
"use client";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "./Footer";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Simple fade up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Stagger container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Social icons animation
  const socialContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const socialIcon = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        className="bg-[#F9FAFF] xl:pt-20 lg:pt-10 md:pt-7"
        ref={sectionRef}
        id="contact"
      >
        <div className="container">
          {/* Title */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="font-bold font-lufga lg:text-5xl md:text-3xl text-2xl text-[#25282B] capitalize">
              Contact
            </h2>
            <motion.div
              className="bg-yellow h-1 w-28 mx-auto md:mt-3 mt-1"
              initial={{ width: 0 }}
              animate={isInView ? { width: "7rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Form */}
          <motion.form
            className="flex flex-col md:space-y-6 space-y-3 max-w-md mx-auto lg:mt-20 md:mt-10 mt-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Name Field */}
            <motion.div variants={fadeUp}>
              <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-white border border-[#E8ECF4] rounded-lg outline-none py-2 px-3 md:mt-2 mt-1 focus:border-yellow transition-colors"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeUp}>
              <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-white border border-[#E8ECF4] rounded-lg outline-none py-2 px-3 md:mt-2 mt-1 focus:border-yellow transition-colors"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={fadeUp}>
              <label className="text-base font-semibold font-lufga capitalize text-[#25282B]">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="w-full p-2 bg-white border border-[#E8ECF4] rounded-lg focus:outline-none outline-none md:mt-2 mt-1 focus:border-yellow transition-colors"
              ></textarea>
            </motion.div>
            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="upwork-btn bg-yellow text-[#25282B] text-lg font-lufga font-medium md:px-6 px-4 md:py-2 py-1.5 md:rounded-lg rounded-md md:mt-6 mt-0 self-end relative overflow-hidden group"
              >
                <span className="relative z-10">Send</span>
                <span className="btn-hover-bg-right"></span>
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center items-center gap-6 w-full md:pt-6 pt-2"
              variants={socialContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.a
                href="https://github.com/sunnykhan12345" // your GitHub URL here
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-black hover:text-yellow"
              >
                <FaGithub className="text-3xl cursor-pointer" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sanaullah-dev/" // your LinkedIn URL here
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-black hover:text-yellow"
              >
                <FaLinkedin className="text-3xl cursor-pointer" />
              </motion.a>

              <motion.a
                href="mailto:sunnykhansadda@gmail.com" // your email here
                variants={socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-black hover:text-yellow"
              >
                <FaEnvelope className="text-3xl cursor-pointer" />
              </motion.a>

              <motion.a
                href="#" // your Instagram URL here
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-black hover:text-yellow"
              >
                <FaInstagram className="text-3xl cursor-pointer" />
              </motion.a>

              <motion.a
                href="#" // your Facebook URL here
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-black hover:text-yellow"
              >
                <FaFacebook className="text-3xl cursor-pointer" />
              </motion.a>
            </motion.div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
