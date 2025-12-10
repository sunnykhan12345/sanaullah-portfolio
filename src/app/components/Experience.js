import React from "react";

const experiences = [
  {
    id: 0,
    img: "/images/mlx.png",
    role: "Frontend Developer",
    company: "Marvellex Software Solutions",
    date: "June 2024 – Present · 1 yr 4 mos",
    type: "Full-time · On-site",
    location: "Islamabad, Pakistan",
    des: "Working on dynamic and scalable web applications using the MERN stack. Leading front-end development with technologies like React.js, Tailwind CSS, and Next.js. Collaborating with UI/UX teams to deliver high-performance user experiences.",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
      "Shadcn Ui",
      "Connect Metamask (Eth)",
    ],
  },
  {
    id: 1,
    img: "/images/mlx.png",
    role: "Intern Frontend Developer",
    company: "Marvellex Software Solutions",
    date: "April 2024 – June 2024 · 3 mos",
    type: "Internship · Hybrid",
    location: "Islamabad, Pakistan",
    des: "Contributed as a Frontend Intern by assisting in developing UI components and responsive web pages using React.js and Tailwind CSS. Gained hands-on experience in real-world projects and design-to-code implementation.",
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="lg:pt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400  mt-4 text-lg font-semibold">
          A collection of my work experience and the roles i have taken in
          various orginzation
        </p>
      </div>
      {/* expernice timeline */}
      <div className="relative">
        {/* vertciall line */}
        <div
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0
        w-1 bg-white h-full"
        ></div>
        {/* experince entrys */}
        {experiences?.map((exp, index) => (
          <div
            key={exp.id}
            className="relative flex flex-col sm:flex-row items-center mb-14"
          >
            {/* Timeline circle */}
            <div className="absolute lg:-mt- -mt-7 left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={exp.img}
                alt="logo"
                className="object-cover w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>

            {/* Content card */}
            <div
              className={`w-full sm:w-[38%] px-4 ${
                index % 2 === 0 ? "sm:ml-auto sm:pr-16" : "sm:mr-auto sm:pl-16"
              }`}
            >
              <div className="p-6 bg-[#111827] text-white rounded-xl shadow-xl border border-[#8245ec] transition-transform transform hover:scale-[1.02]">
                {/* Logo & Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                    <img
                      src={exp.img}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-sm text-purple-400">{exp.company}</p>
                    <p className="text-xs text-gray-400">{exp.date}</p>
                  </div>
                </div>
                {/* Description */}
                <p className="text-sm text-gray-300">{exp.des}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2 gap-2">
                    {exp.skills.map((skill, index) => (
                      <li key={index} className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
