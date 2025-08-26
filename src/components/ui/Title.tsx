import React from "react";

interface props {
  title: string;
  subtitle: string;
}
const Title = ({ title, subtitle }: props) => {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-8 xl:h-15 h-10 bg-purple-500 rounded-xl"></div>
      <div className="flex flex-col gap-5">
        <div className="xl:text-5xl text-4xl">{title}</div>
        <div className="xl:text-lg text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
};

export default Title;
