import { ProductCard, Product } from "./ProductCard";

const initialProducts: Product[] = [
  { id: "1", name: "Apple iPhone 14 Pro Max 128GB", price: 900000, image: "product_airpods_pro.png", isLiked: true },
  { id: "2", name: "Blackmagic Pocket Cinema Camera", price: 1800000, image: "category_camera.png", isLiked: false },
  { id: "3", name: "Apple Watch Series 9 GPS", price: 320000, image: "feature_apple_watch.png", isLiked: false },
  { id: "4", name: "AirPods Pro (2ème gén)", price: 180000, image: "product_huawei_earbuds.png", isLiked: false },
  { id: "5", name: "iPad 9", price: 250000, image: "product_ipad_9.png", isLiked: false },
  { id: "6", name: "Samsung Galaxy Watch6", price: 150000, image: "product_galaxy_watch_6.png", isLiked: false },
  { id: "7", name: "Sony Earbuds", price: 120000, image: "product_sony_earbuds.png", isLiked: false },
  { id: "8", name: "Huawei Earbuds", price: 80000, image: "product_huawei_earbuds.png", isLiked: false },
];

export function ProductGrid() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex gap-8 mb-8 border-b border-border text-lg font-medium">
        <button className="pb-2 border-b-2 border-black text-black">Nouveaux Produits</button>
        <button className="pb-2 text-muted-foreground hover:text-black transition-colors">Best-seller</button>
        <button className="pb-2 text-muted-foreground hover:text-black transition-colors">Produits phares</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initialProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
