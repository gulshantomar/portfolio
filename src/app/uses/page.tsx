'use client';
import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import {motion} from "motion/react";

const tools =[
    {
        name: "VS Code",
        logo : "/uses/vscode_logo.png",
        href : "https://code.visualstudio.com/",

    },
    {
        name: "Figma",
        logo : "/uses/figma_logo.png",
        href : "https://www.figma.com/",

    },
    {
        name:"Framer",
        logo : "/uses/framer_logo.png",
        href : "https://www.framer.com/",
    
    },
    {
        name:"Arc Browser",
        logo : "/uses/arc_logo.png",
        href : "https://arc.net/",
    
    },
    {
        name:"Notion",
        logo : "/uses/notion_logo.png",
        href : "https://www.notion.so/",
    
    },
    {
        name:"GitHub",
        logo : "/uses/github_logo.png",
        href : "https://github.com/gulshantomar"
    },
    {
        name:"Spotify",
        logo : "/uses/spotify_logo.png",
        href : "https://www.spotify.com/"
    },
    {
        name:"Raycast",
        logo : "/uses/raycast_logo.png",
        href : "https://www.raycast.com/"
    },
    {
        name: "mymind",
        logo: "/uses/mymind_logo.png",
        href: "https://www.mymind.com/"
    },
    {
        name: "1 Password",
        logo: "/uses/1password_logo.png",
        href: "https://1password.com/"
    },
    {
        name:"Pixel Snap 2",
        logo: "/uses/pixelsnap2_logo.png",
    },
    {
        name: "Tana",
        logo: "/uses/tana_logo.png",
        href: "https://tana.inc/"

    },
    {
        name : "Discord",
        logo: "/uses/discord_logo.png",
        href: "https://discord.com/"
    }


    
]
const Uses = () => {
  return (
    <div className="w-full h-screen pt-40 ">
      <Image
        src="/bg.avif"
        alt="Uses"
        width={1920}
        height={1080}
        objectFit="cover"
        className="absolute inset-0 object-cover mask-b-from-neutral-900 opacity-20"
      />
      <h1 className="text-white/60 text-lg font-sans text-center"> My Setup</h1>
      <div className="lg:text-6xl text-4xl font-sans font-semibold text-center mb-5 relative">
        
       
        <h1 className="capitalize"> <AuroraText className="" speed={2}>
         Tools
        </AuroraText> i use Daily</h1>

        <div className="text-sm grid grid-cols-8 p-20 px-30 justify-center items-center gap-6 text-white/60">
            {tools.map((item,index)=>{
                return(
                    <div className="flex flex-col h-30 w-26 justify-between items-center gap-2 my-2" key={index}>
                        <motion.div key={index} className=" p-2 rounded-xl  border border-[#333] "  whileHover={{y: -10, border:"solid 2px #7C86FF"}} transition={{type:"spring", stiffness: 300, damping: 20}}>
                        <Image src={item.logo} alt={item.name} width={100} height={100} className="rounded-xl bg-[#1A1B1E] border border-[#333] p-4" />
                        
                        </motion.div>
                    <span className="text-white/50">{item.name}</span>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Uses;
