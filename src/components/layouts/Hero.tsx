import { Headset, Search, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mouse from "@/assets/mouse.png";
import hand from "@/assets/hand.png";
const Hero = () => {
  const features = [
    {
      icon: <Headset size="25px" />,
      title: "Premium Gaming Gear",
      subtitle:
        "Professional-grade controllers and accessories designed for competitive gaming.",
    },
    {
      icon: <Users size="25px" />,
      title: "Gaming Community",
      subtitle:
        "Join millions of gamers worldwide in our exclusive gaming community.",
    },
    {
      icon: <Zap size="25px" />,
      title: "Lightning Fast",
      subtitle:
        "Ultra-responsive controls with zero lag for the ultimate gaming experience.",
    },
  ];
  return (
    <>
      <div className="md:w-[220px] md:h-[220px] w-[120px] h-[120px] left-22 md:top-40 top-52  absolute">
        <Image
          alt="mouse image"
          src={mouse}
          fill
          className="object-contain animate-float opacity-75 [animation-delay:2s]"
        />
      </div>

      <div className="md:w-[220px] md:h-[220px] w-[120px] h-[120px] right-22 md:top-40 top-96 absolute">
        <Image
          alt="hand image"
          height={220}
          width={220}
          src={hand}
          className="absolute animate-float"
        />
      </div>

    
      <div className="bg-[image:var(--gradient-gaming-subtle)] py-15 px-5">
        <div className="text-center flex flex-col py-10  relative z-10">
          <div className="text-gamng 2xl:text-8xl xl:text-7xl text-6xl font-bold">
            Gaming
          </div>
          <div className="text-white 2xl:text-8xl xl:text-7xl text-6xl font-bold">
            Exclusive
          </div>
        </div>

        <div className="text-gray-500 mx-auto max-w-[700px] text-center xl:text-xl text-md relative z-10">
          Discover the ultimate gaming experience with our exclusive collection
          of premium gaming gear, controllers, and accessories.
        </div>
        <div className="relative max-sm:flex hidden ">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="h-10 w-full mt-5 rounded-md px-3 py-2 text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-4 pr-10 bg-secondary/50 border-gaming-purple/30 focus:border-gaming-purple border"
          />
          <Search
            size="20px"
            className="text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>

        <div className="flex justify-center md:flex-row flex-col text-center gap-5 mt-10">
          <Link href="">
            <div className="bg-gaming-purple px-7 py-2 rounded-md text-xl">
              Get Started
            </div>
          </Link>
          <Link href="">
            <div className="bg-background text-white px-5 py-2 rounded-md text-xl">
              Explore Products
            </div>
          </Link>
        </div>

        <div className="mt-12 flex gap-7 max-xl:flex-col max-xl:items-center justify-center max-w-[1300px] mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 text-center border border-gaming-purple/20 rounded-md bg-purple-800/10 p-7"
            >
              <div className="rounded-full bg-purple-400/30 text-purple-400 w-fit p-3 mx-auto">
                {item.icon}
              </div>
              <div className="text-xl font-bold">{item.title}</div>
              <div className="text-gray-400 max-w-[400px]">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
