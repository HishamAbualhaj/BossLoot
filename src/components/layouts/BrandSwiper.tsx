"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Logitech from "@/assets/logitech.svg";
import Nvidia from "@/assets/Nvidia-Logo.svg";
import Ryzen from "@/assets/ryzen.svg";
import Corsair from "@/assets/corsair.svg";
import Steelseries from "@/assets/steelseries.svg";
import Gigabyte from "@/assets/gigabyte.svg";
import Asus from "@/assets/asus.svg";
const BrandSwiper = () => {
  const images = [
    <Logitech
      className="dark:fill-white fill-black"
      width={200}
      height={200}
    />,
    <Nvidia className="dark:fill-white fill-black" width={200} height={200} />,
    <Ryzen className="dark:fill-white fill-black" width={200} height={200} />,
    <Corsair className="dark:fill-white fill-black" width={200} height={200} />,
    <Steelseries
      className="dark:fill-white fill-black"
      width={200}
      height={200}
    />,
    <Gigabyte
      className="dark:fill-white fill-black"
      width={200}
      height={200}
    />,
    <Asus className="dark:fill-white fill-black" width={200} height={200} />,
  ];
  return (
    <div className="relative mt-15">
      <div className="w-[300px] z-10 h-full absolute left-0  bg-gradient-to-r dark:from-background from-gray-200 to-transparent"></div>
      <div className="w-[300px] z-10 h-full absolute right-0  bg-gradient-to-l dark:from-background from-gray-200  to-transparent"></div>
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
        {images.map((img) => {
          return (
            <SwiperSlide>
              <div className="flex justify-center">{img}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
