"use client";
import React from "react";
import { useState } from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { motion } from "motion/react";
import { Marquee } from "@/components/magicui/marquee";
import { GlobeFull } from "@/components/magicui/globe";
import { Marqueee } from "./marquee1";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShinyButton } from "./magicui/shiny-button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedList } from "@/components/magicui/animated-list";
import { NotificationList } from "@/components/Notification";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

import {
  FileText,
  Layout,
  MapPin,
  RectangleGoggles,
  Copy,
  CheckCheck,
  HeartHandshake,
} from "lucide-react";

const files = [
  {
    name: "Design System & UI Consistency",
    body: "Unified design assets, including logos and themes, ensuring consistent branding and user experience across all platforms.",
  },
  {
    name: "API Gateway & Documentation",
    body: "Comprehensive API documentation and a user-friendly interface for seamless integration.",
  },
  {
    name: "User Onboarding Flow Design",
    body: "A detailed user onboarding flow design that enhances user engagement and retention.",
  },
  {
    name: "Payment System Architecture",
    body: "A robust payment system architecture that ensures secure and efficient transactions.",
  },
  {
    name: "Monitoring & Analytics Infrastructure",
    body: "A comprehensive monitoring and analytics infrastructure that provides real-time insights and data-driven decision-making.",
  },
];

const features = [
  {
    Icon: HeartHandshake,
    name: "Collaboration",
    description:
      "I prioritize client collaboration, fostering open communication",
    href: "/",
    cta: "Book a Call",
    background: (
      <NotificationList className="absolute opacity-50" />
      // <div className=""></div>
    ),
    className: "lg:col-start-1  lg:col-end-3 lg:row-start-1 lg:row-end-2 ",
  },
  {
    Icon: MapPin,
    name: "Remote",
    description: "India",
    href: "/",
    cta: "Connect Now",
    background: (
      <div className="relative  flex-col p-5 ">
        <h1 className="text-2xl font-bold bg-gradient-to-b from-[#D0D5E5] to-[#AFBEDC] inline-block text-transparent bg-clip-text pt-15 text-center">
          I&apos;m very flexible with time{" "}
          <span className="bg-gradient-to-b from-[#91A7D3] to-[#7D98CC] inline-block text-transparent bg-clip-text">
            {" "}
            zone communications
          </span>
        </h1>

        <div className=" flex gap-2 justify-center mt-15">
          <motion.div className="div border border-white/20 px-3 py-1 rounded-sm">
            <span className="text-xs">GB</span> UK
          </motion.div>
          <motion.div className="div border border-white/20 px-3 py-1 rounded-sm">
            <span className="text-xs">IN</span> India
          </motion.div>
          <motion.div className="div border border-white/20 px-3 py-1 rounded-sm">
            <span className="text-xs">US</span> USA
          </motion.div>
        </div>
        <GlobeFull className="absolute w-160 h-160 transform left-1/2 translate-[-50%] mt-90" />
      </div>
    ),
    className: "lg:col-start-1  lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Layout,
    name: "The Inside Scoop",
    description: "Currently building a Saas Application",
    href: "#",
    cta: "View Recent Work",
    className: "lg:col-start-2  lg:col-end-4 lg:row-start-3 lg:row-end-4",
    background: (
      <Marquee
        pauseOnHover={true}
        className="absolute top-20 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-36 cursor-pointer overflow-hidden rounded-xl border border-white/40 p-4",
              " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none hover:scale-105 "
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

const BentoGridt = () => {
  const [clipboardCopy, setClipboardCopy] = useState("hello@gulshantomar.in");

  return (
    <div className="flex flex-col items-center justify-center">
      <BentoGrid className="grid-cols-1 gap-4 lg:grid-cols-3 lg:p-40 p-10">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
<div
          className="group col-span-3 relative overflow-hidden lg:col-start-2  lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-white/4 border border-white/10 rounded-xl "
          style={{ backgroundImage: "url('')" }}
        >
          <div className="flex-col items-center justify-center h-full flex">
            <RectangleGoggles className="w-10 h-10 text-black mb-5 bg-white p-2 rounded-full" />
            <ShinyButton className="cursor-default border-none bg-transparent scale-205 font-bold">
              Let&apos;s work together{" "}
            </ShinyButton>
            <br />
            <ShinyButton className="cursor-default border-none bg-transparent scale-205 font-bold">
              on your next project
            </ShinyButton>

            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setClipboardCopy("Copied to Clipboard");
                navigator.clipboard.writeText("hello@gulshantomar.in");
                setTimeout(() => {
                  setClipboardCopy("hello@gulshantomar.in");
                }, 2000);
              }}
              className="cursor-pointer button flex items-center gap-2 mt-10 border border-white/20 px-3 py-2 rounded-md backdrop-blur-3xl bg-white/10 text-white/80 hover:bg-white/10 transition-colors duration-200"
            >
              {" "}
              {clipboardCopy === "hello@gulshantomar.in" ? (
                <Copy />
              ) : (
                <CheckCheck />
              )}{" "}
              {clipboardCopy}
            </motion.div>
          </div>
          <RetroGrid className="absolute inset-0 -z-10 scale-150" />
        </div>
        <div className=" group  col-span-3 relative flex-col  overflow-hidden lg:col-start-3  lg:col-end-4 lg:row-start-1 lg:row-end-3 bg-white/4 border border-white/10 rounded-xl bg-[url('/path/to/image.jpg')]">
          <h1 className="text-2xl font-bold bg-gradient-to-b from-[#DAD4E6] to-[#D5B0DC] inline-block text-transparent bg-clip-text pt-15 text-center">
            Passionate about cutting-{" "}
            <span className="bg-gradient-to-b from-[#D3A1D7] to-[#CA7CCB] inline-block text-transparent bg-clip-text">
              edge technologies
            </span>
          </h1>
          <Marqueee />
          <motion.div
            className="w-60 h-64 mt-24 mx-auto border border-white/10 rounded-md"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: 15 }}
            initial={{ scale: 1 }}
          >
            <div className="w-60 h-5 text-center mx-auto bg-white/5 flex items-center gap-2 px-2">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <div className="h-2 w-2 bg-cyan-100 rounded-full"></div>
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span></span>
            </div>
            <div className="w-60 h-59 text-center mx-auto bg-white/0 p-4 ">
              <div className="h-4 w-20 bg-white/5 mx-auto rounded-full flex justify-end items-center p-2">
                <div className="w-2 h-2 bg-black/90 rounded-full"></div>
              </div>
              <h1 className="text-md font-semibold bg-gradient-to-b from-[#D0D5E5] to-[#AFBEDC] inline-block text-transparent bg-clip-text pt-8 text-center">
                Websites that stand out{" "}
                <span className="bg-gradient-to-b from-[#91A7D3] to-[#7D98CC] inline-block text-transparent bg-clip-text">
                  {" "}
                  and make a difference
                </span>
              </h1>
              <div className="flex gap-4 justify-center pt-6">
                <button className="bg-[#6E28E8]  text-[7px] text-white p-2 py-1  rounded-md">
                  Get Started
                </button>
                <button className="border border-white/20 text-[7px] text-white p-2 py-1  rounded-md">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
          <BackgroundBeams className="absolute inset-0 -z-10 scale-100" />
        </div>
        
      </BentoGrid>
    </div>
  );
};

export default BentoGridt;
