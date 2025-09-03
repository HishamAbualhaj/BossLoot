import { Mail } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="py-12 dark:bg-card bg-gray-100 px-5">
      <div className="max-w-[750px] mx-auto">
        <div className="flex items-center gap-3">
          <Mail size={35} />
          <div className="xl:text-4xl text-2xl">Stay in the Loot Loop</div>
        </div>
        <div className="dark:text-muted-foreground text-black/70 mt-3">
          Subscribe for exclusive deals, updates, and gaming insights—delivered
          straight to your inbox.
        </div>
        <div className="flex mt-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-tl-md rounded-bl-md px-3 py-3 dark:text-white focus:outline-none md:text-sm xl:text-xl pl-4 pr-10 border dark:bg-secondary/50 bg-gray-200 text-black border-gaming-purple/30 focus:border-gaming-purple dark:border"
          />
          <div className="dark:bg-primary/80 bg-primary/90 text-white dark:text-white rounded-tr-md rounded-br-md px-5 flex items-center cursor-pointer hover:bg-primary transition">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
