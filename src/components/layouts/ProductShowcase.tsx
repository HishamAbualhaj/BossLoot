"use client";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import gaming from "@/assets/gaming-hero.jpg";

type Product = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  features: string[];
};
const ProductShowcase = ({ products }: { products: Product[] }) => {
  const [item, setItem] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex xl:flex-row flex-col items-center mt-10 gap-5">
      <div className="dark:bg-card/50 bg-gray-100 max-xl:order-2 dark:border-border/80 border border-gray-200 p-5 rounded-xl">
        <Image width={500} height={500} src={gaming} alt="" />

        <div key={products[item].title} className="mt-5 animate-appear">
          <div className="font-bold text-2xl flex  items-center gap-3">
            {products[item].icon}
            <div className="text-gaming"> {products[item].title}</div>
          </div>
          <div className="dark:text-muted-foreground text-black/70 mt-2">
            {products[item].subtitle}
          </div>
        </div>

        <div className="mt-5 min-h-[120px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {products[item].features.map((item, i) => (
              <div
                key={`${i}-${item}`}
                className="dark:border border-border/80 p-3 dark:text-white dark:bg-primary/20 bg-gray-200/50 text-black rounded-md animate-appear"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="text-xl font-bold text-center dark:text-white text-background">Choose your weapon</div>
        <div className="flex flex-col gap-5 mt-5 max-xl:flex-row overflow-auto w-full max-xl:py-5">
          {products.map((product, i) => (
            <div
              onClick={() => {
                setItem(i);
              }}
              key={i}
              className={`${
                i === item ? "dark:border-primary border-primary/50" : ""
              } cursor-pointer bg-gray-100 dark:hover:bg-card hover:bg-gray-300/50 border transition dark:border-border border-gray-200 rounded-md dark:bg-card/30 sm:p-5 p-3 flex items-center gap-5`}
            >
              <div
                className={`${
                  i === item ? "dark:bg-primary bg-gray-300/70 py-2 px-3 rounded-md" : ""
                } transition`}
              >
                {product.icon}
              </div>
              <div className="flex flex-col gap-2">
                <div className="xl:text-xl text-lg max-xl:text-nowrap">
                  {product.title}
                </div>
                <div className="dark:text-muted-foreground text-black/70 max-xl:hidden">
                  {product.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
