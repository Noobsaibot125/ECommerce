"use client";

import Image from "next/image";
import Link from "next/link";
import { Package, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const orders = [
  { id: "#CMD-2026-001", date: "08 Mars 2026", status: "Livré", total: 1_080_000, items: [
    { name: "Apple iPhone 14 Pro Max 128Go Violet", image: "product_iphone_14_purple.png", price: 900_000, qty: 1 },
    { name: "AirPods Pro (2ème gén)", image: "product_airpods_pro.png", price: 180_000, qty: 2 },
  ]},
  { id: "#CMD-2026-002", date: "02 Mars 2026", status: "En transit", total: 320_000, items: [
    { name: "Apple Watch Series 9 GPS 41mm", image: "feature_apple_watch.png", price: 320_000, qty: 1 },
  ]},
  { id: "#CMD-2025-089", date: "14 Déc. 2025", status: "Livré", total: 900_000, items: [
    { name: "Apple iPhone 14 Pro Max Silver", image: "product_iphone_14_silver.png", price: 900_000, qty: 1 },
  ]},
  { id: "#CMD-2025-045", date: "03 Oct. 2025", status: "Annulé", total: 250_000, items: [
    { name: "iPad 9 64Go Wi-Fi", image: "product_ipad_9.png", price: 250_000, qty: 1 },
  ]},
];

const statusColor: Record<string, string> = {
  "Livré": "bg-green-100 text-green-700",
  "En transit": "bg-blue-100 text-blue-700",
  "En attente": "bg-yellow-100 text-yellow-700",
  "Annulé": "bg-red-100 text-red-700",
};

export default function CommandesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/profil" className="hover:text-black">Mon compte</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">Mes commandes</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <Package className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Mes commandes</h1>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <p className="text-gray-500">Vous n&apos;avez encore passé aucune commande.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              {/* Header row */}
              <button
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                onClick={() => setExpanded(expanded === order.id ? null : order.id)}
              >
                <div className="flex items-center gap-6 text-left">
                  <div>
                    <p className="font-semibold text-sm">{order.id}</p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[order.status]}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-sm">{order.total.toLocaleString("fr-FR")} FCFA</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expanded === order.id ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Expanded items */}
              {expanded === order.id && (
                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 space-y-3">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-lg relative shrink-0 border border-gray-200">
                        <Image src={`/images/Home/${item.image}`} alt={item.name} fill className="object-contain p-1" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">Qté : {item.qty}</p>
                      </div>
                      <span className="font-bold text-sm">{(item.price * item.qty).toLocaleString("fr-FR")} FCFA</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
