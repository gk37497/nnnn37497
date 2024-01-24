"use client";

import { BookmarkIcon, FileIcon, HomeIcon } from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
  CommandDialog,
} from "@/components/ui/command";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
const pathname = usePathname();
  const router = useRouter();

  const handleOnClick = (path: string) => {
    setOpen(false);
    router.push(path);
  };

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
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="p-2 font-semibold"
      >
        ⌘K
      </Button>

      {/* Command Menu */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Menu">
              <CommandItem onSelect={() => handleOnClick("/")} value="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                <span>Home</span>
                <CommandShortcut>⌘</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleOnClick("/projects")} value="/projects">
                <FileIcon className="mr-2 h-4 w-4" />
                <span>Projects</span>
                <CommandShortcut>⌘</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleOnClick("/resume")} value="/resume">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                <span>Resume</span>
                <CommandShortcut>⌘</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
