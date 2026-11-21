"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useCheckoutReady } from "@/hooks/use-checkout-ready";
import { products } from "@/data/products";
import { Button } from "@/components/ui/primitives/button";
export function AddToCartButton({ productId, buyNow = false }: { productId: number; buyNow?: boolean }) {
  const translate = useStoreCopy();

 const ready = useCheckoutReady(); const router = useRouter(); const add = useCheckoutStore((s) => s.addItem);
 const stock = products.find((item) => item.id === productId)?.stock || 0;
 return <Button disabled={!ready || stock === 0} className="mt-2 h-10 w-full rounded-md" onClick={() => { add(productId); if (buyNow) router.push("/cart"); }}><ShoppingBag className="size-4" />{translate(!stock ? "Out of stock" : buyNow ? "Buy now" : "Add to cart")}</Button>;
}
