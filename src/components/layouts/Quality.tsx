import React from "react";
import ProductShowcase from "./ProductShowcase";
import { Gamepad2, Headphones, Keyboard, Monitor, Mouse } from "lucide-react";

const Quality = () => {
  const products = [
    {
      title: "Gaming Monitor",
      subtitle: "Ultra-wide 4K display with 165Hz refresh rate",
      icon: <Monitor size={25} />,
      features: [
        "3840 x 1440 Resolution",
        "165Hz Refresh Rate",
        "1ms Response Time",
        "HDR10 Support",
      ],
    },
    {
      title: "Mechanical Keyboard",
      subtitle: "RGB backlit mechanical gaming keyboard",
      icon: <Keyboard size={25} />,
      features: [
        "Cherry MX Switches",
        "RGB Per-Key Lighting",
        "Anti-Ghosting",
        "Programmable Macros",
      ],
    },
    {
      title: "Gaming Mouse",
      subtitle: "High-precision wireless gaming mouse",
      icon: <Mouse size={25} />,
      features: [
        "25,600 DPI Sensor",
        "Wireless 2.4GHz",
        "70-Hour Battery",
        "Customizable Buttons",
      ],
    },
    {
      title: "Gaming Headset",
      subtitle: "7.1 surround sound gaming headset",
      icon: <Headphones size={25} />,
      features: [
        "7.1 Surround Sound",
        "Noise Cancelling Mic",
        "50mm Drivers",
        "Memory Foam Padding",
      ],
    },
    {
      title: "Pro Controller",
      subtitle: "Professional wireless gaming controller",
      icon: <Gamepad2 size={25} />,
      features: [
        "Hall Effect Triggers",
        "Wireless & Wired",
        "40-Hour Battery",
        "Customizable Profiles",
      ],
    },
  ];
  return (
    <>
      <div className="color-card-1 py-15 ">
        <div className="relative  max-w-[1400px] mx-auto px-5 ">
          <div className="text-center xl:text-7xl sm:text-5xl text-4xl text-gaming ">
            Where quality meets victory.
          </div>
          <div className="mt-2 dark:text-muted-foreground text-black/70 xl:text-2xl sm:text-xl text-lg text-center">
            Every product, a step closer to domination.
          </div>
          <ProductShowcase products={products} />
          <div className="dark:bg-primary/80 bg-purple-500 text-white hover:bg-primary cursor-pointer py-2 mt-10 text-center rounded-md text-xl">
            Explore  All Products
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
