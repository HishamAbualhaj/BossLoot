"use client"
import React from "react";

import { blog } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

interface BlogViewProps {
  data: blog[];
}
const BlogView = ({ data }: BlogViewProps) => {
  
  return (
    <div className="">
      {data.map(({ id, title, subtitle, date, author, category }, i) => (
        <div
          key={i}
          className="flex items-start justify-between gap-2 py-8 border-b dark:border-border border-gray-300"
        >
          <div className="">
            <div className="flex gap-2">
              <Link href={`blog${category.link}`} className="text-purple-400">
                {category.title}
              </Link>
              <div className=" text-gray-400">{date}</div>
            </div>
            <Link href={`blog/${id}`}>
              <div className="text-2xl font-medium mt-2">{title}</div>
              <div className="mt-2 text-gray-400">{subtitle}</div>
            </Link>

            <div className="mt-5 flex gap-2 items-center">
              <div className="border dark:border-border border-gray-300 rounded-full p-1">
                <User />
              </div>
              <div className="text-sm">{author}</div>
            </div>
          </div>
          <div className="flex justify-end flex-1">
            <Image
              alt="blog image"
              width={300}
              height={300}
              src={`/fallback_blog.png`}
            />
          </div>
        </div>
      ))}

      <div className="text-center lg:text-2xl text-xl mt-5 animate-pulse">
        Loading ...
      </div>
    </div>
  );
};

export default BlogView;
