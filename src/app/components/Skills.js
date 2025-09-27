// "use client";

// import Image from "next/image";
// import React from "react";

// const SkillsInfo = [
//   {
//     title: "Frontend",
//     skills: [
//       {
//         name: "HTML",
//         logo: (
//           <Image
//             src={"/images/html.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="HTML"
//           />
//         ),
//       },
//       {
//         name: "CSS",
//         logo: (
//           <Image
//             src={"/images/css.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="CSS"
//           />
//         ),
//       },
//       {
//         name: "JavaScript",
//         logo: (
//           <Image
//             src={"/images/js.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="JavaScript"
//           />
//         ),
//       },
//       {
//         name: "React Js",
//         logo: (
//           <Image
//             src={"/images/reacts.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Redux",
//         logo: (
//           <Image
//             src={"/images/redux.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Redux"
//           />
//         ),
//       },
//       {
//         name: "Next js",
//         logo: (
//           <Image
//             src={"/images/next.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Next.js"
//           />
//         ),
//       },
//       {
//         name: "Tailwind CSS",
//         logo: (
//           <Image
//             src={"/images/tail.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Tailwind CSS"
//           />
//         ),
//       },
//       {
//         name: "Bootstrap",
//         logo: (
//           <Image
//             src={"/images/boot.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Bootstrap"
//           />
//         ),
//       },
//       {
//         name: "Shadcn Ui",
//         logo: (
//           <Image
//             src={"/images/shad.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Shadcn UI"
//           />
//         ),
//       },
//       {
//         name: "Aos",
//         logo: (
//           <Image
//             src={"/images/aos.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="AOS"
//           />
//         ),
//       },
//       {
//         name: "Framer Motion",
//         logo: (
//           <Image
//             src={"/images/frm.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Framer Motion"
//           />
//         ),
//       },
//     ],
//   },
//   {
//     title: "Tools",
//     skills: [
//       {
//         name: "Git",
//         logo: (
//           <Image
//             src={"/images/git.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Node.js"
//           />
//         ),
//       },
//       {
//         name: "Github",
//         logo: (
//           <Image
//             src={"/images/githubb.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Express.js"
//           />
//         ),
//       },
//       {
//         name: "vs code",
//         logo: (
//           <Image
//             src={"/images/vs.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="MongoDB"
//           />
//         ),
//       },
//       {
//         name: "Postman",
//         logo: (
//           <Image
//             src={"/images/postm.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Compass",
//         logo: (
//           <Image
//             src={"/images/compa.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Vercel",
//         logo: (
//           <Image
//             src={"/images/vercel.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Jira",
//         logo: (
//           <Image
//             src={"/images/jiraa.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Trello",
//         logo: (
//           <Image
//             src={"/images/trello.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//     ],
//   },
//   //   3rd row
//   {
//     title: "Tools",
//     skills: [
//       {
//         name: "Git",
//         logo: (
//           <Image
//             src={"/images/git.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Node.js"
//           />
//         ),
//       },
//       {
//         name: "Github",
//         logo: (
//           <Image
//             src={"/images/githubb.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="Express.js"
//           />
//         ),
//       },
//       {
//         name: "vs code",
//         logo: (
//           <Image
//             src={"/images/vs.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="MongoDB"
//           />
//         ),
//       },
//       {
//         name: "Postman",
//         logo: (
//           <Image
//             src={"/images/postm.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Compass",
//         logo: (
//           <Image
//             src={"/images/compa.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Vercel",
//         logo: (
//           <Image
//             src={"/images/vercel.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Jira",
//         logo: (
//           <Image
//             src={"/images/jiraa.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//       {
//         name: "Trello",
//         logo: (
//           <Image
//             src={"/images/trello.png"}
//             width={36}
//             height={36}
//             className="object-cover w-6 h-auto"
//             alt="React"
//           />
//         ),
//       },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div
//       id="skills"
//       className="bg-[#050414] py-24 pb-24 px-6 md:px-16 lg:px-24 xl:px-32"
//     >
//       {/* section title */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my technical skills and expertise honed through
//           various projects and experiences
//         </p>
//       </div>

