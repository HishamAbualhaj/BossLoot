"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import Image from "next/image";
import { ShieldCheck, Truck } from "lucide-react";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { cartTotals, money } from "@/lib/cart";
export function OrderSummary() {
  const translate = useStoreCopy();

 const cart = useCheckoutStore((s) => s.cart); const delivery = useCheckoutStore((s) => s.delivery); const coupon = useCheckoutStore((s) => s.coupon);
 const totals = cartTotals(cart, delivery, coupon);
 return <aside className="rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{translate("Your loadout")}</h2><span className="text-sm text-muted-foreground">{translate(`${totals.count} items`)}</span></div><div className="my-5 space-y-4">{totals.items.map((item) => <div key={item.productId} className="flex items-center gap-3"><div className="relative size-14 shrink-0 rounded-md bg-muted"><Image src={item.product.image} alt="" fill sizes="56px" className="object-contain p-1" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{translate(item.product.name)}</p><p className="text-xs text-muted-foreground">{translate(`Qty ${item.quantity}`)}</p></div><p className="text-sm">{translate(money(item.unitPrice * item.quantity))}</p></div>)}</div><dl className="space-y-3 border-t border-border pt-5 text-sm"><div className="flex justify-between"><dt className="text-muted-foreground">{translate("Subtotal")}</dt><dd>{translate(money(totals.subtotal))}</dd></div>{totals.discount > 0 && <div className="flex justify-between text-emerald-500"><dt>{translate("LOOT10 discount")}</dt><dd>-{translate(money(totals.discount))}</dd></div>}<div className="flex justify-between"><dt className="text-muted-foreground">{translate(delivery === "express" ? "Express delivery" : "Standard delivery")}</dt><dd>{translate(totals.shipping ? money(totals.shipping) : "Free")}</dd></div><div className="flex justify-between border-t border-border pt-4 text-lg font-semibold"><dt>{translate("Total")}</dt><dd>{translate(money(totals.total))}</dd></div></dl><p className="mt-4 text-xs leading-5 text-muted-foreground">{translate("Demo pricing in USD. No tax or payment is collected.")}</p><div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground"><p className="flex items-center gap-2"><Truck className="size-4 text-purple-400" />{translate("Free standard shipping from $150")}</p><p className="flex items-center gap-2"><ShieldCheck className="size-4 text-purple-400" />{translate("Your progress is saved on this device")}</p></div></aside>;
}
