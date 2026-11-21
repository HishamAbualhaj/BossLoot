
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Suspense } from "react";
import { BossLootLoader } from "@/components/ui/bossloot-loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header />
      <Suspense fallback={<BossLootLoader />}>
        {children}
      </Suspense>
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
}
