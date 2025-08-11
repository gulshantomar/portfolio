"use client";
import React from "react";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Check } from "lucide-react";

const BucketList = () => {
  const [items, setItems] = React.useState(
    [
      { title: "Skydiving", done: false },
      { title: "Create portfolio website", done: true, note: (
        <>
          August 2025</>
      ) },
      { title: "Do 10K marathon", done: false },
      { title: "First OpenSource contribution", done: false,  },
      { title: "Solo travel to another country", done: false },
      { title: "Remote working with client from abroad", done: false, },
      { title: "Get a Remote Job", done: false, },
      { title: "Write a book about programming", done: false },
      { title: "SHG Connect App", done: true, note: (
        <>
          July 2025 , Thanks to AKTU for cancelling exams (:
        </>
      ) },
      { title: "Get 100+ Followers on Github", done: false },
      { title: "Featured once on media", done: false }
    ] as Array<{ title: string; done: boolean; note?: React.ReactNode }>
  );

  const toggle = (idx: number) =>
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, done: !it.done } : it)));

  return (
    <div className="w-full min-h-screen  flex flex-col items-center gap-6 pt-30 pb-24 relative">
      <Image
        src="/bg.avif"
        alt="Bucket List Background"
        fill
        className="absolute inset-0 object-cover mask-b-from-neutral-900 opacity-30"
      />
      <div className="text-center px-4 relative">
        <h4 className="text-sm font-light text-white/70 tracking-widest">THE BUCKET LIST</h4>
        <h3 className="text-5xl font-semibold">The Things I&apos;ll Do</h3>
        <AuroraText className="text-5xl font-extrabold">Before I&apos;m Done?</AuroraText>
      </div>

      <div className="relative w-full max-w-3xl px-4 mt-6">
        <ul className="divide-y divide-white/10">
          {items.map((it, idx) => (
            <li key={it.title} className="py-5">
              <label className="flex items-start gap-4 cursor-pointer select-none">
                <span
                  onClick={() => toggle(idx)}
                  aria-checked={it.done}
                  role="checkbox"
                  className="mt-1 inline-grid place-items-center size-5 rounded-[6px] border border-white/25 bg-black/30 transition-colors data-[checked=true]:bg-indigo-500/20 data-[checked=true]:border-indigo-400/60"
                  data-checked={it.done}
                >
                  {it.done && <Check className="w-4 h-4 text-indigo-300" />}
                </span>
                <span className="flex-1">
                  <span className="block text-lg leading-7 text-white font-medium">{it.title}</span>
                  {it.note && (
                    <span className="block text-sm leading-6 text-white/60 mt-0.5">{it.note}</span>
                  )}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BucketList;
