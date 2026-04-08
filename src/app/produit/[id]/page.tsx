"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronRight, Minus, Plus, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw, Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter, useParams } from "next/navigation";
import {
  fetchProduct,
  fetchProducts,
  normalizeProduct,
  getProductImageUrl,
  type ApiProduct,
  type NormalizedProduct,
} from "@/services/api";

// Données statiques de secours
const fallbackProduct = {
  id: "1",
  brand: "APPLE",
  name: "Apple iPhone 14 Pro Max",
  subtitle: "128Go Violet Intense (MQ9T3ZD/A)",
  price: 900000,
  originalPrice: 1100000,
  image: "product_iphone_14_purple.png",
  gallery: [
    "product_iphone_14_purple.png",
    "product_iphone_14_gold.png",
    "product_iphone_14_silver.png",
  ],
  description: "L'iPhone 14 Pro Max. Avec Dynamic Island, un appareil photo 48 Mpx et une batterie qui dure toute la journée.",
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = (params?.id as string) || "";

  const [product, setProduct] = useState<NormalizedProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<NormalizedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "specs">("desc");
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  // Charger le produit depuis l'API
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const apiProduct = await fetchProduct(productId);
        if (cancelled) return;
        const normalized = normalizeProduct(apiProduct);
        setProduct(normalized);

        // Charger les produits similaires (même catégorie)
        try {
          const res = await fetchProducts({
            categoryId: apiProduct.categoryId,
            limit: 4,
          });
          if (!cancelled) {
            setRelatedProducts(
              res.data
                .filter((p) => p.id !== productId)
                .slice(0, 4)
                .map(normalizeProduct)
            );
          }
        } catch {
          // Silencieux — les produits similaires ne sont pas critiques
        }
      } catch (err) {
        console.error("Erreur chargement produit:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.shortDescription || "",
      price: product.price,
      image: product.image,
    }, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.shortDescription || "",
      price: product.price,
      image: product.image,
    }, quantity);
    router.push("/panier");
  };

  // État de chargement
  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="animate-pulse">
          <div className="h-4 w-1/3 bg-gray-200 rounded mb-8" />
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-[#F9F9F9] rounded-2xl h-[420px] border border-gray-200" />
              <div className="flex gap-3 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 rounded-lg bg-[#F9F9F9] border border-gray-200" />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="h-4 w-1/4 bg-gray-200 rounded" />
              <div className="h-8 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
              <div className="h-10 w-1/3 bg-gray-200 rounded mt-6" />
              <div className="h-12 w-full bg-gray-200 rounded mt-8" />
              <div className="h-12 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Produit non trouvé
  if (!product) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
        <p className="text-gray-500 mb-6">Ce produit n&apos;existe pas ou n&apos;est plus disponible.</p>
        <Link href="/boutique">
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90">
            Retour à la boutique
          </button>
        </Link>
      </div>
    );
  }

  // Construire la galerie d'images
  const galleryImages = product.images.length > 0
    ? product.images.map((img) => getProductImageUrl(img.url, product.name))
    : [product.image];

  const discountPct = product.oldPrice && product.oldPrice > product.price
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/boutique" className="hover:text-black transition-colors">Catalogue</Link>
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
              src={galleryImages[selectedImage] || product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
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
          {galleryImages.length > 1 && (
            <div className="flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-lg bg-[#F9F9F9] relative overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-black" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-contain p-1" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Product Info */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Stock */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{product.currency}</span>
            {product.isAvailable ? (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">En stock</span>
            ) : (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Épuisé</span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-1">{product.name}</h1>
          {product.shortDescription && (
            <p className="text-sm text-gray-500 mb-3 whitespace-pre-line">{product.shortDescription}</p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-200">
            <span className="text-3xl font-bold">{product.price.toLocaleString("fr-FR")} FCFA</span>
            {product.oldPrice && (
              <span className="text-base text-gray-400 line-through">{product.oldPrice.toLocaleString("fr-FR")} FCFA</span>
            )}
          </div>

          {/* Caractéristiques */}
          {product.characteristics.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">Caractéristiques</p>
              <div className="flex flex-wrap gap-2">
                {product.characteristics.map((c, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm">
                    {c.name}: {c.value}
                  </span>
                ))}
              </div>
            </div>
          )}

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
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 border-2 rounded-xl font-semibold transition-all text-sm ${
                justAdded
                  ? "border-green-600 text-green-600 bg-green-50"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {justAdded ? (
                <><Check className="w-5 h-5" /> Ajouté au panier !</>
              ) : (
                <><ShoppingCart className="w-5 h-5" /> Ajouter au panier</>
              )}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 px-4 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-black/85 transition-colors text-sm"
            >
              Acheter maintenant
            </button>
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
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl whitespace-pre-line">
            {product.description || product.shortDescription || "Aucune description disponible pour ce produit."}
          </p>
        )}

        {activeTab === "specs" && (
          <div className="max-w-3xl rounded-xl overflow-hidden border border-gray-200">
            {product.characteristics.length > 0 ? (
              product.characteristics.map((spec, i) => (
                <div key={i} className={`flex px-6 py-3.5 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <span className="w-1/3 font-medium text-gray-700">{spec.name}</span>
                  <span className="w-2/3 text-gray-600">{spec.value}</span>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center text-sm text-gray-400">
                Aucune caractéristique disponible pour ce produit.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map((p) => (
              <Link href={`/produit/${p.id}`} key={p.id}>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="bg-[#F9F9F9] flex items-center justify-center h-40 relative">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-semibold mb-1 line-clamp-2">{p.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <p className="font-bold text-sm">{p.price.toLocaleString("fr-FR")} FCFA</p>
                      {p.oldPrice && (
                        <p className="text-xs text-gray-400 line-through">{p.oldPrice.toLocaleString("fr-FR")}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
