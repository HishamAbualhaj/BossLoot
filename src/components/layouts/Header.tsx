import Link from "next/link";
import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="bg-secondary/70 py-3 text-center capitalize flex max-xl:flex-col justify-center items-center gap-5">
        <div className="">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div className="px-4 py-1 bg-purple-500 text-purple-200 rounded-md cursor-pointer">
          Shop Now
        </div>
      </div>
      <header className="border-b py-3 xl:px-15 px-8 border-gaming-purple/20 bg-background backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-extrabold text-gaming">BossLoot</div>

          <div className="flex gap-10 max-lg:hidden">
            {["Home", "Products", "Contact", "About us"].map((item, i) => (
              <Link href="/" key={i} className="text-gray-400">
                <div>{item}</div>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative sm:flex hidden">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="h-10 rounded-md px-3 py-2 text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-4 pr-10 w-64 bg-secondary/50 border-gaming-purple/30 focus:border-gaming-purple border"
              />
              <Search
                size="20px"
                className="text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 "
              />
            </div>
            <div className="flex">
              <div className="p-3 rounded-md cursor-pointer hover:bg-gaming-purple/20 transition">
                <User size="20px" className="text-gray-400" />
              </div>
              <div className="p-3 rounded-md cursor-pointer hover:bg-gaming-purple/20 transition">
                <ShoppingCart
                  size="19px"
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
