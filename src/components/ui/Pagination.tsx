import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

interface PaginationProps {
  maxPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPagePara: number;
  arrOfNums: number[];
}

const Pagination = ({
  maxPage,
  setCurrentPage,
  currentPagePara,
  arrOfNums,
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center mt-10 sm:gap-3 gap-2">
      <div
        onClick={() => {
          if (currentPagePara <= 1) {
            return;
          }
          setCurrentPage((prev) => prev - 1);
        }}
        className={`${
          currentPagePara <= 1 && "opacity-30 cursor-not-allowed"
        } bg-gray-500/20 p-2 rounded-md hover:bg-slate-400 ${
          currentPagePara <= 1 || "cursor-pointer"
        }`}
      >
        <ChevronLeft />
      </div>

      <div className="flex justify-center sm:gap-4 gap-2 text-lightText dark:text-white">
        {arrOfNums.map((num) => {
          {
            return num > Math.ceil(maxPage / 1) ? (
              <></>
            ) : (
              <div
                onClick={() => {
                  setCurrentPage(num);
                }}
                key={num}
                className={`bg-gray-500/20 py-2 px-4 rounded-md hover:bg-slate-400 cursor-pointer ${
                  currentPagePara === num ? "bg-purple-700 text-white" : ""
                }`}
              >
                {num}
              </div>
            );
          }
        })}
      </div>

      <div
        onClick={() => {
          if (currentPagePara >= maxPage) {
            return;
          }
          setCurrentPage((prev) => prev + 1);
        }}
        className={`${
          currentPagePara >= maxPage && "opacity-30 cursor-not-allowed"
        } bg-gray-500/20 p-2 rounded-md hover:bg-slate-400  ${
          currentPagePara >= maxPage || "cursor-pointer"
        }`}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
