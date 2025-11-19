import { productCart } from "@/types";
import Image from "next/image";
import React from "react";
import Counter from "./Counter";
import { Lock, Trash2Icon } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PromoCode from "./PromoCode";

const page = () => {
  let cartCount = 2;

  const productsCart: productCart[] = [
    {
      id: 1,
      title: "Gaming Headset",
      image: "",
      price: 79.99,
      count: 1,
      category: ["Accessories", "PC"],
    },
    {
      id: 1,
      title: "Mechanical Keyboard",
      image: "",
      price: 129.99,
      count: 1,
      category: ["Accessories"],
    },
    {
      id: 1,
      title: "Gaming Mouse",
      image: "",
      price: 59.99,
      count: 1,
      category: ["Accessories"],
    },
  ];
  return (
    <div className="border border_main">
      <div className="max-w-[1500px] px-5 mx-auto py-10">
        <div className="text-3xl font-medium">Shopping Cart</div>
        <div className="text-gray-400 mt-2">{cartCount} items in your cart</div>
        <div className="flex max-lg:flex-col gap-8 mt-5">
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              {productsCart.map((product, i) => (
                <div
                  key={i}
                  className="border border_main rounded-md p-5 dark:bg-card/80 bg-gray-100"
                >
                  <div className="flex">
                    <Image
                      src="/mouse.png"
                      width={120}
                      height={120}
                      alt="Product Image"
                      className="object-contain"
                    />
                    <div className="flex-1">
                      <div className="flex max-sm:flex-col max-sm:gap-2 justify-between">
                        <div className="font-medium md:text-xl text-lg">
                          {product.title}
                        </div>
                        <div className="text-gaming font-medium text-xl">
                          $ {product.price}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.category.map((cat, i) => (
                          <div
                            key={i}
                            className="bg-gray-400/20 w-fit text-sm px-2 py-1 rounded-sm mt-2"
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center sm:justify-end gap-3">
                        <Counter />
                        <div className="hover:bg-red-500/20 hover:text-red-500 cursor-pointer p-2 rounded-sm">
                          <Trash2Icon size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <PromoCode />
          </div>

          <div className="sticky top-24 lg:min-w-[400px] h-fit border border_main rounded-md p-5 dark:bg-card bg-gray-100">
            <div className="font-medium text-xl">Order Summary</div>
            <div className="border-b border_main pb-3">
              <div className="flex justify-between items-center gap-16 mt-3">
                <div className="text-gray-400 text-sm">
                  Subtotal ({cartCount} items)
                </div>
                <div className="">$300</div>
              </div>
              <div className="flex justify-between items-center gap-16 mt-3">
                <div className="text-gray-400 text-sm">Estimated Tax</div>
                <div className="">$18</div>
              </div>
            </div>
            <div className="flex py-3 justify-between">
              <div className="font-bold">Total</div>
              <div className="">${318}</div>
            </div>

            <div className="border-b pb-3 border_main">
              <Button className="mt-3" title="Proccess to checkout" />
            </div>

            <div className="flex items-center gap-2 mt-3 text-gray-400">
              <Lock size={17} />
              <div className="text-sm">
                Secure checkout powered by encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
