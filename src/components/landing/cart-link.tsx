"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCheckoutReady } from "@/hooks/use-checkout-ready";
import { useCheckoutStore } from "@/store/useCheckoutStore";
export function CartLink() {
  const translate = useStoreCopy();

  const t = useTranslations("common");
  const ready = useCheckoutReady();
  const count = useCheckoutStore(state => state.cart.reduce((total, item) => total + item.quantity, 0));
  return <Link href="/cart" aria-label={translate(t("cart"))} className="relative flex size-10 items-center justify-center rounded-md transition hover:bg-muted"><ShoppingBag className="size-[19px]" />{ready && count > 0 && <span aria-hidden="true" className="absolute -end-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-purple-600 text-[9px] font-semibold text-white">{translate(count > 99 ? "99+" : count)}</span>}</Link>;
}
