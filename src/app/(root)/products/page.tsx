"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ChevronRight, ListFilterPlus } from "lucide-react";
import React from "react";

const page = () => {
  const filterItem = [
    {
      title: "Categories",
      component: <Categories />,
    },
    {
      title: "Brands",
      component: <Brands />,
    },
    {
      title: "Price",
      component: <Price />,
    },
    {
      title: "Availability",
      component: <Availability />,
    },
  ];
  return (
    <>
      <div className="">
        <div className="border-b dark:border-border border-gray-200 py-4">
          <div className="xl:px-15 px-8">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="dark:bg-muted bg-gray-200 p-2 rounded-lg cursor-pointer hover:opacity-70 transition">
                  <ListFilterPlus />
                </div>
                <div className="text-2xl ">Products</div>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <Input
                  className="flex-1"
                  onChange={() => {}}
                  placeholder="Search"
                  type="text"
                />
                <Button className="!w-fit px-5" title="Search" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="border-r dark:border-border border-gray-200">
            <div className="text-center dark:bg-card bg-gray-200 py-2 text-lg">
              Filter
            </div>

            {filterItem.map((item, i) => (
              <>
                <div className="border-b dark:border-border border-gray-200 ">
                  <div
                    key={i}
                    onClick={() => {}}
                    className=" py-5 cursor-pointer dark:hover:bg-card/50 hover:bg-gray-200/50 pr-16 pl-3"
                  >
                    <div className="text-xl flex items-center gap-3">
                      <ChevronRight />
                      {item.title}
                    </div>
                  </div>
                  <div className="ml-10">{item.component}</div>
                </div>
              </>
            ))}
          </div>

          <div className="grid grid-cols-3"></div>
        </div>
      </div>
    </>
  );
};

const Categories = () => {
  const categories = [
    {
      name: "Gaming Gear",
      count: 10,
    },
    {
      name: "Peripherals",
      count: 15,
    },
    {
      name: "Games",
      count: 11,
    },
    {
      name: "Accessories & Add-ons",
      count: 25,
    },
    {
      name: "Merch & Lifestyle",
      count: 5,
    },
    {
      name: "Specials",
      count: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {categories.map((category, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border dark:border-border border-gray-300 cursor-pointer dark:hover:bg-primary dark:hover:border-none hover:bg-primary hover:border-none rounded-md"></div>

            {category.name}
            <div className="text-gray-400 text-sm">({category.count})</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Brands = () => {
  const brands = [
    {
      name: "Razer",
      count: 7,
    },
    {
      name: "Logitech",
      count: 8,
    },
    {
      name: "Corsair",
      count: 6,
    },
    {
      name: "HyperX",
      count: 2,
    },
    {
      name: "SteelSeries",
      count: 20,
    },
  ];
  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {brands.map((brand, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border dark:border-border border-gray-300 cursor-pointer dark:hover:bg-primary dark:hover:border-none hover:bg-primary hover:border-none rounded-md"></div>

            {brand.name}
            <div className="text-gray-400 text-sm">({brand.count})</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Price = () => {
  return (
    <div className="mt-2 pb-5">
      <div className="flex gap-3">
        <Input
          className="!w-28"
          onChange={() => {}}
          placeholder="Min"
          type="number"
        />
        <Input
          className="!w-28"
          onChange={() => {}}
          placeholder="Max"
          type="number"
        />
      </div>
      <Button className="!w-fit mt-2 px-5" title="Filter" />
    </div>
  );
};

const Availability = () => {
  const items = [
    {
      name: "In stock",
      count: 5,
    },
    {
      name: "Out of stock",
      count: 10,
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {items.map((item, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border dark:border-border border-gray-300 cursor-pointer dark:hover:bg-primary dark:hover:border-none hover:bg-primary hover:border-none rounded-md"></div>

            {item.name}
            <div className="text-gray-400 text-sm">({item.count})</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
