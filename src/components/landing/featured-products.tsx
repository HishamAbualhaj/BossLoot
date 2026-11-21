"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
const collections = ["Staff picks", "New arrivals", "On sale"] as const;
export function FeaturedProducts() {
  const translate = useStoreCopy();

  const [collection, setCollection] = useState<(typeof collections)[number]>("Staff picks");
  const selection = collection === "New arrivals" ? [...products].filter(p => p.stock > 0).sort((a,b) => b.id-a.id).slice(0,4) : collection === "On sale" ? products.filter(p => p.stock > 0 && p.discount > 0).sort((a,b) => b.discount-a.discount).slice(0,4) : [products[0],products[2],products[8],products[1]];
  return <div><div aria-label={translate("Featured collections")} className="mb-7 flex flex-wrap gap-2">{collections.map(name => <button key={name} type="button" aria-pressed={collection === name} onClick={() => setCollection(name)} className={`min-h-10 rounded-md border px-4 text-sm transition ${collection === name ? "border-purple-400/40 bg-purple-500/10 font-medium text-purple-700 dark:text-purple-200" : "border-border text-muted-foreground hover:border-purple-400/40"}`}>{translate(name)}</button>)}</div><div aria-live="polite" aria-label={translate(collection)} className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">{selection.map(product => <ProductCard key={product.id} {...product} />)}</div></div>;
}
