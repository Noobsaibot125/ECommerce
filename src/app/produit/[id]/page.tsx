"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronRight, Minus, Plus, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";

const product = {
  id: "1",
  brand: "APPLE",
  name: "Apple iPhone 14 Pro Max",
  subtitle: "128Go Violet Intense (MQ9T3ZD/A)",
  sku: "MQ9T3ZD/A",
  price: 900000,
  originalPrice: 1100000,
  rating: 4.5,
  reviewCount: 186,
  inStock: true,
  image: "product_iphone_14_purple.png",
  gallery: [
    "product_iphone_14_purple.png",
    "product_iphone_14_gold.png",
    "product_iphone_14_silver.png",
  ],
  colors: [
    { name: "Violet Intense", hex: "#4A3260" },
    { name: "Or", hex: "#E0C882" },
    { name: "Argent", hex: "#C0C0C0" },
    { name: "Noir Sidéral", hex: "#1C1C1E" },
  ],
  storage: ["128 Go", "256 Go", "512 Go", "1 To"],
  description: "L'iPhone 14 Pro Max. Avec Dynamic Island, un appareil photo 48 Mpx, détection des accidents et une batterie qui dure toute la journée. Avec la puce A16 Bionic, la plus rapide sur un smartphone.",
  specs: [
    { label: "Marque", value: "Apple" },
    { label: "Modèle", value: "iPhone 14 Pro Max" },
    { label: "Référence", value: "MQ9T3ZD/A" },
    { label: "Système d'exploitation", value: "iOS 16" },
    { label: "Processeur", value: "Puce A16 Bionic" },
    { label: "Écran", value: "Super Retina XDR OLED 6,7\"" },
    { label: "Caméra principale", value: "48 Mpx + 12 Mpx + 12 Mpx" },
    { label: "Batterie", value: "4 323 mAh — 29h de lecture vidéo" },
    { label: "Résistance", value: "IP68 — Ceramic Shield" },
    { label: "5G", value: "Oui" },
    { label: "NFC", value: "Oui" },
    { label: "Wi-Fi", value: "Wi-Fi 6 (802.11ax)" },
  ],
};

const relatedProducts = [
  { id: "3", name: "Apple Watch Series 9 GPS", price: 320000, image: "feature_apple_watch.png" },
  { id: "4", name: "AirPods Pro (2ème gén)", price: 180000, image: "product_airpods_pro.png" },
  { id: "5", name: "iPad 9", price: 250000, image: "product_ipad_9.png" },
  { id: "12", name: "Apple AirPods Max", price: 450000, image: "feature_airpods_max.png" },
];

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");

  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/boutique" className="hover:text-black transition-colors">Catalogue</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/boutique" className="hover:text-black transition-colors">Téléphones</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* LEFT — Image Gallery */}
        <div className="lg:w-1/2">
          {/* Main image */}
          <div className="bg-[#F9F9F9] rounded-2xl p-6 flex items-center justify-center h-[420px] relative mb-4 group border border-gray-200">
            <Image
              src={`/images/Home/${product.gallery[selectedImage]}`}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
            />
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            {discountPct && (
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPct}%
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 rounded-lg bg-[#F9F9F9] relative overflow-hidden border-2 transition-colors ${
                  selectedImage === i ? "border-black" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <Image src={`/images/Home/${img}`} alt="" fill className="object-contain p-1" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Product Info */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Brand + Stock */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{product.brand}</span>
            {product.inStock ? (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">En stock</span>
            ) : (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Épuisé</span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-1">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviewCount} avis)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-200">
            <span className="text-3xl font-bold">{product.price.toLocaleString("fr-FR")} FCFA</span>
            {product.originalPrice && (
              <span className="text-base text-gray-400 line-through">{product.originalPrice.toLocaleString("fr-FR")} FCFA</span>
            )}
          </div>

          {/* Color */}
          <div className="mb-5">
            <p className="text-sm font-semibold mb-3">
              Couleur : <span className="font-normal text-gray-500">{product.colors[selectedColor].name}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  title={c.name}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === i ? "border-black scale-110 ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Storage */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-3">Capacité de stockage</p>
            <div className="flex flex-wrap gap-2">
              {product.storage.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedStorage(i)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    selectedStorage === i ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300 hover:border-gray-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm font-semibold">Quantité</p>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-3 py-2 hover:bg-gray-100 transition-colors border-r border-gray-300" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-sm font-semibold">{quantity}</span>
              <button className="px-3 py-2 hover:bg-gray-100 transition-colors border-l border-gray-300" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-colors text-sm">
              <ShoppingCart className="w-5 h-5" /> Ajouter au panier
            </button>
            <Link href="/checkout" className="flex-1">
              <button className="w-full px-4 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-black/85 transition-colors text-sm">
                Acheter maintenant
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Livraison gratuite</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Garantie 1 an</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <RotateCcw className="w-5 h-5 text-gray-500" />
              <span className="text-xs text-gray-500">Retour 14 jours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description / Specs Tabs */}
      <div className="mb-16">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("desc")}
            className={`pb-3 px-6 text-sm font-semibold border-b-2 -mb-px transition-colors ${activeTab === "desc" ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-700"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-3 px-6 text-sm font-semibold border-b-2 -mb-px transition-colors ${activeTab === "specs" ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-700"}`}
          >
            Caractéristiques
          </button>
        </div>

        {activeTab === "desc" && (
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">{product.description}</p>
        )}

        {activeTab === "specs" && (
          <div className="max-w-3xl rounded-xl overflow-hidden border border-gray-200">
            {product.specs.map((spec, i) => (
              <div key={i} className={`flex px-6 py-3.5 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <span className="w-1/3 font-medium text-gray-700">{spec.label}</span>
                <span className="w-2/3 text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {relatedProducts.map((p) => (
            <Link href={`/produit/${p.id}`} key={p.id}>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-[#F9F9F9] flex items-center justify-center h-40 relative">
                  <Image src={`/images/Home/${p.image}`} alt={p.name} fill className="object-contain p-4" />
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-semibold mb-1 line-clamp-2">{p.name}</h3>
                  <p className="font-bold text-sm">{p.price.toLocaleString("fr-FR")} FCFA</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
