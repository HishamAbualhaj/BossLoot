import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex R.",
      title: "Pro Gamer",
      company: "Discord",
      text: "I’ve been shopping around for gaming gear for years, and BossLoot easily stands out from the rest. The product descriptions are accurate, the quality is top-notch, and I love that the checkout process is smooth and simple. Delivery was faster than I expected, and everything arrived in perfect condition. Definitely my go-to store now.",
    },
    {
      id: 2,
      name: "Sophia L.",
      title: "Content Creator",
      company: "Instagram",
      text: "What impressed me most about BossLoot is the attention to detail. The site is easy to navigate, the categories are well organized, and I found exactly what I needed in just a few clicks. The headset I ordered feels premium, and the sound quality is incredible. I’ve already recommended BossLoot to a few friends.",
    },
    {
      id: 3,
      name: "Michael T.",
      title: "Casual Gamer",
      company: "BossLoot",
      text: "I ordered a gaming desk and chair combo, and the whole experience was flawless. From the order confirmation to the real-time shipping updates, everything felt professional and reliable. Setting up the products was straightforward, and the comfort level is amazing for long gaming sessions. BossLoot exceeded my expectations.",
    },
    {
      id: 4,
      name: "Emily K.",
      title: "Streamer",
      company: "Twitch",
      text: "BossLoot isn’t just another gaming store — it feels like a community. The reviews and ratings from other customers helped me make the right choices, and I appreciate how transparent the product details are. The keyboard I purchased is everything I hoped for: responsive, durable, and stylish. I’ll definitely shop here again.",
    },
    {
      id: 5,
      name: "Daniel S.",
      title: "Tech Reviewer",
      company: "YouTube",
      text: "I was a bit skeptical at first since this was my first order, but BossLoot won me over completely. The graphics card I bought came well-packaged, with clear installation instructions, and has been running like a dream. Customer support even followed up to make sure everything was working properly. That level of care is rare these days.",
    },
    {
      id: 6,
      name: "Liam J.",
      title: "Esports Player",
      company: "Discord",
      text: "BossLoot has completely changed the way I approach my gaming setup. The keyboard and mouse combo I got is extremely responsive, and the build quality feels professional. I’ve been using it in practice sessions and tournaments, and it performs flawlessly every time.",
    },
    {
      id: 7,
      name: "Mia P.",
      title: "Stream Enthusiast",
      company: "Instagram",
      text: "I was looking for a high-quality headset that wouldn’t break the bank, and BossLoot delivered beyond my expectations. The sound clarity is amazing, and the microphone captures my voice perfectly for streaming. Customer service was also very helpful when I had questions about my order.",
    },
    {
      id: 8,
      name: "Noah K.",
      title: "Game Developer",
      company: "Twitch",
      text: "As someone who spends hours both gaming and developing, comfort and quality are a must. BossLoot’s chair and desk setup makes long sessions completely manageable. Everything feels sturdy, stylish, and ergonomically designed. I can’t imagine going back to my old setup.",
    },
  ];

  return (
    <div className="bg-gray-200 dark:bg-background py-20 xl:px-15 px-5 ">
      <div className="text-center text-5xl">
        Trusted by pro gamers and streamers
      </div>
      <div className="max-w-[700px] dark:text-muted-foreground text-black/50 mx-auto mt-5 text-[17px] text-center">
        Built with precision engineering and gamer feedback, our products
        deliver more than just style. They provide the edge you need to stay
        ahead in every match.
      </div>
      <div className="mt-10 border dark:border-gray-800 border-gray-400/50 rounded-lg xl:p-8 p-5 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 relative">
        {reviews.map((item, i) => (
          <div
            key={item.id}
            className={`dark:border border-gray-500/50 relative z-10  ${
              i === 1 ? "xl:col-span-2" : ""
            } ${i === 2 ? "xl:col-span-2" : ""} ${
              i === 5 ? "xl:col-span-2" : ""
            } ${i === 6 ? "xl:col-span-2" : ""} xl:p-10 p-5 rounded-md color-card-${
              item.id
            }`}
          >
            <div className="dark:text-muted-foreground text-black/50 xl:text-2xl text-xl font-bold">
              {item.company}
            </div>
            <div className="max-w-[500px] xl:text-lg text-[17px] mt-3">{item.text}</div>
            <div className="flex items-center mt-5 gap-3">
              <div className="p-2 border border-gray-500 rounded-full">
                <User fill="white" />
              </div>

              <div className="">
                <div className="text-xl">{item.name}</div>
                <div className="dark:text-muted-foreground mt-1 text-black/70">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
