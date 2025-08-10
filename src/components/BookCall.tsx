"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import React from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const BookCall = ({ className }: { className?: string }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string }>(null);

  // character budget handled inline; no separate variable needed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, msg: "Please fill out all fields." });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      setStatus({ ok: true, msg: "Message sent! I’ll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ ok: false, msg });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Drawer>
      <DrawerTrigger className={className}>Book a Call</DrawerTrigger>
      <DrawerContent className="bg-[#171717] text-white w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded-md border border-white/10">
        <DrawerHeader>
          <div className="flex items-center gap-5 mx-auto mt-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <LinkedInLogoIcon
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gulshantomar/",
                      "_blank"
                    )
                  }
                  className="w-6 h-6 text-white/60 hover:text-white"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black">
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <GitHubLogoIcon
                  onClick={() =>
                    window.open("https://github.com/gulshantomar", "_blank")
                  }
                  className="w-6 h-6 text-white/60 hover:text-white"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-white  text-black">
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <TwitterLogoIcon
                  onClick={() =>
                    window.open("https://x.com/gulshantomar_", "_blank")
                  }
                  className="w-6 h-6 text-white/60 hover:text-white"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black">
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <DrawerTitle >
          </DrawerTitle>
          <DrawerDescription>
            
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 pb-4">
          {/* Tabs mimic */}
          

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-transparent border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-transparent border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold">Message</label>
              <div className="text-right text-xs text-white/50 mb-1">{message.length}/1000</div>
              <textarea
                placeholder="What would you like to discuss?"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
                className="w-full min-h-32 rounded-lg bg-transparent border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20 resize-y"
              />
            </div>

            {status && (
              <div className={cn("text-sm", status.ok ? "text-emerald-400" : "text-red-400")}>{status.msg}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-white font-medium",
                "bg-gradient-to-r from-indigo-500 to-violet-600",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            >
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BookCall;
