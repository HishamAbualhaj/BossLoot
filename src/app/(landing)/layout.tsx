import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <div className="max-w-[1500px] mx-auto">
        <Footer />
      </div>
    </>
  );
}
