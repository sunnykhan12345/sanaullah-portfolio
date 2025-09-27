import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <div id="Experience">
        <Experience />
      </div>
      {/* <Projects />
      <About /> */}
      {/* <SkillsSection /> */}
      {/* <Contact /> */}
    </>
  );
};

export default page;
