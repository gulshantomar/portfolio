"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ArrowRight} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const tilt ={
  animate:{scale: 1.1,rotate:-5 , y:20}
}

const content = [
  {
    title: "AQI Predictor",
    description:
      "The AQI Predictor is an innovative web application The project's core mission is to forecast future Air Quality Index (AQI) trends by analyzing historical data, providing users with valuable insights into upcoming air quality.",
    features: [
      "Predictive AQI Forecasting: Utilizes historical data to generate future AQI trend forecasts. Users can select a city and prediction frequency to see a visual plot of expected air quality.",

      "User-Friendly Interface: Designed for ease of use, allowing users to quickly access and understand air quality data.",
      "Data Visualization: Presents AQI trends and real-time data in an intuitive graphical format, making it easy to interpret air quality changes over time.",
    ],
    techStack: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "tailwindcss", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock" },
      { name: "Chart.js", icon: "https://cdn.simpleicons.org/chartdotjs" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
    ],
    heading :"A data-driven tool for visualizing real-time air quality and forecasting future trends with detailed pollutant analysis.",
    image: "https://i.ibb.co/3y0f1b5/shg-connect.png",

    content :(
      <motion.div className="group relative h-full w-full flex flex-col justify-between items-center overflow-hidden rounded-2xl border-8 border-[#151515] bg-[#4E132C] p-10 pb-0" whileHover="animate" whileTap={{ scale: 0.9 }}>
              <div className="flex items-center  justify-between">
                <h1 className="text-[#FDA5D5] text-md lg:text-xl">
                  A data-driven tool for visualizing real-time air quality and forecasting future trends with detailed pollutant analysis.
                </h1>
                <ArrowRight className=" text-[#FDA5D5] scale-200 " />
              </div>
              <motion.div  className="h-2/3 w-[90%]" variants={tilt} >
                <Image
                  src="/aqiScreen.png"
                  alt="SHG Connect"
                  width={550}
                  height={550}
                  className=" h-full w-full rounded-xl object-cover object-center justify-center shadow-2xl  shadow-[#ff509c]"
                />
              </motion.div>
            </motion.div>
    ),
    color: "bg-[#E60076] text-[#E60076]",
    href: "/projects/aqi-predictor"
  },
  {
    title: "SHG Connect",
    description:
      "A web application designed to digitize and empower women's Self-Help Groups (SHGs) by replacing fragile paper-based systems. It provides real-time transparency, secure mobile-first management for leaders, and powerful oversight dashboards for community officers.",
    features: [
      "Total Transparency: Members can see their savings and loan status anytime, from anywhere.",
      "Streamlined Leadership: Leaders can manage meetings, records, and transactions—all from their phones.",
      "Oversight Tools: Block Officers get a powerful dashboard with real-time SHG analytics to monitor progress and provide support.",
    ],
    techStack: [
      { name: "Nextjs", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Node js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
    ],
    content :(
      <motion.div className="group relative h-full w-full flex flex-col justify-between items-center overflow-hidden rounded-xl bg-[#173C3A] p-4 lg:p-10  border-8 border-[#151515] lg:pb-0 " whileHover="animate" whileTap={{ scale: 0.9 }}>
              <div className="flex items-center justify-between">
                <h1 className="text-[#07b7a8] text-md lg:text-xl pb-4">
                  A digital platform that brings real-time transparency and
                  streamlined financial management to SHGs.
                </h1>
                <ArrowRight className=" text-[#009689] scale-150 " />
              </div>
              <motion.div  className=" h-1/2 lg:h-2/3  w-[90%]" variants={tilt} >
                <Image
                  src="/shgScreen.png"
                  alt="SHG Connect"
                  width={550}
                  height={550}
                  className=" h-full w-full rounded-xl object-cover object-center justify-center shadow-2xl  shadow-[#30c1b5]"
                />
              </motion.div>
            </motion.div>
    ),
    color: "bg-[#009689] text-[#009689]",
    href: "/projects/shg-connect"
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences as a Full Stack Developer. It features a modern design, interactive elements, and responsive layout for an engaging user experience.",
    features: [
      "Built with Next.js and TypeScript for performance and scalability.",
      "Investor behavior analysis and interaction patterns.",
      "Market trend insights and competitive analysis.",
      "Responsive design for seamless viewing on all devices.",
      "Interactive elements for engaging user experience.",
    ],
    techStack: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "mongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    ],
    content :(
      <motion.div className="group relative h-full w-full flex flex-col justify-between items-center overflow-hidden rounded-2xl border border-8 border-[#151515] bg-[#2b194e] p-10 pb-0" whileHover="animate" whileTap={{ scale: 0.9 }}>
              <div className="flex items-center justify-between">
                <h1 className="text-[#DAB2FF] text-md lg:text-xl pr-10">
                  Design Unleased a capitivating portfolio showcasing innovative Web Development and UI/UX.
                </h1>
                <ArrowRight className=" text-[#DAB2FF] scale-150 " />
              </div>
              <motion.div  className="h-2/3 w-[90%]" variants={tilt} >
                <Image
                  src="/PortfolioScreen.png"
                  alt="SHG Connect"
                  width={550}
                  height={550}
                  className=" h-full w-full rounded-xl object-cover object-center justify-center shadow-2xl  shadow-[#9e43ff]"
                />
              </motion.div>
            </motion.div>
    ),
    color: "bg-[#9810FA] text-[#9810FA]",
    href: "/projects/portfolio"
  },
];
export default function Work() {
  return (
    <div className="w-full py-4 ">
      <h1 className="text-white/60 text-center lg:text-lg text-md font-sans ">
        Featured Case Studies
      </h1>
      <div className="lg:text-6xl text-5xl font-sans font-semibold text-center mb-5 relative">
        {/* <div className="absolute top-1/2 w-full inset-0 h-3 bg-white/50 blur-2xl rounded-full"></div> */}
        <AuroraText className="" speed={2}>
          Curated Work
        </AuroraText>
        
      </div>
      
      {/* Desktop view - single sticky scroll with all content */}
      <div className="w-full hidden lg:block">
        <StickyScroll content={content} />
      </div>

      {/* Mobile view - separate sticky scroll for each content item */}
      <div className="w-full lg:hidden">
        {content.map((item, index) => (
          <div key={index} className="">
            <StickyScroll content={[item]} />
            <div className="w-full border border-white/30"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
