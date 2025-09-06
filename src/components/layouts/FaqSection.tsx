"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
type question = {
  question: string;
  answer: string;
};
const FaqSection = ({ question }: { question: question }) => {
  const [isDown, setIsDown] = useState(false);

  return (
    <div
      onClick={() => {
        setIsDown(!isDown);
      }}
      className="border-b dark:border-gray-500/20 border-gray-200 transition pb-5 dark:hover:bg-muted hover:bg-gray-200/30 p-5 cursor-pointer hover:rounded-lg"
    >
      <div className="flex justify-between">
        <div className="xl:text-[22px]"> {question.question}</div>
        {!isDown ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isDown && (
        <div className="text-muted-foreground xl:text-[17px] mt-2 overflow-hidden animate-openDialog">
          {question.answer}
        </div>
      )}
    </div>
  );
};

export default FaqSection;
