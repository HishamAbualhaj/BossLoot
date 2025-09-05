import React from "react";
import BrandSwiper from "./BrandSwiper";
import Heading from "../ui/Heading";
const Brands = () => {
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
          <BrandSwiper />
        </div>
      </div>
    </div>
  );
};

export default Brands;
