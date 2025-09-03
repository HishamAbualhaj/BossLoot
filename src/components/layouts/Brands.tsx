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
import Heading from "../ui/Heading";

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
    <div className="px-5">
      <div className="xl:py-15 py-12 text-center px-5 border-b dark:border-border border-gray-500/20">
        <Heading
          title="Brands & Partnerships"
          subtitle="We partner with the world's leading gaming and technology brands to
          bring you the best products, exclusive deals, and cutting-edge
          innovation."
        />

        <div className="border-t border-b dark:border-border border-gray-500/20 mt-10 bg-gray-200 dark:bg-background pb-12">
          <BrandSwiper images={images} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
