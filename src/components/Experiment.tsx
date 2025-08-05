import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid2";
import { HeartHandshake, MapPin, Layout, ToolCase } from "lucide-react";

const features = [
  {
    name: "uses",
    description:
      "I prioritize client collaboration",
    href: "/uses",
    cta: "Check it out",
    background: (<div className=""></div>),
    className: "lg:col-start-1  lg:col-end-2 lg:row-start-1 lg:row-end-2 hover:bg-white/6",
  },
  {
    name: "Guestbook",
    description: "Let me kow you were here",
    href: "/",
    cta: "Connect Now",
    background: (
      <div className=""></div>
    ),
    className: "lg:col-start-2  lg:col-end-3 lg:row-start-1 lg:row-end-2 hover:bg-white/6",
  },
  {
    name: "Recent Favorite",
    description: "The Search by NF",
    href: "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=c09444afc6684627",
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
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      </div>
      
    </>
  );
};

export default Experiment;
