"use client";

import { Download } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { nav, resumeUrl } from "@/content/links";

export function MobileNav({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const scrollTo = useScrollTo();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-background/95 backdrop-blur-md">
        <SheetHeader>
          <SheetTitle className="font-heading">Navigate</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-2 px-4">
          {nav.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => {
                  scrollTo(item.href);
                  onOpenChange(false);
                }}
                className="w-full rounded-md py-3 text-left text-lg text-foreground transition-colors hover:text-cyan"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 px-4">
          <Button
            className="w-full"
            nativeButton={false}
            render={<a href={resumeUrl} target="_blank" rel="noopener noreferrer" download />}
          >
            <Download className="size-4" />
            Download Resume
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
