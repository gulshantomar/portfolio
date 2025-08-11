"use client";
import { LaptopIcon, MapPin } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";


const data = [
  {
    timeline: "OCT - 2024 - PRESENT",
    title: "Technocrats Club",
    location: "KIET Group of Institutions",
    type: "Remote",
    role: "Frontend Engineer",
    description: (
      <>
        Joining Technocrats Club marked a turning point in my journey as a
        developer, allowing me to combine creativity with technical precision. I
        deepened my knowledge of React, Next.js, JavaScript, and GSAP
        animations, while also exploring backend concepts such as API
        development, data fetching strategies (REST & GraphQL), and server-side
        rendering. <br />
        <br />
        I practiced building responsive and accessible web applications with a
        focus on performance, implementing techniques like lazy loading, code
        splitting, and UI state management for smoother user experiences. <br />
        <br />
        Beyond technical growth, this role nurtured my leadership skills—from
        taking initiative during sprints to guiding teammates through debugging
        challenges. I actively contributed to collaborative discussions, shared
        design ideas, and provided constructive feedback, which strengthened my
        communication and mentorship abilities. <br />
        <br />
        Working in a remote, collaborative setting also enhanced my time
        management and adaptability, teaching me how to deliver high-quality
        work while coordinating across different schedules and workflows. This
        experience not only improved my technical stack but also shaped my
        ability to function effectively as part of a motivated, cross-functional
        team.
      </>
    ),
  },
  {
    timeline: "Sep 2024 – Nov 2024",
    title: "MLSA KIET",
    location: "Kiet Group of Institutions",
    type: "Remote",
    role: "Web Development Intern",
    description: (
      <>
        During this internship, I gained hands-on experience in frontend and backend web development. I worked on creating dynamic and user-friendly web interfaces, learning how to integrate APIs, optimize page performance, and manage code quality. <br /><br />
The program deepened my understanding of HTML, CSS, JavaScript, and modern frameworks while also teaching me version control using Git and GitHub. Collaborating with fellow interns improved my team coordination and problem-solving skills in real-world project scenarios.</>
    ),
  },
 
];
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans px-4 lg:px-10" ref={containerRef}>
      <div className="flex lg:px-20">
        <div ref={ref} className="w-full">
          {data.map((item, index) => {
            return (
              <div key={index} className="mb-12 ml-5 lg:mb-16 flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="flex flex-col gap-2 text-xs text-white/50 lg:w-1/3 lg:min-w-[300px]">
                  <h3 className="font-semibold">{item.timeline}</h3>
                  <h1 className="text-white text-xl font-extrabold font-sans">
                    {item.title}
                  </h1>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    {item.location}
                  </p>
                  <p className="flex items-center">
                    <LaptopIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                    {item.type}
                  </p>
                </div>
                <div className="flex-1">
                  <h1 className="text-xl lg:text-2xl font-semibold mb-4">{item.role}</h1>
                  <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <motion.div
          transition={{ delay: 0.5 }}
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="hidden lg:block absolute inset-x-0 top-0 lg:left-[calc(33.333%-3px)] left-3 w-[6px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      </div>
    </div>
  );
};
