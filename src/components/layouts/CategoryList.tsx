"use client";
import React, { useState } from "react";

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoriesItems = [
    [
      { name: "Consoles (PlayStation, Xbox, Nintendo, etc.)", link: "" },
      { name: "PC Gaming (components, pre-builts)", link: "" },
      { name: "Controllers & Joysticks", link: "" },
      { name: "VR Headsets & Accessories", link: "" },
      { name: "Gaming Chairs & Desks", link: "" },
    ],
    [
      { name: "Keyboards (mechanical, membrane)", link: "" },
      { name: "Mice (wired, wireless, pro gaming)", link: "" },
      { name: "Headsets & Microphones", link: "" },
      { name: "Monitors (HD, 4K, curved)", link: "" },
      { name: "Mousepads & Wrist Rests", link: "" },
    ],
    [
      { name: "PC Games", link: "" },
      { name: "Console Games (PS, Xbox, Switch)", link: "" },
      { name: "Digital Codes & Gift Cards", link: "" },
      { name: "Collectors’ Editions", link: "" },
    ],
    [
      { name: "Capture Cards", link: "" },
      { name: "External Storage & SSDs", link: "" },
      { name: "Charging Docks", link: "" },
      { name: "Skins & Controller Grips", link: "" },
    ],
    [
      { name: "Gaming Apparel (hoodies, T-shirts, hats)", link: "" },
      { name: "Posters & Collectibles", link: "" },
      { name: "Action Figures & Funko Pops", link: "" },
      { name: "Mugs, Backpacks, Decor", link: "" },
    ],
    [
      { name: "Limited Editions", link: "" },
      { name: "Bundles & Starter Packs", link: "" },
      { name: "Discount Zone", link: "" },
    ],
  ];
  const categories = [
    {
      name: "Gaming Gear",
      icon: "",
    },
    {
      name: "Peripherals",
      icon: "",
    },
    {
      name: "Games",
      icon: "",
    },
    {
      name: "Accessories & Add-ons",
      icon: "",
    },
    {
      name: "Merch & Lifestyle",
      icon: "",
    },
    {
      name: "Specials",
      icon: "",
    },
  ];
  return (
    <div className="flex gap-10 mt-10 lg:flex-row flex-col">
      <div className="bg-[image:var(--gradient-card)] rounded-lg lg:p-5 max-lg:px-5">
        <div className="flex lg:flex-col overflow-auto max-lg:py-5 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveCategory(i);
              }}
              className={`${
                activeCategory === i ? " bg-purple-500 rounded-lg" : ""
              } font-bold cursor-pointer  px-5 py-3 text-nowrap`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 flex-1">
        {categoriesItems[activeCategory].map((txt, i) => (
          <div
            key={`${activeCategory}-${i}`}
            className="animate-appear bg-[image:var(--gradient-card)] max-lg:py-10 rounded-md flex items-center justify-center"
          >
            {txt.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
