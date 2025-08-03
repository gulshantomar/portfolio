import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

export const Marqueee = () => {
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
  ];
  const arr2 = [
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
    },{
        logo: "https://cdn.simpleicons.org/prisma/white",
        name: "Prisma",
    }
  ];
  const arr3 = [
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
    }
    ,
    {
        logo: "https://cdn.simpleicons.org/linux",
        name: "Linux",
    }
  ];

  return (<div className="pt-15" >
  
    <Marquee pauseOnHover={true} reverse={true} className="my-8 z-20" >
      {arr.map((item, index) => (
        <div
          key={index}
          className="relative h-full text-xs w-fit mx-[1rem] flex items-center justify-start border border-white/20 rounded-md px-2 py-1"
        >
          <Image alt={item.name} src={item.logo} width={100} height={100} loader={({ src }) => src} className="w-4 h-4" />
          <span className="ml-2">{item.name}</span>
        </div>
      ))}
    </Marquee>
    <Marquee className="my-8">
      {arr2.map((item, index) => (
        <div
          key={index}
          className="relative h-full text-xs w-fit mx-[1rem] flex items-center justify-start border border-white/20 rounded-md px-2 py-1"
        >
          <Image alt={item.name} src={item.logo} width={100} height={100} loader={({ src }) => src} className="w-4 h-4" />
          <span className="ml-2">{item.name}</span>
        </div>
      ))}
    </Marquee>
    <Marquee className="my-8">
      {arr3.map((item, index) => (
        <div
          key={index}
          className="relative h-full text-xs w-fit mx-[1rem] flex items-center justify-start border border-white/20 rounded-md px-2 py-1"
        >
          <Image alt={item.name} src={item.logo} width={100} height={100} loader={({ src }) => src} className="w-4 h-4" />
          <span className="ml-2">{item.name}</span>
        </div>
      ))}
    </Marquee>
  </div>

  );
};




