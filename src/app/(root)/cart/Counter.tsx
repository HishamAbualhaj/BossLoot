"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const maxValue = 100;
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex w-fit items-center border  rounded-lg  border_main">
      <div
        onClick={() => {
          if (counter <= 1) return;
          setCounter((prev) => prev - 1);
        }}
        className="p-2 py-2 cursor-pointer"
      >
        <Minus size={15} />
      </div>

      <div className="xl:px-5 px-5 select-none">{counter}</div>
      <div
        onClick={() => {
          if (counter >= maxValue) return;
          setCounter((prev) => prev + 1);
        }}
        className="p-2 py-2 cursor-pointer"
      >
        <Plus size={15} />
      </div>
    </div>
  );
};

export default Counter;
