"use client";

import Link from "next/link";
import { MapPin, ChevronRight, Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const initialAddresses = [
  { id: "1", name: "John Doe", address: "Rue de la Paix, Cocody", city: "Abidjan", country: "Côte d'Ivoire", phone: "+225 07 00 00 00 00", isDefault: true },
  { id: "2", name: "John Doe", address: "Plateau, Av. Chardy", city: "Abidjan", country: "Côte d'Ivoire", phone: "+225 07 00 00 00 00", isDefault: false },
];

export default function AdressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses);

  const remove = (id: string) => setAddresses(prev => prev.filter(a => a.id !== id));
  const makeDefault = (id: string) => setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/profil" className="hover:text-black">Mon compte</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">Mes adresses</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Mes adresses</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/85 transition-colors">
          <Plus className="w-4 h-4" /> Ajouter une adresse
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {addresses.map(addr => (
          <div key={addr.id} className={`bg-white border-2 rounded-2xl p-6 relative ${addr.isDefault ? "border-black" : "border-gray-200"}`}>
            {addr.isDefault && (
              <span className="absolute top-4 right-4 text-xs font-bold bg-black text-white px-2.5 py-1 rounded-full">Par défaut</span>
            )}
            <div className="flex gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm mb-1">{addr.name}</p>
                <p className="text-sm text-gray-600">{addr.address}</p>
                <p className="text-sm text-gray-600">{addr.city}, {addr.country}</p>
                <p className="text-sm text-gray-600">{addr.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <button className="flex items-center gap-1.5 text-sm font-medium hover:text-black transition-colors text-gray-600">
                <Pencil className="w-4 h-4" /> Modifier
              </button>
              {!addr.isDefault && (
                <>
                  <span className="text-gray-300">|</span>
                  <button onClick={() => makeDefault(addr.id)} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                    Définir par défaut
                  </button>
                  <span className="text-gray-300">|</span>
                  <button onClick={() => remove(addr.id)} className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 className="w-4 h-4" /> Supprimer
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add new card */}
        <button className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-black hover:text-black transition-colors min-h-[160px]">
          <Plus className="w-8 h-8" />
          <span className="text-sm font-medium">Ajouter une adresse</span>
        </button>
      </div>
    </div>
  );
}
