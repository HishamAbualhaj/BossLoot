
import { useStoreCopy } from "@/i18n/use-store-copy";
import { ChevronRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type item = {
  title: string;
  component: React.ReactNode;
};
const FilterItem = ({ title, component }: item) => {
  const translate = useStoreCopy();

  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="border-b dark:border-border border-gray-200 ">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" py-5 cursor-pointer dark:hover:bg-card/50 hover:bg-gray-200/50 pe-16 ps-3"
      >
        <div className="text-xl flex items-center gap-3">
          {isOpen ? <ChevronDown /> : <ChevronRight />}

          {translate(title)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className={`ms-10 transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          {translate(component)}
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
