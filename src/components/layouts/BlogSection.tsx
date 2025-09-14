import Image from "next/image";
import React from "react";
import { PenLine } from "lucide-react";
import { frontURL } from "@/config/config";
const BlogSection = () => {
  const badgets = ["Guide", "Streaming", "Trending"];

  const trendingPosts = [
    {
      id: 1,
      title: "Essential Gear for Competitive FPS",
      subtitle:
        "Must-have mice, keyboards, and headsets to gain an edge in shooters.",
      image: `/gaming-fps.png`,
      date: "Sep 10, 2025",
      author: "BossLoot Team",
    },
    {
      id: 2,
      title: "Top Gaming Accessories You Didn’t Know You Needed",
      subtitle:
        "Underrated add-ons that improve comfort and performance while gaming.",
      image: `/gaming-fps.png`,
      date: "Aug 27, 2025",
      author: "BossLoot Team",
    },
    {
      id: 3,
      title: "Building the Ultimate Battlestation",
      subtitle: "How to create a high-performance and aesthetic gaming setup.",
      image: `/gaming-fps.png`,
      date: "Jan 1, 2025",
      author: "BossLoot Team",
    },
    {
      id: 4,
      title: "Next-Gen Gaming on a Budget",
      subtitle:
        "Choosing the right hardware and accessories without overspending.",
      image: `/gaming-fps.png`,
      date: "Sep 25, 2025",
      author: "BossLoot Team",
    },
  ];
  return (
    <div className="container px-5 mx-auto">
      <div className="xl:text-6xl text-4xl">BossLoot Blog</div>
      <div className="text-muted-foreground mt-3 xl:text-lg">
        Stay ahead with gaming gear reviews, setup guides, and esports insights.
      </div>

      <div className="mt-10">
        <div className="flex max-xl:flex-col xl:items-start gap-5">
          <div className="flex-1 w-full border rounded-2xl overflow-hidden dark:border-border border-gray-400/25 relative">
            <div className="flex top-5 z-20 left-5 absolute w-fit gap-2">
              {badgets.map((badget) => (
                <div
                  key={badget}
                  className="px-3 py-1 rounded-2xl bg-purple-600/50 text-white text-[13.5px] font-medium border-white/20"
                >
                  {badget}
                </div>
              ))}
            </div>
            <Image
              alt=""
              className="rounded-2xl w-full"
              width={800}
              height={800}
              src={`/setup_gaming.png`}
            />
            <div className="bg-gradient-to-t from-black/70 to-transparent w-full h-full absolute z-10 bottom-0 left-0"></div>
            <div className="absolute bottom-0 z-20 w-full">
              <div className="p-7">
                <div className="md:text-4xl sm:text-2xl text-xl font-bold text-white">
                  Level Up Your Streaming Setup
                </div>
                <div className="mt-2 dark:text-muted-foreground text-white/70 ">
                  From lighting to microphones, make your stream stand out.
                </div>
                <div className="flex items-end justify-between mt-5">
                  <div className="cursor-pointer text-white bg-primary p-2 w-fit rounded-lg max-md:text-sm">
                    Explore Setup Guide
                  </div>

                  <div className="flex items-center gap-2 text-white/70 dark:text-muted-foreground">
                    <PenLine size={16} />
                    <div className="text-sm">BossLoot Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {trendingPosts.map((post, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-secondary/25 border dark:border-border border-gray-200 p-3 rounded-2xl"
              >
                <div className="flex max-sm:flex-col gap-3 sm:items-start">
                  <Image
                    alt=""
                    className="rounded-2xl"
                    width={180}
                    height={180}
                    src={post.image}
                  />
                  <div className="">
                    <div className="sm:max-w-[300px]">
                      <div className="text-lg">{post.title}</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {post.subtitle}
                      </div>
                    </div>

                    <div className="flex mt-5 items-center text-muted-foreground justify-between">
                      <div className="flex gap-2">
                        <PenLine size={15} />
                        <div className="text-sm">BossLoot Team</div>
                      </div>

                      <div className="text-sm">{post.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
