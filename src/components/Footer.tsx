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
      <div className="relative full h-[80vh] flex flex-col items-center justify-center overflow-hidden gap-12">
        <Image
          src="/bg.avif"
          alt="Uses"
          layout="fill"
          objectFit="cover"
          className="absolute -z-2 mask-t-from-neutral-100 mask-b-from-neutral-100 opacity-90 "
        />
        <motion.div
          className="h-30 w-30 rounded-full z-100 cursor-pointer absolute border-8 border-[#1447E6]"
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
        <div className="flex flex-col w-full items-center">
          <motion.h1
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            className="z-100 w-[50%] text-center text-5xl "
          >
            FROM CONCEPT TO <span className="font-bold">CREATION</span>
          </motion.h1>
          <motion.h1
            initial={{ x: 500 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            className="z-100 w-[50%] text-center text-5xl "
          >
            LET&apos;s MAKE IT <span className="font-bold">HAPPEN!</span>
          </motion.h1>
        </div>
        <InteractiveHoverButton onClick={() => window.open("https://linkedin.com/in/gulshantomar", "_blank")} className="bg-black">
          Let&apos;s Connect
        </InteractiveHoverButton>
        <h2 className="text-2xl font-semibold">
          I&apos;m available for full-time roles & freelance projects.
        </h2>
        <h3 className="text-lg w-1/4 text-center text-white/60">
          I thrive on crafting dynamic web applications, and delivering seamless
          user experiences.
        </h3>
      </div>
      <div className="relative justify-self-center mb-10 grid grid-cols-2 lg:grid-cols-6 gap-4 w-full max-w-7xl px-4 h-60 bg-[#0F0F0F] rounded-2xl p-8">
        <div className="col-span-3 w-1/2 flex flex-col  justify-around pl-10">
          <RectangleGoggles className="text-white scale-150" />
          <h4>
            I&apos;m Gulshan - a full-stack developer, freelancer & problem
            solver. Thanks for checking out my site!
          </h4>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">General</h3>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/blog"}>Blog</Link>
        </div>
        <div className=" flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">Specifics</h3>
          <Link href={"/guestbook"}>Guest Book</Link>
          <Link href={"/bucket-list"}>Bucket List </Link>
          <Link href={"/uses"}>Uses</Link>
          <Link href={"/attribution"}>Attribution</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">More</h3>
          <Link href={"/"}>Book A Call</Link>
          <Link href={"/links"}>Links</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
