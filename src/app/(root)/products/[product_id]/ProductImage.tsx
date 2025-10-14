"use client";
import React, { useState } from "react";
import Image from "next/image";
const ProductImage = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState("");
  return (
    <>
      <div className="dark:bg-card bg-gray-100 border dark:border-border border-gray-200/50 rounded-md p-5">
        <div className="w-full relative h-[500px]">
          <Image
            fill
            alt="product"
            src={currentImage}
            className="object-contain"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-5">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => {
              setCurrentImage(image);
            }}
            className="dark:bg-card bg-gray-100 border dark:border-border border-gray-200/50 rounded-md p-2 cursor-pointer"
          >
            <Image
              width={200}
              height={200}
              alt="product"
              src={image}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImage;
