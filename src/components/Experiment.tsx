import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid2";
import { motion } from "motion/react";
import { BackgroundBeams } from "./ui/background-beams";

const outline ={
    animate: {y: -10, border:"solid 2px #7C86FF"}
}
const tools = ["/uses/vscode_logo.png", "/uses/figma_logo.png","/uses/notion_logo.png" ];
const features = [
  {
    name: "uses",
    description:
      "Check out my favorite tools and technologies that I use daily.",
    href: "/uses",
    cta: "Check it out",
    background: (<motion.div className=" flex justify-center items-baseline gap-5 pt-20 w-full" whileHover="animate" transition={{type:"spring", stiffness: 300, damping: 20}}>
      {tools.map((item,index)=>{
                return(
                    <div className={`flex flex-col ${index % 2 ===0 ? "w-24" : "w-36"}  justify-between items-center gap-2 my-2`} key={index}>
                        <motion.div key={index} className=" p-2 rounded-xl  border border-[#333] " variants={outline}  >
                        <Image src={item} alt={index.toString()} width={100} height={100} className="rounded-xl bg-[#1A1B1E] border border-[#333] p-4" />
                        
                        </motion.div>
                    </div>
                )
            })}
    </motion.div>),
    className: "lg:col-start-1  lg:col-end-2 lg:row-start-1 lg:row-end-2 hover:bg-white/6",
  },
  {
    name: "Guestbook",
    description: "Let me Know You were here",
    href: "/",
    cta: "Leave a message",
    background: (
      <div className="relative text-center h-full w-full flex flex-col justify-center items-center pt-10 px-4">
          <AuroraText colors={["#7C86FF", "#F9A826"]} className="text-4xl font-bold">Got a message ?</AuroraText>
          <h3 className="text-3xl font-bold">I’d love to hear from you!</h3>
        
        <BackgroundBeams className="scale-200 rotate-135" />
      </div>
    ),
    className: "lg:col-start-2  lg:col-end-3 lg:row-start-1 lg:row-end-2 hover:bg-white/6",
  },
  {
    name: "Recent Favorite",
    description: "The Search by NF",
    href: "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=c09 444afc6684627",
    cta: "Listen Now",
    className: "lg:col-start-3  lg:col-end-4 lg:row-start-1 lg:row-end-2 hover:bg-white/6",
    background: (
      <div className="absolute inset-0 bg-[#1F1F1F]">
        <iframe data-testid="embed-iframe"  src="https://open.spotify.com/embed/track/2OKo7g3KfmCt3kyLvUAL0g?utm_source=generator&theme=0"  width="100%" height="350"allow="autoplay; clipboard-write; encrypted-media; " loading="lazy"></iframe>
      </div>
    ),
  },
];

const Experiment = () => {
  return (
    <>
      <div className=" justify-items-center h-screen pt-20">
        <h1 className="text-white/60 text-lg font-sans "> My Site</h1>
        <div className="lg:text-6xl text-4xl font-sans font-semibold text-center mb-5 relative">
          <h1>Explore, experiment</h1>
          <AuroraText className="" speed={2}>
            && say hello
          </AuroraText>
        </div>
        <BentoGrid className="grid-cols-1 gap-4 lg:grid-cols-3 lg:px-40 px-10 lg:py-10 py-5">
        {features.map((feature) => (
          <BentoCard onClick={() => window.open(feature.href)} key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      </div>
      
    </>
  );
};

export default Experiment;
