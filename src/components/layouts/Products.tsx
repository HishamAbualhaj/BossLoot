"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import React from "react";
import Title from "../ui/Title";

import ProductCard from "../ui/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { products } from "@/data/products";
const Products = () => {
  const translate = useStoreCopy();

  return (
    <div className="relative dark:bg-purple-900/5 bg-white/30 px-5">
      <div className="container z-10 relative">
        <Title
          title={translate("Products")}
          subtitle="Quality products, curated for gamers like you."
        />
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          className="mt-10"
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            870: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((item, i) => (
            <SwiperSlide key={item.id}>
              <ProductCard key={i} {...item}>
                <ProductCard.AddToCart />
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
