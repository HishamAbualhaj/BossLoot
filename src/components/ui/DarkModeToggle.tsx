"use client";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      onClick={() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
      }}
      className="border hover:border-purple-500/80 w-14 rounded-2xl border-gray-400/50 p-[3px] cursor-pointer"
    >
      <div
        className={`bg-gray-400/40 w-fit rounded-2xl p-[3px] ${
          isDark ? "translate-x-0" : "translate-x-[calc(100%+9.5px)]"
        } transition`}
      >
        {isDark ? <Moon size={13} /> : <Sun size={13} />}
      </div>
    </div>
  );
};

export default DarkModeToggle;
