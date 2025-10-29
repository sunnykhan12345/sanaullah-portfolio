"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Hero Heading
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Some subtitle or call to action
        </p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
