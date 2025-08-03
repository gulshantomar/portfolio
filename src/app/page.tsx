'use client';
import Lenis from "lenis";
import React, { use, useEffect } from "react";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Work from "@/components/work";
import Skills from "@/components/Skills";
import Aboutme from "@/components/Aboutme";

export default function Page() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <BentoGrid />
      {/* <Work /> */}
      <Skills />
      <Aboutme />

    </>
  );
};
