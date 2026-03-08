import { Search, ShoppingCart, Heart, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-border py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg leading-none"></span>
        </div>
        <span className="font-bold text-xl tracking-tight hidden sm:block">si Hi-Tech</span>
      </Link>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-4 hidden md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full bg-muted rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
          />
        </div>
      </div>

      {/* Right: Links & Icons */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <Link href="/boutique" className="hover:text-primary transition-colors">Boutique</Link>
          <Link href="/reparation" className="hover:text-primary transition-colors">Réparation</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/favoris" className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
          </Link>
          <Link href="/panier" className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
          <Link href="/profil" className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Profile">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
