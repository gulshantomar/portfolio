"use client";
import React from "react";
import { Link2, Menu, BookOpen, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Command from "@/components/command";
import { motion } from "motion/react";
import Image from "next/image";
import BookCall from "./BookCall";

const NavBar = () => {
  const pathname = usePathname();
  const moreActive = [
    "/links",
    "/uses",
    "/guestbook",
    "/bucket-list",
    "/more",
    "/attribution",
  ].some((p) => pathname.startsWith(p));

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/more", label: "More" },
    { href: "/book-call", label: "Book a Call" },
  ];

  const More = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:grid grid-cols-[2fr_1fr] gap-4 p-4 rounded-2xl border border-white/10 bg-[#0A0A0A] backdrop-blur-2xl shadow-2xl z-[500] min-w-[860px]"
      >
        {/* Left: two large image cards */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/guestbook" className="relative h-52 rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition">
            <Image src="/guestbook.avif" alt="Guestbook" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <h3 className="text-white text-lg font-semibold">Guestbook</h3>
              <p className="text-white/70 text-xs">Let me know you were here</p>
            </div>
          </Link>

          <Link href="/bucket-list" className="relative h-52 rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition">
            <Image src="/bucket-list.avif" alt="Bucket List" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <h3 className="text-white text-lg font-semibold">Bucket List</h3>
              <p className="text-white/70 text-xs">Things to do at least once in my life</p>
            </div>
          </Link>
        </div>

        {/* Right: stacked link items */}
        <div className="flex flex-col gap-4">
          <Link href="/links" className="flex items-center gap-3 p-4 rounded-xl ring-1 ring-white/10 hover:ring-white/20 bg-white/5">
            <Link2 className="h-5 w-5 text-white" />
            <div className="flex-1">
              <h4 className="text-white text-sm font-semibold">Links</h4>
              <p className="text-white/60 text-xs">All my links are here</p>
            </div>
          </Link>

          <Link href="/uses" className="flex items-center gap-3 p-4 rounded-xl ring-1 ring-white/10 hover:ring-white/20 bg-white/5">
            <BookOpen className="h-5 w-5 text-white" />
            <div className="flex-1">
              <h4 className="text-white text-sm font-semibold">Uses</h4>
              <p className="text-white/60 text-xs">A peek into my digital setup</p>
            </div>
          </Link>

          <Link href="/more" className="flex items-center gap-3 p-4 rounded-xl ring-1 ring-white/10 hover:ring-white/20 bg-white/5">
            <Info className="h-5 w-5 text-white" />
            <div className="flex-1">
              <h4 className="text-white text-sm font-semibold">Attribution</h4>
              <p className="text-white/60 text-xs">Journey to create this site</p>
            </div>
          </Link>
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <div className="flex fixed inset-x-0 z-200 top-0 justify-between lg:px-30 pt-8 items-center  px-10 ">
        <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="w-12 h-12 text-white backdrop-blur-2xl bg-transparent  p-2 rounded-full text-shadow-white-200" />

        <div className="">
          <div className="hidden lg:flex gap-1 z-100 text-sm items-center rounded-full px-2 py-1 bg-white/10 border border-white/10 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          {navItems.map((item) =>
            item.href === "/more" ? (
              <motion.div key={item.href} className="relative group">
                <span
                  className={`text-white/90 text-xs hover:bg-white/10 relative transition-colors px-4 py-2 duration-200 rounded-full ${
                    moreActive
                      ? 'after:content-["" ] backdrop-blur-md bg-white/10 after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:w-2/4 after:h-[3px] after:bg-white after:rounded-full after:opacity-90 after:shadow-[0_0_12px_rgba(255,255,255,0.9)] ring-1 ring-white/10'
                      : ''
                  }`}
                >
                  {item.label}
                </span>
                <More />
              </motion.div>
            ) : item.href === "/book-call" ? (
              <BookCall key={item.href} className="backdrop-blur-md py-2 px-4 rounded-full glow"/>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={` text-white/90 text-xs   hover:bg-white/10 relative transition-colors px-4 py-2 duration-200 rounded-full ${
                  pathname === item.href
                    ? 'after:content-["" ] backdrop-blur-md after:absolute after:-top-1 after:left-1/2 after:-translate-x-1/2 after:w-2/4 after:h-[3px] after:bg-white after:rounded-full after:opacity-90 after:shadow-[0_0_12px_rgba(255,255,255,0.9)] ring-1 ring-white/10'
                    : ''
                }`}
              >
                {item.label}
              </Link>
              
              
            )
          )}
        </div>
        </div>
        <div className="hiddenlg:block ">
          {/* <p>press</p> */}
          <Command />
        </div>
        <Menu className="lg:hidden flex w-6 h-6 text-white cursor-pointer" />
      </div>
    </>
  );
};

export default NavBar;
