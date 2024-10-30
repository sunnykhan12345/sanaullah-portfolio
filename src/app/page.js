"use client"
import Header from '@/components/Header'
import Hero from '@/Hero'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

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
    {/* Copyright &copy; azizportfolio.com | All right reserved */}
    </>
  )
}

export default page