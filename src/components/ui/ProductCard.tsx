import Image from "next/image";
import React from "react";


import { Eye, Heart, Star } from "lucide-react";
interface props {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string[];
  rating: number;
  reviews: number;
}
const ProductCard = ({
  id,
  name,
  description,
  price,
  discount,
  image,
  category,
  rating,
  reviews,
}: props) => {
  return (
    <div className="border-2 border-gray-800 bg-background rounded-lg p-5 relative">
      <div className="flex justify-center">
        <Image height={300} width={300} alt="" src={image} />
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="text-2xl font-extrabold text-gaming">{name}</div>
        <div className="flex items-center gap-1 text-gray-400">
          <div className="text-gray-400">{reviews}</div>
          <Eye size={17} />
        </div>
      </div>
      <div className="mt-3">{description}</div>
      <div className="flex mt-3 gap-3">
        {category.map((cat, i) => (
          <div
            key={i}
            className="px-2 py-1 bg-purple-600 font-bold  rounded-md text-sm"
          >
            {cat}
          </div>
        ))}
      </div>
      <div className="flex gap-2  mt-3 items-center">
        <div className="flex gap-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              size={19}
              fill="oklch(85.2% 0.199 91.936)"
              className="text-yellow-400"
            />
          ))}
        </div>
        <div className="text-gray-400">({rating})</div>
      </div>
      <div className="mt-4 flex gap-5 items-center">
        <div className=" line-through text-lg">{price}</div>
        <div className="text-purple-200 text-lg">
          $ {Math.round(price - (discount / 100) * price)}
        </div>
      </div>

      <div className="flex gap-5 items-center mt-4">
        <div className="text-xl hover:bg-[image:var(--gradient-gaming)] cursor-pointer transition flex-1 text-center bg-purple-700 rounded-md py-2">
          Add to cart
        </div>

        <div className="">
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
