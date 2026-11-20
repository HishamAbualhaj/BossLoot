"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/primitives/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/primitives/dropdown-menu";
import { cn } from "@/lib/cn";

export function FilterSelect({ id, value, onValueChange, options, className, label }: {
  id: string; value: string | number; onValueChange: (value: string) => void;
  options: { value: string; label: string }[]; className?: string; label?: string;
}) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button id={id} aria-label={label} variant="outline" className={cn("h-10 w-full min-w-0 justify-between gap-3 rounded-md border-input bg-card text-sm font-normal", className)}><span className="truncate">{options.find((option) => option.value === String(value))?.label || "Choose an option"}</span><ChevronDown className="size-4 shrink-0 text-muted-foreground" /></Button></DropdownMenuTrigger><DropdownMenuContent align="start" sideOffset={6} className="store-ui min-w-[var(--radix-dropdown-menu-trigger-width)] rounded-md border-border bg-card p-1 text-foreground shadow-xl"><DropdownMenuRadioGroup value={String(value)} onValueChange={onValueChange}>{options.map((option) => <DropdownMenuRadioItem key={option.value} value={option.value} className="min-h-10 cursor-pointer rounded-sm pr-4 text-sm focus:bg-accent focus:text-accent-foreground">{option.label}</DropdownMenuRadioItem>)}</DropdownMenuRadioGroup></DropdownMenuContent></DropdownMenu>;
}
