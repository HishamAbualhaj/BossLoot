import { create } from "zustand";

export type CheckoutStep = "shipping" | "payment" | "review";

const steps: CheckoutStep[] = ["shipping", "payment", "review"];

interface CheckoutState {
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  step: "payment",
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
