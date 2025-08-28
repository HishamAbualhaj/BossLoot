import React from "react";
import logitech from "@/assets/Logitech-Logo.svg";
import nvidia from "@/assets/Nvidia-Logo.svg";
import razer from "@/assets/Razer_Inc_Logo.png";
import ryzen from "@/assets/Ryzen-RYZEN-Logo.svg";
import corsair from "@/assets/Corsair_Components-Logo.svg";
import steelseries from "@/assets/steelseries.svg";
import gigabyte from "@/assets/gigabyte.svg";
import asus from "@/assets/asus.svg";
import BrandSwiper from "./BrandSwiper";

const Brands = () => {
  const images = [
    logitech,
    nvidia,
    razer,
    ryzen,
    corsair,
    steelseries,
    gigabyte,
    asus,
  ];
  return (
    <div className="xl:py-15 py-12 text-center px-5 border-b border-border">
      <div className="xl:text-6xl text-4xl">Brands & Partnerships</div>
      <div className="text-muted-foreground mt-3 max-w-[700px] mx-auto xl:text-lg xl:pb-15 pb-12">
        We partner with the world's leading gaming and technology brands to
        bring you the best products, exclusive deals, and cutting-edge
        innovation.
      </div>
      <div className=" border-t border-border">
        <BrandSwiper images={images} />
      </div>
    </div>
  );
};

export default Brands;
