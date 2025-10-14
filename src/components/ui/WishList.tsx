"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const WishList = () => {
  const [heart, setHeart] = useState(false);

  return (
    <div
      onClick={() => {
        // handle wishlist functionality
      }}
      className="cursor-pointer"
    >
      <Heart
        size={25}
        className="transition"
        fill={`${heart ? "#fb2c36" : "transparent"}`}
        stroke={`${heart ? "#fb2c36" : "#6a7282"}`}
        onMouseEnter={() => {
          setHeart(true);
        }}
        onMouseLeave={() => {
          setHeart(false);
        }}
      />
    </div>
  );
};

export default WishList;
