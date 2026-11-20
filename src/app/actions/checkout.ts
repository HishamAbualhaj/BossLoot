"use server";
import { cookies } from "next/headers";
import { shippingSchema } from "@/validation/shipping/address";
import type { InferType } from "yup";
import type { PaymentMethod } from "@/types/checkout";

const options = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 3600,
};
// These cookies guard the demo flow only; they do not authorize purchases or payments.
export async function completeDemoShipping(
  values: InferType<typeof shippingSchema>,
) {
  await shippingSchema.validate(values, { abortEarly: false });
  const jar = await cookies();
  jar.set("bossloot-demo-shipping", "complete", options);
  jar.delete("bossloot-demo-payment");
}
export async function completeDemoPayment(method: PaymentMethod | null) {
  const jar = await cookies();
  if (jar.get("bossloot-demo-shipping")?.value !== "complete")
    throw new Error("Complete shipping first");
  if (!method || !["credit", "paypal", "crypto"].includes(method.option))
    throw new Error("Choose a payment method");
  const id =
    method.option === "credit"
      ? method.data.visaCardId
      : method.option === "paypal"
        ? method.data.accountId
        : method.data.walletId;
  if (typeof id !== "string" || !id.trim())
    throw new Error("Choose a payment method");
  jar.set("bossloot-demo-payment", "complete", options);
}
