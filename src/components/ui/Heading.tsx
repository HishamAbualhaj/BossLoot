import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <div className="xl:text-6xl text-4xl">{title}</div>
      <div className="text-muted-foreground mt-3 max-w-[700px] mx-auto xl:text-lg">
        {subtitle}
      </div>
    </>
  );
};

export default Heading;
