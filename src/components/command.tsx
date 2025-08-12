"use client";

import * as React from "react";
import Link from "next/link";
import {
  CreditCard,
  FileCheckIcon,
  FolderCodeIcon,
  Home,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function Command() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <span className="text-3xl " onClick={() => setOpen(true)}>
        ⌘
      </span>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="backdrop-blur-md bg-black/50 border border-white/20 text-white"
      >
        <CommandInput placeholder="Search..." />
        <CommandList className="text-white">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation" className="text-white">
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/" className="flex items-center gap-2 w-full">
                <Home />
                Home
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/projects" className="flex items-center gap-2 w-full">
                <FolderCodeIcon />
                Projects
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/guestbook" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                Guestbook
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/links" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                Links
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/about" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                About
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/bucket-list" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                Bucketlist
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/#book" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                Book a Call
              </Link>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/blog" className="flex items-center gap-2 w-full">
                <FileCheckIcon />
                Blog
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Account" className="text-white">
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="/guestbook" className="flex items-center gap-2 w-full">
                <User />
                Sign in
              </Link>
            </CommandItem>
           
          </CommandGroup>
          <CommandGroup heading="Resources" className="text-white">
            <CommandItem onSelect={() => setOpen(false)}>
              <Link href="https://drive.google.com/file/d/10yctSxexd0tiQ1WzlTDMC_kb-nxnQvfX/view?usp=drive_link" className="flex items-center gap-2 w-full">
                <Smile />
                resume
              </Link>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Social" className="text-white">
            <CommandItem onSelect={() => setOpen(false)}>
              <a href="https://github.com/gulshantomar" target="_blank" rel="noopener noreferrer" className="flex items-center  gap-2 w-full">
                <Smile />
                Github
              </a>
            </CommandItem>
             <CommandItem onSelect={() => setOpen(false)}>
              <a href="https://www.linkedin.com/in/gulshantomar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                <CreditCard />
                Linkedin
              </a>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <a href="https://x.com/gulshantomar_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                <Settings />
                X
              </a>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
