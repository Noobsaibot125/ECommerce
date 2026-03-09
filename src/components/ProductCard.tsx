"use client";

import { Heart, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isLiked?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      subtitle: "",
      price: product.price,
      image: product.image,
    });
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      router.push("/panier");
    }, 600);
  };

  return (
    <div className="bg-[#F5F5F5] p-6 rounded-xl flex flex-col items-center relative group transition-all hover:shadow-lg">
      <button 
        className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors z-10"
        aria-label="Like product"
      >
        <Heart className={`w-6 h-6 ${product.isLiked ? 'fill-accent text-accent' : ''}`} />
      </button>

      <div className="relative w-40 h-40 mt-4 mb-6 flex items-center justify-center mix-blend-multiply">
        {product.image ? (
          <Image 
            src={`/images/Home/${product.image}`} 
            alt={product.name} 
            fill 
            className="object-contain"
          />
        ) : (
          <span className="text-muted-foreground text-sm">Image: {product.name}</span>
        )}
      </div>

      <h3 className="font-semibold text-center mb-2 line-clamp-1">{product.name}</h3>
      <p className="font-bold text-lg mb-6">{product.price.toLocaleString("fr-FR")} FCFA</p>

      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-lg font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all ${
          justAdded
            ? "bg-green-600 text-white"
            : "bg-black text-white hover:bg-black/85"
        }`}
      >
        {justAdded ? (
          <span className="flex items-center justify-center gap-1.5">
            <Check className="w-4 h-4" /> Ajouté !
          </span>
        ) : (
          "Acheter maintenant"
        )}
      </button>
    </div>
  );
}

