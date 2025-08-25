"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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

  const handleSelect = (href: string, external?: boolean) => {
    // Close first for snappier feel
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <span onClick={() => setOpen(true)}>
        <span
          className="text-2xl bg-black/80 backdrop-blur-xl px-2.5 py-1 rounded-full gap-1
                     transition-transform hover:scale-105 active:scale-95"
        >
          ⌘
        </span>
      </span>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="backdrop-blur-md bg-black/40 border border-white/20 text-white
                   duration-150
                   data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
                   data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
      >
        <CommandInput placeholder="Search..." />
        <CommandList className="text-white">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation" className="text-white">
            <CommandItem
              onSelect={() => handleSelect("/")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <Home className="shrink-0" />
              <span>Home</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/projects")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FolderCodeIcon className="shrink-0" />
              <span>Projects</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/guestbook")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>Guestbook</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/links")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>Links</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/about")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>About</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/bucket-list")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>Bucketlist</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/#book")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>Book a Call</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("/blog")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <FileCheckIcon className="shrink-0" />
              <span>Blog</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Account" className="text-white">
            <CommandItem
              onSelect={() => handleSelect("/guestbook")}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <User className="shrink-0" />
              <span>Sign in</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Resources" className="text-white">
            <CommandItem
              onSelect={() =>
                handleSelect(
                  "https://drive.google.com/file/d/1CkLOkgqcNULQGyRiRCA7Y9oLfttOzcf5/view?usp=sharing",
                  true
                )
              }
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <Smile className="shrink-0" />
              <span>resume</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Social" className="text-white">
            <CommandItem
              onSelect={() =>
                handleSelect("https://github.com/gulshantomar", true)
              }
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <Smile className="shrink-0" />
              <span>Github</span>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                handleSelect(
                  "https://www.linkedin.com/in/gulshantomar/",
                  true
                )
              }
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <CreditCard className="shrink-0" />
              <span>Linkedin</span>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect("https://x.com/gulshantomar_", true)}
              className="flex items-center gap-2 w-full transition-colors hover:bg-white/10 data-[selected=true]:bg-white/40"
            >
              <Settings className="shrink-0" />
              <span>X</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
