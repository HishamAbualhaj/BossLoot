"use client";
import Input from "@/components/ui/Input";
import useSearchPara from "@/hooks/useSearchPara";
import React, { useState } from "react";

const BlogHeader = () => {
  const [blog, setBlogSearch] = useState("");

  const searchPara = useSearchPara();
  return (
    <>
      <div className="text-5xl">Blog</div>
      <Input
        onChange={(e) => {
          setBlogSearch(e.target.value);
          searchPara("search", e.target.value, true);
        }}
        placeholder="Search blog"
        type="text"
        className="max-md:flex-1 max-md:w-full"
        value={blog}
      />
    </>
  );
};

export default BlogHeader;
