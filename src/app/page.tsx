import Category from "@/components/layouts/Category";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Products from "@/components/layouts/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="relative">
        <div className="pattern-box absolute bottom-0 left-0 opacity-15 w-full h-full"></div>
        <Category />
        <Products />
      </div>
    </>
  );
}
