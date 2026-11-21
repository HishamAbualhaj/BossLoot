"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const RelatedProducts = () => {
  const translate = useStoreCopy();

  const products = [
    {
      id: 1,
      name: "Gaming Headset",
      description: "High-quality surround sound with noise-canceling mic.",
      price: 79.99,
      discount: 20, // percentage
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
      category: ["Monitors"],
      rating: 5,
      reviews: 85,
    },
  ];
  return (
    <>
      <div className="text-4xl">{translate("Related products")}</div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 flex-1 gap-5 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
