import type { Metadata } from "next";
import "@/style/global.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "BossLoot",
  description: "Gaming E-commerce Store",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins", // custom CSS variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} bg-gray-200 text-background dark:bg-background dark:text-foreground`}>{children}</body>
    </html>
  );
}
