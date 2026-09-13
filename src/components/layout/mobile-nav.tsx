"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { nav } from "@/content/links";

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
      </SheetContent>
    </Sheet>
  );
}
