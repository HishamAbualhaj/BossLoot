import { getTranslations } from "next-intl/server";

import { getStoreCopy } from "@/i18n/store-copy-server";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ blog_id: string }> }) => {
  const translate = await getStoreCopy();

  const { blog_id } = await params;
  const blogDetails = {
    id: "c4d8e7",
    title: "How to Build the Ultimate Gaming Setup",
    subtitle: "Essential gear and accessories for next-level gaming",
    author: "Jake Henderson",
    date: "Sep 22, 2025",
    category: { title: "Tech & Hardware", link: "/category/tech-hardware" },
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1616448626739-6e5e7e217b09",
    content: (await getTranslations("blog")).raw("article") as string,
  };

  return (
    <div className="min-h-screen flex justify-center max-w-[1150px] mx-auto px-5 py-10">
      <div className="flex-1">
        <div className="flex max-sm:flex-col max-sm:gap-2 justify-between">
          <div className="flex gap-2">
            <Link
              href={`blog${blogDetails.category.link}`}
              className="text-purple-400"
            >
              {translate(blogDetails.category.title)}
            </Link>
            <div className=" text-gray-400">{translate(blogDetails.date)}</div>
          </div>
          <div className="text-gray-500">{translate(blogDetails.readingTime)}</div>
        </div>
        <div className="text-4xl mt-2">{translate(blogDetails.title)}</div>
        <div className="md:text-2xl text-lg mt-2 text-gray-400">
          {translate(blogDetails.subtitle)}
        </div>
        <div className="mt-5"></div>
        <div className="flex max-lg:flex-col lg:gap-10 gap-0">
          <article className="flex-1">
            <div
              className="mt-5 blog-content"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            ></div>
          </article>

          <div className="border  max-lg:-order-1  dark:border-border border-gray-300 h-fit rounded-md p-5 lg:sticky top-24">
            <div className="text-purple-300 font-medium">{translate("POSTED BY")}</div>
            <div className="flex items-center gap-2">
              <User />
              <div className="flex flex-col mt-2">
                <div className="text-lg">{translate(blogDetails.author)}</div>
                <div className="text-gray-400">{translate("Sr. Software engineer")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
