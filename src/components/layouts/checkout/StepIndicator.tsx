"use client";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import { useRouter } from "next/navigation";


const StepIndicator = () => {
  const steps = [
    {
      number: "1",
      title: "Shipping",
      isActive: true,
      isDone: false,
    },
    {
      number: "2",
      title: "Payment",
      isActive: false,
      isDone: false,
    },
    {
      number: "3",
      title: "Review",
      isActive: false,
      isDone: false,
    },
  ];

  const { step } = useCheckoutStore();


  return (
    <div className="flex justify-between border-b border_main max-w-[1200px] mx-auto">
      {steps.map((item, i) => (
        <div
          key={i}
          className={`${
            step === item.title.toLowerCase() ? "border-b-2 border-primary" : ""
          } pb-4 flex gap-3 items-center flex-1`}
        >
          <div
            className={`${
              step === item.title.toLowerCase()
                ? "bg-primary text-white border-none"
                : ""
            } border border_main rounded-[100%]  w-8 h-8 flex justify-center items-center`}
          >
            {item.number}
          </div>
          <div className="">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
