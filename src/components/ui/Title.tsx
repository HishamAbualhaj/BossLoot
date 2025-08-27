import React from "react";

interface props {
  title: string;
  subtitle: string;
}
const Title = ({ title, subtitle }: props) => {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-6 h-12  bg-primary rounded-2xl"></div>
      <div className="flex flex-col gap-5">
        <div className="xl:text-5xl text-4xl">{title}</div>
        <div className="text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
};

export default Title;
