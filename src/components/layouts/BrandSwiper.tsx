"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const BrandSwiper = ({ images }: { images: string[] }) => {
  return (
    <div className="relative mt-15">
      <div className="w-[300px] z-10 h-full absolute left-0  bg-gradient-to-r from-background to-transparent"></div>
      <div className="w-[300px] z-10 h-full absolute right-0  bg-gradient-to-l from-background to-transparent"></div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          870: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {images.map((img) => (
          <SwiperSlide>
            <div className="flex justify-center">
              <Image alt={String(img)} width={200} height={200} src={img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
