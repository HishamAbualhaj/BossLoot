"use client";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import type { ShippingAddress } from "@/store/useCheckoutStore";
import { completeDemoShipping } from "@/app/actions/checkout";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { DemoForm, SubmitButton } from "@/components/forms/demo-form";
import { FormInput } from "@/components/forms/form-input";
import { shippingSchema } from "@/validation/shipping/address";
import { useCheckoutStore } from "@/store/useCheckoutStore";
const fields = [
  { name: "firstName", label: "First name", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", autoComplete: "family-name" },
  {
    name: "email",
    label: "Email address",
    autoComplete: "email",
    type: "email",
  },
  { name: "address", label: "Street address", autoComplete: "street-address" },
  { name: "city", label: "City", autoComplete: "address-level2" },
  { name: "zipCode", label: "Postal code", autoComplete: "postal-code" },
  { name: "country", label: "Country", autoComplete: "country-name" },
];
export default function ShippingStep() {
  const router = useRouter();
  const saveShipping = useCheckoutStore((state) => state.saveShipping);
  const shipping = useCheckoutStore((state) => state.shipping);
  const delivery = useCheckoutStore((state) => state.delivery);
  const setDelivery = useCheckoutStore((state) => state.setDelivery);
  return (
    <section className="store-ui mt-8 rounded-2xl border border-border bg-card p-5 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <MapPin className="size-5 text-primary" />
        <div>
          <h1 className="text-2xl font-semibold">Where should it go?</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter a sample address to preview checkout.
          </p>
        </div>
      </div>
      <DemoForm
        id="shipping-form"
        schema={shippingSchema}
        initialValues={shipping}
        message="Demo shipping address validated."
        onSuccess={async (values) => {
          await completeDemoShipping(values);
          saveShipping(values);
          router.push("/checkout/payment");
        }}
      >
        <ShippingDraft />
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <FormInput key={field.name} {...field} />
          ))}
        </div>
        <fieldset className="space-y-3 border-t border-border pt-5">
          <legend className="sr-only">Delivery speed</legend>
          <h2 className="text-sm font-semibold">Choose your delivery</h2>
          {(["standard", "express"] as const).map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4 text-sm"
            >
              <input
                type="radio"
                name="delivery"
                value={option}
                checked={delivery === option}
                onChange={() => setDelivery(option)}
                className="accent-purple-500"
              />
              <span>
                {option === "standard"
                  ? "Standard / 3-5 days / Free from $150, otherwise $6.99"
                  : "Express / 1-2 days / $14.99"}
              </span>
            </label>
          ))}
        </fieldset>
        <SubmitButton>Continue to payment</SubmitButton>
      </DemoForm>
    </section>
  );
}

function ShippingDraft() {
  const { values } = useFormikContext<ShippingAddress>();
  const saveDraft = useCheckoutStore((state) => state.saveDraft);
  useEffect(() => {
    saveDraft(values);
  }, [values, saveDraft]);
  return null;
}
