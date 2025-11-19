"use client";
import Input from "@/components/ui/Input";
import React, { useState } from "react";

const PromoCode = () => {
  const [input, setInput] = useState<string>("");
  return (
    <div className="border border_main p-5 rounded-md dark:bg-card bg-gray-100 mt-5">
      <div className="xl:text-2xl text*xl font-medium">Promo Code</div>
      <div className="flex justify-between items-center sm:gap-5 gap-2 mt-5 border-b border_main pb-5">
        <Input
          className="flex-1 !py-2"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Enter coupon code"
          type="text"
        />
        <div className="bg-gray-500/20 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-400/20">
          Apply
        </div>
      </div>
      <div className="mt-5">
        <div className="text-gray-400 text-sm">Try these codes:</div>
        <div className="flex flex-wrap gap-3 mt-3">
          {["Summer50", "BlackFriday", "NewYeay"].map((code, i) => (
            <div
              onClick={() => {
                setInput(code);
              }}
              key={i}
              className="text-sm bg-gray-100/10 px-2 py-1 rounded-sm cursor-pointer"
            >
              {code}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
