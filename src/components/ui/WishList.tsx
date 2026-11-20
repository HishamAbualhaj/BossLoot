"use client";
import { Heart } from "lucide-react";
import { useState } from "react";
export default function WishList() {
  const [saved, setSaved] = useState(false);
  return <button type="button" aria-label={saved ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={saved} onClick={() => setSaved((value) => !value)} className="flex size-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-500 shadow-sm transition hover:text-purple-500 dark:border-white/10 dark:bg-[#22222e] dark:text-zinc-400"><Heart className={`size-4 ${saved ? "fill-purple-500 text-purple-500" : ""}`} /></button>;
}
