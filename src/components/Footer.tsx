"use client";
import React from "react";
import Image from "next/image";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { motion } from "motion/react";
import { RectangleGoggles } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="relative w-full lg:p-0 px-4 mt-8 min-h-[40vh] lg:h-[70vh] flex flex-col items-center justify-center overflow-hidden lg:gap-6 gap-4 py-6 lg:py-0">
        <Image
          src="/bg.avif"
          alt="Background"
          fill
          priority
          className="object-cover absolute -z-2 mask-t-from-neutral-100 mask-b-from-neutral-100 opacity-90"
        />
        <motion.div
          className="hidden lg:block h-30 w-30 rounded-full z-100 cursor-pointer absolute border-8 border-[#1447E6]"
          initial={{ x: 500, y: -200 }}
          drag
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          dragConstraints={{
            top: -250,
            left: -500,
            right: 500,
            bottom: 250,
          }}
          style={{
            backgroundImage: "url('/OPEN.png')",
            backgroundSize: "cover",
          }}
        ></motion.div>
        <div className="flex flex-col w-full items-center px-4">
          <motion.h1
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            className="lg:w-[50%] w-full text-center lg:text-5xl text-xl md:text-2xl leading-tight"
          >
            FROM CONCEPT TO <span className="font-bold">CREATION</span>
          </motion.h1>
          <motion.h1
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            className="text-center lg:text-5xl text-xl md:text-2xl leading-tight"
          >
            LET&apos;s MAKE IT <span className="font-bold">HAPPEN!</span>
          </motion.h1>
        </div>
        <InteractiveHoverButton onClick={() => window.open("https://linkedin.com/in/gulshantomar", "_blank")} className="bg-black">
          Let&apos;s Connect
        </InteractiveHoverButton>
        <h2 className="lg:text-xl text-base md:text-lg font-semibold text-center px-4">
          I&apos;m available for full-time roles & freelance projects.
        </h2>
        <h3 className="lg:text-base text-sm lg:w-1/4 w-full max-w-md text-center text-white/60 px-4">
          I thrive on crafting dynamic web applications, and delivering seamless
          user experiences.
        </h3>
      </div>



      
      <div className=" relative justify-self-center mb-6 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3  max-w-7xl w-dvw px-4 lg:px-6 bg-[#0F0F0F] rounded-2xl p-4 lg:p-6">
        <div className="hidden lg:col-span-3 col-span-3 sm:col-span-3 lg:flex flex-col gap-2 lg:gap-3 lg:pr-20 lg:pl-6">
          <div className="flex items-center gap-3">
            <RectangleGoggles className="text-white scale-110 lg:scale-125 flex-shrink-0" />
          </div>
          <h4 className="text-xs lg:text-sm text-white/80 leading-relaxed">
            I&apos;m Gulshan - a full-stack developer, freelancer & problem
            solver. Thanks for checking out my site!
          </h4>
        </div>
        <div className="flex  flex-col gap-2 lg:gap-3 text-xs lg:text-sm">
          <h3 className="font-semibold text-white">General</h3>
          <Link href={"/"} className="text-white/70 hover:text-white transition-colors">Home</Link>
          <Link href={"/about"} className="text-white/70 hover:text-white transition-colors">About</Link>
          <Link href={"/projects"} className="text-white/70 hover:text-white transition-colors">Projects</Link>
          <Link href={"/blog"} className="text-white/70 hover:text-white transition-colors">Blog</Link>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-sm">
          <h3 className="font-semibold text-white">Specifics</h3>
          <Link href={"/guestbook"} className="text-white/70 hover:text-white transition-colors">Guest Book</Link>
          <Link href={"/bucket-list"} className="text-white/70 hover:text-white transition-colors">Bucket List</Link>
          <Link href={"/uses"} className="text-white/70 hover:text-white transition-colors">Uses</Link>
          <Link href={"/attribution"} className="text-white/70 hover:text-white transition-colors">Attribution</Link>
        </div>
        <div className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-sm">
          <h3 className="font-semibold text-white">More</h3>
          <Link href={"/"} className="text-white/70 hover:text-white transition-colors">Book A Call</Link>
          <Link href={"/links"} className="text-white/70 hover:text-white transition-colors">Links</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
