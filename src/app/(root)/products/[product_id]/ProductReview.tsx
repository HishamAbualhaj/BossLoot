"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { User } from "lucide-react";
import React, { useState } from "react";

const ProductReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Omar Khaled",
      rating: 5,
      comment:
        "Absolutely love this keyboard! The RGB lighting and mechanical feel are perfect for gaming.",
      date: "2025-09-02",
    },
    {
      id: 2,
      name: "Lina Ahmed",
      rating: 4,
      comment:
        "Great quality headset. The sound is crystal clear, but the mic could be slightly better.",
      date: "2025-08-27",
    },
    {
      id: 3,
      name: "Youssef Salem",
      rating: 5,
      comment:
        "This mouse is insane! Super lightweight and very accurate for FPS games.",
      date: "2025-10-01",
    },
    {
      id: 4,
      name: "Mariam Zidan",
      rating: 3,
      comment: "The controller feels good, but the battery drains too quickly.",
      date: "2025-07-19",
    },
    {
      id: 5,
      name: "Hadi Mansour",
      rating: 5,
      comment:
        "Best gaming chair I’ve ever owned. Comfortable for long sessions!",
      date: "2025-06-12",
    },
    {
      id: 6,
      name: "Rana Qassem",
      rating: 4,
      comment:
        "Nice monitor, great colors and refresh rate, but stand is not adjustable.",
      date: "2025-09-15",
    },
    {
      id: 7,
      name: "Tariq Hamdan",
      rating: 2,
      comment:
        "Received it with a small scratch. Works fine but expected better packaging.",
      date: "2025-08-10",
    },
    {
      id: 8,
      name: "Salma Nasser",
      rating: 5,
      comment:
        "Amazing graphics card upgrade — runs all my games smoothly at ultra settings.",
      date: "2025-09-28",
    },
    {
      id: 9,
      name: "Mohammad Ali",
      rating: 4,
      comment:
        "Solid build quality and performance, though it runs a bit warm under load.",
      date: "2025-10-05",
    },
    {
      id: 10,
      name: "Nour Abed",
      rating: 5,
      comment:
        "Fantastic SSD! Boot times are lightning fast — worth every penny.",
      date: "2025-07-30",
    },
  ];

  const [review, setReview] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <div className="text-5xl">Reviews</div>
      <div className="mt-5">
        <div className="flex items-center gap-5">
          <div className="border dark:border-border border-gray-200 p-4 dark:bg-card rounded-full">
            <User />
          </div>
          <Input
            className="flex-1"
            onChange={(e) => {
              setReview(e.target.value);
            }}
            placeholder="Enter your review"
            type="text"
            value={review}
          />
          <Button className="!w-fit px-5" title="Send" />
        </div>
        <div className="mt-10 flex flex-col gap-5 max-h-[700px] overflow-auto">
          {reviews.map((review, i) => (
            <div key={i} className="px-5">
              <div className="flex items-start gap-5 border-b dark:border-border border-gray-200 pb-5">
                <div className="border dark:border-border border-gray-200 p-2 dark:bg-card rounded-full">
                  <User />
                </div>
                <div className="">
                  <div className="">{review.name}</div>
                  <div className="text-gray-500 mt-2 max-w-[1200px]">
                    {review.comment}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-5">
              <div className="border dark:border-border border-gray-200 p-2 dark:bg-card rounded-full animate-pulse">
                <User />
              </div>
              <div className="">
                <div className="w-32 h-5 dark:bg-gray-700 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="dark:bg-gray-700 bg-gray-300 w-72 h-5 mt-2  rounded-md animate-pulse"></div>
              </div>
            </div>
          )}

          {!isLoading && (
            <div
              onClick={() => {
                setIsLoading(true);
              }}
              className="text-center cursor-pointer mt-5"
            >
              Show more
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductReview;
