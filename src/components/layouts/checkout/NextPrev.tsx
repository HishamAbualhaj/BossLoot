"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { completeDemoPayment } from "@/app/actions/checkout";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { Button } from "@/components/ui/primitives/button";
export default function NextPrev() {
  const path = usePathname();
  const router = useRouter();
  const payment = useCheckoutStore((state) => state.paymentMethod);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  if (path !== "/checkout/payment") return null;
  return <div className="store-ui mt-8"><p role="status" className="mb-3 text-sm text-rose-300/80">{error}</p><div className="flex justify-between"><Button asChild variant="outline"><Link href="/checkout/shipping">Back to shipping</Link></Button><Button disabled={!payment || pending} onClick={async () => { setPending(true); setError(""); try { await completeDemoPayment(payment); router.push("/checkout/review"); } catch { setError("Please complete shipping and choose a payment method."); setPending(false); } }}>{pending ? "Continuing..." : "Review checkout"}</Button></div></div>;
}
