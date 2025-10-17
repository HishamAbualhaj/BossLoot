import Link from "next/link";
import React from "react";

const BlogSideBar = () => {
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
  return (
    <div className="flex lg:flex-col gap-8 lg:h-[800px] lg:sticky lg:top-24 overflow-auto max-lg:pb-5">
      {categories.map((arr, i) => (
        <div key={i} className="flex lg:flex-col gap-3">
          <div className="font-bold text-lg max-lg:hidden">{arr.title}</div>
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
  );
};

export default BlogSideBar;
