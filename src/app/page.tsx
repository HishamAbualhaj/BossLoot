import Category from "@/components/layouts/Category";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Products from "@/components/layouts/Products";
import Reviews from "@/components/layouts/Reviews";
import Quality from "@/components/layouts/Quality";
import Brands from "@/components/layouts/Brands";
import Payment from "@/components/layouts/Payment";
import Newsletter from "@/components/layouts/Newsletter";
import BlogSection from "@/components/layouts/BlogSection";
import Faq from "@/components/layouts/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Products />
      <Reviews />
      <Quality />
      <Brands />
      <Payment />
      <Newsletter />
      <BlogSection />
      <Faq />
    </>
  );
}
