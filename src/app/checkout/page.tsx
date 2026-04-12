"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, label: "Adresse" },
  { id: 2, label: "Livraison" },
  { id: 3, label: "Paiement" },
];

const shippingMethods = [
  { id: "free", label: "Livraison gratuite", desc: "7-10 jours ouvrés", price: 0 },
  { id: "standard", label: "Livraison standard", desc: "3-5 jours ouvrés", price: 8000 },
  { id: "express", label: "Livraison express", desc: "1-2 jours ouvrés", price: 15000 },
];

const orderSummary = [
  { name: "Apple iPhone 14 Pro Max 128Go", price: 900000, qty: 1 },
  { name: "AirPods Pro (2ème gén)", price: 180000, qty: 2 },
];

const subtotal = orderSummary.reduce((s, i) => s + i.price * i.qty, 0);
const tax = Math.round(subtotal * 0.18);

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState("free");

  const [orderComplete, setOrderComplete] = useState(false);

  const shippingCost = shippingMethods.find(m => m.id === selectedShipping)?.price ?? 0;
  const total = subtotal + tax + shippingCost;

  const nextStep = () => {
    if (currentStep === 3) setOrderComplete(true);
    else setCurrentStep(s => s + 1);
  };

  if (orderComplete) {
    return (
      <div className="w-full max-w-lg mx-auto px-6 py-24 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Merci pour votre achat !</h1>
        <p className="text-gray-500 mb-2">Votre commande a été confirmée.</p>
        <p className="text-gray-500 mb-8">Un e-mail de confirmation vous a été envoyé.</p>
        <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-8 text-left">
          <h3 className="font-semibold mb-4 text-sm">Récapitulatif</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Numéro de commande</span><span className="font-medium">#CMD-2026-001</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="font-medium">08 Mars 2026</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Livraison</span><span className="font-medium">{shippingMethods.find(m => m.id === selectedShipping)?.label}</span></div>
            <div className="flex justify-between font-bold mt-2 pt-2 border-t border-gray-300"><span>Total payé</span><span>{total.toLocaleString("fr-FR")} FCFA</span></div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/boutique">
            <button className="px-6 py-3 border-2 border-black rounded-xl font-medium hover:bg-black hover:text-white transition-colors">Continuer mes achats</button>
          </Link>
          <Link href="/">
            <button className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-black/85 transition-colors">Retour à l&apos;accueil</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/panier" className="hover:text-black">Panier</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black font-medium">Checkout</span>
      </nav>

      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-10">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                currentStep > step.id ? "bg-black text-white" :
                currentStep === step.id ? "bg-black text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span className={`text-sm font-medium ${currentStep >= step.id ? "text-black" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 md:w-24 h-0.5 mx-4 ${currentStep > step.id ? "bg-black" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Form */}
        <div className="flex-1">

          {/* STEP 1: Address */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Adresse de livraison</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Prénom <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Nom <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Adresse <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="123 Rue Principale, Cocody" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Ville <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Abidjan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Pays <span className="text-red-500">*</span></label>
                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white">
                      <option>Côte d&apos;Ivoire</option>
                      <option>Sénégal</option>
                      <option>Mali</option>
                      <option>Burkina Faso</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Téléphone <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="+225 00 00 00 00 00" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="john@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Note (optionnel)</label>
                  <textarea className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors h-24" placeholder="Instructions de livraison..." />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Shipping */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Mode de livraison</h2>
              <div className="space-y-3">
                {shippingMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedShipping(method.id)}
                    className={`w-full flex items-center justify-between p-5 border-2 rounded-xl transition-colors text-left ${
                      selectedShipping === method.id ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedShipping === method.id ? "border-black" : "border-gray-300"}`}>
                        {selectedShipping === method.id && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{method.label}</p>
                        <p className="text-xs text-gray-500">{method.desc}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm">
                      {method.price === 0 ? "Gratuit" : `${method.price.toLocaleString("fr-FR")} FCFA`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Payment */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Paiement</h2>
              
              <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex shrink-0 items-center justify-center text-white">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Paiement à la livraison</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Le paiement s'effectuera à la livraison de votre commande. Préparez le montant total de <strong>{total.toLocaleString("fr-FR")} FCFA</strong> en espèces ou Mobile Money pour le livreur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-3 mt-8">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(s => s - 1)}
                className="flex-1 py-3.5 border-2 border-black rounded-xl font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Retour
              </button>
            )}
            <button
              onClick={nextStep}
              className="flex-1 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-black/85 transition-colors"
            >
              {currentStep === 3 ? "Confirmer la commande" : "Continuer"}
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-[#F5F5F5] rounded-2xl p-6 sticky top-24">
            <h3 className="font-bold text-base mb-5">Récapitulatif de commande</h3>
            <div className="space-y-3 mb-5">
              {orderSummary.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-600 flex-1 mr-2 line-clamp-1">{item.name} <span className="text-gray-400">×{item.qty}</span></span>
                  <span className="font-medium shrink-0">{(item.price * item.qty).toLocaleString("fr-FR")} FCFA</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm border-t border-gray-300 pt-4 mb-4">
              <div className="flex justify-between"><span className="text-gray-500">Sous-total</span><span>{subtotal.toLocaleString("fr-FR")} FCFA</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Livraison</span><span>{shippingCost === 0 ? "Gratuit" : `${shippingCost.toLocaleString("fr-FR")} FCFA`}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">TVA (18%)</span><span>{tax.toLocaleString("fr-FR")} FCFA</span></div>
            </div>
            <div className="flex justify-between font-bold text-base pt-3 border-t border-gray-300">
              <span>Total</span>
              <span>{total.toLocaleString("fr-FR")} FCFA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
