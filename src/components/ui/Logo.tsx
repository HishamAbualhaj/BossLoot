import Link from "next/link";
import React from "react";

type logoProps = {
  size?: string;
};
const Logo = ({ size = "2xl" }: logoProps) => {
  return (
    <Link href="/" className={`text-${size} font-extrabold text-gaming`}>
      BossLoot
    </Link>
  );
};

export default Logo;
