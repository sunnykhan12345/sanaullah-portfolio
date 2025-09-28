"use client";
import React from "react";

const educationData = [
  {
    id: 1,
    img: "/images/education.png",
    degree: "Bachelor of Science in Computer Science",
    institution: "The University of Agriculture, Peshawar",
    date: "Aug 2020 – Aug 2024",
    location: "Peshawar, Pakistan",
    details:
      "Gained a strong foundation in computer science with a focus on software development, data structures, web technologies, and database systems. Completed projects using React.js, Next.js, and modern frontend tools.",
    skills: [
      "React.js",
      "Next.js",
      "Database Systems",
      "Data Structures",
      "Web Technologies",
      "Project Work",
    ],
  },
  {
    id: 2,
    img: "/images/education.png",
    degree: "Frontend Web Designing Course",
    institution: "Private Institute (Rawalpindi)",
    date: "June 2022 – Sep 2022",
    location: "Rawalpindi, Pakistan",
    details:
      "Gained practical experience in HTML, CSS, JavaScript, and Bootstrap. Worked on real-world projects in a team environment, focusing on responsive design and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
  },
  {
    id: 3,
    img: "/images/education.png",
    degree: "Frontend Web Designing Course",
    institution: "Private Institute (Rawalpindi)",
    date: "June 2022 – Sep 2022",
    location: "Rawalpindi, Pakistan",
    details:
      "Gained practical experience in HTML, CSS, JavaScript, and Bootstrap. Worked on real-world projects in a team environment, focusing on responsive design and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 pb-24 bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A journey of academic learning and skill development.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education entries */}
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-24"
          >
            {/* Timeline circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt="logo"
                className="object-cover w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>

            {/* Content card */}
            <div
              className={`w-full sm:w-[45%] px-4 ${
                index % 2 === 0 ? "sm:ml-auto sm:pr-6" : "sm:mr-auto sm:pl-6"
              }`}
            >
              <div className="p-6 bg-[#111827] text-white rounded-xl shadow-xl border border-[#8245ec] transition-transform transform hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                    <img
                      src={edu.img}
                      alt="img"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-sm text-purple-400">{edu.institution}</p>
                    <p className="text-xs text-gray-400">{edu.date}</p>
                    <p className="text-xs text-gray-400">{edu.location}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-300">{edu.details}</p>

                <div className="mt-4">
                  <h5 className="font-medium text-white">Subjects / Skills:</h5>
                  <ul className="flex flex-wrap mt-2 gap-2">
                    {edu.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
                      >
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

export default Education;
