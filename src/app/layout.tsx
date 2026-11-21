
﻿import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import "@/style/global.css";
import { Poppins, Noto_Sans_Arabic } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "BossLoot",
  description: "Gaming E-commerce Store",
};

const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins", // custom CSS variable name
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="dark">
      <body
        className={`${locale === "ar" ? arabic.className : poppins.className} bg-gray-50 text-background dark:bg-background dark:text-foreground`}
      >
        <NextIntlClientProvider><NuqsAdapter>{children}</NuqsAdapter></NextIntlClientProvider>
      </body>
    </html>
  );
}
