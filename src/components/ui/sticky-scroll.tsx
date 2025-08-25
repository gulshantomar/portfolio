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
    const scrollPercent = Math.max(0, Math.min(1, latest));
    const cardIndex = Math.floor(scrollPercent * cardLength);
    const activeIndex = Math.min(cardIndex, cardLength - 1);
    setActiveCard(activeIndex);
  });

  return (
    <div ref={ref} className="relative bg-[#0A0A0A]">
      <div className="flex flex-col lg:flex-row lg:px-20">
        {/* Text Content - Shows first on mobile, second on desktop */}
        <div className="w-full lg:w-1/3 order-1 lg:order-2">
          <div className="px-4 lg:px-0 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center py-8 lg:py-0">
            <motion.div
              className="w-full px-10 lg:px-0 lg:pr-8 lg:py-16 max-w-full lg:max-w-lg"
              key={activeCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-4">
                <div className="flex items-center mb-4 lg:mb-6">
                  <div
                    className={`h-1 w-4 lg:w-6 ${content[activeCard].color} mr-2 lg:mr-4 rounded-full`}
                  ></div>
                  <h2 className="text-xl lg:text-3xl font-bold text-white">
                    {content[activeCard].title}
                  </h2>
                </div>

                <p className="text-sm lg:text-md text-gray-300 leading-relaxed mb-6 lg:mb-8">
                  {content[activeCard].description}
                </p>

                <div className="space-y-2 lg:space-y-4 mb-6 lg:mb-8">
                  {content[activeCard].features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    >
                      <div className={`${content[activeCard].color} mx-2 lg:mx-3 mt-2 lg:mt-3`}>
                        <Sparkle className="h-3 w-3" />
                      </div>
                      <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {content[activeCard].techStack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex items-center bg-gray-800 rounded-full px-2 lg:px-3 py-1 text-xs lg:text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <span className="mr-1 lg:mr-2">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="w-3 h-3 lg:w-4 lg:h-4"
                          unoptimized
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

        {/* Scrollable Rectangle Content - Shows second on mobile, first on desktop */}
        <div className="w-full lg:w-2/3 lg:pl-20 px-10 order-2 lg:order-1">
          <div>
            {content.map((item, index) => (
              <Link key={item.title + index} href={item.href}>
                <motion.div
                  className="min-h-[50vh] lg:h-screen flex items-center justify-center py-4 lg:py-0"
                >
                  <div className={cn("w-full mx-4 text-sm lg:text-xl lg:mx-15 border border-white/30 rounded-xl ", contentClassName)}>
                    {item.content || null}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
