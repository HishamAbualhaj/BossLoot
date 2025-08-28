import { Mail } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="py-12 bg-card px-5">
      <div className="max-w-[750px] mx-auto">
        <div className="flex items-center gap-3">
          <Mail size={35} />
          <div className="xl:text-4xl text-2xl">Stay in the Loot Loop</div>
        </div>
        <div className="text-muted-foreground mt-3">
          Subscribe for exclusive deals, updates, and gaming insights—delivered
          straight to your inbox.
        </div>
        <div className="flex mt-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full  rounded-tl-md rounded-bl-md px-3 py-3 text-white focus:outline-none md:text-sm xl:text-xl pl-4 pr-10 border bg-secondary/50 border-card focus:border-primary/80"
          />
          <div className="bg-primary/80 rounded-tr-md rounded-br-md px-5 flex items-center cursor-pointer hover:bg-primary transition">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
