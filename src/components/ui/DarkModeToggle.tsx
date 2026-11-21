"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
export default function DarkModeToggle() {
  const translate = useStoreCopy();

 const [dark, setDark] = useState(true);
 return <button type="button" aria-label={translate(dark ? "Switch to light theme" : "Switch to dark theme")} onClick={() => { const next = !document.documentElement.classList.contains("dark"); document.documentElement.classList.toggle("dark", next); setDark(next); }} className="flex size-10 items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted hover:text-purple-500">{dark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}</button>;
}
