"use client";

import { useEffect, useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { fetchProducts, normalizeProduct, NormalizedProduct } from "@/services/api";

// Fallback local quand l'API est indisponible
const fallbackProducts: Product[] = [
  { id: "1", name: "Apple iPhone 14 Pro Max 128GB", price: 900000, image: "product_airpods_pro.png", isLiked: true },
  { id: "2", name: "Blackmagic Pocket Cinema Camera", price: 1800000, image: "category_camera.png", isLiked: false },
  { id: "3", name: "Apple Watch Series 9 GPS", price: 320000, image: "feature_apple_watch.png", isLiked: false },
  { id: "4", name: "AirPods Pro (2ème gén)", price: 180000, image: "product_huawei_earbuds.png", isLiked: false },
  { id: "5", name: "iPad 9", price: 250000, image: "product_ipad_9.png", isLiked: false },
  { id: "6", name: "Samsung Galaxy Watch6", price: 150000, image: "product_galaxy_watch_6.png", isLiked: false },
  { id: "7", name: "Sony Earbuds", price: 120000, image: "product_sony_earbuds.png", isLiked: false },
  { id: "8", name: "Huawei Earbuds", price: 80000, image: "product_huawei_earbuds.png", isLiked: false },
];

// Skeleton loader pour l'animation de chargement
function ProductCardSkeleton() {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-xl flex flex-col items-center animate-pulse">
      <div className="w-40 h-40 mt-4 mb-6 bg-gray-300 rounded-lg" />
      <div className="h-4 w-3/4 bg-gray-300 rounded mb-2" />
      <div className="h-5 w-1/2 bg-gray-300 rounded mb-6" />
      <div className="h-12 w-full bg-gray-300 rounded-lg" />
    </div>
  );
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetchProducts({ limit: 8 });
        if (cancelled) return;
        const normalized = res.data.map(normalizeProduct);
        setProducts(normalized);
        setError(false);
      } catch (err) {
        console.error("Erreur chargement produits:", err);
        if (!cancelled) {
          setProducts(fallbackProducts);
          setError(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex gap-8 mb-8 border-b border-border text-lg font-medium">
        <button className="pb-2 border-b-2 border-black text-black">Nouveaux Produits</button>
        <button className="pb-2 text-muted-foreground hover:text-black transition-colors">Best-seller</button>
        <button className="pb-2 text-muted-foreground hover:text-black transition-colors">Produits phares</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>

      {error && (
        <p className="text-center text-xs text-gray-400 mt-4">
          Les données proviennent du cache local (API indisponible)
        </p>
      )}
    </section>
  );
}
