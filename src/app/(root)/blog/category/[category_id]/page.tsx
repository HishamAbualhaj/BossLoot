import React from "react";
import BlogSideBar from "../../BlogSideBar";
import BlogHeader from "../../BlogHeader";
import BlogView from "../../BlogView";

const page = () => {
const trendingBlogs = [
  {
    id: "t1a9f2",
    title: "The Future of VR Gaming in 2025",
    subtitle: "How virtual reality is reshaping the gaming experience",
    date: "Oct 14, 2025",
    author: "Nina Harper",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t2b8d5",
    title: "Why Gamers Are Switching to Ultrawide Monitors",
    subtitle: "Immersive screens are taking over setups everywhere",
    date: "Oct 2, 2025",
    author: "Leo Carter",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t3c4e8",
    title: "AI in Gaming: Smarter NPCs and Realistic Worlds",
    subtitle: "Exploring how artificial intelligence is changing gameplay",
    date: "Sep 25, 2025",
    author: "Ivy Brooks",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t4d6b7",
    title: "Mobile Gaming is Overtaking Consoles",
    subtitle: "How smartphones became the dominant gaming platform",
    date: "Sep 12, 2025",
    author: "Evan Miles",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t5e7c3",
    title: "Streaming Platforms Competing for Gamers’ Attention",
    subtitle: "Twitch, Kick, and YouTube battle for dominance",
    date: "Aug 30, 2025",
    author: "Zara Quinn",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t6f9a2",
    title: "The Rise of AI-Generated Game Worlds",
    subtitle: "Procedural generation meets artificial intelligence",
    date: "Aug 11, 2025",
    author: "Marcus Hale",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t7g3d9",
    title: "Crossplay in 2025: Breaking Platform Barriers",
    subtitle: "Gamers unite across devices like never before",
    date: "Jul 25, 2025",
    author: "Clara Steele",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t8h1e4",
    title: "Sustainability in Gaming Hardware",
    subtitle: "Eco-friendly tech is becoming the new industry standard",
    date: "Jul 7, 2025",
    author: "Owen Price",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t9i2f6",
    title: "Subscription Gaming Services: Are They Worth It?",
    subtitle: "Xbox Game Pass and PlayStation Plus compared",
    date: "Jun 19, 2025",
    author: "Ella Ford",
    category: { title: "Trending", link: "/category/trending" },
  },
  {
    id: "t10j5a8",
    title: "The Return of Retro Gaming",
    subtitle: "Why classic consoles and pixel art are making a comeback",
    date: "Jun 3, 2025",
    author: "Ryan Silva",
    category: { title: "Trending", link: "/category/trending" },
  },
];

  return (
    <div className="dark:bg-card/30 bg-foreground">
      <div className="min-h-screen container px-5 py-10">
        <div className="flex max-lg:flex-col gap-10 ">
          <BlogSideBar />

          <div className="flex-1 lg:border-l dark:border-border border-gray-200 lg:pl-10">
            <div className="flex max-md:flex-col max-md:gap-5 justify-between">
              <BlogHeader />
            </div>
            <div className="mt-5">
              <BlogView data={trendingBlogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
