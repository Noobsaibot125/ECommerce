"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronDown, ChevronRight, ChevronUp, Search, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";

const allProducts = [
  { id: "1", name: "Apple iPhone 14 Pro Max 128Go Or (MQ9T3)", price: 900000, oldPrice: 1100000, image: "product_iphone_14_gold.png", isLiked: false },
  { id: "2", name: "Apple iPhone 14 Pro 512 Go Or (M2P33)", price: 400000, oldPrice: null, image: "product_iphone_14_gold.png", isLiked: false },
  { id: "3", name: "AirPods Max Argent Starlight Aluminium", price: 600000, oldPrice: null, image: "feature_airpods_max.png", isLiked: true },
  { id: "4", name: "Apple Watch Series 9 GPS 41mm Starlight", price: 320000, oldPrice: 400000, image: "feature_apple_watch.png", isLiked: false },
  { id: "5", name: "AirPods Pro (2ème gén)", price: 180000, oldPrice: null, image: "product_airpods_pro.png", isLiked: false },
  { id: "6", name: "iPad 9", price: 250000, oldPrice: null, image: "product_ipad_9.png", isLiked: false },
  { id: "7", name: "Apple iPhone 14 Pro 1 To Or (MQ2V3)", price: 250000, oldPrice: null, image: "product_iphone_14_purple.png", isLiked: false },
  { id: "8", name: "Samsung Galaxy Watch6", price: 150000, oldPrice: null, image: "product_galaxy_watch_6.png", isLiked: false },
  { id: "9", name: "Sony WF-1000XM5 Earbuds", price: 120000, oldPrice: 150000, image: "product_sony_earbuds.png", isLiked: false },
  { id: "10", name: "Huawei FreeBuds Pro", price: 80000, oldPrice: null, image: "product_huawei_earbuds.png", isLiked: false },
  { id: "11", name: "Apple iPhone 14 Pro Silver", price: 850000, oldPrice: null, image: "product_iphone_14_silver.png", isLiked: false },
  { id: "12", name: "Samsung Galaxy Buds FE", price: 55000, oldPrice: null, image: "product_galaxy_buds_fe.png", isLiked: false },
];

const brandFilters = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 35 },
];

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

export default function BoutiquePage() {
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const { addItem } = useCart();
  const router = useRouter();

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLikedItems(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleBuyNow = (product: typeof allProducts[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      subtitle: "",
      price: product.price,
      image: product.image,
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
    router.push("/panier");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/boutique" className="hover:text-black transition-colors">Catalogue</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">smartphones</span>
      </nav>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-56 shrink-0">

          <FilterSection title="Marque">
            <div className="relative mb-3">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Rechercher" className="w-full border border-gray-300 rounded pl-7 pr-3 py-1.5 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <ul className="space-y-2">
              {brandFilters.map((brand) => (
                <li key={brand.name}>
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-black">
                    <input type="checkbox" className="accent-black" />
                    <span className="flex-1">{brand.name}</span>
                    <span className="text-gray-400 text-xs">{brand.count}</span>
                  </label>
                </li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Capacité de la batterie" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["1000 mAh - 2000 mAh", "2000 mAh - 3000 mAh", "3000 mAh - 4000 mAh", "4000 mAh - 5000 mAh"].map(v => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Type d'écran" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["IPS", "AMOLED", "Super AMOLED", "OLED", "Retina"].map(v => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Diagonale de l'écran" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {['5.0" - 5.5"', '5.5" - 6.0"', '6.0" - 6.5"', '6.5" - 7.0"'].map(v => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Classe de protection" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["IP68", "IP67", "IP65", "IP54"].map(v => (
                <li key={v}><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-black" />{v}</label></li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title="Mémoire intégrée" defaultOpen={false}>
            <ul className="space-y-2 text-sm text-gray-600">
              {["64 Go", "128 Go", "256 Go", "512 Go", "1 To"].map(v => (
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
              Produits sélectionnés : <span className="font-semibold text-black">85</span>
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
            {allProducts.map((product) => (
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
                    <div className="relative w-full h-full">
                      <Image src={`/images/Home/${product.image}`} alt={product.name} fill className="object-contain p-2" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-base">{product.price.toLocaleString("fr-FR")} FCFA</span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString("fr-FR")}</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
