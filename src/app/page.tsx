import Category from "@/components/layouts/Category";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Products from "@/components/layouts/Products";
import Reviews from "@/components/layouts/Reviews";
import Quality from "@/components/layouts/Quality";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Products />
      <Reviews />
      <Quality />
    </>
  );
}
