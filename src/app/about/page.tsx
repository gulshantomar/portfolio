"use client";
import Aboutme from "@/components/Aboutme";
import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { ChevronRight } from "lucide-react";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Timeline } from "@/components/ui/timeline";

import { CardSwipe } from "@/components/ui/card-swipe";

const images = [
  { src: "/profile.jpg", alt: "Image 1" },
  { src: "/profile.jpg", alt: "Image 2" },
  { src: "/profile.jpg", alt: "Image 3" },
];

const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
const About = () => {
  
  return (
    <div className="pt-20">
      <div className="container w-4/5 px-10 mx-auto  my-10">
        <h1 className="text-xl text-white/60 font-semibold py-3">
          More About Me
        </h1>

        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          <div className="lg:w-[60%] relative">
            <h1 className="font-semibold lg:text-6xl w-4/5 text-3xl relative">
              I&apos;m Gulshan, a creative <AuroraText>engineer</AuroraText>{" "}
            </h1>
            {/* <div className="absolute top-2/3 left-1/3 w-1/2 inset-0 h-2 bg-white/90 blur-2xl rounded-full"></div> */}

            <div className="py-5 text-white/90 ">
              <p className="text-lg lg:w-4/5 leading-loose flex flex-col gap-8">
                <span>
                  I&apos;m Gulshan Tomar, a proactive full-stack developer
                  passionate about creating dynamic web experiences. From
                  frontend to backend, I thrive on solving complex problems with
                  clean, efficient code. My expertise spans React, Next.js, and
                  Node.js, and I&apos;m always eager to learn more.
                </span>
                <span>
                  {" "}
                  When I&apos;m not immersed in work, I&apos;m exploring new
                  ideas and staying curious. Life&apos;s about balance, and I
                  love embracing every part of it.
                </span>
                <span>
                  {" "}
                  I believe in waking up each day eager to make a difference!
                </span>
              </p>
              <div className="flex items-center gap-5 mt-5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <LinkedInLogoIcon
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/gulshantomar/",
                          "_blank"
                        )
                      }
                      className="w-6 h-6 text-white/60 hover:text-white"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <GitHubLogoIcon
                      onClick={() =>
                        window.open("https://github.com/gulshantomar", "_blank")
                      }
                      className="w-6 h-6 text-white/60 hover:text-white"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white  text-black">
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TwitterLogoIcon
                      onClick={() =>
                        window.open("https://x.com/gulshantomar_", "_blank")
                      }
                      className="w-6 h-6 text-white/60 hover:text-white"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black">
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="mt-5">
                <ShinyButton
                  onClick={() => window.open("./about#Experience")}
                  className=" text-white  bg-[#0A0A0A] border-none"
                >
                  Work Experience{" "}
                  <ChevronRight className="inline-block w-5 h-5 ml-2 p-1 rounded-full bg-white/20" />
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%]  flex items-center justify-center">
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

      {/* <div className="w-full">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div> */}

      <div className="text-center flex flex-col items-center justify-center my-10">
        <h1 className="text-md text-white/60 font-semibold py-3">
          The Experience
        </h1>
        <h1 className="font-semibold lg:text-6xl w-[40%]  text-3xl relative">
          Experience That Brings <AuroraText>Ideas to Life</AuroraText>{" "}
        </h1>
      </div>



  
  
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  


    </div>
  );
};

export default About;
