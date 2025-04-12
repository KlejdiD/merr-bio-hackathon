import Image from "next/image";
import Login from "../components/auth/login";
import Header from "@/components/header";
import Hero from "@/components/common/hero";
import ProductsSection from "@/components/common/products";
import BestFarmersSection from "@/components/common/producers";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <ProductsSection></ProductsSection>
      <BestFarmersSection></BestFarmersSection>
      <Footer></Footer>
    </div>
  );
}
