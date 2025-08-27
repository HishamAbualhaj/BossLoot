"use client";
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
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Gaming Headset",
      description: "High-quality surround sound with noise-canceling mic.",
      price: 79.99,
      discount: 20, // percentage
      image: "https://via.placeholder.com/300x200.png?text=Gaming+Headset",
      category: ["Accessories"],
      rating: 4,
      reviews: 120,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      description:
        "RGB backlit, blue switches, built for speed and durability.",
      price: 129.99,
      discount: 15,
      image: "https://via.placeholder.com/300x200?text=Mechanical+Keyboard",
      category: ["Keyboards"],
      rating: 4,
      reviews: 250,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "Ergonomic design with customizable DPI and RGB lights.",
      price: 59.99,
      discount: 10,
      image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
      category: ["Accessories"],
      rating: 5,
      reviews: 300,
    },
    {
      id: 4,
      name: "4K Gaming Monitor",
      description: "Ultra HD resolution, 144Hz refresh rate, HDR support.",
      price: 499.99,
      discount: 25,
      image: "https://via.placeholder.com/300x200?text=4K+Monitor",
      category: ["Monitors"],
      rating: 5,
      reviews: 85,
    },
    {
      id: 5,
      name: "Gaming Chair",
      description:
        "Ergonomic design with lumbar support and adjustable armrests.",
      price: 199.99,
      discount: 18,
      image: "https://via.placeholder.com/300x200?text=Gaming+Chair",
      category: ["Chairs"],
      rating: 4,
      reviews: 150,
    },
    {
      id: 6,
      name: "Streaming Microphone",
      description: "Studio-quality sound with USB plug-and-play setup.",
      price: 99.99,
      discount: 12,
      image: "https://via.placeholder.com/300x200?text=Microphone",
      category: ["Accessories"],
      rating: 5,
      reviews: 200,
    },
    {
      id: 7,
      name: "Graphics Card RTX 4080",
      description: "High-performance GPU for 4K gaming and rendering.",
      price: 1199.99,
      discount: 20,
      image: "https://via.placeholder.com/300x200?text=RTX+4080",
      category: ["Components"],
      rating: 5,
      reviews: 90,
    },
    {
      id: 8,
      name: "Gaming Desk",
      description:
        "Spacious carbon-fiber surface with cable management system.",
      price: 249.99,
      discount: 15,
      image: "https://via.placeholder.com/300x200?text=Gaming+Desk",
      category: ["Furniture"],
      rating: 4,
      reviews: 110,
    },
  ];
  return (
    <div className="relative bg-purple-900/5 px-5">
      <div className="container z-10 relative">
        <Title
          title="Products"
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
          {products.map((item) => (
            <SwiperSlide>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
