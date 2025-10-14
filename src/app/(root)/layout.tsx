import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
}
