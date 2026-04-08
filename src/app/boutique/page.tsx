"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronDown, ChevronRight, ChevronUp, Search, Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fetchProducts,
  fetchCategories,
  normalizeProduct,
  type NormalizedProduct,
  type ApiCategory,
  type PaginatedResponse,
  type ApiProduct,
} from "@/services/api";

function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between font-semibold text-sm">
        {title}
        {open ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

// Skeleton card pour le chargement
function ProductSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col animate-pulse">
      <div className="bg-[#F0F0F0] h-52 px-8 pt-6" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-5 w-1/2 bg-gray-200 rounded" />
        <div className="mt-2 h-10 w-full bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}

export default function BoutiquePage() {
  const [products, setProducts] = useState<NormalizedProduct[]>([]);
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [meta, setMeta] = useState({ currentPage: 1, totalPages: 1, totalItems: 0, itemsPerPage: 10 });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const { addItem } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Lire le paramètre categoryId de l'URL
  useEffect(() => {
    const catId = searchParams?.get("categoryId");
    if (catId) setSelectedCategory(catId);
  }, [searchParams]);

  // Charger les catégories
  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => console.error("Erreur chargement catégories:", err));
  }, []);

  // Charger les produits
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetchProducts({
          page: currentPage,
          limit: 12,
          categoryId: selectedCategory || undefined,
          search: searchQuery || undefined,
        });
        if (cancelled) return;
        setProducts(res.data.map(normalizeProduct));
        setMeta(res.meta);
      } catch (err) {
        console.error("Erreur chargement produits:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [currentPage, selectedCategory, searchQuery]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLikedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleBuyNow = (product: NormalizedProduct, e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.shortDescription || "",
      price: product.price,
      image: product.image,
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
    router.push("/panier");
  };

  const handleCategoryClick = (catId: string | null) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/boutique" className="hover:text-black transition-colors">Catalogue</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || "Filtré"
            : "Tous les produits"
          }
        </span>
      </nav>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-56 shrink-0">
          {/* Catégories depuis l'API */}
          <FilterSection title="Catégories">
            <ul className="space-y-2">
              <li>
                <label
                  className={`flex items-center gap-2 text-sm cursor-pointer hover:text-black ${!selectedCategory ? "font-bold text-black" : ""}`}
                  onClick={() => handleCategoryClick(null)}
                >
                  <input type="radio" name="category" checked={!selectedCategory} readOnly className="accent-black" />
                  <span className="flex-1">Tous</span>
                  <span className="text-gray-400 text-xs">{meta.totalItems}</span>
                </label>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <label
                    className={`flex items-center gap-2 text-sm cursor-pointer hover:text-black ${selectedCategory === cat.id ? "font-bold text-black" : ""}`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <input type="radio" name="category" checked={selectedCategory === cat.id} readOnly className="accent-black" />
                    <span className="flex-1">{cat.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Capacité de la batterie" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["1000 mAh - 2000 mAh", "2000 mAh - 3000 mAh", "3000 mAh - 4000 mAh", "4000 mAh - 5000 mAh"].map((v) => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Type d'écran" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["IPS", "AMOLED", "Super AMOLED", "OLED", "Retina"].map((v) => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Diagonale de l'écran" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {['5.0" - 5.5"', '5.5" - 6.0"', '6.0" - 6.5"', '6.5" - 7.0"'].map((v) => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Classe de protection" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["IP68", "IP67", "IP65", "IP54"].map((v) => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Mémoire intégrée" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["64 Go", "128 Go", "256 Go", "512 Go", "1 To"].map((v) => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Produits sélectionnés : <span className="font-semibold text-black">{meta.totalItems}</span>
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Trier :</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white cursor-pointer focus:outline-none">
                <option>Le plus récent</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Popularité</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
              : products.map((product) => (
                  <Link href={`/produit/${product.id}`} key={product.id}>
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-shadow cursor-pointer">
                      {/* Image area */}
                      <div className="relative bg-[#F9F9F9] flex items-center justify-center h-52 px-8 pt-6">
                        <button
                          className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors z-10"
                          aria-label="Like"
                          onClick={(e) => toggleLike(product.id, e)}
                        >
                          <Heart className={`w-5 h-5 ${likedItems.has(product.id) || product.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                        </button>
                        {/* Badge promotion */}
                        {product.oldPrice && product.oldPrice > product.price && (
                          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
                            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                          </span>
                        )}
                        <div className="relative w-full h-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-base">{product.price.toLocaleString("fr-FR")} FCFA</span>
                          {product.oldPrice && (
                            <span className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString("fr-FR")} FCFA</span>
                          )}
                        </div>
                        <button
                          className={`mt-2 w-full py-2.5 rounded-md text-sm font-medium transition-all ${
                            addedItem === product.id
                              ? "bg-green-600 text-white"
                              : "bg-black text-white hover:bg-black/85"
                          }`}
                          onClick={(e) => handleBuyNow(product, e)}
                        >
                          {addedItem === product.id ? (
                            <span className="flex items-center justify-center gap-1.5">
                              <Check className="w-4 h-4" /> Ajouté !
                            </span>
                          ) : (
                            "Acheter maintenant"
                          )}
                        </button>
                      </div>
                    </div>
                  </Link>
                ))
            }
          </div>

          {/* Message si aucun produit */}
          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aucun produit trouvé</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
                className="mt-4 px-6 py-2 bg-black text-white rounded-lg text-sm hover:bg-black/90"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Pagination */}
          {!loading && meta.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-100"
              >
                &lt;
              </button>
              {Array.from({ length: meta.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(meta.totalPages, p + 1))}
                disabled={currentPage >= meta.totalPages}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
