"use client";
import Image from "next/image";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { url } from "inspector";
import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { Marquee } from "./magicui/marquee";
import { Sparkle } from "lucide-react";
import { root } from "postcss";

const arr = [
  {
    logo: "https://cdn.simpleicons.org/react",
    name: "React",
  },
  {
    logo: "https://cdn.simpleicons.org/nextdotjs/white",
    name: "Next.js",
  },
  {
    logo: "https://cdn.simpleicons.org/tailwindcss",
    name: "Tailwind CSS",
  },
  {
    logo: "https://cdn.simpleicons.org/typescript",
    name: "TypeScript",
  },
  {
    logo: "https://cdn.simpleicons.org/javascript",
    name: "JavaScript",
  },
  {
    logo: "https://cdn.simpleicons.org/framer",
    name: "Motion",
  },
  {
    logo: "https://cdn.simpleicons.org/sanity",
    name: "Sanity",
  },
  {
    logo: "https://cdn.simpleicons.org/nodedotjs",
    name: "Node.js",
  },
  {
    logo: "https://cdn.simpleicons.org/express/white",
    name: "Express.js",
  },
  {
    logo: "https://cdn.simpleicons.org/mongodb",
    name: "MongoDB",
  },
  {
    logo: "https://cdn.simpleicons.org/postgresql",
    name: "PostgreSQL",
  },
  {
    logo: "https://cdn.simpleicons.org/prisma/white",
    name: "Prisma",
  },
  {
    logo: "https://cdn.simpleicons.org/docker",
    name: "Docker",
  },
  {
    logo: "https://cdn.simpleicons.org/redis",
    name: "Redis",
  },
  {
    logo: "https://cdn.simpleicons.org/nginx",
    name: "Nginx",
  },
  // {
  //   logo: "https://cdn.simpleicons.org/amazonaws",
  //   name: "AWS",
  // },
  {
    logo: "https://cdn.simpleicons.org/vercel/white",
    name: "Vercel",
  },
  {
    logo: "https://cdn.simpleicons.org/github/white",
    name: "GitHub",
  },
  {
    logo: "https://cdn.simpleicons.org/gitlab",
    name: "GitLab",
  },
  {
    logo: "https://cdn.simpleicons.org/linux",
    name: "Linux",
  },
  {
    logo: "https://cdn.simpleicons.org/figma",
    name: "Figma",
  },
  {
    logo: "https://cdn.simpleicons.org/slack",
    name: "Slack",
  },
  {
    logo: "https://cdn.simpleicons.org/notion",
    name: "Notion",
  },
];

const qualities = [
  "Secure",
  "Scalable",
  "Fast",
  "Reliable",
  "User-friendly",
  "Search Engine Optimized",
  "Responsive",
  "Accessible",
  "Extensible",
];
const Skills = () => {
  const { scrollYProgress } = useScroll();
  const rotatee = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);

  return (
    <div className=" justify-items-center">
      <div className=" relative lg:h-64 lg:w-96 h-32 w-48 flex items-end justify-center mx-4">
        <h1 className="text-white/80 text-xl font-sans "> My Skills</h1>
        <motion.div
          className="absolute lg:top-1/2 top-0 -z-6 h-fit  mask-l-from-neutral-950"
          style={{ rotate: rotatee }}
          transition={{ type:"inertia"}}
        >
          <Image
            src="https://i.ibb.co/My1nVRZ1/steel-flower.webp"
            alt="logo"
            width={100}
            height={100}
            loader={({ src }) => src}
            className="transform translate-[-50%,-50%] h-58 w-74 object-cover opacity-30 lg:opacity-55 "
          />
        </motion.div>
      </div>
      <h1 className="lg:text-6xl text-5xl font-sans font-semibold text-center mb-5 relative">
        <div className="absolute top-1/2 inset-0 h-3 bg-white/50 blur-2xl rounded-full"></div>
        <span className="relative z-10">
          The Secret{" "}
          <AuroraText className="" speed={2}>
            Sauce
          </AuroraText>
        </span>
      </h1>

      <div className="flex flex-wrap justify-center items-center lg:w-2/3 w-4/5 mx-auto gap-2 pt-10 lg:p-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className="relative h-full text-xs w-fit lg:mx-[1rem] my-2 flex items-center justify-start border border-white/20 rounded-md px-2 py-1"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={100}
              loader={ ({ src, width}) => src }

              className="w-4 h-4"
            />
            <span className="ml-2">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="w-full h-100 relative pt-20 flex items-center justify-center overflow-hidden">

  <div
    className="absolute -z-10 bg-[#3A5A9C] h-16 w-[130%] left-[-15%]"
    style={{ rotate: "4deg" }}
  ></div>

  
  <Marquee
    className="absolute w-[130%] lg:text-xl text-sm font-semibold bg-[#3D7BFD] py-3 left-[-15%]"
    style={{ rotate: "-4deg" }}
  >
    {qualities.map((item, index) => (
      <span key={index} className=" text-white whitespace-nowrap">
        {item}{" "}
        <Image
          src="https://i.ibb.co/LX76YKkD/star.png"
          alt="sparkle"
          width={40}
          height={40}
          loader={({ src , width}) => src}
          className="inline-block lg:mx-7 mx-1"
        />
      </span>
    ))}
  </Marquee>
</div>
    </div>
  );
};

export default Skills;
