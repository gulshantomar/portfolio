import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Aboutme = () => {
  return (
    <div className="container w-4/5 mx-auto  my-10 h-screen">
      <h1 className="text-xl text-white/60 font-semibold py-3">
        Know About Me
      </h1>

      <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
        <div className="w-[60%] relative">
          <h1 className="font-semibold text-6xl relative">
            Full-Stack Developer and a little bit of{" "}
            <AuroraText>everything</AuroraText>{" "}
          </h1>
          {/* <div className="absolute top-2/3 left-1/3 w-1/2 inset-0 h-2 bg-white/90 blur-2xl rounded-full"></div> */}

          <div className="py-5 text-white/90 ">
            <p className="text-lg w-4/5 leading-loose flex flex-col gap-8">
              <span>
                I&apos;m Gulshan Tomar, a proactive full-stack developer
                passionate about creating dynamic web experiences. From frontend
                to backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I&apos;m always eager to learn more.
              </span>
              <span>
                {" "}
                When I&apos;m not immersed in work, I&apos;m exploring new ideas
                and staying curious. Life&apos;s about balance, and I love
                embracing every part of it.
              </span>
              <span>
                {" "}
                I believe in waking up each day eager to make a difference!
              </span>
            </p>
            <div className="flex items-center gap-5 mt-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <LinkedInLogoIcon onClick={() => window.open("https://www.linkedin.com/in/gulshantomar/", "_blank")} className="w-6 h-6 text-white/60 hover:text-white" />
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black">
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <GitHubLogoIcon onClick={() => window.open("https://github.com/gulshantomar", "_blank")} className="w-6 h-6 text-white/60 hover:text-white" />
                </TooltipTrigger>
                <TooltipContent className="bg-white  text-black">
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TwitterLogoIcon onClick={() => window.open("https://x.com/gulshantomar_", "_blank")} className="w-6 h-6 text-white/60 hover:text-white" />
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black">
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="w-[40%] lg:pt-30 flex items-center justify-center">
          <Image
            src="https://i.ibb.co/cKBcjy0x/profile.jpg"
            alt="Gulshan Tomar"
            width={500}
            height={500}
            className="rounded-3xl w-96 h-96 object-cover object-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
