import { Star } from "lucide-react";
import React from "react";
import ProductImage from "./ProductImage";
import ProductCounter from "./ProductCounter";
import Button from "@/components/ui/Button";
import ProductFeatures from "./ProductFeatures";
import WishList from "@/components/ui/WishList";
import RelatedProducts from "./RelatedProducts";
import ProductReview from "./ProductReview";

const page = async ({
  params,
}: {
  params: Promise<{ product_id: number }>;
}) => {
  const productDetails = {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 149.99,
    category: "Electronics",
    rating: 4,
    reviews: 321,
    description:
      "High-fidelity wireless headphones with active noise cancellation and 30-hour battery life.",
    images: ["/headphone_1.png", "/mouse.png", "/hand.png", "/headphone_1.png"],
    specs: {
      brand: "SoundMax",
      connectivity: "Bluetooth 5.3",
      batteryLife: "30 hours",
      color: "Black",
      warranty: "2 years",
    },
  };
  const { product_id } = await params;
  return (
    <div className="border-b dark:border-border border-gray-200">
      <div className="min-h-screen max-w-[1500px] mx-auto pt-16 px-5">
        <div className="flex max-lg:flex-col gap-5">
          <div className="flex flex-col flex-1">
            <ProductImage images={productDetails.images} />
          </div>
          <div className="border dark:border-border border-gray-200 p-5 rounded-md">
            <div className="text-2xl">{productDetails.title}</div>
            <div className="flex gap-2  mt-3 items-center">
              <div className="flex gap-2">
                {Array.from({ length: productDetails.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={19}
                    fill="oklch(85.2% 0.199 91.936)"
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-gray-400">({productDetails.reviews})</div>
            </div>
            <div className="text-3xl mt-5">${productDetails.price}</div>
            <div className="mt-5 text-gray-400">
              {productDetails.description}
            </div>
            <div className="flex flex-wrap md:gap-5 gap-2 mt-5">
              {Object.values(productDetails.specs).map((spec) => (
                <div className="border border-primary/20 px-3 py-1 dark:bg-card bg-gray-100 rounded-sm">
                  {spec}
                </div>
              ))}
            </div>
            <div className="flex max-md:flex-col gap-5 mt-5 md:items-center">
              <ProductCounter />
              <div className="flex gap-5 flex-1 items-center">
                <Button title="Buy now" className="select-none" />
                <WishList />
              </div>
            </div>
            <div className="mt-5">
              <ProductFeatures />
            </div>
          </div>
        </div>

        <div className="mt-16 py-10">
          <RelatedProducts />
        </div>

        <div className="mt-16 py-10">
          <ProductReview />
        </div>
      </div>
    </div>
  );
};

export default page;
