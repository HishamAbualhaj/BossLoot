"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useCheckoutReady } from "@/hooks/use-checkout-ready";
import { BossLootLoader } from "@/components/ui/bossloot-loader";
import { OrderSummary } from "./order-summary";
export function CheckoutShell({ children }: { children: ReactNode }) {
  const translate = useStoreCopy();

 const ready = useCheckoutReady(); const path = usePathname(); const router = useRouter();
 const cart = useCheckoutStore((s) => s.cart); const shipping = useCheckoutStore((s) => s.shippingComplete); const payment = useCheckoutStore((s) => s.paymentComplete); const order = useCheckoutStore((s) => s.order); const setStep = useCheckoutStore((s) => s.setStep);
 const current = path.endsWith("review") ? 2 : path.endsWith("payment") ? 1 : 0;
 const destination = !ready ? null : order && !cart.length && current === 2 ? null : !cart.length ? "/cart" : current > 0 && !shipping ? "/checkout/shipping" : current > 1 && !payment ? "/checkout/payment" : null;
 useEffect(() => { if (destination) router.replace(destination); }, [destination, router]);
 useEffect(() => { setStep((["shipping", "payment", "review"] as const)[current]); }, [current, setStep]);
 if (!ready || destination) return <BossLootLoader />;
 return <main className="store-ui min-h-[75vh] bg-background px-5 py-9 text-foreground sm:px-8"><div className="mx-auto max-w-6xl"><Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" />{translate("Back to cart")}</Link><div className="mb-8 mt-6"><p className="text-xs font-semibold uppercase tracking-[.2em] text-purple-400">{translate("ONE STEP CLOSER")}</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">{translate("Make it your next upgrade.")}</h1><p className="mt-2 text-sm text-muted-foreground">{translate("A simple checkout. Your progress, saved as you go.")}</p></div><nav aria-label={translate("Checkout steps")} className="mb-8 grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 sm:p-5">{["Shipping", "Payment", "Review"].map((step, index) => { const accessible = index === 0 || (index === 1 ? shipping : shipping && payment); const content = <><span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs ${index === current ? "bg-primary text-white" : index < current ? "bg-emerald-500/15 text-emerald-500" : "bg-muted text-muted-foreground"}`}>{index < current ? <Check className="size-4" /> : index + 1}</span><span className="text-xs font-medium sm:text-sm">{translate(step)}</span></>; return accessible ? <Link key={step} href={`/checkout/${step.toLowerCase()}`} aria-current={index === current ? "step" : undefined} className="flex items-center justify-center gap-2">{content}</Link> : <div key={step} aria-disabled="true" className="flex items-center justify-center gap-2 opacity-50">{content}</div>; })}</nav>{translate(order && !cart.length && current === 2 ? children : <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_340px]"><div className="min-w-0">{translate(children)}</div><OrderSummary /></div>)}</div></main>;
}
