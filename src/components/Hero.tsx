'use client';
import React, { useState } from "react";
import Image from "next/image";
import { motion} from "motion/react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Copy, CheckCheck } from "lucide-react";

 

const Hero = () => {

    const [clipboardCopy, setClipboardCopy] = useState("hello@gulshantomar.in");
  return (
    <>
    <div className="lg:pt-30 pt-20 h-screen">
      <div className="hero items-center text-center flex flex-col lg:gap-8 gap-5 pt-10">
        <ShinyButton className="py-1 px-4 text-xs text-white/80 rounded-full">
          <span className="text-sm bg-blue-500 px-2 mr-2 rounded-full">
            New
          </span>
          SHG Connect is live! &gt;{" "}
        </ShinyButton>
        <h1 className="lg:text-6xl text-4xl font-bold font-sans">I help founders turn ideas</h1>
        <h1 className="lg:text-6xl text-4xl font-sans font-bold">
          into seamless{" "}
          <span className="text-white italic font-playfair mask-t-from-neutral-900">
            digital experiences
          </span>
        </h1>
        <h1 className="flex flex-col lg:flex-row items-center justify-center lg:gap-2 gap-4  text-2xl font-sans mt-3 text-white/70">
          Hello, I&apos;m Gulshan Tomar
          <Image
            src="https://i.ibb.co/cKBcjy0x/profile.jpg"
            alt="logo"
            width={100}
            height={100}
            className=" lg:h-15 h-30 object-cover object-center justify-center rounded-full lg:w-30 w-30"
            loader={({ src }) => src}
          />
          a Full Stack Developer
        </h1>
        <div className="flex lg:flex-row flex-col lg:gap-6 gap-10 text-white/70 ">
          <InteractiveHoverButton onClick={() => {window.open("https://linkedin.com/in/gulshantomar", "_blank")}} className="bg-black w-[90%]">Let&apos;s Connect</InteractiveHoverButton>
          <motion.div whileTap={{scale:0.95}} onClick={() => {
            setClipboardCopy("Copied to Clipboard")
            navigator.clipboard.writeText("hello@gulshantomar.in")
            setTimeout(() => {
              setClipboardCopy("hello@gulshantomar.in")
            }, 2000)
            }} className="button flex items-center gap-2 "> {clipboardCopy === "hello@gulshantomar.in" ? <Copy /> : <CheckCheck />} {clipboardCopy}</motion.div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
