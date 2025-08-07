'use client';
import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import {motion} from "motion/react";

const links =[]
const AllLinks = () => {
  return (
    <div className="w-full h-screen pt-40 grid justify-items-center relative">
      <Image
        src="/bg.avif"
        alt="AllLinks"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover mask-b-from-neutral-900 opacity-30"
      />
      <Image
        src="/profile.jpg"
        alt="AllLinks"
        // layout="fill"
        width={120}
        height={120}
        
        className=" h-30 w-30 rounded-full"
      />
    </div>
  );
};

export default AllLinks;
