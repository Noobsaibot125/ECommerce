import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, Shield, Wrench } from "lucide-react";

const services = [
  {
    name: "iPhone",
    desc: "Écran, batterie, appareil photo, port de charge, etc.",
    image: "/images/Home/product_iphone_14_purple.png",
    price: "À partir de 15 000 FCFA",
    delay: "1-2 jours",
  },
  {
    name: "MacBook",
    desc: "Clavier, écran, disque dur, nettoyage, carte mère.",
    image: "/images/Home/popular_macbook_pro.png",
    price: "À partir de 30 000 FCFA",
    delay: "2-4 jours",
  },
  {
    name: "Apple Watch",
    desc: "Réparation vitre, batterie, bracelet, capteurs.",
    image: "/images/Home/feature_apple_watch.png",
    price: "À partir de 12 000 FCFA",
    delay: "1-2 jours",
  },
  {
    name: "AirPods",
    desc: "Nettoyage, remplacement batterie, problème de son.",
    image: "/images/Home/feature_airpods_max.png",
    price: "À partir de 10 000 FCFA",
    delay: "24h",
  },
  {
    name: "iPad",
    desc: "Écran, batterie, port Lightning/USB-C.",
    image: "/images/Home/popular_ipad_pro.png",
    price: "À partir de 20 000 FCFA",
    delay: "2-3 jours",
  },
  {
    name: "Samsung Galaxy",
    desc: "Écran, batterie, appareil photo, port de charge.",
    image: "/images/Home/popular_samsung_galaxy.png",
    price: "À partir de 15 000 FCFA",
    delay: "1-2 jours",
  },
];

const badges = [
  { icon: Shield, label: "Garantie 3 mois", desc: "Sur toutes les réparations" },
  { icon: Wrench, label: "Techniciens certifiés", desc: "Experts Apple & Android" },
  { icon: Clock, label: "Délai rapide", desc: "Réparation en 24-48h" },
  { icon: CheckCircle, label: "Pièces originales", desc: "Qualité OEM certifiée" },
];

export default function ReparationPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="w-full bg-[#1C1C1E] text-white py-16 px-6 md:px-12 text-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">Service professionnel</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Service de Réparation</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Notre équipe d&apos;experts est à votre disposition pour réparer tous vos appareils Apple et high-tech.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="w-full bg-[#F5F5F5] py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-1">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Nos services de réparation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
              {/* Image */}
              <div className="bg-[#F9F9F9] h-52 relative flex items-center justify-center p-8">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{service.price}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {service.delay}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-6 text-lg">Prêt à faire réparer votre appareil ?</p>
          <Link href="/contact">
            <button className="px-10 py-4 bg-black text-white rounded-xl font-semibold hover:bg-black/85 transition-colors text-base">
              Prendre rendez-vous
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
