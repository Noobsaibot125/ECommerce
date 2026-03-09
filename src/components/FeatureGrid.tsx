"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

export function FeatureGrid() {
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const handleBuyMacBook = () => {
    addItem({
      id: "macbook-air",
      name: "MacBook Air 15 pouces",
      subtitle: "Puce M2, Liquid Retina",
      price: 950000,
      image: "edd270b2-d195-4362-b756-1b85633b5984.png",
    });
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      router.push("/panier");
    }, 600);
  };

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* COLONNE GAUCHE (PS5 + AirPods/Vision) */}
        <div className="flex flex-col">
          
          {/* Haut : PlayStation 5 */}
          <div className="bg-white relative flex items-center p-8 md:p-12 min-h-[350px] overflow-hidden">
            <div className="absolute left-[-5%] top-[-5%] w-[55%] h-[110%] z-0">
              <Image 
                src="/images/Home/feature_ps5.png" 
                alt="PlayStation 5" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <div className="relative z-10 w-full md:w-[45%] ml-auto flex flex-col justify-center">
              <h2 className="text-5xl font-medium mb-4">PlayStation 5</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Des processeurs et des cartes graphiques incroyablement puissants, ainsi qu&apos;un SSD avec E/S intégrées, redéfiniront votre expérience PlayStation.
              </p>
            </div>
          </div>

          {/* Bas : Grille 2 colonnes (AirPods | Vision Pro) */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* AirPods Max */}
            <div className="bg-[#EDEDED] relative flex items-center p-8 h-[250px] overflow-hidden">
              <div className="absolute left-[-5%] bottom-[-5%] w-[55%] h-[110%] z-0">
                <Image 
                  src="/images/Home/feature_airpods_max.png" 
                  alt="AirPods Max" 
                  fill 
                  className="object-contain object-left-bottom"
                />
              </div>
              <div className="relative z-10 w-[50%] ml-auto flex flex-col justify-center pl-2">
                <h3 className="text-[28px] font-light leading-[1.2] mb-2">
                  Apple <br /> AirPods <br /> <span className="font-normal">Max</span>
                </h3>
                <p className="text-gray-500 text-xs">
                  Audio computationnel.<br/>Écoutez, c&apos;est puissant.
                </p>
              </div>
            </div>

            {/* Vision Pro */}
            <div className="bg-[#353535] text-white relative flex items-center p-8 h-[250px] overflow-hidden">
              <div className="absolute left-[-30%] top-1/2 -translate-y-1/2 w-[80%] h-[80%] z-0">
                <Image 
                  src="/images/Home/category_gaming.png" 
                  alt="Vision Pro" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
              <div className="relative z-10 w-[55%] ml-auto flex flex-col justify-center pl-2">
                <h3 className="text-[28px] font-light leading-[1.2] mb-2">
                  Apple <br /> Vision <span className="font-normal">Pro</span>
                </h3>
                <p className="text-gray-400 text-xs">
                  Une façon immersive de vivre le divertissement
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* COLONNE DROITE : MacBook Air */}
        <div className="bg-[#EDEDED] relative flex flex-col md:flex-row items-center p-12 min-h-[600px] overflow-hidden">
          
          {/* TEXTE : Restreint à 45% de la largeur maximum pour garantir qu'il ne touche jamais l'image */}
          <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="text-[64px] font-extralight mb-4 leading-[1.1]">
              MacBook <br /> <span className="font-semibold">Air</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Le nouveau MacBook Air 15 pouces vous offre encore plus d&apos;espace pour tout ce que vous aimez grâce à son écran Liquid Retina spacieux.
            </p>
            <div>
              <button
                onClick={handleBuyMacBook}
                className={`px-8 py-3.5 border rounded-lg font-medium transition-all ${
                  justAdded
                    ? "bg-green-600 text-white border-green-600"
                    : "border-black bg-transparent hover:bg-black hover:text-white"
                }`}
              >
                {justAdded ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Ajouté !
                  </span>
                ) : (
                  "Acheter maintenant"
                )}
              </button>
            </div>
          </div>
          
          {/* IMAGE : Commence au milieu exact de l'écran (left-[50%]) et déborde vers la droite */}
          <div className="absolute left-[45%] md:left-[50%] top-1/2 -translate-y-1/2 w-[85%] h-[115%] z-0">
            <Image 
              src="/images/Home/edd270b2-d195-4362-b756-1b85633b5984.png" 
              alt="MacBook Air" 
              fill 
              className="object-contain object-left"
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}