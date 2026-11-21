"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import Input from "@/components/ui/Input";
import useSearchPara from "@/hooks/useSearchPara";
import React, { useState } from "react";

const BlogHeader = () => {
  const translate = useStoreCopy();

  const [blog, setBlogSearch] = useState("");

  const searchPara = useSearchPara();
  return (
    <>
      <div className="text-5xl">{translate("Blog")}</div>
      <Input
        onChange={(e) => {
          setBlogSearch(e.target.value);
          searchPara("search", e.target.value, true);
        }}
        placeholder={translate("Search blog")}
        type="text"
        className="max-md:flex-1 max-md:w-full"
        value={blog}
      />
    </>
  );
};

export default BlogHeader;
