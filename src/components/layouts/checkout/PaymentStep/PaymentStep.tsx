"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SelectCard from "./CreditCard/SelectCard";

import { Method } from "@/types/checkout";
import { useCheckoutStore } from "@/store/useCheckoutStore";
import SelectPaypal from "./Paypal/SelectPaypal";
import SelectCrypto from "./Crypto/SelectCrypto";

const PaymentStep = () => {
  const [selectedMethod, setSelectedMethod] = useState<Method>(null);

  const paymentMethods = [
    {
      id: "credit",
      title: "Credit Cards",
      image: "/visa.png",
    },
    {
      id: "crypto",
      title: "Crypto",
      image: "/crypto.png",
    },
    {
      id: "paypal",
      title: "Paypal",
      image: "/paypal.png",
    },
  ] as const;
  const { paymentMethod } = useCheckoutStore();
  return (
    <div className="mt-10">
      {selectedMethod && (
        <div
          onClick={() => {
            setSelectedMethod(null);
          }}
          className="border border_main w-fit p-2 px-5 rounded-md cursor-pointer mb-5"
        >
          <ArrowLeft className="text-muted-foreground " />
        </div>
      )}
      {selectedMethod === "credit" && <SelectCard />}
      {selectedMethod === "paypal" && <SelectPaypal />}
      {selectedMethod === "crypto" && <SelectCrypto />}
      {!selectedMethod && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {paymentMethods.map((method, i) => (
            <div
              onClick={() => {
                setSelectedMethod(method.id);
              }}
              key={i}
              className={`${
                method.id === paymentMethod?.option && "border-primary! "
              } dark:bg-card flex items-center gap-5 border border_main p-5 rounded-lg cursor-pointer dark:hover:bg-muted hover:bg-muted-foreground/20 transition`}
            >
              <Image alt="" width={50} height={50} src={method.image} />
              <div className="font-medium lg:text-xl text-lg font-mono">
                {method.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentStep;
