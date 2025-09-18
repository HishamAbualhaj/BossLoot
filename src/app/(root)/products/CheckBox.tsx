"use client";

import useSearchPara from "@/hooks/useSearchPara";
import React, { useState } from "react";

const CheckBox = ({ type, value }: { type: string; value: string }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSearchPara = useSearchPara();
  const toggleFilter = () => {
    setIsSelected(!isSelected);
    handleSearchPara(type, value);
  };

  return (
    <div
      onClick={toggleFilter}
      className={`${
        isSelected ? "bg-primary" : ""
      } w-5 h-5 border dark:border-border border-gray-300 cursor-pointer dark:hover:bg-primary dark:hover:border-none hover:bg-primary hover:border-none rounded-md`}
    ></div>
  );
};

export default CheckBox;
