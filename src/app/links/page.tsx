"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/gulshantomar/",
    icon: "/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/gulshantomar",
    icon: "/github.png",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/gulshantomar_",
    icon: "/twitter.png",
  },
  {
    label:"Telegram",
    href: "https://t.me/gulshan_tomar",
    icon: "/telegram.png",
  },
  
];
const AllLinks = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-3 pt-30 justify-items-center relative">
      <Image
        src="/bg.avif"
        alt="AllLinks"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover mask-b-from-neutral-900 opacity-30"
      />
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={1000}
        height={1000}
        className="h-30 rotate-3 object-top-center object-cover w-30 rounded-full"
      />
      <h1 className="text-2xl font-semibold">Gulshan Tomar</h1>
      <div className="flex gap-3 text-sm">
        <div className="border border-white/10 bg-white/10 p-3 rounded-xl py-1">
          Developer
        </div>
        <div className="border border-white/10 p-3 rounded-xl bg-white/10 py-1">
          Freelancer
        </div>
        <div className="border border-white/10 p-3 rounded-xl bg-white/10 py-1">
          Problem Solver
        </div>
      </div>
      <div className="grid grid-cols-1 w-80 items-center gap-3">
        {links.map((link) => (
          <Link href={link.href} key={link.label} className="border z-1 border-white/20 justify-between p-3 bg-white/12 items-center rounded-xl flex w-full">
            {link.label}
            <Image  src={link.icon} alt={`${link.label} icon`} loader={(width) => {
              return link.icon;
            }} width={24} height={24} className=" ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllLinks;
