"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ProductCounter = () => {
  const maxValue = 100;
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex max-md:order-1 w-fit items-center border  rounded-lg dark:border-primary border-gray-200">
      <div
        onClick={() => {
          if (counter <= 1) return;
          setCounter((prev) => prev - 1);
        }}
        className="p-2 py-3 cursor-pointer"
      >
        <Minus size={18} />
      </div>

      <div className="xl:px-8 px-5 select-none">{counter}</div>
      <div
        onClick={() => {
          if (counter >= maxValue) return;
          setCounter((prev) => prev + 1);
        }}
        className="p-2 py-3 cursor-pointer"
      >
        <Plus size={18} />
      </div>
    </div>
  );
};

export default ProductCounter;
