import React from "react";
import Logo from "../ui/Logo";
import Link from "next/link";
import Discord from "@/assets/discord.svg";
import Facebook from "@/assets/facebook.svg";
import X from "@/assets/x.svg";
import Instagram from "@/assets/instagram.svg";
import Twitch from "@/assets/twitch.svg";
const Footer = () => {
  const links = [
    {
      id: 1,
      link: "/",
      title: "Products",
    },
    {
      id: 2,
      link: "/",
      title: "Cart",
    },
    {
      id: 3,
      link: "/",
      title: "Specials",
    },
    {
      id: 4,
      link: "/",
      title: "Community",
    },
    {
      id: 5,
      link: "/",
      title: "Blog",
    },
  ];

  const support = [
    {
      id: 1,
      link: "/",
      title: "Contact Us",
    },

    {
      id: 2,
      link: "/",
      title: "Shipping & Returns",
    },
    {
      id: 3,
      link: "/",
      title: "Warranty Policy",
    },
  ];

  const policies = [
    {
      id: 1,
      link: "/",
      title: "Privacy Policy",
    },
    {
      id: 2,
      link: "/",
      title: "Terms of Service",
    },
  ];

  const socials = [
    {
      id: 1,
      link: "/",
      icon: (
        <Discord
          width="22px"
          height="22px"
          className="dark:fill-white fill-background"
        />
      ),
    },
    {
      id: 2,
      link: "/",
      icon: (
        <Facebook
          width="20px"
          height="20px"
          className="dark:fill-white fill-background"
        />
      ),
    },
    {
      id: 3,
      link: "/",
      icon: (
        <X
          width="20px"
          height="20px"
          className="dark:fill-white fill-background"
        />
      ),
    },
    {
      id: 4,
      link: "/",
      icon: (
        <Instagram
          width="20px"
          height="20px"
          className="dark:fill-white fill-background"
        />
      ),
    },
    {
      id: 5,
      link: "/",
      icon: (
        <Twitch
          width="20px"
          height="20px"
          className="dark:fill-white fill-background"
        />
      ),
    },
  ];

  return (
    <>
      <div className="pt-5">
        <div className="px-5 !pb-10">
          <div className="flex flex-col max-lg:text-center">
            <Logo />
            <div className="text-muted-foreground mt-3">
              Your ultimate destination for gaming gear & lifestyle.
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Links</div>
              {links.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-muted-foreground flex flex-col gap-5"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-bold">Support</div>
              {support.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="text-muted-foreground flex flex-col gap-5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold">Policies</div>
              {policies.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className="text-muted-foreground flex flex-col gap-5"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold">Social</div>
              <div className="flex gap-5">
                {socials.map(({ link, id, icon }) => (
                  <Link href={link} key={id}>
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t dark:border-border border-gray-300">
            <div className="flex gap-2 items-center">
              <div className="text-xl">©</div> {new Date().getFullYear()}{" "}
              BossLoot. All rights reserved.
            </div>
          </div>
        </div>

        <div className="dark:bg-card bg-gray-100 py-2 text-center text-[17px] flex gap-1 justify-center items-center">
          Designed & Built by
          <Link
            className=" text-gaming text-xl"
            href="https://github.com/HishamAbualhaj"
          >
            Hisham Abualhaj
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
