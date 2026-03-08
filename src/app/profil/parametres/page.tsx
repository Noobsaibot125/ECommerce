"use client";

import Link from "next/link";
import { Settings, ChevronRight, Bell, Shield, Globe, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ParametresPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    orders: true,
    promos: true,
    newsletter: false,
    sms: false,
  });

  return (
    <div className="w-full max-w-3xl mx-auto px-6 md:px-12 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/profil" className="hover:text-black">Mon compte</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">Paramètres</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <Settings className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Paramètres</h1>
      </div>

      <div className="space-y-6">
        {/* Change password */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Shield className="w-5 h-5 text-gray-600" />
            <h2 className="font-bold">Sécurité & mot de passe</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Mot de passe actuel</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black pr-10" placeholder="••••••••" />
                <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Nouveau mot de passe</label>
              <input type="password" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Confirmer le mot de passe</label>
              <input type="password" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black" placeholder="••••••••" />
            </div>
            <button className="px-6 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/85 transition-colors">
              Mettre à jour
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Bell className="w-5 h-5 text-gray-600" />
            <h2 className="font-bold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "orders", label: "Statut des commandes", desc: "Soyez notifié des mises à jour de vos commandes" },
              { key: "promos", label: "Promotions & offres", desc: "Recevez les meilleures offres en avant-première" },
              { key: "newsletter", label: "Newsletter", desc: "Actualités et nouveaux produits" },
              { key: "sms", label: "Notifications SMS", desc: "Alertes par SMS" },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${notifications[key as keyof typeof notifications] ? "bg-black" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${notifications[key as keyof typeof notifications] ? "translate-x-5.5 left-0.5" : "translate-x-0.5 left-0"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Globe className="w-5 h-5 text-gray-600" />
            <h2 className="font-bold">Langue & région</h2>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Langue</label>
            <select className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black bg-white w-full max-w-xs">
              <option>Français</option>
              <option>English</option>
            </select>
          </div>
        </div>

        {/* Delete account */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="font-bold text-red-700 mb-2">Zone de danger</h2>
          <p className="text-sm text-red-600 mb-4">La suppression de votre compte est irréversible. Toutes vos données seront effacées.</p>
          <button className="px-6 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors">
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
