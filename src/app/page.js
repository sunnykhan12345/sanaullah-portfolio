import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <SkillsSection />
      <Contact />
    </>
  );
};

export default page;
