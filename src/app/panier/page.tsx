"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/CartContext";

export default function PanierPage() {
  const { items: cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 15000;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">Panier</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">Votre panier est vide</p>
          <Link href="/boutique">
            <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors">
              Continuer mes achats
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 pb-4 border-b border-gray-200">
              <span className="col-span-6">Produit</span>
              <span className="col-span-2 text-center">Quantité</span>
              <span className="col-span-2 text-center">Prix</span>
              <span className="col-span-2 text-center">Total</span>
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center">
                  {/* Product */}
                  <div className="col-span-6 flex items-center gap-4">
                    <div className="w-20 h-20 bg-[#F5F5F5] rounded-lg relative shrink-0">
                      <Image src={`/images/Home/${item.image}`} alt={item.name} fill className="object-contain p-2" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-xs mt-1 flex items-center gap-1 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" /> Supprimer
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button className="p-1.5 hover:bg-gray-100 transition-colors" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button className="p-1.5 hover:bg-gray-100 transition-colors" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center">
                    <span className="text-sm font-medium">{item.price.toLocaleString("fr-FR")} FCFA</span>
                  </div>

                  {/* Total */}
                  <div className="col-span-2 text-center">
                    <span className="text-sm font-bold">{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-[#F5F5F5] rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-6">Récapitulatif</h2>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-medium">{subtotal.toLocaleString("fr-FR")} FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Livraison</span>
                  <span className="font-medium">{shipping === 0 ? "Gratuit" : `${shipping.toLocaleString("fr-FR")} FCFA`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">TVA (18%)</span>
                  <span className="font-medium">{tax.toLocaleString("fr-FR")} FCFA</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">{total.toLocaleString("fr-FR")} FCFA</span>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full py-3.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors">
                  Passer la commande
                </button>
              </Link>

              <Link href="/boutique">
                <button className="w-full py-3 mt-3 text-sm text-gray-500 hover:text-black transition-colors">
                  Continuer mes achats
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