//       {/* skills category */}
//       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//         {SkillsInfo.map((categoy) => (
//           <div
//             key={categoy.title}
//             className="bg-gray-900 backdrop-blur-md px-6 py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//           >
//             <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//               {categoy.title}
//             </h3>

//             {/* skill items */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//               {categoy.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#8245ec] hover:shadow-[0_0_10px_2px_#8245ec]"
//                 >
//                   <span className="w-6 h-6">{skill.logo}</span>
//                   <span className="text-xs md:text-sm text-gray-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
"use client";

import Image from "next/image";
import React from "react";

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: (
          <Image
            src="/images/html.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="HTML"
          />
        ),
      },
      {
        name: "CSS",
        logo: (
          <Image
            src="/images/css.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="CSS"
          />
        ),
      },
      {
        name: "JavaScript",
        logo: (
          <Image
            src="/images/js.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="JavaScript"
          />
        ),
      },
      {
        name: "React Js",
        logo: (
          <Image
            src="/images/reacts.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="React"
          />
        ),
      },
      {
        name: "Redux",
        logo: (
          <Image
            src="/images/redux.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Redux"
          />
        ),
      },
      {
        name: "Next js",
        logo: (
          <Image
            src="/images/next.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Next.js"
          />
        ),
      },
      {
        name: "Tailwind CSS",
        logo: (
          <Image
            src="/images/tail.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Tailwind CSS"
          />
        ),
      },
      {
        name: "Bootstrap",
        logo: (
          <Image
            src="/images/boot.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Bootstrap"
          />
        ),
      },
      {
        name: "Shadcn Ui",
        logo: (
          <Image
            src="/images/shad.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Shadcn UI"
          />
        ),
      },
      {
        name: "Aos",
        logo: (
          <Image
            src="/images/aos.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="AOS"
          />
        ),
      },
      {
        name: "Framer Motion",
        logo: (
          <Image
            src="/images/frm.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Framer Motion"
          />
        ),
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: (
          <Image
            src="/images/git.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Git"
          />
        ),
      },
      {
        name: "Github",
        logo: (
          <Image
            src="/images/githubb.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Github"
          />
        ),
      },
      {
        name: "VS Code",
        logo: (
          <Image
            src="/images/vs.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="VS Code"
          />
        ),
      },
      {
        name: "Postman",
        logo: (
          <Image
            src="/images/postm.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Postman"
          />
        ),
      },
      {
        name: "Compass",
        logo: (
          <Image
            src="/images/compa.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Compass"
          />
        ),
      },
      {
        name: "Vercel",
        logo: (
          <Image
            src="/images/vercel.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Vercel"
          />
        ),
      },
      {
        name: "Jira",
        logo: (
          <Image
            src="/images/jiraa.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Jira"
          />
        ),
      },
      {
        name: "Trello",
        logo: (
          <Image
            src="/images/trello.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Trello"
          />
        ),
      },
    ],
  },
  //   backedn skills
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        logo: (
          <Image
            src="/images/git.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Git"
          />
        ),
      },
      {
        name: "Express Js",
        logo: (
          <Image
            src="/images/githubb.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="Github"
          />
        ),
      },
      {
        name: "Jwt Token",
        logo: (
          <Image
            src="/images/vs.png"
            width={36}
            height={36}
            className="object-cover w-6 h-auto"
            alt="VS Code"
          />
        ),
      },
   
    
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-[#050414] py-24 pb-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </div>

      {/* ✅ Backend experience note */}
      <p className="text-center text-sm sm:text-base text-[#a855f7] font-medium mb-6">
        💡 Primarily focused on Frontend, with basic backend experience using
        Node.js, Express, JWT, and MongoDB.
      </p>

      {/* Skills category */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#8245ec] hover:shadow-[0_0_10px_2px_#8245ec]"
                >
                  <span className="w-6 h-6">{skill.logo}</span>
                  <span className="text-xs md:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
