
import { useStoreCopy } from "@/i18n/use-store-copy";
import Link from "next/link";
import React from "react";

type logoProps = {
  size?: string;
};
const Logo = ({ size = "2xl" }: logoProps) => {
  const translate = useStoreCopy();

  return (
    <Link href="/" className={`text-${size} font-extrabold text-gaming`}>
      {translate(" BossLoot ")}</Link>
  );
};

export default Logo;
