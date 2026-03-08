"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Package, Heart, Settings, LogOut, ChevronRight, MapPin } from "lucide-react";

const orders = [
  { id: "#CMD-2026-001", date: "08 Mars 2026", status: "Livré", total: 1_080_000, items: 2 },
  { id: "#CMD-2026-002", date: "02 Mars 2026", status: "En transit", total: 320_000, items: 1 },
  { id: "#CMD-2025-089", date: "14 Déc. 2025", status: "Livré", total: 900_000, items: 1 },
];

const statusColor: Record<string, string> = {
  "Livré": "bg-green-100 text-green-700",
  "En transit": "bg-blue-100 text-blue-700",
  "En attente": "bg-yellow-100 text-yellow-700",
  "Annulé": "bg-red-100 text-red-700",
};

const navLinks = [
  { href: "/profil", icon: User, label: "Mon profil" },
  { href: "/profil/commandes", icon: Package, label: "Mes commandes" },
  { href: "/favoris", icon: Heart, label: "Mes favoris" },
  { href: "/profil/adresses", icon: MapPin, label: "Mes adresses" },
  { href: "/profil/parametres", icon: Settings, label: "Paramètres" },
];

export default function ProfilPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10">
      <h1 className="text-2xl font-bold mb-8">Mon compte</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          {/* User Card */}
          <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col items-center text-center mb-4">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-3">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-bold text-lg">John Doe</h2>
            <p className="text-sm text-gray-500">john.doe@email.com</p>
          </div>

          {/* Nav */}
          <nav className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {navLinks.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href}>
                <div className={`flex items-center gap-3 px-5 py-4 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 ${href === "/profil" ? "text-black bg-gray-50" : "text-gray-600"}`}>
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1">{label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            ))}
            <button className="w-full flex items-center gap-3 px-5 py-4 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5 shrink-0" />
              <span>Déconnexion</span>
            </button>
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 space-y-8">
          {/* Personal Info */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-base">Informations personnelles</h3>
              <button className="text-sm text-black font-medium border-b border-black hover:opacity-70 transition-opacity">Modifier</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Prénom", value: "John" },
                { label: "Nom", value: "Doe" },
                { label: "Email", value: "john.doe@email.com" },
                { label: "Téléphone", value: "+225 07 00 00 00 00" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-base">Commandes récentes</h3>
              <Link href="/profil/commandes" className="text-sm text-black font-medium border-b border-black hover:opacity-70 transition-opacity">
                Voir tout
              </Link>
            </div>
            <div className="space-y-3">
              {orders.map(order => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold text-sm">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.date} · {order.items} article(s)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[order.status]}`}>
                      {order.status}
                    </span>
                    <span className="text-sm font-bold whitespace-nowrap">{order.total.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
