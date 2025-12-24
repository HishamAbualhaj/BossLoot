import { create } from "zustand";
import { PaymentMethod } from "@/types/checkout";
export type CheckoutStep = "shipping" | "payment" | "review" | null;

const steps: CheckoutStep[] = ["shipping", "payment", "review"];

interface CheckoutState {
  step: CheckoutStep;
  shippingAddressId?: string;
  setShipping: (id: string) => void;

  setStep: (step: CheckoutStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  paymentMethod: PaymentMethod | null;
}

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  step: "shipping",
  paymentMethod: null,
  setPaymentMethod: (method) => set({ paymentMethod: method }),

  setShipping: (id) => set({ shippingAddressId: id }),
  setStep: (step) => set({ step }),
  nextStep: () => {
    const currentStep = get().step;
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      set({ step: steps[currentIndex + 1] });
    }
  },
  prevStep: () => {
    const currentStep = get().step;
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      set({ step: steps[currentIndex - 1] });
    }
  },
}));
