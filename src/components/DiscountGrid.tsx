import { Product, ProductCard } from "./ProductCard";

const discountProducts: Product[] = [
  { 
    id: "d1", 
    name: "Apple iPhone 14 Pro 512 Go Or (M2P33)", 
    price: 400000, 
    image: "product_iphone_14_gold.png", 
    isLiked: false 
  },
  { 
    id: "d2", 
    name: "AirPods Max Argent Starlight Aluminium", 
    price: 600000, 
    image: "feature_airpods_max.png", 
    isLiked: false 
  },
  { 
    id: "d3", 
    name: "Apple Watch Series 9 GPS 41 mm Aluminium Starlight", 
    price: 400000, 
    image: "feature_apple_watch.png", 
    isLiked: false 
  },
  { 
    id: "d4", 
    name: "Apple iPhone 14 Pro 1 To Or (MQ2V3)", 
    price: 250000, 
    image: "product_iphone_14_purple.png", 
    isLiked: false 
  },
];

export function DiscountGrid() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-8">Réductions jusqu'à -50%</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discountProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
