
import { useStoreCopy } from "@/i18n/use-store-copy";
import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const translate = useStoreCopy();

  return (
    <>
      <div className="xl:text-6xl text-4xl">{translate(title)}</div>
      <div className="text-muted-foreground mt-3 max-w-[700px] mx-auto xl:text-lg">
        {translate(subtitle)}
      </div>
    </>
  );
};

export default Heading;
