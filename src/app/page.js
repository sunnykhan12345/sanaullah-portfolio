import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Skills from "./components/Skills";
const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <SkillsSection />
      <Contact />
    </>
  );
};

export default page;
