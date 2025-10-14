"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ListFilterPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import CheckBox from "./CheckBox";
import useSearchPara from "@/hooks/useSearchPara";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/components/layouts/Products";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "../../../components/ui/Pagination";
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

  const curentPage = useSearchParams();
  const handleSearchPara = useSearchPara();

  const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5]);

  const [productSearch, setProductSearch] = useState("");

  const [currentPagePara, setCurrentPage] = useState<number>(
    Number(curentPage.get("page") || 1)
  );

  useEffect(() => {
    let tempArr = [];

    let numberOfElemets = 5;

    let value = currentPagePara / numberOfElemets;

    let currentCycle = Math.ceil(value);

    let maxNum = currentCycle * numberOfElemets;
    let minNum = currentCycle * numberOfElemets - numberOfElemets;

    let startValue = minNum + 1;

    for (let i = startValue; i <= maxNum; i++) {
      tempArr.push(i);
    }
    handleSearchPara("page", String(currentPagePara), true);
    setArr(tempArr);
  }, [currentPagePara]);

  const [isTranslate, setIsTranslate] = useState(false);
  return (
    <>
      <div className="min-h-screen border-b dark:border-border border-gray-200 pb-16">
        <div className="border-b dark:border-border border-gray-200 py-4">
          <div className="xl:px-15 px-8">
            <div className="flex lg:items-center max-lg:flex-col gap-5">
              <div className="flex items-center gap-2">
                <div
                  onClick={() => {
                    setIsTranslate(!isTranslate);
                  }}
                  className="dark:bg-muted bg-gray-200 p-2 rounded-lg cursor-pointer hover:opacity-70 transition lg:hidden"
                >
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
                <Button
                  onClick={() => {
                    handleSearchPara("search", productSearch, true);
                  }}
                  className="!w-fit lg:px-5 px-2"
                  title="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex mt-5 gap-5 sm:px-5 px-3">
          <div
            className={`${
              isTranslate ? "max-lg:!translate-x-0" : ""
            } border h-fit dark:border-border border-gray-200 dark:bg-background bg-white max-lg:absolute z-10 max-lg:-translate-x-[calc(100%+20px)] transition`}
          >
            <div className="text-center dark:bg-card bg-gray-200 py-2 text-lg">
              Filter
            </div>

            {filterItem.map((item, i) => (
              <FilterItem
                key={i}
                title={item.title}
                component={item.component}
              />
            ))}
          </div>

          <div className="">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 flex-1 gap-5">
              {products.map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
            </div>

            <Pagination
              maxPage={10}
              currentPagePara={currentPagePara}
              setCurrentPage={setCurrentPage}
              arrOfNums={arr}
            />
          </div>
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

  const paras = useSearchParams();
  const arrOfCategories =
    new URLSearchParams(paras).get("category")?.split(",") ?? [];

  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {categories.map((category, i) => {
        const valueToBeChecked = arrOfCategories
          .filter((cate) => cate === category.value)
          .join("");
        return (
          <div key={i} className="">
            <div className="flex items-center gap-3">
              <CheckBox
                valueChecked={valueToBeChecked}
                type="category"
                value={category.value}
              />
              <div className="flex-1 text-nowrap"> {category.name}</div>
              <div className="text-gray-400 text-sm">({category.count})</div>
            </div>
          </div>
        );
      })}
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

  const paras = useSearchParams();
  const arrOfBrands = new URLSearchParams(paras).get("brand")?.split(",") ?? [];
  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {brands.map((brand, i) => {
        const valueToBeChecked = arrOfBrands
          .filter((cate) => cate === brand.value)
          .join("");
        return (
          <div key={i} className="">
            <div className="flex items-center gap-3">
              <CheckBox
                type="brand"
                value={brand.value}
                valueChecked={valueToBeChecked}
              />
              {brand.name}
              <div className="text-gray-400 text-sm">({brand.count})</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Price = () => {
  const paras = useSearchParams();
  const arrOfPrice = new URLSearchParams(paras).get("price")?.split("-") ?? [
    0, 0,
  ];
  const [price, setPrice] = useState({
    min: arrOfPrice[0],
    max: arrOfPrice[1],
  });
  const [alert, setAlert] = useState<string>("");
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
          if (price.min > price.max) {
            setAlert("Min price should be less than max");
            return;
          } else {
            setAlert("");
          }
          handleSearchPara("price", `${price.min}-${price.max}`, true);
        }}
        className="!w-fit mt-2 px-5"
        title="Filter"
      />
      <div className="mt-2 text-red-300">{alert}</div>
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
  const paras = useSearchParams();
  const arr = new URLSearchParams(paras).get("available")?.split(",") ?? [];
  return (
    <div className="flex flex-col gap-3 mt-2 pb-5 pr-16">
      {items.map((item, i) => {
        const valueToBeChecked = arr
          .filter((cate) => cate === item.value)
          .join("");
        return (
          <div key={i} className="">
            <div className="flex items-center gap-3">
              <CheckBox
                type="available"
                value={item.value}
                valueChecked={valueToBeChecked}
              />
              {item.name}
              <div className="text-gray-400 text-sm">({item.count})</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default page;
