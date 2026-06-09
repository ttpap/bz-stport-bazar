"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/products";

export function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? "default" : "secondary"}
          size="sm"
          onClick={() => onSelect(cat)}
          className={`shrink-0 text-xs font-semibold ${
            selected === cat
              ? "bg-primary text-primary-foreground shadow-[0_0_12px_-2px] shadow-primary/50"
              : ""
          }`}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
