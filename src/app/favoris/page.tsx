"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useState } from "react";

const initialFavorites = [
  { id: "1", name: "Apple iPhone 14 Pro Max 128Go Violet", price: 900000, oldPrice: 1100000, image: "product_iphone_14_purple.png" },
  { id: "3", name: "Apple Watch Series 9 GPS 41mm Starlight", price: 320000, oldPrice: null, image: "feature_apple_watch.png" },
  { id: "4", name: "AirPods Pro (2ème gén)", price: 180000, oldPrice: null, image: "product_airpods_pro.png" },
  { id: "5", name: "iPad 9 64Go Wi-Fi", price: 250000, oldPrice: 300000, image: "product_ipad_9.png" },
  { id: "9", name: "Apple AirPods Max Argent", price: 450000, oldPrice: null, image: "feature_airpods_max.png" },
  { id: "11", name: "Apple iPhone 14 Pro Silver 256Go", price: 850000, oldPrice: null, image: "product_iphone_14_silver.png" },
];

export default function FavorisPage() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const remove = (id: string) => {
    setFavorites(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Mes favoris</h1>
          <p className="text-sm text-gray-500 mt-1">{favorites.length} produit(s) enregistré(s)</p>
        </div>
        {favorites.length > 0 && (
          <button
            onClick={() => setFavorites([])}
            className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" /> Tout supprimer
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-24">
          <Heart className="w-16 h-16 text-gray-200 mx-auto mb-6" />
          <h2 className="text-xl font-semibold mb-2">Votre liste de favoris est vide</h2>
          <p className="text-gray-500 text-sm mb-8">Explorez notre catalogue et ajoutez vos produits préférés.</p>
          <Link href="/boutique">
            <button className="px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-black/85 transition-colors">
              Découvrir les produits
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => {
            const discount = product.oldPrice
              ? Math.round((1 - product.price / product.oldPrice) * 100)
              : null;

            return (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
                {/* Image Area */}
                <div className="relative bg-[#F9F9F9] h-52">
                  <Link href={`/produit/${product.id}`}>
                    <Image
                      src={`/images/Home/${product.image}`}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Discount badge */}
                  {discount && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      -{discount}%
                    </span>
                  )}

                  {/* Remove button */}
                  <button
                    onClick={() => remove(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500 hover:bg-red-50 transition-colors"
                    aria-label="Retirer des favoris"
                  >
                    <Heart className="w-4 h-4 fill-red-500" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <Link href={`/produit/${product.id}`}>
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2 hover:underline">{product.name}</h3>
                  </Link>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-bold text-base">{product.price.toLocaleString("fr-FR")} FCFA</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString("fr-FR")}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-black text-white rounded-lg text-xs font-semibold hover:bg-black/85 transition-colors">
                      <ShoppingCart className="w-3.5 h-3.5" /> Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
