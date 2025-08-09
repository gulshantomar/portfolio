"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    features: string[];
    techStack: { name: string; icon: string }[];
    content?: React.ReactNode;
    color?: string;
    href: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate which card should be active based on scroll progress
    // Each card gets equal space in the scroll range (0 to 1)
    const scrollPercent = Math.max(0, Math.min(1, latest));
    const cardIndex = Math.floor(scrollPercent * cardLength);

    // Clamp to valid range
    const activeIndex = Math.min(cardIndex, cardLength - 1);

    setActiveCard(activeIndex);
  });

  return (
    <div ref={ref} className="relative bg-[#0A0A0A]">
      <div className="lg:flex lg:px-20">
        {/* Scrollable Rectangle Content */}
        <div className={`lg:w-2/3 lg:pl-20 `}>
          <div className="">
            {content.map((item, index) => (
              <Link key={item.title + index} href={item.href}>
                <motion.div
                  className="h-screen flex items-center justify-center"
                >
                  <div className={cn("lg:h-140 w-full mx-15 border border-white/30 rounded-xl", contentClassName)}>
                  {item.content ||null}
                </div>
              </motion.div></Link>
            ))}
          </div>
        </div>

        {/* Sticky Text Content */}
        <div className=" relative ">
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center">
            <motion.div
              className="pr-8 py-16 max-w-lg"
              key={activeCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-4">
                <div className="flex items-center mb-6">
                  <div
                    className={`h-1 w-6 ${content[activeCard].color} mr-4 rounded-full`}
                  ></div>
                  <h2 className="text-3xl font-bold text-white">
                    {content[activeCard].title}
                  </h2>
                </div>

                <p className="text-md text-gray-300 leading-relaxed mb-8">
                  {content[activeCard].description}
                </p>

                <div className="space-y-4 mb-8">
                  {content[activeCard].features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    >
                      <div className={`text-${content[activeCard].color} mx-3 mt-3 `}>
                        <Sparkle className="h-3 w-3 " />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {content[activeCard].techStack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex items-center bg-gray-800 rounded-full px-3 py-1 text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <span className="mr-2">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          loader={({ src, width }) => src}
                        />
                      </span>
                      <span className="text-white font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
