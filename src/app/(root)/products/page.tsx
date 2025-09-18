"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ListFilterPlus } from "lucide-react";
import React, { useState } from "react";
import FilterItem from "./FilterItem";
import CheckBox from "./CheckBox";
import useSearchPara from "@/hooks/useSearchPara";

const page = () => {
  const [productSearch, setProductSearch] = useState("");
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
      <div className="min-h-screen">
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
                  onChange={(e) => {
                    setProductSearch(e.target.value);
                  }}
                  value={productSearch}
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
                <FilterItem
                  key={i}
                  title={item.title}
                  component={item.component}
                />
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
      value: "gaming",
      count: 10,
    },
    {
      name: "Peripherals",
      value: "peripherals",
      count: 15,
    },
    {
      name: "Games",
      value: "games",
      count: 11,
    },
    {
      name: "Accessories & Add-ons",
      value: "accessories",
      count: 25,
    },
    {
      name: "Merch & Lifestyle",
      value: "merch",
      count: 5,
    },
    {
      name: "Specials",
      value: "specials",
      count: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {categories.map((category, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <CheckBox type="category" value={category.value} />
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
      value: "razer",
      count: 7,
    },
    {
      name: "Logitech",
      value: "logitech",
      count: 8,
    },
    {
      name: "Corsair",
      value: "corsair",
      count: 6,
    },
    {
      name: "HyperX",
      value: "hyperx",
      count: 2,
    },
    {
      name: "SteelSeries",
      value: "steelseries",
      count: 20,
    },
  ];
  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {brands.map((brand, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <CheckBox type="brand" value={brand.value} />
            {brand.name}
            <div className="text-gray-400 text-sm">({brand.count})</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Price = () => {
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const handleSearchPara = useSearchPara();
  return (
    <div className="mt-2 pb-5">
      <div className="flex gap-3">
        <Input
          className="!w-28"
          onChange={(e) => {
            setPrice((prev) => ({ ...prev, min: Number(e.target.value) }));
          }}
          placeholder="Min"
          type="number"
          value={price.min}
        />
        <Input
          className="!w-28"
          onChange={(e) => {
            setPrice((prev) => ({ ...prev, max: Number(e.target.value) }));
          }}
          placeholder="Max"
          type="number"
          value={price.max}
        />
      </div>
      <Button
        onClick={() => {
          handleSearchPara("price", `${price.min}-${price.max}`, true);
        }}
        className="!w-fit mt-2 px-5"
        title="Filter"
      />
    </div>
  );
};

const Availability = () => {
  const items = [
    {
      name: "In stock",
      value: "instock",
      count: 5,
    },
    {
      name: "Out of stock",
      value: "outofstock",
      count: 10,
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {items.map((item, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-3">
            <CheckBox type="available" value={item.value} />
            {item.name}
            <div className="text-gray-400 text-sm">({item.count})</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
