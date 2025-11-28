"use client";
import Button from "@/components/ui/Button";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import Link from "next/link";

const NextPrev = () => {
  const steps = ["shipping", "payment", "review"];

  const { step, nextStep, prevStep } = useCheckoutStore();

  const currentIndex = steps.indexOf(step);

  let nextStepValue;
  if (currentIndex < steps.length - 1) {
    nextStepValue = steps[currentIndex + 1];
  }

  let prevStepValue;

  if (currentIndex > 0) {
    prevStepValue = steps[currentIndex - 1];
  }

  return (
    <div className="flex justify-between mt-10">
      {currentIndex !== 0 && (
        <Link onClick={prevStep} href={`/checkout/${prevStepValue}`}>
          <Button
            className="w-fit! px-8 bg-transparent border border_main"
            title="Back"
          />
        </Link>
      )}
      {currentIndex < steps.length - 1 && (
        <Link className="ml-auto" onClick={nextStep} href={`/checkout/${nextStepValue}`}>
          <Button className="w-fit! px-8" title="Next" />
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
