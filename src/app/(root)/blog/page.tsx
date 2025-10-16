import Input from "@/components/ui/Input";
import Link from "next/link";
import React from "react";
import BlogHeader from "./BlogHeader";
import BlogView from "./BlogView";

const page = () => {
  const categories = [
    {
      title: "General",
      list: [
        { title: "Trending", link: "/category/trending" },
        { title: "Editor's Picks", link: "/category/editors-picks" },
        { title: "Reviews", link: "/category/reviews" },
        { title: "News", link: "/category/news" },
        { title: "Guides", link: "/category/guides" },
        { title: "Opinion", link: "/category/opinion" },
        { title: "Tutorials", link: "/category/tutorials" },
        { title: "Interviews", link: "/category/interviews" },
        { title: "Lists & Rankings", link: "/category/lists-rankings" },
        { title: "Tech & Hardware", link: "/category/tech-hardware" },
      ],
    },
    {
      title: "Gaming specific",
      list: [
        { title: "PC Gaming", link: "/category/pc-gaming" },
        { title: "Console Gaming", link: "/category/console-gaming" },
        { title: "Mobile Gaming", link: "/category/mobile-gaming" },
        { title: "Esports", link: "/category/esports" },
        { title: "Indie Games", link: "/category/indie-games" },
        { title: "Upcoming Releases", link: "/category/upcoming-releases" },
        { title: "Game Development", link: "/category/game-development" },
        { title: "Game Mods", link: "/category/game-mods" },
        { title: "Retro Games", link: "/category/retro-games" },
        { title: "Streaming", link: "/category/streaming" },
        { title: "Gaming Culture", link: "/category/gaming-culture" },
        { title: "Events & Tournaments", link: "/category/events-tournaments" },
      ],
    },
  ];
  const blogData = [
    {
      id: "b1f9a3",
      title: "Top 10 Must-Play Games of 2025",
      subtitle: "A roundup of the most anticipated releases this year",
      date: "Oct 5, 2025",
      author: "Alex Hunter",
      category: {
        title: "Upcoming Releases",
        link: "/category/upcoming-releases",
      },
    },
    {
      id: "c4d8e7",
      title: "How to Build the Ultimate Gaming Setup",
      subtitle: "Essential gear and accessories for next-level gaming",
      date: "Sep 22, 2025",
      author: "Liam Cross",
      category: { title: "Tech & Hardware", link: "/category/tech-hardware" },
    },
    {
      id: "f9b3d2",
      title: "Console Wars: PS5 vs Xbox Series X in 2025",
      subtitle: "Which console dominates the market this year?",
      date: "Aug 30, 2025",
      author: "Mia Torres",
      category: { title: "Console Gaming", link: "/category/console-gaming" },
    },
    {
      id: "a7e1b6",
      title: "Best Budget Gaming Laptops for 2025",
      subtitle: "Top picks that deliver power without breaking the bank",
      date: "Jul 19, 2025",
      author: "Ryan Blake",
      category: { title: "PC Gaming", link: "/category/pc-gaming" },
    },
    {
      id: "e3c6f9",
      title: "Exploring the Rise of Cloud Gaming",
      subtitle: "Is streaming the future of gaming?",
      date: "Jun 12, 2025",
      author: "Sophia Chen",
      category: { title: "Streaming", link: "/category/streaming" },
    },
    {
      id: "d2a5c8",
      title: "5 Accessories Every PC Gamer Needs",
      subtitle: "From RGB keyboards to precision mice",
      date: "May 8, 2025",
      author: "Ethan Cole",
      category: { title: "Tech & Hardware", link: "/category/tech-hardware" },
    },
    {
      id: "b6e8a1",
      title: "Gaming Monitors Explained",
      subtitle: "Refresh rates, response times, and what really matters",
      date: "Apr 24, 2025",
      author: "Noah Reed",
      category: { title: "Guides", link: "/category/guides" },
    },
    {
      id: "f4b2e5",
      title: "The Evolution of eSports",
      subtitle: "How competitive gaming became a billion-dollar industry",
      date: "Mar 15, 2025",
      author: "Lara Knight",
      category: { title: "Esports", link: "/category/esports" },
    },
    {
      id: "c1d9a4",
      title: "Top Indie Games You Shouldn’t Miss",
      subtitle: "Hidden gems that deserve your attention",
      date: "Feb 27, 2025",
      author: "Emma Frost",
      category: { title: "Indie Games", link: "/category/indie-games" },
    },
    {
      id: "a9f7d3",
      title: "Gaming Chairs That Actually Improve Posture",
      subtitle: "Comfort meets performance for serious gamers",
      date: "Jan 10, 2025",
      author: "Jake Miller",
      category: { title: "Reviews", link: "/category/reviews" },
    },
  ];

  return (
    <div className="dark:bg-card/30 bg-foreground">
      <div className="min-h-screen container px-5 py-10">
        <div className="flex max-lg:flex-col gap-10 ">
          <div className="flex lg:flex-col gap-8 lg:h-[800px] lg:sticky lg:top-24 overflow-auto max-lg:pb-5">
            {categories.map((arr, i) => (
              <div key={i} className="flex lg:flex-col gap-3">
                <div className="font-bold text-lg max-lg:hidden">
                  {arr.title}
                </div>
                <div className="flex lg:flex-col gap-3">
                  {arr.list.map((list, i) => (
                    <Link
                      href={`/blog${list.link}`}
                      key={i}
                      className="dark:text-gray-400 text-muted text-nowrap"
                    >
                      {list.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 lg:border-l dark:border-border border-gray-200 lg:pl-10">
            <div className="flex max-md:flex-col max-md:gap-5 justify-between">
              <BlogHeader />
            </div>
            <div className="mt-5">
              <BlogView data={blogData} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
