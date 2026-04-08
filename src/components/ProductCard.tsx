"use client";

import { Heart, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  isLiked?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  const [justAdded, setJustAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  // Determine if we need to use the /images/Home/ prefix (old format) or the full path (new format)
  const imageSrc = product.image.startsWith("/") || product.image.startsWith("http")
    ? product.image
    : `/images/Home/${product.image}`;

  // Calculate discount percentage
  const discountPct =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : null;

  return (
    <Link href={`/produit/${product.id}`} className="block">
      <div className="bg-[#F5F5F5] p-6 rounded-xl flex flex-col items-center relative group transition-all hover:shadow-lg">
        <button
          className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors z-10"
          aria-label="Like product"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <Heart className={`w-6 h-6 ${product.isLiked ? "fill-accent text-accent" : ""}`} />
        </button>

        {/* Badge promotion */}
        {discountPct && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discountPct}%
          </span>
        )}

        <div className="relative w-40 h-40 mt-4 mb-6 flex items-center justify-center mix-blend-multiply">
          {!imgError ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-contain"
              onError={() => setImgError(true)}
              sizes="160px"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs text-center px-2">{product.name}</span>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-center mb-2 line-clamp-1">{product.name}</h3>

        {/* Prix avec promotion */}
        <div className="flex items-baseline gap-2 mb-6">
          <p className="font-bold text-lg">
            {product.price.toLocaleString("fr-FR")} FCFA
          </p>
          {product.oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString("fr-FR")}
            </p>
          )}
        </div>

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
    </Link>
  );
}
