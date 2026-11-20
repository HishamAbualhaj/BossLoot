"use client";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { CreditCard } from "lucide-react";
import { DemoForm, SubmitButton } from "@/components/forms/demo-form";
import { FormInput } from "@/components/forms/form-input";
import { creditCardSchema } from "@/validation/payment/credit-card";
export default function AddCreditCard() {
 const setDemoCard = useCheckoutStore((state) => state.setDemoCard);
  return <section className="store-ui"><h2 className="flex items-center gap-2 text-xl font-semibold"><CreditCard className="size-5 text-primary" />Card details</h2><p className="mb-6 mt-2 text-sm leading-6 text-muted-foreground">Preview only. Use test data such as 4242 4242 4242 4242. No payment is taken.</p><DemoForm schema={creditCardSchema} initialValues={{ cardholderName: "", cardNumber: "", expiryDate: "", cvv: "", billingAddress: "" }} message="Demo card validated. Only its name and last four digits were saved." onSuccess={(values) => setDemoCard(values.cardholderName, values.cardNumber.replace(/\D/g, "").slice(-4))}><FormInput name="cardholderName" label="Cardholder name" autoComplete="off" placeholder="Alex Morgan" /><FormInput name="cardNumber" label="Card number" inputMode="numeric" autoComplete="off" maxLength={23} placeholder="4242 4242 4242 4242" /><div className="grid grid-cols-2 gap-4"><FormInput name="expiryDate" label="Expiry date" autoComplete="off" placeholder="MM/YY" maxLength={5} /><FormInput name="cvv" label="Security code" type="password" inputMode="numeric" autoComplete="off" maxLength={4} placeholder="123" /></div><FormInput name="billingAddress" label="Billing address" autoComplete="off" placeholder="123 Example Street" /><SubmitButton>Validate demo card</SubmitButton></DemoForm></section>;
}
