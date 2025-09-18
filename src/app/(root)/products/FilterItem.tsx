import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

type item = {
  title: string;
  component: React.ReactNode;
};
const FilterItem = ({ title, component }: item) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="border-b dark:border-border border-gray-200 ">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" py-5 cursor-pointer dark:hover:bg-card/50 hover:bg-gray-200/50 pr-16 pl-3"
      >
        <div className="text-xl flex items-center gap-3">
          <ChevronRight />
          {title}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className={`ml-10 transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          {component}
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
