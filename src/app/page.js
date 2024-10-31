"use client"
import Header from '@/components/Header'
import Hero from '@/Hero'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const page = () => {
  useEffect(() =>{
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true
    })
  },[]) 
  return (
    <>
    <Header/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page