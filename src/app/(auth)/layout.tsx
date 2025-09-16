import React from "react";
import Discord from "@/assets/discord.svg";
import Google from "@/assets/google.svg";
import Logo from "@/components/ui/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      title: "Discord",
      icon: <Discord className="fill-gray-400 w-5 h-5" />,
      link: "",
    },
    {
      title: "Google",
      icon: <Google className="!fill-gray-400 w-5 h-5" />,
      link: "",
    },
  ];
  return (
    <div
      style={{ backgroundImage: `url(/bg_login.jpg)` }}
      className="px-5 h-screen relative bg-center bg-cover bg-no-repeat flex"
    >
      <div className="absolute z-20 left-16 top-8">
        <Logo size="4xl" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full dark:bg-[linear-gradient(rgba(15,12,41,0.8),rgba(15,12,41,0.8))]"></div>

      <div className="flex-1 flex justify-center items-center">
        <div className="flex-1 p-10 pt-8 relative max-w-[550px] z-10 border dark:border-border/50 border-gray-200 dark:bg-background bg-white rounded-lg ">
          {children}
          <div className="uppercase text-center mt-5 text-gray-400 flex items-center text-nowrap">
            <div className="h-[1px] w-full dark:bg-border bg-gray-200"></div>
            <div className="px-2"> continue with</div>{" "}
            <div className="h-[1px] w-full dark:bg-border bg-gray-200"></div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:mt-3 mt-5">
            {links.map((link, i) => (
              <div
                key={i}
                className="dark:hover:bg-card hover:bg-gray-100 cursor-pointer border dark:border-border/80 border-gray-200 text-center p-2 rounded-lg flex items-center justify-center gap-2"
              >
                {link.icon} {link.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
