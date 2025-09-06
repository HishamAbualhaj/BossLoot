"use client";
import React, { useState } from "react";
import { Gamepad, Usb, Play, Shirt, Star, Puzzle } from "lucide-react";
const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoriesItems = [
    [
      {
        name: "Consoles (PlayStation, Xbox, Nintendo, etc.)",
        link: "",
        image: "",
      },
      { name: "PC Gaming (components, pre-builts)", link: "", image: "" },
      { name: "Controllers & Joysticks", link: "", image: "" },
      { name: "VR Headsets & Accessories", link: "", image: "" },
      { name: "Gaming Chairs & Desks", link: "", image: "" },
    ],
    [
      { name: "Keyboards (mechanical, membrane)", link: "", image: "" },
      { name: "Mice (wired, wireless, pro gaming)", link: "", image: "" },
      { name: "Headsets & Microphones", link: "", image: "" },
      { name: "Monitors (HD, 4K, curved)", link: "", image: "" },
      { name: "Mousepads & Wrist Rests", link: "", image: "" },
    ],
    [
      { name: "PC Games", link: "", image: "" },
      { name: "Console Games (PS, Xbox, Switch)", link: "", image: "" },
      { name: "Digital Codes & Gift Cards", link: "", image: "" },
      { name: "Collectors’ Editions", link: "", image: "" },
    ],
    [
      { name: "Capture Cards", link: "", image: "" },
      {
        name: "External Storage & SSDs",
        link: "",
        image: "",
      },
      { name: "Charging Docks", link: "", image: "" },
      { name: "Skins & Controller Grips", link: "", image: "" },
    ],
    [
      { name: "Gaming Apparel (hoodies, T-shirts, hats)", link: "", image: "" },
      { name: "Posters & Collectibles", link: "", image: "" },
      { name: "Action Figures & Funko Pops", link: "", image: "" },
      { name: "Mugs, Backpacks, Decor", link: "", image: "" },
    ],
    [
      { name: "Limited Editions", link: "", image: "" },
      { name: "Bundles & Starter Packs", link: "", image: "" },
      { name: "Discount Zone", link: "", image: "" },
    ],
  ];
  const categories = [
    {
      name: "Gaming Gear",
      icon: <Gamepad />,
    },
    {
      name: "Peripherals",
      icon: <Usb />,
    },
    {
      name: "Games",
      icon: <Play />,
    },
    {
      name: "Accessories & Add-ons",
      icon: <Puzzle />,
    },
    {
      name: "Merch & Lifestyle",
      icon: <Shirt />,
    },
    {
      name: "Specials",
      icon: <Star />,
    },
  ];
  return (
    <div className="flex gap-5 mt-10 lg:flex-row flex-col">
      <div className="dark:bg-card/50 bg-gray-200/50 rounded-lg lg:p-5 lg:pr-15 max-lg:px-5 dark:border border-border/50">
        <div className="flex lg:flex-col overflow-auto max-lg:py-5 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveCategory(i);
              }}
              className={`${
                activeCategory === i ? " bg-primary dark:text-white text-white" : ""
              } dark:hover:bg-muted hover:bg-white/30 transition rounded-xl  cursor-pointer px-5 py-[11px] text-nowrap dark:text-muted-foreground text-black/90 flex items-center xl:gap-5 gap-2`}
            >
              {cat.icon}
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 flex-1">
        {categoriesItems[activeCategory].map((txt, i) => (
          <>
            <div
              key={`${activeCategory}-${i}`}
              className={`dark:border relative z-10 bg-gray-200/50 dark:bg-card border-border/50 animate-appear bg-center bg-cover max-lg:py-10 rounded-md flex items-center justify-center dark:text-muted-foreground text-black/90`}
            >
              {txt.name}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
