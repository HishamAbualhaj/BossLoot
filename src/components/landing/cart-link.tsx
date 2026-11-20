"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCheckoutReady } from "@/hooks/use-checkout-ready";
import { useCheckoutStore } from "@/store/useCheckoutStore";
export function CartLink() {
  const ready = useCheckoutReady();
  const count = useCheckoutStore(state => state.cart.reduce((total, item) => total + item.quantity, 0));
  return <Link href="/cart" aria-label="Shopping cart" className="relative flex size-10 items-center justify-center rounded-md transition hover:bg-muted"><ShoppingBag className="size-[19px]" />{ready && count > 0 && <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-purple-600 text-[9px] font-semibold text-white">{count > 99 ? "99+" : count}</span>}</Link>;
}
