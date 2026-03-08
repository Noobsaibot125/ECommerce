import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CategorySlider } from "@/components/CategorySlider";
import { ProductGrid } from "@/components/ProductGrid";
import { PopularProducts } from "@/components/PopularProducts";
import { DiscountGrid } from "@/components/DiscountGrid";
import { PromoBanner } from "@/components/PromoBanner";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <FeatureGrid />
      <CategorySlider />
      <ProductGrid />
      <PopularProducts />
      <DiscountGrid />
      <PromoBanner />
    </div>
  );
}
